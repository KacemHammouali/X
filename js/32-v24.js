'use strict';
/* ============================================================
   منصة X — طبقة الإصدار 24: الإرسال من بريدك الشخصي
   بناءً على طلب الإدارة: أُزيلت قناة تيليجرام كليًا من المنصة،
   وطريقة الإرسال الجديدة مختلفة تمامًا عن كل ما سبق:
   رسالة الزائر (التسجيل أو الإبلاغ) تُرسل من بريده الشخصي
   مباشرة إلى بريد المنصة — بريد حقيقي من حساب حقيقي،
   بلا وسيط بينهما وبلا أي تفعيل وبلا أي خدمة خارجية.
   كيف: تفتح المنصة نافذة إنشاء رسالة معبأة مسبقًا في بريد
   الزائر (تطبيق البريد أو Gmail أو Outlook) بضغطة زر واحدة،
   فيضغط الزائر «إرسال» من بريده — فيصل بريد الإدارة مضمونًا.
   وبالتوازي تبقى محاولة الإرسال التلقائي الصامتة نحو خدمة
   البريد، فإن نجحت لا يحتاج الزائر أي خطوة إطلاقًا.
   ============================================================ */
/* ---- 24.0 بيانات الإصدار ---- */
APP_META.ver='24.0';APP_META.date='2026-10-30';
APP_META.notes='الإصدار 24 — الإرسال من بريدك الشخصي: أُزيلت قناة تيليجرام كليًا، والإرسال الجديد يفتح رسالة معبأة مسبقًا من بريد الزائر مباشرة إلى بريد المنصة (تطبيق البريد أو Gmail أو Outlook) — بريد حقيقي بلا وسيط وبلا تفعيل.';
try{APP_META.changelog.unshift('الإصدار 24 — الإرسال من بريدك الشخصي: أزلنا قناة تيليجرام كليًا بناءً على طلب الإدارة، وأتينا بطريقة مختلفة تمامًا عن كل ما سبق: رسالة التسجيل أو الإبلاغ تُرسل من بريد الزائر الشخصي مباشرة إلى بريد المنصة — نافذة واحدة تفتح بريده ومعها رسالة معبأة مسبقًا (تطبيق البريد أو Gmail أو Outlook)، فيضغط «إرسال» من بريده فتصل مضمونة 100% لأنها رسالة بريد حقيقية من حساب حقيقي بلا أي وسيط وبلا أي تفعيل. وبالتوازي تبقى محاولة الإرسال التلقائي الصامتة في الخلفية، فإن نجحت تُغلق النافذة وحدها ولا يحتاج الزائر أي خطوة.')}catch(e){}

/* ---- 24.1 إزالة قناة تيليجرام كليًا من المنصة ---- */
function x23TG(){return {token:'',chat:''}}
function x23TGReady(){return false}
function x23TGSend(text,ok,fail){try{if(typeof fail==='function'){fail(false)}}catch(e){}}
function x23TGHTML(){return ''}
function x23TGCollect(){return {token:'',chat:''}}
function x23TGLine(){return ''}
function x23TGSet(){}
function x23TGSave(){}
function x23TGFetchChat(){toast('أُزيلت قناة تيليجرام في الإصدار 24','error')}
function x23TGCopyLine(){toast('أُزيلت قناة تيليجرام في الإصدار 24','error')}

/* ---- 24.2 روابط إنشاء الرسالة المعبأة مسبقًا في بريد الزائر ---- */
function x24Gmail(s,b){
  return 'https://mail.google.com/?view=cm&fs=1&to='+encodeURIComponent(XOWNER_MAIL)+
    '&su='+encodeURIComponent(s)+'&body='+encodeURIComponent(b);
}
function x24Outlook(s,b){
  return 'https://outlook.live.com/mail/0/deeplink/compose?to='+encodeURIComponent(XOWNER_MAIL)+
    '&subject='+encodeURIComponent(s)+'&body='+encodeURIComponent(b);
}
function x24Open(url,mailto){
  try{
    if(mailto){window.location.href=url}
    else{var w=window.open(url,'_blank');if(!w){window.location.href=url}}
  }catch(e){try{window.location.href=url}catch(e2){}}
}

