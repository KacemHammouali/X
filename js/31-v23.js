'use strict';
/* ============================================================
   منصة X — طبقة الإصدار 23: الإرسال المستقر — حل نهائي بلا بريد
   المشكلة الحقيقية التي عجزت عنها كل الإصدارات السابقة:
   خدمة البريد (FormSubmit) لا تولّد رسالة التفعيل إطلاقًا من
   نقطة الإرسال AJAX — ولهذا لم تصل أي رسالة تفعيل إلى بريد
   الإدارة أبدًا (حتى في مجلد المزعج)، فبقي الإرسال معطلًا للأبد.
   حل الإصدار 23 من ثلاث جهات:
   1) قناة تيليجرام الجديدة: رسائل التسجيل والإبلاغ تصلك فورًا
      على هاتفك — بلا بريد، بلا تفعيل، بلا أي رسالة تنتظرها
   2) إصلاح جذر خدمة البريد: نرسل الآن طلب التفعيل الحقيقي
      (نموذج POST فعلي وليس AJAX) فتولّد رسالة التفعيل أخيرًا
   3) الصندوق المؤجل يعيد المحاولة عبر تيليجرام أولًا
   ============================================================ */
/* ---- 23.0 بيانات الإصدار ---- */
APP_META.ver='23.0';APP_META.date='2026-10-30';
APP_META.notes='الإصدار 23 — الإرسال المستقر: قناة تيليجرام الفورية وإصلاح توليد رسالة تفعيل خدمة البريد.';
try{APP_META.changelog.unshift('الإصدار 23 — الإرسال المستقر والحل النهائي: أضفنا قناة تيليجرام (رسائل التسجيل والإبلاغ تصلك فورًا على هاتفك بلا بريد وبلا أي تفعيل)، وأصلحنا السبب الجذري لعدم وصول رسالة التفعيل قط: النظام القديم أرسل فقط عبر نقطة AJAX التي لا تولّد رسالة التفعيل أبدًا، أما الآن فيُرسل طلب التفعيل الحقيقي تلقائيًا (نموذج POST فعلي)، وصندوق الرسائل المؤجلة يعيد المحاولة عبر تيليجرام أولًا ثم خدمة البريد.')}catch(e){}

/* ---- 23.1 إعدادات قناة تيليجرام ----
   الإدارة: بعد إنشاء البوت واختبار القناة من الإعدادات، انسخ السطر الذي
   تعرضه المنصة (زر «نسخ سطر الإعداد») واستبدل به السطر التالي في الملف
   ثم ارفع الملف للنشر — بعدها تصل رسائل كل الزوار إلى تيليجرامك فورًا. */
var X23_TG_DEF={token:"",chat:""}; /* ← الإدارة: ضع التوكن والمعرف هنا (يعمل لكل الزوار) */
var X23_TG_KEY='x23_telegram';
function x23TG(){
  var v=stGet(X23_TG_KEY,null);
  if(v&&v.token&&v.chat){return v}     /* مهيأة على هذا الجهاز (لتجربة الإدارة) */
  return X23_TG_DEF;                    /* الثابت داخل الملف (لكل الزوار) */
}
function x23TGSet(v){stSet(X23_TG_KEY,v)}
function x23TGReady(){var c=x23TG();return !!(c.token&&c.chat)}
function x23TGLine(c){c=c||x23TG();return 'var X23_TG_DEF={token:"'+(c.token||'')+'",chat:"'+(c.chat||'')+'"};'}

/* ---- 23.2 الإرسال عبر تيليجرام: فوري ومؤكد ---- */
function x23TGSend(text,ok,fail){
  var c=x23TG();
  var finished=false;
  function done(good){if(finished)return;finished=true;try{(good?ok:fail)()}catch(e){}}
  try{
    fetch('https://api.telegram.org/bot'+c.token+'/sendMessage',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({chat_id:c.chat,text:text,disable_web_page_preview:true})
    }).then(function(r){return r.json()})
      .then(function(j){done(!!(j&&j.ok))})
      .catch(function(){done(false)});
  }catch(e){done(false)}
}

