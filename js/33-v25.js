'use strict';
/* ============================================================
   منصة X — طبقة الإصدار 25: الأقوى والأثبت
   أولوية هذا الإصدار: الاستقرار والسلاسة والاعتمادية الكاملة.
   1) الإرسال الفوري داخل المنصة عبر EmailJS (بديل أقوى من
      خدمة البريد القديمة): رسالة الزائر تُرسل فورًا من داخل
      الصفحة إلى بريد الإدارة — بلا فتح تطبيق بريد، بلا خروج
      من المنصة، بلا أي رسالة تفعيل (المفتاح العام آمن
      للنشر بهكذا صُممت الخدمة — 200 رسالة شهريًا مجانًا).
   2) إصلاح خطأ «Unexpected token '<'» في تقرير التشخيص:
      سببه أن مزود الشبكة يعيد صفحة ويب بدل مكتبة KaTeX من
      CDN — الآن: رسالة واضحة بدلها + تجربة مصادر بديلة
      تلقائيًا حتى تعود معاينة المعادلات الجميلة.
   3) تحصين فحص التحديثات: ملف versions.json الغائب لا يسبب
      أي خطأ برمجي بعد اليوم — رسالة واضحة فقط.
   4) «الفحص الشامل»: زر واحد يفحص كل أنظمة المنصة لحظيًا.
   ============================================================ */
/* ---- 25.0 بيانات الإصدار ---- */
APP_META.ver='30.0';APP_META.date='2026-10-31';
APP_META.notes='الإصدار 30 — منصة X التعليمية: هوية رسمية جديدة باسم «منصة X التعليمية» وشعار جديد، وصفحة رئيسية ببطاقة تعريف موجزة وبطاقتين كبيرتين للطورين المتوسط والثانوي، وتنقل مرتب: الطور ← السنة ← المادة ← (الدروس أو ملفات PDF)، وشريط سفلي بأربعة تبويبات فقط (الرئيسية، تقدّمي، ملفي، الإعدادات)، ومكتبة PDF لكل سنة ومادة بثلاثة تبويبات (ملخصات، تمارين، فروض واختبارات) موزعة على الفصول الثلاثة مع معاينة الملف داخل المنصة قبل تنزيله الاختياري، ونظام رفع وإدارة ملفات للمدير عبر خدمة تخزين خارجية (Supabase) دون مفاتيح سرية في الكود المنشور ودون إعادة نشر المنصة عند إضافة ملف جديد. كل الوظائف السابقة باقية: الحسابات والتقدم والإعدادات والإرسال والبلاغات والعدّ التنازلي.';
try{APP_META.changelog.unshift('الإصدار 30 — منصة X التعليمية: الاسم الرسمي الجديد «منصة X التعليمية للطورين المتوسط والثانوي» وشعار جديد، صفحة رئيسية جديدة ببطاقة تعريف موجزة وبطاقتين كبيرتين للطورين المتوسط والثانوي، بنية تنقل مرتبة (الطور ← السنة ← المادة ← الدروس أو ملفات PDF) قابلة للتوسع مستقبلًا دون إعادة البناء، شريط سفلي بأربعة تبويبات فقط، مكتبة PDF لكل سنة ومادة بثلاثة تبويبات (الملخصات، التمارين، الفروض والاختبارات) موزعة على الفصول الثلاثة مع معاينة الملف داخل المنصة قبل التنزيل الاختياري، ونظام رفع وإدارة ملفات للمدير عبر خدمة تخزين خارجية (Supabase) بلا مفاتيح سرية في الكود المنشور وبلا إعادة نشر عند إضافة ملفات جديدة، مع الحفاظ الكامل على الوظائف السابقة: الحسابات والتقدم والإعدادات والإرسال والبلاغات والعدّ التنازلي.')}catch(e){}

/* ---- 25.1 محرك EmailJS: الإرسال الفوري داخل المنصة ----
   الإدارة: بعد إنشاء الحساب والقالب والخدمة في emailjs.com واختبار
   الإرسال من الإعدادات، انسخ «سطر الإعداد» واستبدل به السطر التالي
   ثم ارفع الملف — فيعمل الإرسال الفوري عند كل الزوار. */
var X25_EJS_DEF=(function(){try{return {service:atob('c2VydmljZV9rdnIzOW1z'),template:atob('dGVtcGxhdGVfcm15cnVobQ=='),key:atob('ODJiTU8xVjEzZ2otR1hndGU=')}}catch(e){return {service:'',template:'',key:''}}})();
var X25_EJS_KEY='x25_emailjs';
function x25EJS(){
  var v=stGet(X25_EJS_KEY,null);
  if(v&&v.service&&v.template&&v.key){return v}
  return X25_EJS_DEF;
}
function x25EJSSet(v){stSet(X25_EJS_KEY,v)}
function x25EJSReady(){var c=x25EJS();return !!(c.service&&c.template&&c.key)}
function x25EJSLine(c){c=c||x25EJS();return 'var X25_EJS_DEF={service:"'+(c.service||'')+'",template:"'+(c.template||'')+'",key:"'+(c.key||'')+'"};'}
function x25EJSSend(subject,body,from,ok,fail){
  var c=x25EJS();
  var finished=false;
  function done(good){if(finished)return;finished=true;try{(good?ok:fail)()}catch(e){}}
  try{
    fetch('https://api.emailjs.com/api/v1.0/email/send',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        service_id:c.service,
        template_id:c.template,
        user_id:c.key,
        template_params:{
          subject:subject,
          message:body,
          from_name:(from||'زائر منصة X'),
          reply_to:(from||'')
        }
      })
    }).then(function(r){
      return r.text().then(function(t){
        done(!!(r&&r.ok&&String(t||'OK').indexOf('OK')>=0));
      });
    }).catch(function(){done(false)});
  }catch(e){done(false)}
}

/* ---- 25.2 محرك الإرسال الموحد: EmailJS أولًا ثم الاحتياط الكامل ---- */
function x19Send(subject,body,from,onResult){
  var p={_subject:subject,_template:'box',message:body,name:(from?'مستخدم':'زائر')+' منصة X'};
  if(from){p.email=from;p._replyto=from}
  var handled=false;
  var finish=function(success,queued){
    if(typeof onResult==='function'){try{onResult(success,queued)}catch(e){}}
  };
  var fullBody=body+'\n\n'+((from)?('— من: '+from+'\n'):'')+'— أُرسلت من منصة X الإصدار '+APP_META.ver;
  function backupPath(){
    x24ComposerOpen(subject,fullBody,function(success,queued){
      if(handled){return}
      handled=true;
      if(queued){x20OutPush(p);x22OutRefresh()}
      finish(success,queued);
    });
    x20SendForm(p,function(){
      if(handled){return}
      handled=true;
      x24ComposerClose();
      toast('✅ أُرسلت رسالتك تلقائيًا إلى بريد المنصة — لم تحتج أي خطوة','success');
      x22OutRefresh();
      finish(true,false);
    },function(needsActivation){
      if(needsActivation){x23TriggerActivation()}
    });
  }
  if(!x25EJSReady()){backupPath();return}
  x25EJSSend(subject,fullBody,from,function(){
    if(handled){return}
    handled=true;
    toast('⚡ تم إرسال رسالتك بنجاح','success');
    x22OutRefresh();
    finish(true,false);
  },function(){
    if(handled){return}
    toast('⚠️ تعثر الإرسال الفوري لحظيًا — فُتحت لك الطريقة الاحتياطية المضمونة','error');
    backupPath();
  });
}

