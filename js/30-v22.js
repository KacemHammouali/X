'use strict';
/* ============================================================
   منصة X — طبقة الإصدار 22: إصلاح الإرسال جذريًا
   السبب الحقيقي لرسالة «لم يصل تأكيد من خدمة البريد»:
   خدمة البريد (FormSubmit) تُفعَّل مرة واحدة فقط — أول إرسال
   يولّد رسالة تفعيل إلى بريد الإدارة، وقبل الضغط على رابطها
   لا تصل أي رسالة ولا يعود تأكيد، فيفشل كل إرسال (تسجيلًا وإبلاغًا).
   إصلاح الإصدار 22:
   1) كشف حالة «بانتظار التفعيل» من رد الخدمة + رسالة واضحة
   2) صندوق الرسائل المؤجلة في الإعدادات: عرض كل رسالة محفوظة
      مع زر «إرسال الآن» و«حذف» لكل رسالة و«إرسال الكل» و«إرسالها من تطبيق بريدي»
   3) زر «إرسال من تطبيق بريدي» في قسم الرسائل والإبلاغ — يعمل دائمًا حتى قبل التفعيل
   4) حفظ كل رسالة لم يصل تأكيدها تلقائيًا وإعادة المحاولة تلقائيًا عند عودة الاتصال
   ============================================================ */
/* ---- 22.0 بيانات الإصدار ---- */
APP_META.ver='22.0';APP_META.date='2026-10-30';
APP_META.notes='الإصدار 22 — إصلاح الإرسال: كشف حالة تفعيل خدمة البريد، صندوق الرسائل المؤجلة، وزر الإرسال من تطبيق البريد.';
try{APP_META.changelog.unshift('الإصدار 22 — إصلاح الإرسال جذريًا: سبب عدم وصول الرسائل (التسجيل والإبلاغ) هو أن خدمة البريد تُفعَّل مرة واحدة عبر رسالة تصل بريد الإدارة ولم يُضغط رابطها؛ الآن يُكشف ذلك بوضوح، وتُحفظ كل رسالة لم يصل تأكيدها في «صندوق الرسائل المؤجلة» الجديد في صفحة الإعدادات مع زر «إرسال الآن» و«حذف» لكل رسالة و«إرسال الكل»، وأضيف زر «إرسال من تطبيق بريدي» يعمل دائمًا حتى قبل التفعيل، وزر «فحص خدمة البريد» يكشف الحالة الحقيقية بضغطة واحدة، مع دليل خطوات الحل النهائي داخل المنصة.')}catch(e){}

/* ---- 22.1 كشف حالة خدمة البريد من ردها ---- */
var X22_STATE_KEY='x22_mailstate';
function x22MailState(){return stGet(X22_STATE_KEY,{activated:false,waiting:false,checked:0})}
function x22SetMailState(s){stSet(X22_STATE_KEY,s)}
function x22Detect(raw,status){
  if(status>=200&&status<300){
    try{
      var j=(typeof raw==='string')?JSON.parse(raw):raw;
      if(j&&(j.success===true||j.success==='true'))return 'ok';
      if(j&&j.message&&String(j.message).toLowerCase().indexOf('activat')>=0)return 'activate';
    }catch(e){}
    if(String(raw||'').toLowerCase().indexOf('activat')>=0)return 'activate';
    return 'unknown';
  }
  return 'fail';
}

/* ---- 22.2 المرسِل الموحد: يميز «بانتظار التفعيل» عن الفشل العادي ---- */
function x20SendForm(p,ok,fail){
  var finished=false;
  function done(mode){
    if(finished)return;finished=true;
    try{
      if(mode==='ok'){x22SetMailState({activated:true,waiting:false,checked:Date.now()});ok()}
      else{fail(mode==='activate')}
    }catch(e){}
  }
  try{
    fetch('https://formsubmit.co/ajax/'+encodeURIComponent(XOWNER_MAIL),{
      method:'POST',
      headers:{'Content-Type':'application/json','Accept':'application/json'},
      body:JSON.stringify(p)
    }).then(function(r){
      return r.text().then(function(t){done(x22Detect(t,r.status))});
    }).catch(function(){done('fail')});
  }catch(e){done('fail')}
}