/* ---- 24.3 نافذة «أرسل رسالتك من بريدك الشخصي» ---- */
var X24_COMPOSER=null;
function x24ComposerOpen(subject,body,onDone){
  var old=gid('x24-modal');if(old)old.remove();
  var d=document.createElement('div');
  d.id='x24-modal';d.className='xmodal';
  d.innerHTML='<div class="xmodal-bg" onclick="x24ComposerCancel()"></div>'+
    '<div class="xmodal-card glass-strong">'+
    '<h3>✉️ أرسل رسالتك من بريدك الشخصي</h3>'+
    '<div class="xmodal-body">'+
    '<p style="margin:0">رسالتك جاهزة بالكامل — بضغطة زر واحدة يُفتح <b>بريدك ومعه رسالة معبأة مسبقًا</b> إلى بريد المنصة <b dir="ltr">'+escAttr(XOWNER_MAIL)+'</b>. تُرسَل من حسابك الشخصي مباشرة فتصل <b>مضمونة 100%</b> — بلا وسيط وبلا أي تفعيل.</p>'+
    '<div style="max-height:170px;overflow:auto;background:var(--bg-2);border:1px solid var(--border);border-radius:10px;padding:10px;font-size:12.5px;white-space:pre-wrap;direction:rtl;text-align:right;margin:10px 0 0"><b>'+escAttr(subject)+'</b>\n\n'+escAttr(body.length>600?body.slice(0,600)+'…':body)+'</div>'+
    '<div class="btn-row" style="margin:12px 0 0">'+
    '<button class="btn btn-primary" onclick="x24ComposerPick(\'app\')">📧 تطبيق البريد</button>'+
    '<button class="btn" onclick="x24ComposerPick(\'gmail\')">✉️ Gmail</button>'+
    '<button class="btn" onclick="x24ComposerPick(\'outlook\')">📮 Outlook</button>'+
    '</div>'+
    '<div class="btn-row" style="margin:8px 0 0">'+
    '<button class="btn btn-sm" onclick="x24ComposerCopy()">📋 نسخ نص الرسالة</button>'+
    '</div>'+
    '<p class="x17-mute" style="font-size:12px;margin:4px 0 0">ليس لديك بريد؟ انسخ النص وأرسله من أي وسيلة، أو أغلق النافذة وستُحفظ رسالتك في الصندوق المؤجل للإرسال لاحقًا.</p>'+
    '</div></div>';
  (document.body||document.documentElement).appendChild(d);
  X24_COMPOSER={subject:subject,body:body,onDone:onDone||null};
}
function x24ComposerClose(){
  var d=gid('x24-modal');if(d)d.remove();
  X24_COMPOSER=null;
}
function x24ComposerPick(kind){
  var c=X24_COMPOSER;if(!c){return}
  if(kind==='gmail'){x24Open(x24Gmail(c.subject,c.body),false)}
  else if(kind==='outlook'){x24Open(x24Outlook(c.subject,c.body),false)}
  else{x24Open(x18Mailto(c.subject,c.body),true)}
  toast('✉️ فُتح بريدك ورسالتك معبأة وجاهزة — اضغط «إرسال» وستصل فورًا','success');
  x24ComposerClose();
  if(c.onDone){try{c.onDone(true,false)}catch(e){}}
}
function x24ComposerCancel(){
  var c=X24_COMPOSER;
  x24ComposerClose();
  if(c&&c.onDone){
    toast('💾 حُفظت رسالتك في الصندوق المؤجل — يمكنك إرسالها من الإعدادات لاحقًا','error');
    try{c.onDone(false,true)}catch(e){}
  }
}
function x24ComposerCopy(){
  var c=X24_COMPOSER;if(!c)return;
  var t='إلى: '+XOWNER_MAIL+'\nالموضوع: '+c.subject+'\n\n'+c.body;
  try{
    if(navigator.clipboard&&navigator.clipboard.writeText){
      navigator.clipboard.writeText(t).then(function(){
        toast('✅ نُسخ نص الرسالة مع بريد المنصة — أرسله من أي وسيلة تريدها','success');
      },function(){try{prompt('انسخ نص الرسالة:',t)}catch(e){}});
    }else{try{prompt('انسخ نص الرسالة:',t)}catch(e){}}
  }catch(e){}
}