/* ---- 23.3 إصلاح جذر خدمة البريد: طلب التفعيل الحقيقي (POST فعلي يولّد رسالة التفعيل) ---- */
function x23ActivationSent(){try{return !!stGet('x23_act',{sent:false}).sent}catch(e){return false}}
function x23TriggerActivation(){
  if(x23ActivationSent())return;
  try{
    stSet('x23_act',{sent:true});
    var ifr=document.createElement('iframe');
    ifr.name='x23-act';ifr.style.display='none';
    document.body.appendChild(ifr);
    var f=document.createElement('form');
    f.action='https://formsubmit.co/'+encodeURIComponent(XOWNER_MAIL);
    f.method='POST';f.target='x23-act';f.style.display='none';
    f.innerHTML='<input name="_subject" value="[منصة X] توليد رسالة تفعيل خدمة البريد">'+
      '<input name="name" value="منصة X (رسالة تلقائية)">'+
      '<input name="email" value="'+XOWNER_MAIL+'">'+
      '<input name="message" value="رسالة تلقائية لتوليد رسالة تفعيل خدمة البريد الخاصة بالمنصة — سيصل رابط تفعيل واحد إلى بريد المنصة خلال دقائق.">'+
      '<input name="_captcha" value="false">';
    document.body.appendChild(f);f.submit();
  }catch(e){}
}

/* ---- 23.4 محرك الإرسال الموحد: تيليجرام أولًا ثم خدمة البريد ثم الصندوق ---- */
function x23SendItem(m,ok,fail){
  var text=(m._subject||'رسالة من منصة X')+'\n\n'+(m.message||'')+
    ((m.email)?('\n— من: '+m.email):'')+'\n— منصة X الإصدار '+APP_META.ver;
  if(x23TGReady()){x23TGSend(text,ok,fail);return}
  if(!x20Online()){fail(false);return}
  x20SendForm(m,ok,fail);
}
function x19Send(subject,body,from,onResult){
  var p={_subject:subject,_template:'box',message:body,name:(from?'مستخدم':'زائر')+' منصة X'};
  if(from){p.email=from;p._replyto=from}
  var finish=function(success,queued){
    if(typeof onResult==='function'){try{onResult(success,queued)}catch(e){}}
  };
  var onFail=function(needsActivation){
    x20OutPush(p);
    if(needsActivation){
      x22SetMailState({activated:false,waiting:true,checked:Date.now()});
      x23TriggerActivation();
      toast('📬 خدمة البريد تحتاج تفعيلًا — أرسلنا الآن طلب التفعيل الحقيقي فسيصل بريد المنصة خلال دقائق (لم يكن يصل أبدًا قبل هذا الإصدار). الأسرع والأضمن: هيّئ قناة تيليجرام من الإعدادات ← 📡 قناة استلام الرسائل.','error');
    }else{
      toast('⚠️ لم يصل تأكيد الإرسال الآن. حُفظت رسالتك في صندوق الرسائل المؤجلة وستُرسل تلقائيًا — ويمكنك هيّئة قناة تيليجرام من الإعدادات ليصلك كل شيء فورًا.','error');
    }
    x22OutRefresh();
    finish(false,true);
  };
  x23SendItem(p,function(){
    toast(x23TGReady()?'✅ وصلت رسالتك فورًا إلى تيليجرام الإدارة':'✅ أُرسلت رسالتك إلى بريد المنصة بنجاح','success');
    x22OutRefresh();
    finish(true,false);
  },onFail);
}

