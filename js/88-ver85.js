/* ===================== طبقة 85.0 — القوانين تُرسم فورًا من الجذر + ملاحظات الإدارة حصرًا + تصميم بروح التطبيقات العالمية ===================== */
/* 85.أ الرسم المباشر: mathBlock نفسها ترسم المعادلة وقت بناء الصفحة عبر KaTeX المضمّنة — بلا مؤقتات وبلا مسارات؛ بديل مقروء نظيف عند أي فشل. لا كود خام أبدًا */
var __x85FT=(typeof x83FixTex==='function')?x83FixTex:function(t){return t};
var __x85MB=mathBlock;
mathBlock=function(tex){
  var fixed=''+tex;
  try{fixed=__x85FT(fixed)}catch(eF){}
  try{
    if(typeof katex!=='undefined'&&katex&&katex.renderToString){
      return '<div class="math-block" data-tex="'+escAttr(fixed)+'">'+katex.renderToString(fixed,{displayMode:true,throwOnError:true,strict:false,trust:false})+'</div>';
    }
  }catch(e0){}
  try{
    return '<div class="math-block math-fallback" data-done="1" data-tex="'+escAttr(fixed)+'">'+texFallback(fixed)+'</div>';
  }catch(e1){}
  try{return __x85MB(tex)}catch(e2){}
  return '';
};
/* 85.ب حزام الأمان: أي معادلة خام متبقية في أي مكان تُنظف فورًا */
function x85RawSweep(){
  try{
    var els=document.querySelectorAll('.math-block');
    if(!els||!els.length){return}
    for(var i=0;i<els.length;i++){
      var el=els[i];
      try{
        if(el.getAttribute('data-done')){continue}
        var k=null;
        try{k=el.querySelector('.katex')}catch(e0){k=null}
        if(k){continue}
        var raw=''+(el.textContent||'');
        var bs=String.fromCharCode(92);
        if(raw.indexOf('$$')<0&&raw.indexOf(bs)<0){continue}
        var tx=''+(el.getAttribute('data-tex')||'');
        if(!tx){tx=raw.split('$$').join('')}
        el.textContent=texFallback(tx);
        el.setAttribute('data-done','1');
        var cn=''+(el.className||'');
        if(cn.indexOf('math-fallback')<0){el.className=cn+' math-fallback'}
      }catch(e1){}
    }
  }catch(e2){}
}
/* 85.ج ملاحظات الإدارة الداخلية: للمالك حصرًا */
function x85Own(){try{return ((typeof x54OwnerOk==='function')&&x54OwnerOk())}catch(e){return false}}
function x85NoteSweep(){
  try{
    if(x85Own()){return}
    var ms=['تُرسل رسالتك مباشرة إلى بريد إدارة المنصة','سيصل ردنا إلى بريد حسابك المسجل','حماية حسابك: الدخول يتم برمز','الأجهزة والجلسات النشطة','تُضاف تلقائيًا عند إطلاق هذه الميزات','بياناتك محفوظة على جهازك'];
    var els=document.querySelectorAll('.ct-note,.set-note,.x48-note');
    if(!els||!els.length){return}
    for(var i=0;i<els.length;i++){
      var t=''+(els[i].textContent||'');
      for(var j=0;j<ms.length;j++){
        if(t.indexOf(ms[j])>=0){try{els[i].style.display='none'}catch(e1){}break}
      }
    }
  }catch(e2){}
}
/* 85.د التصميم بروح التطبيقات العالمية */
try{
  var st85=document.createElement('style');st85.id='x85-style';
  st85.textContent=
   'body{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}'+
   'h1,h2,h3,h4{letter-spacing:-.2px}'+
   '.bnav{border-radius:22px 22px 0 0!important;background:rgba(8,18,32,.92)!important;-webkit-backdrop-filter:blur(16px)!important;backdrop-filter:blur(16px)!important;border-top:1px solid rgba(255,255,255,.07)!important;box-shadow:0 -8px 28px rgba(2,10,25,.28)!important}'+
   'html[data-theme=light] .bnav{background:rgba(255,255,255,.95)!important;border-top:1px solid rgba(15,35,60,.07)!important;box-shadow:0 -8px 26px rgba(20,40,80,.10)!important}'+
   '.bnav-btn{border-radius:15px!important;position:relative}'+
   '.bnav-btn.bnav-on{background:linear-gradient(135deg,rgba(53,189,242,.20),rgba(139,108,255,.16))!important}'+
   '.bnav-btn.bnav-on:before{content:OCTO;position:absolute;top:4px;left:50%;transform:translateX(-50%);width:18px;height:3px;border-radius:3px;background:linear-gradient(90deg,#35BDF2,#8B6CFF)}'+
   '.bnav-btn span{font-weight:700}'+
   '.lawcard,.definition,.note-box,.example,.exer,.warning-box,.summary-box,.method,.x48-sec,.kp-box,.auth-card,.cmap,.tblwrap,.dtable{border-radius:18px!important}'+
   '.lawcard,.definition,.note-box,.example,.exer,.warning-box,.summary-box,.method,.x48-sec,.kp-box,.auth-card{box-shadow:0 2px 10px rgba(2,12,26,.10)!important;border:1px solid rgba(120,150,190,.10)!important}'+
   '.btn{border-radius:14px!important;font-weight:700!important}'+
   '.btn-primary{background:linear-gradient(135deg,#4E8DF2,#35BDF2)!important;box-shadow:0 4px 14px rgba(53,150,242,.30)!important;border:none!important}'+
   '.inp{border-radius:12px!important}'+
   '#readbar{background:linear-gradient(90deg,#35BDF2,#8B6CFF)!important}'+
   '::selection{background:rgba(53,189,242,.30)}'+
   ':focus-visible{outline:2px solid rgba(53,189,242,.70)!important;outline-offset:2px}'+
   '@media(min-width:900px){'+
   '.bnav{left:50%!important;right:auto!important;transform:translateX(-50%)!important;bottom:14px!important;width:540px!important;max-width:calc(100% - 40px)!important;border-radius:24px!important;border:1px solid rgba(255,255,255,.08)!important;box-shadow:0 14px 40px rgba(2,12,30,.30)!important}'+
   'html[data-theme=light] .bnav{border:1px solid rgba(15,35,60,.08)!important}'+
   '.x69-backbtn{bottom:96px!important}'+
   '.x41-back{bottom:110px!important}'+
   '#app{max-width:840px!important;margin:0 auto!important}'+
   'body{padding-bottom:120px!important}'+
   '}'+
   '';
  st85.textContent=st85.textContent.split('OCTO').join(String.fromCharCode(39,39));
  (document.head||document.documentElement).appendChild(st85);
}catch(eSt){}
/* 85.هـ هوية الإصدار والتركيب النهائي */
APP_META.ver='85.0';APP_META.date='2026-11-06';APP_META.lastUpdate='2026-11-06';
APP_META.notes='الإصدار 85 — إصلاح عاجل وشامل: القوانين تُرسم فورًا وقت بناء الصفحة عبر مكتبة المعادلات المضمّنة (لا كود خام أبدًا)، ملاحظات الإدارة للمالك حصرًا، وتصميم جديد بروح التطبيقات العالمية: شريط سفلي زجاجي بلمسة تلغرام، بطاقات موحّدة أنيقة، تدرجات إنستقرام للأزرار والتفاصيل، واتساق كامل على شاشات الكمبيوتر.';
try{APP_META.changelog.unshift({ver:'85.0',date:'2026-11-06',notes:'إصلاح عاجل لكل أخطاء 84 (بناء سليم متحقق سطرًا سطرًا + فحص نحوي كامل) + رسم مباشر للقوانين + ملاحظات الإدارة فقط + تصميم عالمي جديد.'})}catch(eV){}
var __x85R=render;
render=function(){
  try{__x85R()}catch(e0){}
  try{setTimeout(function(){try{x85RawSweep()}catch(e1){}try{x85NoteSweep()}catch(e2){}},120)}catch(e3){}
};
setInterval(function(){try{x85RawSweep()}catch(e0){}try{x85NoteSweep()}catch(e1){}},2500);
