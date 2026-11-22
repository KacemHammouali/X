/* ============ الطبقة 108f — الإصدار 109.0: الفحص الحي الصبور — النقطة تتحول أخضر بنفسها ============ */
/* (أ) العلة الجذرية التي رآها المالك صباح 2026-11-22: نقطة قاعدة البيانات حمراء (HTTP 504) رغم أن
       السحابة استيقظت والسكربت يعمل في لوحة Supabase. السبب: الفحص القديم يجرب ثلاث محاولات
       خلال ثانيتين فقط؛ إن كانت السحابة خلال الاستيقاظ (دقيقة إلى دقيقتين) فشلت المحاولات الثلاث
       وبقيت النتيجة الحمراء معروضة كأنها حالها الآن، ولا تتحول أخضر إلا بضغطة إعادة فحص في التوقيت الصحيح.
   (ب) الحل هنا: فحص صبور ينتظر حتى 96 ثانية ويعيد المحاولة كل 4 ثوان، وبمجرد أن تستيقظ السحابة
       تتحول النقطة أخضر تلقائيًا بلا أي ضغطة، مع توست واحد يبشر بالنجاح وعدّاد الانتظار في النص.
   (ج) تثبيت رقم الإصدار 109.0 بعد اكتمال الإقلاع (أسلوب 108e نفسه) — لأن 109-ver104-meta يعيد 104.0.
   (و) كل شيء ES5 داخل try/catch مع سقوط آمن — لا حذف ولا كسر لأي وظيفة قائمة. */