/* ---- 22.3 الإرسال الموحد: رسائل واضحة + حفظ مؤجل ---- */
function x19Send(subject,body,from,onResult){
  var p={_subject:subject,_template:'box',message:body,name:(from?'مستخدم':'زائر')+' منصة X'};
  if(from){p.email=from;p._replyto=from}
  var finish=function(success,queued){
    if(typeof onResult==='function'){try{onResult(success,queued)}catch(e){}}
  };
  if(!x20Online()){
    x20OutPush(p);
    toast('📴 لا يوجد اتصال بالإنترنت. حُفظت رسالتك في صندوق الرسائل المؤجلة وستُرسل تلقائيًا عند عودة الاتصال.');
    x22OutRefresh();
    finish(false,true);
    return;
  }
  x20SendForm(p,function(){
    toast('✅ أُرسلت رسالتك إلى بريد المنصة بنجاح','success');
    x22OutRefresh();
    finish(true,false);
  },function(needsActivation){
    x20OutPush(p);
    if(needsActivation){
      x22SetMailState({activated:false,waiting:true,checked:Date.now()});
      toast('📬 خدمة البريد بانتظار تفعيل مرة واحدة: وصلت رسالة تفعيل إلى بريد المنصة — على الإدارة فتحها والضغط على رابطها مرة واحدة، وبعدها تُرسل هذه الرسالة وكل المؤجلة تلقائيًا. حتى ذلك الحين يمكن الإرسال بزر «إرسال من تطبيق بريدي».','error');
    }else{
      toast('⚠️ لم يصل تأكيد الإرسال الآن. حُفظت رسالتك في صندوق الرسائل المؤجلة — أعد إرسالها من هناك أو من تطبيق بريدك.','error');
    }
    x22OutRefresh();
    finish(false,true);
  });
}