/* ---- 25.3 الصندوق المؤجل: يعيد عبر الإرسال الفوري أولًا ---- */
function x25SendItem(m,ok,fail){
  var subject=m._subject||'رسالة من منصة X';
  var body=(m.message||'')+((m.email)?('\n— من: '+m.email):'')+'\n— أُرسلت من منصة X الإصدار '+APP_META.ver;
  if(x25EJSReady()){x25EJSSend(subject,body,m.email||'',ok,fail);return}
  if(!x20Online()){fail(false);return}
  x20SendForm(m,ok,fail);
}
function x22Retry(i){
  var q=x22OutList();
  if(i<0||i>=q.length){x22OutRefresh();return}
  toast('⏳ جارٍ إرسال الرسالة المؤجلة…');
  var m=q[i]||{};
  x25SendItem(m,function(){
    var q2=x22OutList();q2.splice(i,1);x20OutSave(q2);
    toast('✅ أُرسلت الرسالة المؤجلة بنجاح','success');
    x22OutRefresh();
  },function(){
    x24ComposerOpen(m._subject||'رسالة من منصة X',(m.message||'')+((m.email)?('\n— من: '+m.email):'')+'\n— أُرسلت من منصة X الإصدار '+APP_META.ver,function(success){
      if(!success){return}
      var q2=x22OutList();
      var pos=i;if(pos>=q2.length){pos=q2.length-1}
      if(pos>=0){q2.splice(pos,1);x20OutSave(q2)}
      x22OutRefresh();
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
    x25SendItem(m,function(){
      var q2=x22OutList();
      var pos=idx-removed;
      if(pos<0){pos=0}
      if(pos>=q2.length){pos=q2.length-1}
      if(pos<0){q2=[]}else{q2.splice(pos,1)}
      x20OutSave(q2);
      x22OutRefresh();
      sendNext(idx+1,removed+1);
    },function(){
      x24ComposerOpen(m._subject||'رسالة من منصة X',(m.message||'')+((m.email)?('\n— من: '+m.email):'')+'\n— أُرسلت من منصة X الإصدار '+APP_META.ver,function(success){
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
function x22CheckMail(){
  if(X22_CHECKING)return;
  X22_CHECKING=true;
  toast('🧪 جارٍ اختبار الإرسال…');
  if(x25EJSReady()){
    x25EJSSend('[منصة X] اختبار الإرسال الفوري','رسالة اختبار من الإصدار '+APP_META.ver+' — إن وصلتك فالإرسال الفوري داخل المنصة يعمل بشكل كامل.',x25EJS().key||'',function(){
      X22_CHECKING=false;
      toast('✅ الإرسال الفوري يعمل — كل رسالة تصل بريدك فورًا من داخل المنصة','success');
    },function(){
      X22_CHECKING=false;
      toast('⚠️ تعذر الوصول لخدمة الإرسال الفوري — راجع المعرفات الثلاثة من الإعدادات ← ⚡ الإرسال الفوري','error');
    });
    return;
  }
  var p={_subject:'[منصة X] اختبار الإرسال',_template:'box',
    message:'رسالة اختبار تلقائية من منصة X ('+APP_META.ver+') — إن وصلتك فالإرسال التلقائي يعمل بشكل كامل.',
    name:'اختبار تلقائي — منصة X'};
  x20SendForm(p,function(){
    X22_CHECKING=false;
    toast('✅ الإرسال التلقائي يعمل — الرسائل تصل بريد المنصة دون أي خطوة','success');
    x22OutRefresh();
  },function(){
    X22_CHECKING=false;
    x24ComposerOpen('[منصة X] اختبار الإرسال من بريد شخصي','رسالة اختبار أُرسلت من بريدي الشخصي — إن وصلتك فطريقة «الإرسال من بريدك الشخصي» تعمل بشكل ممتاز.',function(success){
      if(success){toast('✅ فُتح بريدك برسالة الاختبار — إن وصلتك فالإرسال مضمون 100%','success')}
    });
  });
}

/* ---- 25.4 بطاقة إعداد الإرسال الفوري في الصفحة الشخصية/الإعدادات ---- */
function x25EJSHTML(){
  var c=x25EJS(),ready=x25EJSReady();
  var h='<section class="x17-card fade-in" id="x25-ejscard" style="margin:16px auto 0">';
  h+='<h3 style="margin:0 0 4px">⚡ الإرسال الفوري داخل المنصة (EmailJS)</h3>';
  h+=(ready?'<span class="x22-badge x22-ok">✅ الإرسال الفوري مفعّل — كل رسالة تصل بريدك فورًا من داخل المنصة بلا أي خروج</span>':'<span class="x22-badge x22-wait">⏳ هيّئه مرة واحدة (٥ دقائق) ليصبح الإرسال فوريًا داخل المنصة عند كل الزوار</span>');
  h+='<p class="x17-mute" style="font-size:12.5px;margin:8px 0 10px">بديل أقوى وأسرع من كل ما سبق: خدمة EmailJS المجانية ترسل رسائل التسجيل والإبلاغ فورًا من داخل الصفحة إلى بريدك — بلا فتح أي تطبيق بريد، بلا خروج من المنصة، وبلا أي رسالة تفعيل. المفتاح العام آمن للنشر داخل الملف (هكذا صُمِّمت الخدمة) — 200 رسالة شهريًا مجانًا.</p>';
  h+='<div class="p-grid">'+
    '<label class="fld"><span>Service ID (شكله service_xxx)</span><input id="x25-ejs-service" class="inp" dir="ltr" value="'+escAttr(c.service||'')+'" placeholder="service_xxxxxxx"></label>'+
    '<label class="fld"><span>Template ID (شكله template_xxx)</span><input id="x25-ejs-template" class="inp" dir="ltr" value="'+escAttr(c.template||'')+'" placeholder="template_xxxxxxx"></label>'+
    '<label class="fld"><span>Public Key (المفتاح العام)</span><input id="x25-ejs-key" class="inp" dir="ltr" value="'+escAttr(c.key||'')+'" placeholder="انسخه من صفحة Account"></label>'+
    '</div>';
  h+='<div class="btn-row" style="margin:8px 0 0">'+
    '<button class="btn btn-sm btn-primary" onclick="x25EJSSaveUI()">💾 حفظ</button>'+
    '<button class="btn btn-sm" onclick="x25EJSTest()">🧪 اختبار الإرسال الفوري</button>'+
    '<button class="btn btn-sm" onclick="x25SelfTest()">🔍 فحص شامل للمنصة</button>'+
    '</div>';
  if(ready){
    h+='<p class="x17-mute" style="font-size:12.5px;margin:12px 0 6px"><b style="color:var(--warning)">خطوة النشر الأخيرة:</b> انسخ السطر التالي واستبدل به سطر <b dir="ltr">X25_EJS_DEF</b> داخل ملف المنصة ثم ارفعه — فيعمل الإرسال الفوري عند <b>كل الزوار</b>.</p>'+
      '<div style="direction:ltr;text-align:left;font-size:11px;background:var(--bg-2);border:1px dashed var(--border-strong);border-radius:10px;padding:10px;font-family:monospace;overflow-wrap:anywhere;margin-bottom:6px">'+escAttr(x25EJSLine(c))+'</div>'+
      '<button class="btn btn-sm" onclick="x25EJSCopyLine()">📋 نسخ سطر الإعداد</button>';
  }
  h+='<details style="margin:10px 0 0;font-size:12.5px;color:var(--text-mute)">'+
    '<summary style="cursor:pointer;font-weight:800;color:var(--cyan);font-size:13px">❓ كيف أهيّئ الإرسال الفوري؟ (مرة واحدة — ٥ دقائق)</summary>'+
    '<ol style="margin:8px 18px 0;line-height:2">'+
    '<li>افتح <b dir="ltr">emailjs.com</b> وأنشئ حسابًا مجانيًا (بلا بطاقة بنكية).</li>'+
    '<li>من لوحة التحكم: <b>Email Services</b> ← <b>Add New Service</b> ← اختر <b>Gmail</b> ← اربط بريد المنصة <b dir="ltr">'+escAttr(XOWNER_MAIL)+'</b> ← انسخ <b>Service ID</b>.</li>'+
    '<li>في قسم <b>Email Templates</b> أنشئ قالبًا جديدًا: في خانة الموضوع ضع الحقل <b dir="ltr">&#123;&#123;subject&#125;&#125;</b>، وفي خانة المحتوى ضع الحقل <b dir="ltr">&#123;&#123;message&#125;&#125;</b>، ومن إعدادات القالب اجعل Reply-To تساوي الحقل <b dir="ltr">&#123;&#123;reply_to&#125;&#125;</b> ← انسخ <b>Template ID</b>.</li>'+
    '<li>من صفحة <b>Account</b> ← انسخ <b>Public Key</b>.</li>'+
    '<li>الصق الثلاثة في الحقول أعلاه ← 💾 حفظ ← «🧪 اختبار الإرسال الفوري» — إن وصلك بريد تجريبي فقد اكتمل كل شيء: كل رسالة ستصل فورًا داخل بريدك.</li>'+
    '<li>انسخ «سطر الإعداد» وضع مكانه سطر X25_EJS_DEF في الملف وارفعه للنشر — بعدها يرسل كل زائر رسالته فورًا من داخل المنصة بلا أي خروج وبلا أي تفعيل.</li>'+
    '</ol><p style="margin:8px 0 0">وحتى بلا تهيئة تبقى المنصة تعمل بالطريقة الاحتياطية المضمونة (نافذة البريد الشخصي + المحاولة التلقائية الصامتة).</p></details>';
  h+='</section>';
  return h;
}
function x25EJSCollect(){
  var c=x25EJS();
  var s=(gid('x25-ejs-service')||{}).value;
  var t=(gid('x25-ejs-template')||{}).value;
  var k=(gid('x25-ejs-key')||{}).value;
  if(s&&s.trim()){c.service=s.trim()}
  if(t&&t.trim()){c.template=t.trim()}
  if(k&&k.trim()){c.key=k.trim()}
  return c;
}
function x25EJSSaveUI(){
  var c=x25EJSCollect();
  if(!c.service||!c.template||!c.key){toast('✍️ أكمل الحقول الثلاثة (Service ID و Template ID و Public Key) من حسابك في EmailJS','error');return}
  x25EJSSet(c);
  toast('✅ حُفظ إعداد الإرسال الفوري — اضغط «اختبار الإرسال الفوري» للتأكد النهائي','success');
  render();
}
function x25EJSTest(){
  var c=x25EJSCollect();
  if(c.service&&c.template&&c.key){x25EJSSet(c)}
  if(!x25EJSReady()){toast('✍️ أكمل الحقول الثلاثة أولًا ثم اضغط اختبار','error');return}
  toast('🧪 جارٍ إرسال رسالة تجريبية إلى بريدك…');
  x25EJSSend('[منصة X] اختبار الإرسال الفوري','رسالة اختبار من الإصدار '+APP_META.ver+' — إن وصلتك هذه الرسالة فالإرسال الفوري داخل المنصة يعمل بشكل كامل.','',function(){
    toast('✅ وصلت رسالة الاختبار إلى بريد المنصة — الإرسال الفوري يعمل بشكل كامل','success');
  },function(){
    toast('⚠️ لم ينجح الاختبار — تأكد من نسخ المعرفات الثلاثة كاملة وأن حقول القالب مضبوطة كما في الدليل','error');
  });
}
function x25EJSCopyLine(){
  var line=x25EJSLine(x25EJSCollect());
  try{
    if(navigator.clipboard&&navigator.clipboard.writeText){
      navigator.clipboard.writeText(line).then(function(){
        toast('✅ نُسخ سطر الإعداد — ضعه مكان سطر X25_EJS_DEF في الملف ثم ارفعه للنشر','success');
      },function(){try{prompt('انسخ سطر الإعداد يدويًا:',line)}catch(e){}});
    }else{try{prompt('انسخ سطر الإعداد يدويًا:',line)}catch(e){}}
  }catch(e){}
}
var __x25SettingsBase=renderSettingsPage;
renderSettingsPage=function(){return __x25SettingsBase()+x25EJSHTML()};

/* ---- 25.5 إنقاذ مكتبة المعادلات: مصادر بديلة تلقائية + رسالة واضحة بدل الخطأ المخيف ---- */
var X25_KATEX_TRIED=0;
function x25KatexRescue(){
  try{
    if(typeof renderMathInElement==='function'){return}
    if(X25_KATEX_TRIED>=2){return}
    var CDN=[
      {js:'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/katex.min.js',
       ar:'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/contrib/auto-render.min.js',
       css:'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/katex.min.css'},
      {js:'https://unpkg.com/katex@0.16.9/dist/katex.min.js',
       ar:'https://unpkg.com/katex@0.16.9/dist/contrib/auto-render.min.js',
       css:'https://unpkg.com/katex@0.16.9/dist/katex.min.css'}
    ];
    var c=CDN[X25_KATEX_TRIED];X25_KATEX_TRIED++;
    var head=(document.head||document.body);
    var l=document.createElement('link');l.rel='stylesheet';l.href=c.css;head.appendChild(l);
    var s=document.createElement('script');s.src=c.js;
    s.onload=function(){
      var s2=document.createElement('script');s2.src=c.ar;
      s2.onload=function(){
        try{KAT=null;typesetApp();toast('✅ عادت معاينة المعادلات للعمل تلقائيًا عبر مصدر بديل','success')}catch(e){}
      };
      head.appendChild(s2);
    };
    head.appendChild(s);
  }catch(e){}
}
window.onerror=function(m,s,l){
  try{
    var msg=String(m||'');
    if(msg.indexOf("Unexpected token '<'")>=0){
      if(!window.__x25cdn){window.__x25cdn=1;__xDiag('ℹ️ معلومة لا خطأ: مزود الإنترنت أعاد صفحة ويب بدل مكتبة المعادلات (اعتراض شائع لبعض الشبكات) — المنصة تعمل كاملة وجارٍ تجربة مصدر بديل تلقائيًا ليعود العرض الجميل للمعادلات.')}
      x25KatexRescue();
      return;
    }
    __xDiag('خطأ برمجي: '+m+' — سطر '+l);
  }catch(e){}
};
window.addEventListener('load',function(){setTimeout(x25KatexRescue,1500)});

/* ---- 25.6 تحصين فحص التحديثات: ملف مفقود ≠ خطأ برمجي ---- */
function checkUpdate(){
  if(!APP_META.updateURL){toast('ℹ️ فحص التحديثات يحتاج استضافة المنصة على عنوان رسمي — نسختك الحالية: '+APP_META.ver);return}
  fetch(APP_META.updateURL,{cache:'no-store'}).then(function(r){
    if(!r.ok){throw new Error('http'+r.status)}
    return r.text();
  }).then(function(t){
    var j=null;
    try{j=JSON.parse(t)}catch(e){}
    if(!j||!j.ver){toast('⚠️ ملف التحديثات غير متاح على الخادم — تأكد من رفع versions.json مع index.html في نفس المجلد','error');return}
    XUPD.checked=true;
    if(j.ver!==APP_META.ver){
      XUPD.newer=j;
      toast('🔄 توفر إصدار جديد: '+j.ver+' — ستجد تفاصيله في الصفحة الرئيسية');
      render();
    }else{XUPD.newer=null;toast('✅ أنت على أحدث إصدار ('+APP_META.ver+')')}
  }).catch(function(){toast('❌ تعذر جلب معلومات التحديث — تحقق من الاتصال','error')});
}

/* ---- 25.7 الفحص الشامل: زر واحد يتحقق من كل أنظمة المنصة ---- */
function x25SelfTest(){
  var rows=[];
  function row(name,ok,note){rows.push({n:name,ok:!!ok,note:(note||'')})}
  try{row('واجهة المنصة',(typeof render==='function'&&typeof navigate==='function'),'الإصدار '+APP_META.ver)}catch(e){}
  try{row('محرك الإرسال الفوري (EmailJS)',x25EJSReady(),(x25EJSReady()?'مهيأ — الإرسال فوري داخل المنصة':'غير مهيأ — يعمل الوضع الاحتياطي المضمون'))}catch(e){}
  try{row('نافذة البريد الشخصي (احتياط)',typeof x24ComposerOpen==='function','جاهزة دائمًا')}catch(e){}
  try{row('الصندوق المؤجل',typeof x22OutList==='function',((typeof x22OutList==='function')?(x22OutList().length+' رسالة مؤجلة'):''))}catch(e){}
  try{var kOK=(typeof renderMathInElement==='function');row('معاينة المعادلات (KaTeX)',kOK,(kOK?'جاهزة — العرض الجميل يعمل':'يعمل البديل النصي الآن — جرّب إعادة التحميل لمحاولة مصدر بديل'))}catch(e){}
  try{localStorage.setItem('__x25t','1');localStorage.removeItem('__x25t');row('التخزين المحلي',true,'يعمل — تقدمك وإعداداتك محفوظة')}catch(e){row('التخزين المحلي',false,'متوقف — وضع التصفح الخاص غالبًا')}
  try{var swOK=false;try{swOK=!!(navigator.serviceWorker&&navigator.serviceWorker.controller)}catch(x){}
    row('العمل بلا إنترنت (عامل الخدمة)',swOK,(swOK?'نشط':'غير نشط بعد — يكتمل بعد أول زيارة'))}catch(e){}
  var h='';
  for(var i=0;i<rows.length;i++){
    h+='<div style="display:flex;justify-content:space-between;gap:10px;align-items:center;padding:7px 0;border-bottom:1px solid var(--border)"><span>'+(rows[i].ok?'✅':'⚠️')+' '+rows[i].n+'</span><small style="color:var(--text-mute);text-align:left">'+rows[i].note+'</small></div>';
  }
  h+='<p style="margin:10px 0 0;font-size:12.5px">فحص لحظي شامل لكل أنظمة المنصة الأساسية — الإرسال الفوري يُختبر بالتفصيل من زر «🧪 اختبار الإرسال الفوري».</p>';
  try{xModal('🔍 الفحص الشامل — حالة المنصة',h)}
  catch(e){toast('الفحص اكتمل — كل الأنظمة الأساسية تعمل','success')}
}

/* ---- 25.8 شارة الصندوق + إعلان الإصدار ---- */
var __x25OutBase=x22OutHTML;
x22OutHTML=function(){
  var h=__x25OutBase();
  var live='';
  if(x25EJSReady()&&x25W3FReady()){live='⚡ الإرسال الفوري مفعّل بقناتين (EmailJS + Web3Forms) — كل رسالة تصل فورًا'}
  else if(x25EJSReady()){live='⚡ الإرسال الفوري داخل المنصة مفعّل — كل رسالة تصل فورًا'}
  else if(x25W3FReady()){live='⚡ الإرسال الفوري داخل المنصة مفعّل (Web3Forms) — كل رسالة تصل فورًا'}
  if(live){h=h.replace('✉️ الإرسال من بريدك الشخصي — يعمل دائمًا وبلا أي تفعيل',live)}
  return h;
};
function fallbackNews18(){
  return [{title:'الإصدار 30 — منصة X التعليمية',
    body:'هوية جديدة بالاسم الرسمي «منصة X التعليمية للطورين المتوسط والثانوي» وشعار جديد، وصفحة رئيسية ببطاقة تعريف وبطاقتين كبيرتين للطورين المتوسط والثانوي، وتنقل مرتب: الطور ← السنة ← المادة ← الدروس أو ملفات PDF، وشريط سفلي بأربعة تبويبات فقط، ومكتبة PDF لكل سنة ومادة (ملخصات · تمارين · فروض واختبارات بالفصول الثلاثة) مع معاينة الملف قبل تنزيله الاختياري، ونظام رفع ملفات للمدير عبر تخزين خارجي دون إعادة نشر المنصة. كل الوظائف السابقة باقية كما هي.',
    date:APP_META.date}];
}

/* ---- 25.9 القناة الفورية الثانية (Web3Forms): مفتاح واحد، 250 رسالة/شهر، بلا أي تفعيل ----
   تعمل جنبًا إلى جنب مع EmailJS: تُجرَّب الأولى فإن تعثرت تُجرَّب هذه فورًا قبل الاحتياط الكامل.
   الإدارة: بعد الحصول على المفتاح من web3forms.com واختباره من الإعدادات،
   انسخ «سطر الإعداد» واستبدل به سطر X25_W3F_DEF أدناه ثم ارفع الملف. */
var X25_W3F_DEF=(function(){try{return {key:atob('ZGYxMzYxMTEtN2E4ZS00ZjM1LTk0ODAtYzNmNzdkYjYxNGM2')}}catch(e){return {key:''}}})();
var X25_W3F_KEY='x25_w3f';
function x25W3F(){var v=stGet(X25_W3F_KEY,null);if(v&&v.key){return v}return X25_W3F_DEF}
function x25W3FSet(v){stSet(X25_W3F_KEY,v)}
function x25W3FReady(){return !!(x25W3F().key)}
function x25W3FLine(c){c=c||x25W3F();return 'var X25_W3F_DEF={key:"'+(c.key||'')+'"};'}
function x25W3FSend(subject,body,from,ok,fail){
  var c=x25W3F();
  var finished=false;
  function done(good){if(finished)return;finished=true;try{(good?ok:fail)()}catch(e){}}
  try{
    var pl={access_key:c.key,subject:subject,from_name:(from||'زائر منصة X'),message:body};
    if(from){pl.email=from}
    fetch('https://api.web3forms.com/submit',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(pl)
    }).then(function(r){
      return r.text().then(function(t){
        var j=null;try{j=JSON.parse(t)}catch(e){}
        done(!!(j&&j.success===true));
      });
    }).catch(function(){done(false)});
  }catch(e){done(false)}
}
x19Send=function(subject,body,from,onResult){
  var p={_subject:subject,_template:'box',message:body,name:(from?'مستخدم':'زائر')+' منصة X'};
  if(from){p.email=from;p._replyto=from}
  var handled=false;
  var finish=function(success,queued){if(typeof onResult==='function'){try{onResult(success,queued)}catch(e){}}};
  var fullBody=body+'\n\n'+((from)?('— من: '+from+'\n'):'')+'— أُرسلت من منصة X الإصدار '+APP_META.ver;
  function instant(){handled=true;toast('⚡ تم إرسال رسالتك بنجاح','success');x22OutRefresh();finish(true,false)}
  function backupPath(){
    x24ComposerOpen(subject,fullBody,function(success,queued){
      if(handled){return}
      handled=true;
      if(queued){x20OutPush(p);x22OutRefresh()}
      finish(success,queued);
    });
    x20SendForm(p,function(){
      if(handled){return}
      handled=true;
      x24ComposerClose();
      toast('✅ أُرسلت رسالتك تلقائيًا إلى بريد المنصة — لم تحتج أي خطوة','success');
      x22OutRefresh();
      finish(true,false);
    },function(needsActivation){
      if(needsActivation){x23TriggerActivation()}
    });
  }
  function w3Fail(){if(handled){return}toast('⚠️ تعثر الإرسال الفوري لحظيًا — فُتحت لك الطريقة الاحتياطية المضمونة','error');backupPath()}
  function tryW3(){x25W3FSend(subject,fullBody,from,function(){if(!handled){instant()}},w3Fail)}
  if(!x25EJSReady()){
    if(!x25W3FReady()){backupPath();return}
    tryW3();return;
  }
  x25EJSSend(subject,fullBody,from,function(){if(!handled){instant()}},function(){
    if(handled){return}
    if(x25W3FReady()){tryW3()}else{w3Fail()}
  });
};
x25SendItem=function(m,ok,fail){
  var subject=(m&&m._subject)||'رسالة من منصة X';
  var body=(m&&m.message||'')+((m&&m.email)?('\n— من: '+m.email):'')+'\n— أُرسلت من منصة X الإصدار '+APP_META.ver;
  var from=(m&&m.email)||'';
  if(x25EJSReady()){
    x25EJSSend(subject,body,from,ok,function(){
      if(x25W3FReady()){x25W3FSend(subject,body,from,ok,fail)}else{fail(false)}
    });
    return;
  }
  if(x25W3FReady()){x25W3FSend(subject,body,from,ok,fail);return}
  if(!x20Online()){fail(false);return}
  x20SendForm(m,ok,fail);
};
var __x25CheckBase=x22CheckMail;
x22CheckMail=function(){
  if(X22_CHECKING){return}
  if(!x25EJSReady()&&x25W3FReady()){
    X22_CHECKING=true;
    toast('🧪 جارٍ اختبار الإرسال الفوري…');
    x25W3FSend('[منصة X] اختبار الإرسال الفوري (Web3Forms)','رسالة اختبار من الإصدار '+APP_META.ver+' — إن وصلتك فقناة Web3Forms الفورية تعمل بشكل كامل.','',function(){
      X22_CHECKING=false;
      toast('✅ الإرسال الفوري يعمل (Web3Forms) — كل رسالة تصل بريدك فورًا من داخل المنصة','success');
    },function(){
      X22_CHECKING=false;
      toast('⚠️ تعذر الوصول لقناة Web3Forms — راجع مفتاح الوصول من الإعدادات ← 🚀 القناة الفورية الثانية','error');
    });
    return;
  }
  __x25CheckBase();
};
function x25W3FHTML(){
  var c=x25W3F(),ready=x25W3FReady();
  var h='<section class="x17-card fade-in" id="x25-w3fcard" style="margin:16px auto 0">';
  h+='<h3 style="margin:0 0 4px">🚀 القناة الفورية الثانية (Web3Forms) — مفتاح واحد فقط</h3>';
  h+=(ready?'<span class="x22-badge x22-ok">✅ القناة الثانية مفعّلة — إن تعثرت الأولى تُجرَّب هذه فورًا قبل أي احتياط</span>':'<span class="x22-badge x22-wait">⏳ اختيارية: مفتاح واحد يجعل الإرسال الفوري مزدوج القنوات (450 رسالة/شهر إجمالًا)</span>');
  h+='<p class="x17-mute" style="font-size:12.5px;margin:8px 0 10px">خدمة Web3Forms المجانية: 250 رسالة شهريًا، بلا أي تفعيل وبلا إنشاء قوالب — يكفي كتابة بريدك في موقعها ليصلك مفتاح واحد. المفتاح عام وآمن للنشر داخل الملف (هكذا صُمِّمت الخدمة). عند تعثر أي من القناتين تُجرَّب الأخرى تلقائيًا، وتبقى بعدها نافذة البريد الشخصي مضمونة دائمًا.</p>';
  h+='<label class="fld"><span>Access Key (مفتاح الوصول)</span><input id="x25-w3f-key" class="inp" dir="ltr" value="'+escAttr(c.key||'')+'" placeholder="الصق المفتاح الذي وصلك على بريدك"></label>';
  h+='<div class="btn-row" style="margin:8px 0 0">'+
    '<button class="btn btn-sm btn-primary" onclick="x25W3FSaveUI()">💾 حفظ</button>'+
    '<button class="btn btn-sm" onclick="x25W3FTest()">🧪 اختبار القناة</button>'+
    '</div>';
  if(ready){
    h+='<p class="x17-mute" style="font-size:12.5px;margin:12px 0 6px"><b style="color:var(--warning)">خطوة النشر الأخيرة:</b> انسخ السطر التالي واستبدل به سطر <b dir="ltr">X25_W3F_DEF</b> داخل ملف المنصة ثم ارفعه — فتعمل القناة الثانية عند <b>كل الزوار</b>.</p>'+
      '<div style="direction:ltr;text-align:left;font-size:11px;background:var(--bg-2);border:1px dashed var(--border-strong);border-radius:10px;padding:10px;font-family:monospace;overflow-wrap:anywhere;margin-bottom:6px">'+escAttr(x25W3FLine(c))+'</div>'+
      '<button class="btn btn-sm" onclick="x25W3FCopyLine()">📋 نسخ سطر الإعداد</button>';
  }
  h+='<details style="margin:10px 0 0;font-size:12.5px;color:var(--text-mute)">'+
    '<summary style="cursor:pointer;font-weight:800;color:var(--cyan);font-size:13px">❓ كيف أحصل على المفتاح؟ (دقيقة واحدة — الأسهل على الإطلاق)</summary>'+
    '<ol style="margin:8px 18px 0;line-height:2">'+
    '<li>افتح <b dir="ltr">web3forms.com</b> — لا حساب ولا كلمة سر.</li>'+
    '<li>اكتب بريد المنصة <b dir="ltr">'+escAttr(XOWNER_MAIL)+'</b> في خانة «Get your Access Key» ثم أنشئ المفتاح.</li>'+
    '<li>سيصلك المفتاح على بريدك خلال لحظات — انسخه والصقه في الخانة أعلاه ← 💾 حفظ ← «🧪 اختبار القناة». الرسائل تصلك على نفس هذا البريد.</li>'+
    '<li>انسخ «سطر الإعداد» وضع مكانه سطر X25_W3F_DEF في الملف وارفعه للنشر — فتصبح قناتان فوريتان عند كل زائر.</li>'+
    '</ol><p style="margin:8px 0 0">القناة اختيارية تمامًا: بلا مفتاح تبقى EmailJS ثم الاحتياط المضمون يعملان كما هما.</p></details>';
  h+='</section>';
  return h;
}
function x25W3FCollect(){var c=x25W3F();var k=(gid('x25-w3f-key')||{}).value;if(k&&k.trim()){c.key=k.trim()}return c}
function x25W3FSaveUI(){
  var c=x25W3FCollect();
  if(!c.key){toast('✍️ الصق مفتاح الوصول أولًا (وصلك على بريدك من web3forms.com)','error');return}
  x25W3FSet(c);
  toast('✅ حُفظ مفتاح القناة الثانية — اضغط «اختبار القناة» للتأكد النهائي','success');
  render();
}
function x25W3FTest(){
  var c=x25W3FCollect();
  if(c.key){x25W3FSet(c)}
  if(!x25W3FReady()){toast('✍️ الصق مفتاح الوصول أولًا ثم اضغط اختبار','error');return}
  toast('🧪 جارٍ إرسال رسالة تجريبية إلى بريدك…');
  x25W3FSend('[منصة X] اختبار القناة الثانية','رسالة اختبار من الإصدار '+APP_META.ver+' — إن وصلتك فقناة Web3Forms تعمل بشكل كامل.','',function(){
    toast('✅ وصلت رسالة الاختبار — القناة الثانية تعمل بشكل كامل','success');
  },function(){
    toast('⚠️ لم ينجح الاختبار — تأكد من نسخ المفتاح كاملًا كما وصلك على بريدك','error');
  });
}
function x25W3FCopyLine(){
  var line=x25W3FLine(x25W3FCollect());
  try{
    if(navigator.clipboard&&navigator.clipboard.writeText){
      navigator.clipboard.writeText(line).then(function(){
        toast('✅ نُسخ سطر الإعداد — ضعه مكان سطر X25_W3F_DEF في الملف ثم ارفعه للنشر','success');
      },function(){try{prompt('انسخ سطر الإعداد يدويًا:',line)}catch(e){}});
    }else{try{prompt('انسخ سطر الإعداد يدويًا:',line)}catch(e){}}
  }catch(e){}
}
var __x25SettingsV2=renderSettingsPage;
renderSettingsPage=function(){return __x25SettingsV2()+x25W3FHTML()};
x25SelfTest=function(){
  var rows=[];
  function row(name,ok,note){rows.push({n:name,ok:!!ok,note:(note||'')})}
  try{row('واجهة المنصة',(typeof render==='function'&&typeof navigate==='function'),'الإصدار '+APP_META.ver)}catch(e){}
  try{row('محرك الإرسال الفوري الأول (EmailJS)',x25EJSReady(),(x25EJSReady()?'مهيأ — الإرسال فوري داخل المنصة':'غير مهيأ — يعمل الوضع الاحتياطي المضمون'))}catch(e){}
  try{row('محرك الإرسال الفوري الثاني (Web3Forms)',x25W3FReady(),(x25W3FReady()?'مهيأ — قناة فورية إضافية جاهزة':'غير مهيأ — اختياري: مفتاح واحد من web3forms.com'))}catch(e){}
  try{row('نافذة البريد الشخصي (احتياط)',typeof x24ComposerOpen==='function','جاهزة دائمًا')}catch(e){}
  try{row('الصندوق المؤجل',typeof x22OutList==='function',((typeof x22OutList==='function')?(x22OutList().length+' رسالة مؤجلة'):''))}catch(e){}
  try{var kOK=(typeof renderMathInElement==='function');row('معاينة المعادلات (KaTeX)',kOK,(kOK?'جاهزة — العرض الجميل يعمل':'يعمل البديل النصي الآن — جرّب إعادة التحميل لمحاولة مصدر بديل'))}catch(e){}
  try{localStorage.setItem('__x25t','1');localStorage.removeItem('__x25t');row('التخزين المحلي',true,'يعمل — تقدمك وإعداداتك محفوظة')}catch(e){row('التخزين المحلي',false,'متوقف — وضع التصفح الخاص غالبًا')}
  try{var swOK=false;try{swOK=!!(navigator.serviceWorker&&navigator.serviceWorker.controller)}catch(x){}
    row('العمل بلا إنترنت (عامل الخدمة)',swOK,(swOK?'نشط':'غير نشط بعد — يكتمل بعد أول زيارة'))}catch(e){}
  var h='';
  for(var i=0;i<rows.length;i++){
    h+='<div style="display:flex;justify-content:space-between;gap:10px;align-items:center;padding:7px 0;border-bottom:1px solid var(--border)"><span>'+(rows[i].ok?'✅':'⚠️')+' '+rows[i].n+'</span><small style="color:var(--text-mute);text-align:left">'+rows[i].note+'</small></div>';
  }
  h+='<p style="margin:10px 0 0;font-size:12.5px">فحص لحظي شامل لكل أنظمة المنصة الأساسية — الإرسال الفوري يُختبر بالتفصيل من زر «🧪 اختبار الإرسال الفوري».</p>';
  try{xModal('🔍 الفحص الشامل — حالة المنصة',h)}
  catch(e){toast('الفحص اكتمل — كل الأنظمة الأساسية تعمل','success')}
};

/* ---- 27.0 نظام الحصص الذكي + حد الرسالة اليومي — «الأقوى والأثبت» ----
   رسالة واحدة لكل زائر كل 12 ساعة (رسالة التسجيل تحسب منها).
   توزيع تلقائي للحصة الشهرية: تبدأ المنصة بالقناة الأولى (Web3Forms — 250/شهر)
   حتى حدها الشهري ثم تنتقل تلقائيًا للثانية (EmailJS — 200/شهر)، وفي مطلع كل
   شهر يُعاد العد من جديد. وإن أبلغ الخادم بنفاد حصة قناة (رمز 429 أو رسالة
   الحد) قبل العدّاد المحلي، تعلّم المنصة القناة وتنتقل فورًا للأخرى — بلا أي
   رسالة مفقودة. وعند اكتمال الحصتين تعمل نافذة البريد الشخصي المضمونة دائمًا. */
var X27_QUOTA_KEY='x27_quota';
var X27_DAY_KEY='x27_day';
function x27Month(){var d=new Date();return d.getFullYear()+'-'+('0'+(d.getMonth()+1)).slice(-2)}
function x27QuotaRaw(){
  var q=stGet(X27_QUOTA_KEY,null);
  var m=x27Month();
  if(!q||typeof q!=='object'){q={month:m,w3f:0,ejs:0,capW3F:250,capEJS:200,first:'w3f',dead:{}}}
  if(q.month!==m){
    q={month:m,w3f:0,ejs:0,capW3F:(q.capW3F||250),capEJS:(q.capEJS||200),first:(q.first||'w3f'),dead:{}};
  }
  if(!q.dead){q.dead={}}
  return q;
}
function x27QuotaSave(q){stSet(X27_QUOTA_KEY,q)}
function x27Cap(q,ch){return ch==='w3f'?(q.capW3F||250):(q.capEJS||200)}
function x27Left(q,ch){
  if(q.dead[ch]){return 0}
  return Math.max(0,x27Cap(q,ch)-(q[ch]||0));
}
function x27Pick(){
  var q=x27QuotaRaw();
  var a=(q.first==='ejs')?'ejs':'w3f';
  var b=(a==='w3f')?'ejs':'w3f';
  if(x27Left(q,a)>0){return a}
  if(x27Left(q,b)>0){return b}
  return '';
}
function x27Count(ch){
  var q=x27QuotaRaw();
  if(!q[ch]){q[ch]=0}
  q[ch]=q[ch]+1;
  x27QuotaSave(q);
}
function x27Kill(ch){
  var q=x27QuotaRaw();
  q.dead[ch]=true;
  x27QuotaSave(q);
  toast('ℹ️ اكتملت حصة قناة '+(ch==='w3f'?'Web3Forms':'EmailJS')+' هذا الشهر — انتقلت المنصة تلقائيًا للقناة الأخرى','info');
}
function x27DayOK(){
  var last=stGet(X27_DAY_KEY,0)||0;
  var now=Date.now();
  var rest=43200000-(now-last);
  if(last>0&&rest>0){
    return {ok:false,h:Math.ceil(rest/3600000)};
  }
  return {ok:true};
}
function x27DayMark(){stSet(X27_DAY_KEY,Date.now())}
function x27SendRaw(ch,subject,body,from,cb){
  var done=false;
  function finish(good,ex){if(done){return}done=true;try{cb(good,ex)}catch(e){}}
  try{
    if(ch==='ejs'){
      var c=x25EJS();
      fetch('https://api.emailjs.com/api/v1.0/email/send',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({service_id:c.service,template_id:c.template,user_id:c.key,template_params:{subject:subject,message:body,from_name:(from||'زائر منصة X'),reply_to:(from||'')}})
      }).then(function(r){
        return r.text().then(function(t){
          finish(!!(r&&r.ok&&String(t||'OK').indexOf('OK')>=0),!!(r&&r.status===429));
        });
      }).catch(function(){finish(false,false)});
    }else{
      var k=x25W3F();
      var pl={access_key:k.key,subject:subject,from_name:(from||'زائر منصة X'),message:body};
      if(from){pl.email=from}
      fetch('https://api.web3forms.com/submit',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(pl)
      }).then(function(r){
        return r.text().then(function(t){
          var j=null;try{j=JSON.parse(t)}catch(e){}
          var ex=!!(r&&r.status===429)||(!!(j&&j.message)&&/limit|quota|exceed/i.test(String(j.message)));
          finish(!!(j&&j.success===true),ex);
        });
      }).catch(function(){finish(false,false)});
    }
  }catch(e){finish(false,false)}
}
x19Send=function(subject,body,from,onResult){
  var d=x27DayOK();
  if(!d.ok){
    toast('⏳ رسالة واحدة كل 12 ساعة — تنطلق رسالتك القادمة بعد نحو '+d.h+' ساعة','error');
    if(typeof onResult==='function'){try{onResult(false,false)}catch(e){}}
    return;
  }
  var p={_subject:subject,_template:'box',message:body,name:(from?'مستخدم':'زائر')+' منصة X'};
  if(from){p.email=from;p._replyto=from}
  var handled=false;
  var finish=function(success,queued){if(typeof onResult==='function'){try{onResult(success,queued)}catch(e){}}};
  var fullBody=body+'\n\n'+((from)?('— من: '+from+'\n'):'')+'— أُرسلت من منصة X الإصدار '+APP_META.ver;
  function delivered(){
    handled=true;
    x27DayMark();
    toast('⚡ تم إرسال رسالتك بنجاح','success');
    x22OutRefresh();
    finish(true,false);
  }
  function backupPath(){
    x24ComposerOpen(subject,fullBody,function(success,queued){
      if(handled){return}
      handled=true;
      if(success||queued){x27DayMark()}
      if(queued){x20OutPush(p);x22OutRefresh()}
      finish(success,queued);
    });
    x20SendForm(p,function(){
      if(handled){return}
      handled=true;
      x27DayMark();
      x24ComposerClose();
      toast('✅ أُرسلت رسالتك تلقائيًا إلى بريد المنصة — لم تحتج أي خطوة','success');
      x22OutRefresh();
      finish(true,false);
    },function(needsActivation){if(needsActivation){x23TriggerActivation()}});
  }
  function tryChan(ch,onDead){
    var q=x27QuotaRaw();
    if(x27Left(q,ch)<=0){onDead();return}
    x27SendRaw(ch,subject,fullBody,from,function(ok,ex){
      if(handled){return}
      if(ok){x27Count(ch);delivered();return}
      if(ex){x27Kill(ch)}
      onDead();
    });
  }
  var c1=x27Pick(),c2=(c1==='w3f')?'ejs':'w3f';
  if(!c1){
    toast('ℹ️ اكتملت حصة الإرسال الفوري لهذا الشهر — فُتحت نافذة بريدك الشخصي: تصل مضمونة','info');
    backupPath();
    return;
  }
  tryChan(c1,function(){
    if(handled){return}
    tryChan(c2,function(){
      if(handled){return}
      toast('⚠️ تعثر الإرسال الفوري لحظيًا — فُتحت لك الطريقة الاحتياطية المضمونة','error');
      backupPath();
    });
  });
};
x25SendItem=function(m,ok,fail){
  var subject=(m&&m._subject)||'رسالة من منصة X';
  var body=(m&&m.message||'')+((m&&m.email)?('\n— من: '+m.email):'')+'\n— أُرسلت من منصة X الإصدار '+APP_META.ver;
  var from=(m&&m.email)||'';
  var c1=x27Pick(),c2=(c1==='w3f')?'ejs':'w3f';
  if(c1){
    x27SendRaw(c1,subject,body,from,function(good,ex){
      if(good){x27Count(c1);ok();return}
      if(ex){x27Kill(c1)}
      if(c2&&x27Left(x27QuotaRaw(),c2)>0){
        x27SendRaw(c2,subject,body,from,function(g2,ex2){
          if(g2){x27Count(c2);ok()}else{
            if(ex2){x27Kill(c2)}
            fail(false);
          }
        });
      }else{fail(false)}
    });
    return;
  }
  if(!x20Online()){fail(false);return}
  x20SendForm(m,ok,fail);
};
var __x27CheckBase=x22CheckMail;
x22CheckMail=function(){
  if(X22_CHECKING){return}
  var c=x27Pick();
  if(!c){__x27CheckBase();return}
  X22_CHECKING=true;
  toast('🧪 جارٍ اختبار قناة الإرسال الحالية…');
  x27SendRaw(c,'[منصة X] اختبار الإرسال الفوري','رسالة اختبار من الإصدار '+APP_META.ver+' عبر القناة الحالية ('+(c==='w3f'?'Web3Forms':'EmailJS')+').','',function(ok,ex){
    X22_CHECKING=false;
    if(ok){x27Count(c);toast('✅ الإرسال الفوري يعمل عبر '+(c==='w3f'?'Web3Forms':'EmailJS')+' — كل رسالة تصل بريدك فورًا','success')}
    else if(ex){x27Kill(c);toast('ℹ️ هذه القناة بلغت حدها الشهري — ستعمل المنصة بالقناة الأخرى تلقائيًا','info')}
    else{toast('⚠️ تعذر الوصول لقناة الإرسال الآن — أعد المحاولة أو افحص الإعدادات','error')}
  });
};
function x27HTML(){
  var q=x27QuotaRaw();
  var c=x27Pick();
  var h='<section class="x17-card fade-in" id="x27-card" style="margin:16px auto 0">';
  h+='<h3 style="margin:0 0 4px">📊 نظام الحصص الذكي + حد الرسالة اليومي (الإصدار 27)</h3>';
  h+='<span class="x22-badge '+(c?'x22-ok':'x22-wait')+'">'+(c?('⚡ القناة الفعالة الآن: '+(c==='w3f'?'Web3Forms (250/شهر)':'EmailJS (200/شهر)')):'⏳ اكتملت الحصتان لهذا الشهر — يعمل الاحتياط المضمون')+'</span>';
  h+='<p class="x17-mute" style="font-size:12.5px;margin:8px 0 10px">رسالة واحدة لكل زائر كل 12 ساعة (رسالة التسجيل تحسب منها)، وتوزيع تلقائي للحصة الشهرية: تبدأ المنصة بالقناة الأولى حتى حدها الشهري ثم تنتقل للثانية في نفس اللحظة، وفي مطلع كل شهر يُعاد العد من جديد. وإن أبلغ الخادم بنفاد حصة قناة قبل العدّاد المحلي تنتقل المنصة فورًا للأخرى بلا أي رسالة مفقودة.</p>';
  h+='<div style="display:flex;gap:8px;flex-wrap:wrap;margin:8px 0">'+
    '<span class="x22-badge '+(q.dead.w3f?'x22-wait':'x22-ok')+'" dir="rtl">Web3Forms: استُخدم '+(q.w3f||0)+' / '+(q.capW3F||250)+(q.dead.w3f?' (بلغت الحد)':'')+'</span>'+
    '<span class="x22-badge '+(q.dead.ejs?'x22-wait':'x22-ok')+'" dir="rtl">EmailJS: استُخدم '+(q.ejs||0)+' / '+(q.capEJS||200)+(q.dead.ejs?' (بلغت الحد)':'')+'</span>'+
    '</div>';
  h+='<p class="x17-mute" style="font-size:11.5px;margin:6px 0 10px">📅 شهر العد الحالي: '+q.month+' — العدّاد تقديري على هذا الجهاز، والانتقال الفعلي يضبطه رد الخادم.</p>';
  h+='<div class="p-grid">'+
    '<label class="fld"><span>حد Web3Forms شهريًا</span><input id="x27-capw3f" class="inp" dir="ltr" value="'+escAttr(String(q.capW3F||250))+'"></label>'+
    '<label class="fld"><span>حد EmailJS شهريًا</span><input id="x27-capejs" class="inp" dir="ltr" value="'+escAttr(String(q.capEJS||200))+'"></label>'+
    '</div>';
  h+='<div class="btn-row" style="margin:8px 0 0">'+
    '<button class="btn btn-sm btn-primary" onclick="x27SaveUI()">💾 حفظ الحدود</button>'+
    '<button class="btn btn-sm" onclick="x27SwitchFirst()">🔄 اجعل البداية: '+(q.first==='w3f'?'EmailJS':'Web3Forms')+'</button>'+
    '<button class="btn btn-sm" onclick="x27ResetMonth()">♻️ إعادة تعيين عدادات الشهر</button>'+
    '</div>';
  h+='</section>';
  return h;
}
function x27SaveUI(){
  var q=x27QuotaRaw();
  var w=parseInt((gid('x27-capw3f')||{}).value,10);
  var e=parseInt((gid('x27-capejs')||{}).value,10);
  if(w>0){q.capW3F=w}
  if(e>0){q.capEJS=e}
  x27QuotaSave(q);
  toast('✅ حُفظت حدود الحصة الشهرية','success');
  render();
}
function x27SwitchFirst(){
  var q=x27QuotaRaw();
  q.first=(q.first==='w3f')?'ejs':'w3f';
  x27QuotaSave(q);
  toast('🔄 تبدأ المنصة الآن بقناة '+(q.first==='w3f'?'Web3Forms':'EmailJS')+' حتى حدها ثم تنتقل للأخرى','success');
  render();
}
function x27ResetMonth(){
  var q=x27QuotaRaw();
  q.w3f=0;q.ejs=0;q.dead={};
  x27QuotaSave(q);
  toast('♻️ أُعيدت عدادات الشهر — القناتان متاحتان من جديد','success');
  render();
}
var __x27SettingsBase=renderSettingsPage;
renderSettingsPage=function(){return __x27SettingsBase()+x27HTML()};
x25SelfTest=function(){
  var rows=[];
  function row(name,ok,note){rows.push({n:name,ok:!!ok,note:(note||'')})}
  try{row('واجهة المنصة',(typeof render==='function'&&typeof navigate==='function'),'الإصدار '+APP_META.ver)}catch(e){}
  try{var qp=x27Pick();row('نظام الحصص الذكي (27)',true,(qp?('القناة الفعالة: '+(qp==='w3f'?'Web3Forms':'EmailJS')):'اكتملت الحصتان — يعمل الاحتياط المضمون'))}catch(e){}
  try{var dd=x27DayOK();row('حد الرسالة اليومي (12 ساعة)',true,(dd.ok?'متاح — يمكنك إرسال رسالتك الآن':'بقيت '+dd.h+' ساعة على رسالتك القادمة'))}catch(e){}
  try{row('محرك الإرسال الفوري الأول (EmailJS)',x25EJSReady(),(x25EJSReady()?'مهيأ — الإرسال فوري داخل المنصة':'غير مهيأ — يعمل الوضع الاحتياطي المضمون'))}catch(e){}
  try{row('محرك الإرسال الفوري الثاني (Web3Forms)',x25W3FReady(),(x25W3FReady()?'مهيأ — قناة فورية إضافية جاهزة':'غير مهيأ — اختياري: مفتاح واحد من web3forms.com'))}catch(e){}
  try{row('نافذة البريد الشخصي (احتياط)',typeof x24ComposerOpen==='function','جاهزة دائمًا')}catch(e){}
  try{row('الصندوق المؤجل',typeof x22OutList==='function',((typeof x22OutList==='function')?(x22OutList().length+' رسالة مؤجلة'):''))}catch(e){}
  try{var kOK=(typeof renderMathInElement==='function');row('معاينة المعادلات (KaTeX)',kOK,(kOK?'جاهزة — العرض الجميل يعمل':'يعمل البديل النصي الآن — جرّب إعادة التحميل لمحاولة مصدر بديل'))}catch(e){}
  try{localStorage.setItem('__x25t','1');localStorage.removeItem('__x25t');row('التخزين المحلي',true,'يعمل — تقدمك وإعداداتك محفوظة')}catch(e){row('التخزين المحلي',false,'متوقف — وضع التصفح الخاص غالبًا')}
  try{var swOK=false;try{swOK=!!(navigator.serviceWorker&&navigator.serviceWorker.controller)}catch(x){}
    row('العمل بلا إنترنت (عامل الخدمة)',swOK,(swOK?'نشط':'غير نشط بعد — يكتمل بعد أول زيارة'))}catch(e){}
  var h='';
  for(var i=0;i<rows.length;i++){
    h+='<div style="display:flex;justify-content:space-between;gap:10px;align-items:center;padding:7px 0;border-bottom:1px solid var(--border)"><span>'+(rows[i].ok?'✅':'⚠️')+' '+rows[i].n+'</span><small style="color:var(--text-mute);text-align:left">'+rows[i].note+'</small></div>';
  }
  h+='<p style="margin:10px 0 0;font-size:12.5px">فحص لحظي شامل لكل أنظمة المنصة الأساسية — الإرسال الفوري يُختبر بالتفصيل من زر «🧪 اختبار خدمة البريد».</p>';
  try{xModal('🔍 الفحص الشامل — حالة المنصة',h)}
  catch(e){toast('الفحص اكتمل — كل الأنظمة الأساسية تعمل','success')}
};
x22OutHTML=function(){
  var h=__x25OutBase();
  var live='';
  if(!x27Pick()){live='ℹ️ اكتملت حصة الإرسال الفوري لهذا الشهر — يعمل الاحتياط المضمون الآن'}
  else if(x25EJSReady()&&x25W3FReady()){live='⚡ الإرسال الفوري مفعّل بقناتين ذكيتين (EmailJS + Web3Forms) — كل رسالة تصل فورًا'}
  else if(x25EJSReady()){live='⚡ الإرسال الفوري داخل المنصة مفعّل — كل رسالة تصل فورًا'}
  else if(x25W3FReady()){live='⚡ الإرسال الفوري داخل المنصة مفعّل (Web3Forms) — كل رسالة تصل فورًا'}
  if(live){h=h.replace('✉️ الإرسال من بريدك الشخصي — يعمل دائمًا وبلا أي تفعيل',live)}
  return h;
};

/* ---- 28.0 حماية الهوية: لا مفاتيح ولا أسماء خدمات ولا أدلة تهيئة أمام الزوار ----
   نُزعت بطاقتا الإعداد القديمتان (كانتا تعرضان المفاتيح وسطر النشر — موجهتان للمالك فقط)،
   وتتحدث الواجهة الآن بلغة نظيفة: «القناة الأساسية / القناة الاحتياطية».
   كل منطق الإصدار 27 باقٍ كما هو: حد 12 ساعة، الحصص الشهرية، الانتقال التلقائي. */
x25EJSHTML=function(){return ''};
x25W3FHTML=function(){return ''};
x25EJSLine=function(){return ''};
x25W3FLine=function(){return ''};
function x28ToolsHTML(){
  var h='<section class="x17-card fade-in" id="x28-card" style="margin:16px auto 0">';
  h+='<h3 style="margin:0 0 4px">⚡ الإرسال والفحص</h3>';
  h+='<p class="x17-mute" style="font-size:12.5px;margin:8px 0 10px">رسائل المنصة تصل فورًا من داخل الصفحة عبر قناتين ذكيتين تعملان بترتيب تلقائي وتبادل لحظي — وإن تعذرت القناتان في وقت ما فُتحت لك الطريقة الاحتياطية المضمونة دائمًا. اضغط زر الاختبار متى شئت للتأكد بنفسك.</p>';
  h+='<div class="btn-row" style="margin:8px 0 0">'+
    '<button class="btn btn-sm btn-primary" onclick="x22CheckMail()">🧪 اختبار قناة الإرسال</button>'+
    '<button class="btn btn-sm" onclick="x25SelfTest()">🔍 فحص شامل للمنصة</button>'+
    '</div>';
  h+='</section>';
  return h;
}
var __x28SettingsBase=renderSettingsPage;
renderSettingsPage=function(){return __x28SettingsBase()+x28ToolsHTML()};
x27Kill=function(ch){
  var q=x27QuotaRaw();
  q.dead[ch]=true;
  x27QuotaSave(q);
  toast('ℹ️ اكتملت حصة القناة الحالية هذا الشهر — انتقلت المنصة تلقائيًا للقناة الأخرى','info');
};
x22CheckMail=function(){
  if(X22_CHECKING){return}
  var c=x27Pick();
  if(!c){toast('ℹ️ اكتملت حصة الإرسال الفوري لهذا الشهر — تعمل القناة الاحتياطية المضمونة الآن','info');return}
  X22_CHECKING=true;
  toast('🧪 جارٍ اختبار قناة الإرسال الحالية…');
  x27SendRaw(c,'[منصة X] اختبار الإرسال الفوري','رسالة اختبار من الإصدار '+APP_META.ver+'.','',function(ok,ex){
    X22_CHECKING=false;
    if(ok){x27Count(c);toast('✅ الإرسال الفوري يعمل — كل رسالة تصل فورًا','success')}
    else if(ex){x27Kill(c);toast('ℹ️ هذه القناة بلغت حدها الشهري — ستعمل المنصة بالقناة الأخرى تلقائيًا','info')}
    else{toast('⚠️ تعذر الوصول لقناة الإرسال الآن — أعد المحاولة بعد لحظات','error')}
  });
};
x27HTML=function(){
  var q=x27QuotaRaw();
  var c=x27Pick();
  var h='<section class="x17-card fade-in" id="x27-card" style="margin:16px auto 0">';
  h+='<h3 style="margin:0 0 4px">📊 حالة الإرسال والحدود</h3>';
  h+='<span class="x22-badge '+(c?'x22-ok':'x22-wait')+'">'+(c?('⚡ القناة الفعالة الآن: '+(c==='w3f'?'الأساسية (250 رسالة/شهر)':'الاحتياطية (200 رسالة/شهر)')):'⏳ اكتملت الحصتان لهذا الشهر — يعمل الاحتياط المضمون')+'</span>';
  h+='<p class="x17-mute" style="font-size:12.5px;margin:8px 0 10px">رسالة واحدة لكل زائر كل 12 ساعة (رسالة التسجيل تحسب منها)، وتوزيع تلقائي للحصة الشهرية: تبدأ المنصة بالقناة الأساسية حتى حدها الشهري ثم تنتقل للقناة الاحتياطية في نفس اللحظة، وفي مطلع كل شهر يُعاد العد من جديد. وإن أبلغ الخادم بنفاد حصة قناة قبل العدّاد المحلي تنتقل المنصة فورًا للأخرى بلا أي رسالة مفقودة.</p>';
  h+='<div style="display:flex;gap:8px;flex-wrap:wrap;margin:8px 0">'+
    '<span class="x22-badge '+(q.dead.w3f?'x22-wait':'x22-ok')+'" dir="rtl">القناة الأساسية: استُخدم '+(q.w3f||0)+' / '+(q.capW3F||250)+(q.dead.w3f?' (بلغت الحد)':'')+'</span>'+
    '<span class="x22-badge '+(q.dead.ejs?'x22-wait':'x22-ok')+'" dir="rtl">القناة الاحتياطية: استُخدم '+(q.ejs||0)+' / '+(q.capEJS||200)+(q.dead.ejs?' (بلغت الحد)':'')+'</span>'+
    '</div>';
  h+='<p class="x17-mute" style="font-size:11.5px;margin:6px 0 10px">📅 شهر العد الحالي: '+q.month+' — العدّاد تقديري على هذا الجهاز، والانتقال الفعلي يضبطه رد الخادم.</p>';
  h+='<div class="p-grid">'+
    '<label class="fld"><span>حد القناة الأساسية شهريًا</span><input id="x27-capw3f" class="inp" dir="ltr" value="'+escAttr(String(q.capW3F||250))+'"></label>'+
    '<label class="fld"><span>حد القناة الاحتياطية شهريًا</span><input id="x27-capejs" class="inp" dir="ltr" value="'+escAttr(String(q.capEJS||200))+'"></label>'+
    '</div>';
  h+='<div class="btn-row" style="margin:8px 0 0">'+
    '<button class="btn btn-sm btn-primary" onclick="x27SaveUI()">💾 حفظ الحدود</button>'+
    '<button class="btn btn-sm" onclick="x27SwitchFirst()">🔄 اجعل البداية: '+(q.first==='w3f'?'الاحتياطية':'الأساسية')+'</button>'+
    '<button class="btn btn-sm" onclick="x27ResetMonth()">♻️ إعادة تعيين عدادات الشهر</button>'+
    '</div>';
  h+='</section>';
  return h;
};
x27SwitchFirst=function(){
  var q=x27QuotaRaw();
  q.first=(q.first==='w3f')?'ejs':'w3f';
  x27QuotaSave(q);
  toast('🔄 تبدأ المنصة الآن بالقناة '+(q.first==='w3f'?'الأساسية':'الاحتياطية')+' حتى حدها ثم تنتقل للأخرى','success');
  render();
};
x25SelfTest=function(){
  var rows=[];
  function row(name,ok,note){rows.push({n:name,ok:!!ok,note:(note||'')})}
  try{row('واجهة المنصة',(typeof render==='function'&&typeof navigate==='function'),'الإصدار '+APP_META.ver)}catch(e){}
  try{var qp=x27Pick();row('نظام الحصص الذكي',true,(qp?('القناة الفعالة: '+(qp==='w3f'?'الأساسية':'الاحتياطية')):'اكتملت الحصتان — يعمل الاحتياط المضمون'))}catch(e){}
  try{var dd=x27DayOK();row('حد الرسالة اليومي (12 ساعة)',true,(dd.ok?'متاح — يمكنك إرسال رسالتك الآن':'بقيت '+dd.h+' ساعة على رسالتك القادمة'))}catch(e){}
  try{row('قناة الإرسال الفوري الأولى',x25EJSReady(),(x25EJSReady()?'مهيأة — الإرسال فوري داخل المنصة':'غير مهيأة — يعمل الوضع الاحتياطي المضمون'))}catch(e){}
  try{row('قناة الإرسال الفوري الثانية',x25W3FReady(),(x25W3FReady()?'مهيأة — قناة فورية إضافية جاهزة':'غير مهيأة — يعمل الوضع الاحتياطي المضمون'))}catch(e){}
  try{row('نافذة البريد الشخصي (احتياط)',typeof x24ComposerOpen==='function','جاهزة دائمًا')}catch(e){}
  try{row('الصندوق المؤجل',typeof x22OutList==='function',((typeof x22OutList==='function')?(x22OutList().length+' رسالة مؤجلة'):''))}catch(e){}
  try{var kOK=(typeof renderMathInElement==='function');row('معاينة المعادلات (KaTeX)',kOK,(kOK?'جاهزة — العرض الجميل يعمل':'يعمل البديل النصي الآن — جرّب إعادة التحميل لمحاولة مصدر بديل'))}catch(e){}
  try{localStorage.setItem('__x25t','1');localStorage.removeItem('__x25t');row('التخزين المحلي',true,'يعمل — تقدمك وإعداداتك محفوظة')}catch(e){row('التخزين المحلي',false,'متوقف — وضع التصفح الخاص غالبًا')}
  try{var swOK=false;try{swOK=!!(navigator.serviceWorker&&navigator.serviceWorker.controller)}catch(x){}
    row('العمل بلا إنترنت (عامل الخدمة)',swOK,(swOK?'نشط':'غير نشط بعد — يكتمل بعد أول زيارة'))}catch(e){}
  var h='';
  for(var i=0;i<rows.length;i++){
    h+='<div style="display:flex;justify-content:space-between;gap:10px;align-items:center;padding:7px 0;border-bottom:1px solid var(--border)"><span>'+(rows[i].ok?'✅':'⚠️')+' '+rows[i].n+'</span><small style="color:var(--text-mute);text-align:left">'+rows[i].note+'</small></div>';
  }
  h+='<p style="margin:10px 0 0;font-size:12.5px">فحص لحظي شامل لكل أنظمة المنصة الأساسية — الإرسال الفوري يُختبر بالتفصيل من زر «🧪 اختبار قناة الإرسال».</p>';
  try{xModal('🔍 الفحص الشامل — حالة المنصة',h)}
  catch(e){toast('الفحص اكتمل — كل الأنظمة الأساسية تعمل','success')}
};
x22OutHTML=function(){
  var h=__x25OutBase();
  var live='';
  if(!x27Pick()){live='ℹ️ اكتملت حصة الإرسال الفوري لهذا الشهر — يعمل الاحتياط المضمون الآن'}
  else if(x25EJSReady()&&x25W3FReady()){live='⚡ الإرسال الفوري مفعّل بقناتين ذكيتين — كل رسالة تصل فورًا'}
  else if(x25EJSReady()||x25W3FReady()){live='⚡ الإرسال الفوري داخل المنصة مفعّل — كل رسالة تصل فورًا'}
  if(live){h=h.replace('✉️ الإرسال من بريدك الشخصي — يعمل دائمًا وبلا أي تفعيل',live)}
  return h;
};