(function(){

/* ---------- 109.أ الفحص الحي الصبور: انتظار حتى 96 ثانية ونقطة خضراء تلقائية ---------- */
var X109F_MAX=24;      /* 24 محاولة × 4 ثوان = 96 ثانية انتظار صبور */
var X109F_GAP=4000;
function x109fSec(t0){
  try{return Math.round((Date.now()-t0)/1000)}catch(e0b){return 0}
}
try{
  var __x109fPaint=x72PaintRest;
  window.__x108fPollActive=false;
  window.x72ProbeRest=function(){
    var k=null;
    try{k=(typeof x66Keys==='function')?x66Keys():null}catch(eK){k=null}
    if(!k||!k.url||!k.anon){
      try{__x109fPaint('bad','لا مفتاح اتصال محفوظًا على هذا الجهاز — جهّز اتصال قاعدة البيانات من الإعدادات')}catch(e1){}
      try{if(window.X72){X72.restState='bad'}}catch(e1b){}
      return;
    }
    if(window.__x108fPollActive){return}         /* فحص جارٍ بالفعل — لا تكرار ولا تشابك */
    window.__x108fPollActive=true;
    var n=0,t0=Date.now();
    function once(){
      n++;
      try{
        __x109fPaint('wait', n===1
          ? 'يجري الآن اتصال حقيقي بجدول الإعلانات…'
          : ('السحابة تستيقظ من السبات — ننتظرها بذاتنا دون أن تضغط شيئًا (انتظار '+x109fSec(t0)+' ثانية، المحاولة '+n+' من '+X109F_MAX+')…'));
      }catch(e2){}
      try{
        fetch(k.url+'/rest/v1/announcements?select=id&limit=1',{headers:{'apikey':k.anon,'Authorization':'Bearer '+k.anon}})
        .then(function(r){
          try{
            if(r&&r.ok){
              window.__x108fPollActive=false;
              var s=x109fSec(t0);
              try{__x109fPaint('ok', n>1
                ? ('✅ استيقظت السحابة — الجدول يقرأ بنجاح (استغرق الاستيقاظ نحو '+s+' ثانية)')
                : 'متصل ويعمل — جدول الإعلانات يقرأ بنجاح')}catch(eOK){}
              try{if(!X72){}}catch(eX0){}
              try{X72.restState='ok'}catch(eX){}
              if(n>1){try{toast('✅ السحابة استيقظت — قاعدة البيانات تعمل الآن','success')}catch(eT0){}}
              return;
            }
            var stt=(r&&r.status)?r.status:0;
            if(n<X109F_MAX){setTimeout(once,X109F_GAP);return}
            window.__x108fPollActive=false;
            if(stt===504||stt===503||stt===502){
              try{__x109fPaint('wait','السحابة تستيقظ (HTTP '+stt+') — انتظرنا '+x109fSec(t0)+' ثانية كاملة: اترك المشروع مفتوحًا في لوحة Supabase واضغط Restore، وتفتح البطاقة فحصًا صبورًا جديدًا كل مرة تدخلها')}catch(eW){}
              try{if(!X72){}}catch(eX1){}
              try{X72.restState='off'}catch(eX2){}
            }else{
              try{__x109fPaint('bad','فشل الاتصال الحقيقي (HTTP '+stt+') — نفّذ سكربت SQL من زر النسخ في هذه البطاقة ثم اضغط إعادة الفحص')}catch(eB){}
              try{if(!X72){}}catch(eX4){}
              try{X72.restState='bad'}catch(eX3){}
            }
          }catch(eP4){window.__x108fPollActive=false}
        })
        .catch(function(){
          try{
            if(n<X109F_MAX){setTimeout(once,X109F_GAP);return}
            window.__x108fPollActive=false;
            try{__x109fPaint('wait','تعذر الوصول لقاعدة البيانات الآن — تحقق من اتصال الإنترنت ثم أعد الفحص')}catch(eP5){}
            try{X72.restState='off'}catch(eX5){}
          }catch(eP7){window.__x108fPollActive=false}
        });
      }catch(eK2){window.__x108fPollActive=false}
    }
    once();
  };
}catch(eDB){}

/* ---------- 109.ج ميث الإقلاع: تثبيت رقم الإصدار 109.0 فوق غلاف 108e ---------- */
var X109_META_DONE=false;
try{
  var __x109Boot=boot;
  boot=function(){
    try{__x109Boot()}catch(eB0){}
    try{
      if(!X109_META_DONE){
        X109_META_DONE=true;
        APP_META.ver='109.0';APP_META.date='2026-11-22';APP_META.lastUpdate='2026-11-22';
      }
    }catch(eB2){}
  };
}catch(e6){}

/* ---------- 109.د الميتاداتا: الإصدار 109.0 ---------- */
APP_META.ver='109.0';APP_META.date='2026-11-22';APP_META.lastUpdate='2026-11-22';
APP_META.notes='الإصدار 109.0 — نهاية «النقطة الحمراء الكاذبة»: الفحص الحي للقنوات صار صبورًا — ينتظر استيقاظ سحابة الحسابات حتى دقيقة ونصف ويعيد المحاولة كل أربع ثوان من نفسيه، وبمجرد أن تستيقظ تتحول النقطة أخضر تلقائيًا بلا أي ضغطة إضافية وبإشعار نجاح، ويذكر النص عدد ثواني الاستيقاظ على الحقيقة. هذا هو الفحص الذي رأيته أحمر (HTTP 504) رغم أن قاعدة بياناتك كانت تعمل: السبب أن القياس القديم كان يحكم في ثانيتين فقط خلال زمن استيقاظ يبلغ دقيقة كاملة.';
try{
  if(!APP_META.changelog||!APP_META.changelog.length||(''+(APP_META.changelog[0]&&APP_META.changelog[0].ver||''))!=='109.0'){
    APP_META.changelog.unshift({ver:'109.0',date:'2026-11-22',notes:'فحص القنوات الصبور: انتظار استيقاظ السحابة حتى 96 ثانية بمحاولات كل 4 ثوان، النقطة تتحول أخضر بنفسها مع إشعار، بلا ضغطة إضافية، ومن دون حكم في ثانيتين'});
  }
}catch(eM109){}
window.fallbackNews18=function(){
  return [{title:'الإصدار 109.0 — نهاية النقطة الحمراء الكاذبة',
    body:'الفحص الحي للقنوات ينتظر استيقاظ السحابة حتى دقيقة ونصف من نفسه ويحول النقطة أخضر تلقائيًا عند نجاح الاتصال بلا أي ضغطة إضافية.',
    date:APP_META.date}];
};
window.x109t={ver:'109.0',patientProbe:true,autoGreen:true,metaPin:true};

})();