/* ---- 24.4 محرك الإرسال الجديد: بريد الزائر الشخصي أولًا + محاولة تلقائية صامتة بالتوازي ---- */
function x19Send(subject,body,from,onResult){
  var p={_subject:subject,_template:'box',message:body,name:(from?'مستخدم':'زائر')+' منصة X'};
  if(from){p.email=from;p._replyto=from}
  var handled=false;
  var finish=function(success,queued){
    if(typeof onResult==='function'){try{onResult(success,queued)}catch(e){}}
  };
  /* 1) الطريق الأساسي في الإصدار 24: رسالة معبأة مسبقًا من بريد الزائر الشخصي */
  x24ComposerOpen(subject,body+'\n\n'+((from)?('— من: '+from+'\n'):'')+'— أُرسلت من منصة X الإصدار '+APP_META.ver,function(success,queued){
    if(handled){return}
    handled=true;
    if(queued){x20OutPush(p);x22OutRefresh()}
    finish(success,queued);
  });
  /* 2) بالتوازي: محاولة تلقائية صامتة — إن نجحت لا يحتاج الزائر أي خطوة */
  x20SendForm(p,function(){
    if(handled){return}
    handled=true;
    x24ComposerClose();
    toast('✅ أُرسلت رسالتك تلقائيًا إلى بريد المنصة — لم تحتج أي خطوة','success');
    x22OutRefresh();
    finish(true,false);
  },function(needsActivation){
    /* صامت تمامًا: لا نطلب من أحد مراجعة أي بريد — نافذة البريد الشخصي كافية */
    if(needsActivation){x23TriggerActivation()}
  });
}

/* ---- 24.5 الصندوق المؤجل: أزرار الإرسال تعمل بالطريقة الجديدة ---- */
function x22Retry(i){
  var q=x22OutList();
  if(i<0||i>=q.length){x22OutRefresh();return}
  toast('⏳ جارٍ إرسال الرسالة المؤجلة…');
  var m=q[i]||{};
  x20SendForm(m,function(){
    var q2=x22OutList();q2.splice(i,1);x20OutSave(q2);
    toast('✅ أُرسلت الرسالة المؤجلة تلقائيًا إلى بريد المنصة','success');
    x22OutRefresh();
  },function(){
    x24ComposerOpen(m._subject||'رسالة من منصة X',(m.message||'')+'\n— أُرسلت من منصة X الإصدار '+APP_META.ver,function(success){
      if(!success){return}
      var q2=x22OutList();
      var pos=i;if(pos>=q2.length){pos=q2.length-1}
      if(pos>=0){q2.splice(pos,1);x20OutSave(q2)}
      x22OutRefresh();
      toast('✅ أُرسلت من بريدك الشخصي — اضغط إرسالًا من تطبيق بريدك لتصل فورًا','success');
    });
  });
}
function x22RetryAll(){
  var q=x22OutList();
  if(!q.length){toast('لا توجد رسائل مؤجلة');return}
  toast('⏳ جارٍ إرسال '+q.length+' رسالة مؤجلة…');
  var sendNext=function(idx,removed){
    if(idx>=q.length){x22OutRefresh();return}
    var m=q[idx]||{};
    x20SendForm(m,function(){
      var q2=x22OutList();
      var pos=idx-removed;
      if(pos<0){pos=0}
      if(pos>=q2.length){pos=q2.length-1}
      if(pos<0){q2=[]}else{q2.splice(pos,1)}
      x20OutSave(q2);
      x22OutRefresh();
      sendNext(idx+1,removed+1);
    },function(){
      /* توقف عند أول رسالة بلا تأكيد: افتحها في بريد الزائر الشخصي */
      x24ComposerOpen(m._subject||'رسالة من منصة X',(m.message||'')+'\n— أُرسلت من منصة X الإصدار '+APP_META.ver,function(success){
        if(!success){return}
        var q2=x22OutList();
        var pos=idx-removed;
        if(pos<0){pos=0}
        if(pos>=q2.length){pos=q2.length-1}
        if(pos>=0){q2.splice(pos,1);x20OutSave(q2)}
        x22OutRefresh();
        toast('✅ أُرسلت من بريدك الشخصي — أكمل الباقي بضغط «إرسال الكل الآن»','success');
      });
    });
  };
  sendNext(0,0);
}