/* ---- 22.4 صندوق الرسائل المؤجلة ---- */
function x22OutList(){try{return (x20OutRead()||[])}catch(e){return []}}
function x22OutCount(){return x22OutList().length}
function x22OutHTML(){
  var q=x22OutList(),ms=x22MailState(),h='';
  h+='<section class="x17-card fade-in" id="x22-outbox" style="margin:16px auto 0">';
  h+='<h3 style="margin:0 0 4px">📤 صندوق الرسائل المؤجلة</h3>';
  h+=(ms.activated?'<span class="x22-badge x22-ok">✅ خدمة البريد مفعّلة</span>':'<span class="x22-badge x22-wait">⏳ خدمة البريد بانتظار تفعيل الإدارة (مرة واحدة)</span>');
  h+='<div class="btn-row" style="margin:4px 0 8px"><button class="btn btn-sm" onclick="x22CheckMail()">🩺 فحص خدمة البريد</button></div>';
  h+='<details style="margin:2px 0 10px;font-size:12.5px;color:var(--text-mute)">'+
    '<summary style="cursor:pointer;font-weight:800;color:var(--warning);font-size:13px">❓ كيف أحل مشكلة الإرسال نهائيًا؟ (خطوات الإدارة)</summary>'+
    '<ol style="margin:8px 18px 0;line-height:2">'+
    '<li>افتح بريد المنصة <b dir="ltr">'+escAttr(XOWNER_MAIL)+'</b> من تطبيق Gmail.</li>'+
    '<li>ابحث عن رسالة من FormSubmit عنوانها غالبًا <b dir="ltr">«Please activate your form»</b> — وراجع مجلد الرسائل غير المرغوبة (Spam).</li>'+
    '<li>اضغط زر أو رابط التفعيل داخلها <b>مرة واحدة فقط</b> — ستظهر صفحة تأكيد من خدمة البريد.</li>'+
    '<li>عد إلى المنصة واضغط «🩺 فحص خدمة البريد» أو «🔁 إرسال الكل الآن» — بعدها تصل كل الرسائل (الحالية والمؤجلة) تلقائيًا.</li>'+
    '<li>إن لم تجد رسالة التفعيل في بريدك: أرسل أي رسالة من المنصة أولًا (هي التي تولّد رسالة التفعيل) ثم راجع بريدك بعد دقائق.</li>'+
    '</ol><p style="margin:8px 0 0">حتى قبل التفعيل يمكن دائمًا الإرسال بزر «📧 إرسال من تطبيق بريدي».</p></details>';
  if(!q.length){
    h+='<p class="x17-empty" style="margin:6px 0 0">لا توجد رسائل مؤجلة — كل رسائلك وصلت ✓</p>';
  }else{
    h+='<p class="x17-mute" style="font-size:12.5px;margin:6px 0 10px">هذه الرسائل لم يصل تأكيد إرسالها بعد؛ تُعاد المحاولة تلقائيًا عند عودة الاتصال، ويمكنك إرسالها أو حذفها يدويًا.</p>';
    for(var i=0;i<q.length;i++){
      var m=q[i]||{};
      var sub=(m._subject||'رسالة');
      var msg=String(m.message||'');
      var snip=msg.replace(/\s+/g,' ').slice(0,90);
      h+='<div class="x22-item">'+
        '<div><b>'+escAttr(sub)+'</b>'+
        '<small>'+escAttr(snip)+(msg.length>90?'…':'')+'</small>'+
        '<small>أُضيفت: '+escAttr(m._q||'—')+'</small></div>'+
        '<div class="btn-row" style="margin:0">'+
        '<button class="btn btn-sm" onclick="x22Retry('+i+')">🔁 إرسال الآن</button>'+
        '<button class="btn btn-sm btn-danger-ghost" onclick="x22Drop('+i+')">🗑️ حذف</button>'+
        '</div></div>';
    }
    h+='<div class="btn-row">'+
      '<button class="btn btn-sm btn-primary" onclick="x22RetryAll()">🔁 إرسال الكل الآن</button>'+
      '<button class="btn btn-sm" onclick="x22MailtoQueued()">📧 إرسالها من تطبيق بريدي</button>'+
      '</div>';
  }
  h+='</section>';
  return h;
}
function x22OutRefresh(){
  try{
    var el=gid('x22-outbox');
    if(el){el.outerHTML=x22OutHTML()}
  }catch(e){}
}
function x22Retry(i){
  var q=x22OutList();
  if(i<0||i>=q.length){x22OutRefresh();return}
  toast('⏳ جارٍ إرسال الرسالة المؤجلة…');
  x20SendForm(q[i],function(){
    var q2=x22OutList();q2.splice(i,1);x20OutSave(q2);
    toast('✅ أُرسلت الرسالة المؤجلة بنجاح','success');
    x22OutRefresh();
  },function(needsActivation){
    if(needsActivation){toast('📬 تبقى الرسالة بانتظار تفعيل الإدارة للخدمة من بريده (رابط في رسالة وصلته)','error')}
    else{toast('⏳ لم يصل التأكيد بعد — تبقى الرسالة في الصندوق','error')}
  });
}
function x22Drop(i){
  var q=x22OutList();
  if(i<0||i>=q.length){x22OutRefresh();return}
  q.splice(i,1);x20OutSave(q);
  toast('🗑️ حُذفت الرسالة من الصندوق');
  x22OutRefresh();
}
function x22RetryAll(){
  var q=x22OutList();
  if(!q.length){toast('لا توجد رسائل مؤجلة');return}
  toast('⏳ جارٍ إرسال '+q.length+' رسالة مؤجلة…');
  var sendNext=function(idx,removed){
    if(idx>=q.length){x22OutRefresh();return}
    x20SendForm(q[idx],function(){
      var q2=x22OutList();
      var pos=idx-removed;
      if(pos<0){pos=0}
      if(pos>=q2.length){pos=q2.length-1}
      if(pos<0){q2=[]}else{q2.splice(pos,1)}
      x20OutSave(q2);
      x22OutRefresh();
      sendNext(idx+1,removed+1);
    },function(){toast('⏳ توقف الإرسال عند رسالة لم يصل تأكيدها — ستُعاد المحاولة لاحقًا','error');x22OutRefresh()});
  };
  sendNext(0,0);
}
function x22MailtoQueued(){
  var q=x22OutList();
  if(!q.length){toast('لا توجد رسائل مؤجلة');return}
  var body='الرسائل المؤجلة من منصة X ('+q.length+'):\n\n';
  for(var i=0;i<q.length;i++){
    body+='— '+(q[i]._subject||'رسالة')+' ['+(q[i]._q||'')+']:\n'+(q[i].message||'')+'\n\n';
  }
  var url=x18Mailto('رسائل مؤجلة من منصة X — '+q.length+' رسالة',body);
  if(url){x18SendMail(url);toast('📩 فُتح تطبيق البريد بكل الرسائل المؤجلة جاهزة — أكمل الإرسال من هناك','success')}
  else{toast('⚠️ تعذر تجهيز الرسائل — استخدم زر «نسخ الرسالة»','error')}
}

/* ---- 22.4b فحص خدمة البريد: زر واحد يكشف الحالة الحقيقية للإرسال ---- */
var X22_CHECKING=false;
function x22CheckMail(){
  if(X22_CHECKING)return;
  X22_CHECKING=true;
  toast('🩺 جارٍ فحص خدمة البريد…');
  var p={_subject:'[منصة X] فحص خدمة البريد',_template:'box',
    message:'هذه رسالة فحص تلقائية للتأكد من وصول الرسائل إلى بريد المنصة. إن وصلتك فهذه علامة أن الإرسال يعمل بشكل كامل.',
    name:'فحص تلقائي — منصة X'};
  x20SendForm(p,function(){
    X22_CHECKING=false;
    toast('✅ خدمة البريد مفعّلة وتعمل — وصل فحص تجريبي إلى بريد المنصة، وستصلك كل الرسائل','success');
    x22OutRefresh();
  },function(needsActivation){
    X22_CHECKING=false;
    if(needsActivation){toast('📬 السبب النهائي مؤكد: خدمة البريد بانتظار التفعيل — افتح رسالة التفعيل في بريد المنصة واضغط رابطها مرة واحدة، ثم اضغط الفحص ثانية','error')}
    else{toast('⚠️ الخدمة لا تستجيب — تحقق من اتصال الإنترنت ثم أعد الفحص','error')}
  });
}