/* ---- 23.5 إعادة إرسال الصندوق: عبر تيليجرام أولًا ---- */
function x22Retry(i){
  var q=x22OutList();
  if(i<0||i>=q.length){x22OutRefresh();return}
  toast('⏳ جارٍ إرسال الرسالة المؤجلة…');
  x23SendItem(q[i],function(){
    var q2=x22OutList();q2.splice(i,1);x20OutSave(q2);
    toast('✅ أُرسلت الرسالة المؤجلة بنجاح','success');
    x22OutRefresh();
  },function(needsActivation){
    if(needsActivation){toast('📬 تبقى بانتظار تفعيل خدمة البريد — أو هيّئ قناة تيليجرام من الإعدادات للإرسال الفوري','error')}
    else{toast('⏳ لم يصل التأكيد بعد — تبقى الرسالة في الصندوق','error')}
  });
}
function x22RetryAll(){
  var q=x22OutList();
  if(!q.length){toast('لا توجد رسائل مؤجلة');return}
  toast('⏳ جارٍ إرسال '+q.length+' رسالة مؤجلة…');
  var sendNext=function(idx,removed){
    if(idx>=q.length){x22OutRefresh();return}
    x23SendItem(q[idx],function(){
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

/* ---- 23.6 فحص القناة: يفحص تيليجرام إن كانت مهيأة وإلا خدمة البريد ---- */
function x22CheckMail(){
  if(X22_CHECKING)return;
  X22_CHECKING=true;
  toast('🩺 جارٍ فحص قناة الرسائل…');
  if(x23TGReady()){
    x23TGSend('🩺 فحص تلقائي من منصة X ('+APP_META.ver+') — إن وصلتك هذه الرسالة فالقناة تعمل بشكل كامل',function(){
      X22_CHECKING=false;
      toast('✅ قناة تيليجرام تعمل — كل رسائل المنصة (التسجيل والإبلاغ) تصلك فورًا','success');
    },function(){
      X22_CHECKING=false;
      toast('⚠️ تعذر الوصول لقناة تيليجرام — راجع التوكن والمعرف من الإعدادات ← 📡 قناة استلام الرسائل','error');
    });
    return;
  }
  var p={_subject:'[منصة X] فحص خدمة البريد',_template:'box',
    message:'هذه رسالة فحص تلقائية للتأكد من وصول الرسائل إلى بريد المنصة. إن وصلتك فهذه علامة أن الإرسال يعمل بشكل كامل.',
    name:'فحص تلقائي — منصة X'};
  x20SendForm(p,function(){
    X22_CHECKING=false;
    toast('✅ خدمة البريد مفعّلة وتعمل — وصل فحص تجريبي إلى بريد المنصة','success');
    x22OutRefresh();
  },function(needsActivation){
    X22_CHECKING=false;
    if(needsActivation){
      x23TriggerActivation();
      toast('📬 بانتظار تفعيل خدمة البريد — أعدنا توليد طلب التفعيل الحقيقي الآن وسيصل بريدك خلال دقائق. الأسرع: هيّئ قناة تيليجرام من الإعدادات','error');
    }else{
      toast('⚠️ الخدمة لا تستجيب — تحقق من اتصال الإنترنت ثم أعد الفحص','error');
    }
  });
}

/* ---- 23.7 واجهة إعداد القناة: دليل مبني داخل المنصة + جلب المعرف تلقائيًا ---- */
function x23TGHTML(){
  var c=x23TG(),ready=x23TGReady();
  var h='<section class="x17-card fade-in" id="x23-tgcard" style="margin:16px auto 0">';
  h+='<h3 style="margin:0 0 4px">📡 قناة استلام الرسائل — تيليجرام</h3>';
  h+=(ready?'<span class="x22-badge x22-ok">✅ القناة مهيأة — كل رسالة تصلك فورًا على تيليجرام</span>':'<span class="x22-badge x22-wait">⏳ القناة غير مهيأة — هيّئها مرة واحدة (دقيقتان) ويحل ذلك الإرسال نهائيًا</span>');
  h+='<p class="x17-mute" style="font-size:12.5px;margin:8px 0 10px">الحل النهائي لعدم وصول الرسائل: قناة فورية بلا بريد وبلا أي تفعيل — لا تنتظر أي رسالة في أي بريد بعد اليوم. هيّئها مرة واحدة وستصلك رسائل التسجيل والإبلاغ لحظيًا على هاتفك.</p>';
  h+='<div class="p-grid">'+
    '<label class="fld"><span>توكن البوت (من BotFather)</span><input id="x23-tg-token" class="inp" dir="ltr" value="'+escAttr(c.token||'')+'" placeholder="123456789:AAExxxxx"></label>'+
    '<label class="fld"><span>معرف الدردشة (Chat ID)</span><input id="x23-tg-chat" class="inp" dir="ltr" value="'+escAttr(c.chat||'')+'" placeholder="يُجلب تلقائيًا بالزر المجاور"></label>'+
    '</div>';
  h+='<div class="btn-row">'+
    '<button class="btn btn-sm btn-primary" onclick="x23TGSave()">💾 حفظ</button>'+
    '<button class="btn btn-sm" onclick="x23TGFetchChat()">🤖 جلب معرفي تلقائيًا</button>'+
    '<button class="btn btn-sm" onclick="x22CheckMail()">🩺 اختبار القناة</button>'+
    '</div>';
  if(ready){
    h+='<p class="x17-mute" style="font-size:12.5px;margin:12px 0 6px"><b style="color:var(--warning)">خطوة النشر الأخيرة:</b> انسخ السطر التالي واستبدل به سطر <b dir="ltr">X23_TG_DEF</b> داخل ملف المنصة ثم ارفعه للنشر — ليصبح الإرسال فوريًا عند <b>كل الزوار</b> لا على جهازك فقط.</p>'+
      '<div style="direction:ltr;text-align:left;font-size:11px;background:var(--bg-2);border:1px dashed var(--border-strong);border-radius:10px;padding:10px;font-family:monospace;overflow-wrap:anywhere;margin-bottom:6px">'+escAttr(x23TGLine(c))+'</div>'+
      '<button class="btn btn-sm" onclick="x23TGCopyLine()">📋 نسخ سطر الإعداد</button>';
  }
  h+='<details style="margin:10px 0 0;font-size:12.5px;color:var(--text-mute)">'+
    '<summary style="cursor:pointer;font-weight:800;color:var(--cyan);font-size:13px">❓ كيف أهيّئ القناة؟ (دقيقتان — مرة واحدة في العمر)</summary>'+
    '<ol style="margin:8px 18px 0;line-height:2">'+
    '<li>حمّل تطبيق <b>تيليجرام</b> على هاتفك وسجّل الدخول برقمك.</li>'+
    '<li>داخل تيليجرام ابحث عن <b dir="ltr">@BotFather</b> وأرسل له <b dir="ltr">/newbot</b>، ثم امضِ خطواته (اسم للبوت ثم معرف ينتهي بكلمة bot).</li>'+
    '<li>سينعطيك <b>توكن</b> شكله <b dir="ltr">123456789:AAE...</b> — انسخه والصقه في حقل «توكن البوت» هنا ثم اضغط 💾 حفظ.</li>'+
    '<li>افتح بوتك الجديد (من الرابط الذي أعطاه BotFather) وأرسل له أي رسالة مثل: <b>سلام</b>.</li>'+
    '<li>عد إلى هذه الصفحة واضغط «🤖 جلب معرفي تلقائيًا» — نعبّئ حقل المعرف عنك.</li>'+
    '<li>اضغط «🩺 اختبار القناة» — إن وصلك إشعار على تيليجرام فقد حُلّت المشكلة نهائيًا: كل رسائل المنصة تصلك فورًا إلى الأبد.</li>'+
    '<li>ثم انسخ «سطر الإعداد» وضعه في الملف وارفعه للنشر (كما في الخطوة الظاهرة أعلاه) ليصبح الإرسال فوريًا لكل الزوار.</li>'+
    '</ol><p style="margin:8px 0 0">تُحفظ بيانات القناة محليًا على جهازك للتجربة، وفي الملف للزوار. وحتى بلا قناة يبقى زر «📧 إرسال من تطبيق بريدي» يعمل دائمًا.</p></details>';
  h+='</section>';
  return h;
}
function x23TGCollect(){
  var c=x23TG();
  var t=(gid('x23-tg-token')||{}).value;
  var ch=(gid('x23-tg-chat')||{}).value;
  if(t&&t.trim()){c.token=t.trim()}
  if(ch&&ch.trim()){c.chat=String(ch.trim())}
  return c;
}
function x23TGSave(){
  var c=x23TGCollect();
  if(!c.token){toast('الصق توكن البوت أولًا','error');return}
  x23TGSet(c);
  toast(x23TGReady()?'✅ حُفظت القناة — اضغط «اختبار القناة» للتأكد':'💾 حُفظ التوكن — أكمل المعرف بزر «جلب معرفي تلقائيًا»','success');
  render();
}
function x23TGFetchChat(){
  var c=x23TGCollect();
  if(!c.token){toast('الصق توكن البوت أولًا','error');return}
  x23TGSet(c);
  toast('🤖 جارٍ جلب المعرف من تيليجرام…');
  try{
    fetch('https://api.telegram.org/bot'+c.token+'/getUpdates')
      .then(function(r){return r.json()})
      .then(function(j){
        if(!j||!j.ok){toast('⚠️ التوكن غير صحيح — تأكد من نسخه كاملًا من BotFather','error');return}
        var cid=null;
        if(j.result&&j.result.length){
          for(var i=j.result.length-1;i>=0;i--){
            var u=j.result[i];
            var m=u.message||u.edited_message||u.channel_post;
            if(m&&m.chat&&(m.chat.id!==undefined)){cid=m.chat.id;break}
          }
        }
        if(cid===null){toast('📩 أرسل أي رسالة إلى بوتك في تيليجرام أولًا ثم اضغط الزر ثانية','error');return}
        c.chat=String(cid);
        x23TGSet(c);
        toast('✅ وجدنا معرفك وعبّأناه تلقائيًا — اضغط «اختبار القناة» للتحقق النهائي','success');
        render();
      })
      .catch(function(){toast('⚠️ تعذر الوصول لخدمة تيليجرام — تحقق من اتصال الإنترنت','error')});
  }catch(e){toast('⚠️ تعذر جلب المعرف','error')}
}
function x23TGCopyLine(){
  var line=x23TGLine(x23TGCollect());
  try{
    if(navigator.clipboard&&navigator.clipboard.writeText){
      navigator.clipboard.writeText(line).then(function(){toast('✅ نُسخ سطر الإعداد — ضعه مكان سطر X23_TG_DEF في الملف ثم ارفعه للنشر','success')},function(){try{prompt('انسخ سطر الإعداد يدويًا:',line)}catch(e){}});
    }else{try{prompt('انسخ سطر الإعداد يدويًا:',line)}catch(e){}}
  }catch(e){}
}

/* ---- 23.8 ربط الواجهة: شارة الصندوق + صفحة الإعدادات ---- */
var __x22OutBase=x22OutHTML;
x22OutHTML=function(){
  var h=__x22OutBase();
  if(x23TGReady()){
    h=h.replace('⏳ خدمة البريد بانتظار تفعيل الإدارة (مرة واحدة)','📡 قناة تيليجرام متصلة — الإرسال فوري ومؤكد');
    h=h.replace('✅ خدمة البريد مفعّلة','📡 قناة تيليجرام متصلة — الإرسال فوري ومؤكد');
    h=h.replace('❓ كيف أحل مشكلة الإرسال نهائيًا؟ (خطوات الإدارة)','❓ تفعيل خدمة البريد الاحتياطية (اختياري)');
  }
  return h;
};
var __x23SettingsBase=renderSettingsPage;
renderSettingsPage=function(){return __x23SettingsBase()+x23TGHTML()};

/* ---- 23.9 إعلان الإصدار ---- */
function fallbackNews18(){
  return [{title:'الإصدار 23 — الإرسال المستقر',
    body:'قناة تيليجرام الجديدة: رسائل التسجيل والإبلاغ تصلك فورًا بلا بريد وبلا أي تفعيل، مع إصلاح السبب الجذري لعدم وصول رسالة التفعيل قط (الإرسال القديم لا يولّدها — الآن يُرسل طلب التفعيل الحقيقي تلقائيًا)، والصندوق المؤجل يعيد المحاولة عبر تيليجرام أولًا.',
    date:APP_META.date}];
}