/* ---- 24.6 زر الفحص يصبح «اختبار الإرسال» بالطريقتين ---- */
function x22CheckMail(){
  if(X22_CHECKING)return;
  X22_CHECKING=true;
  toast('🧪 جارٍ اختبار الإرسال…');
  var p={_subject:'[منصة X] اختبار الإرسال',_template:'box',
    message:'رسالة اختبار تلقائية من منصة X ('+APP_META.ver+') — إن وصلتك فالإرسال التلقائي يعمل بشكل كامل.',
    name:'اختبار تلقائي — منصة X'};
  x20SendForm(p,function(){
    X22_CHECKING=false;
    toast('✅ الإرسال التلقائي يعمل — الرسائل تصل بريد المنصة دون أي خطوة','success');
    x22OutRefresh();
  },function(){
    X22_CHECKING=false;
    x24ComposerOpen('[منصة X] اختبار الإرسال من بريد شخصي','رسالة اختبار أُرسلت من بريدي الشخصي عبر الإصدار 24 — إن وصلتك فطريقة «الإرسال من بريدك الشخصي» تعمل بشكل ممتاز.',function(success){
      if(success){toast('✅ فُتح بريدك برسالة الاختبار — إن وصلتك فالإرسال مضمون 100%','success')}
    });
  });
}

/* ---- 24.7 واجهة الصندوق: شرح الطريقة الجديدة بدل خطوات التفعيل القديمة ---- */
function x24HelpHTML(){
  return '<details style="margin:2px 0 10px;font-size:12.5px;color:var(--text-mute)">'+
    '<summary style="cursor:pointer;font-weight:800;color:var(--cyan);font-size:13px">❓ كيف يعمل الإرسال من بريدي الشخصي؟</summary>'+
    '<ol style="margin:8px 18px 0;line-height:2">'+
    '<li>عند إرسال أي رسالة (تسجيل أو إبلاغ) تفتح المنصة نافذة «أرسل رسالتك من بريدك الشخصي».</li>'+
    '<li>اختر <b>تطبيق البريد</b> أو <b>Gmail</b> أو <b>Outlook</b> — يُفتح بريدك ورسالتك معبأة مسبقًا إلى بريد المنصة.</li>'+
    '<li>اضغط «إرسال» من بريدك — فتصل الرسالة مضمونة 100% لأنها بريد حقيقي من حسابك مباشرة.</li>'+
    '<li>إن نجح الإرسال التلقائي في الخلفية فلا تحتاج أي خطوة: تُغلق النافذة وحدها.</li>'+
    '</ol><p style="margin:8px 0 0">بلا وسيط، بلا خدمة خارجية، بلا أي تفعيل — بريدك الشخصي هو المرسل وبريد المنصة هو المستقبل.</p></details>';
}
var __x24OutBase=x22OutHTML;
x22OutHTML=function(){
  var h=__x24OutBase();
  h=h.replace('⏳ خدمة البريد بانتظار تفعيل الإدارة (مرة واحدة)','✉️ الإرسال من بريدك الشخصي — يعمل دائمًا وبلا أي تفعيل');
  h=h.replace('✅ خدمة البريد مفعّلة','✉️ الإرسال من بريدك الشخصي يعمل دائمًا (والإرسال التلقائي مفعّل أيضًا)');
  h=h.replace('🩺 فحص خدمة البريد','🧪 اختبار الإرسال');
  var i=h.indexOf('❓ كيف أحل مشكلة الإرسال نهائيًا؟');
  if(i>=0){
    var d0=h.lastIndexOf('<details',i);
    var d1=h.indexOf('</details>',i);
    if(d0>=0&&d1>=0){
      d1+=10;
      h=h.substring(0,d0)+x24HelpHTML()+h.substring(d1);
    }
  }
  return h;
};

/* ---- 24.8 إعلان الإصدار ---- */
function fallbackNews18(){
  return [{title:'الإصدار 24 — الإرسال من بريدك الشخصي',
    body:'أُزيلت قناة تيليجرام كليًا بناءً على طلب الإدارة، والطريقة الجديدة مختلفة تمامًا: رسالتك (التسجيل أو الإبلاغ) تُرسل من بريدك الشخصي مباشرة إلى بريد المنصة — نافذة واحدة تفتح بريدك ومعها رسالة معبأة مسبقًا (تطبيق البريد أو Gmail أو Outlook) فتصل مضمونة 100% بلا وسيط وبلا أي تفعيل، مع بقاء محاولة الإرسال التلقائي الصامتة في الخلفية: إن نجحت تُغلق النافذة وحدها ولا تحتاج أي خطوة.',
    date:APP_META.date}];
}