/* ---- 22.5 قسم الرسائل: زر «إرسال من تطبيق بريدي» (يعمل دائمًا) ---- */
var __x22Contact=contactHTML;
contactHTML=function(){
  var h=__x22Contact();
  try{
    h=h.replace('📋 نسخ الرسالة</button>','📋 نسخ الرسالة</button>'+
      '<button class="btn" onclick="x22MailtoMsg()">📧 إرسال من تطبيق بريدي</button>');
  }catch(e){}
  return h;
};
function x22MailtoMsg(){
  var e=gid('msg-mail'),t=gid('msg-type'),b=gid('msg-body');
  var em=((e&&e.value)||'').trim(),ty=((t&&t.value)||'رسالة'),bd=((b&&b.value)||'').trim();
  if(bd.length<10){toast('✍️ اكتب رسالة واضحة لا تقل عن 10 أحرف','error');if(b)b.focus();return}
  var body=bd+'\n\n— نوع الرسالة: '+ty+'\n— بريد المرسل للرد: '+(em||'غير محدد')+'\n— أُرسلت من منصة X الإصدار '+APP_META.ver;
  var url=x18Mailto('[منصة X] '+ty,body);
  if(url){x18SendMail(url);toast('📩 فُتح تطبيق البريد برسالة جاهزة إلى بريد المنصة — أكمل الإرسال من هناك','success')}
  else{toast('⚠️ تعذر تجهيز الرسالة — استخدم زر «نسخ الرسالة»','error')}
}

/* ---- 22.6 الإبلاغ: بلا رسائل مكررة والنص يبقى محفوظًا عند التأجيل ---- */
function sendMsg(){
  var e=gid('msg-mail'),t=gid('msg-type'),b=gid('msg-body'),btn=gid('sendMsg');
  var em=((e&&e.value)||'').trim(),ty=((t&&t.value)||'رسالة'),bd=((b&&b.value)||'').trim();
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(em)){toast('✍️ أدخل بريدًا إلكترونيًا صحيحًا حتى يستطيع إدارة المنصة الرد عليك','error');if(e)e.focus();return}
  if(bd.length<10){toast('✍️ اكتب رسالة واضحة لا تقل عن 10 أحرف','error');if(b)b.focus();return}
  if(btn&&btn.disabled)return;
  var old=btn?btn.textContent:'';
  if(btn){btn.disabled=true;btn.textContent='⏳ جارٍ إرسال الرسالة…';btn.setAttribute('aria-busy','true')}
  var body=bd+'\n\n— نوع الرسالة: '+ty+'\n— بريد المرسل للرد: '+em+'\n— أُرسلت من منصة X الإصدار '+APP_META.ver;
  x19Send('[منصة X] '+ty,body,em,function(success){
    if(success){if(b)b.value='';if(e)e.value=''}
    if(btn){btn.disabled=false;btn.textContent=old||'✉️ إرسال الرسالة';btn.removeAttribute('aria-busy')}
  });
}

/* ---- 22.7 ربط الصندوق بصفحة الإعدادات والملف الشخصي ---- */
var __x22Settings=renderSettingsPage;
renderSettingsPage=function(){return __x22Settings()+x22OutHTML()};
var __x22Profile=renderProfilePage18;
renderProfilePage18=function(){
  var h=__x22Profile();
  if(x22OutCount()>0){try{h+=x22OutHTML()}catch(e){}}
  return h;
};

/* ---- 22.8 إعلان الإصدار ---- */
function fallbackNews18(){
  return [{title:'الإصدار 22 — إصلاح الإرسال',
    body:'فُحصت مشكلة عدم وصول الرسائل (التسجيل والإبلاغ) جذريًا: خدمة البريد تُفعَّل مرة واحدة من بريد الإدارة ويظهر الآن تنبيه واضح بذلك، مع «صندوق الرسائل المؤجلة» في الإعدادات وزر «إرسال من تطبيق بريدي» الذي يعمل دائمًا، وزر «فحص خدمة البريد» ودليل خطوات الحل النهائي.',
    date:APP_META.date}];
}
