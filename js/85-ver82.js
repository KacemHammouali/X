/* ===================== طبقة 82.0 — قوانين حصينة + خصوصية كاملة + تصميم احترافي + تصحيح النصوص ===================== */
/* 82.أ القوانين الحصينة */
function x82TexFix(tex){
  var t=''+tex;
  try{
    if(t.indexOf('\\begin{')<0&&t.indexOf('\\\\')>=0){t=t.replace(/\\\\/g,'\\qquad ')}
  }catch(e0){}
  return t;
}
var __x82MB=mathBlock;
mathBlock=function(tex){try{return __x82MB(x82TexFix(tex))}catch(e1){return __x82MB(tex)}};
/* 82.أ1 تحسين البديل المقروء */
var __x82TF=texFallback;
texFallback=function(s){
  var t=''+s;
  try{
    t=t.replace(/\\\\/g,'   ');
    t=t.replace(/\\;/g,' ').replace(/\\:/g,' ').replace(/\\,/g,' ').replace(/\\!/g,'').replace(/\\ /g,' ');
  }catch(e0){}
  return __x82TF(t);
};
/* 82.أ2 المكنس */
function x82LawSweep(){
  try{
    var app=document.getElementById('app');if(!app)return;
    var els=app.querySelectorAll('.math-block');
    if(!els||!els.length)return;
    for(var i=0;i<els.length;i++){
      var el=els[i],k=null,err=null,raw,tx;
      try{k=el.querySelector('.katex')}catch(e0){k=null}
      try{err=el.querySelector('.katex-error')}catch(e1){err=null}
      if(k&&!err){continue}
      raw=''+(el.textContent||'');
      if(raw.indexOf('$$')>=0||raw.indexOf('\\frac')>=0||raw.indexOf('\\longrightarrow')>=0||raw.indexOf('\\longmapsto')>=0||raw.indexOf('\\mathbb')>=0||raw.indexOf('\\begin')>=0||raw.indexOf('\\sqrt')>=0||raw.indexOf('\\overrightarrow')>=0){
        try{tx=el.getAttribute('data-tex')}catch(e2){tx=null}
        if(!tx){tx=raw.replace(/\$\$/g,'')}
        try{el.textContent=texFallback(tx);var cn=''+(el.className||'');if(cn.indexOf('math-fallback')<0){el.className=cn+' math-fallback'}el.setAttribute('data-done','1')}catch(e3){}
      }
    }
  }catch(e4){}
}
/* 82.أ3 موظف المعادلات الجديد */
var x82TSTo=null,x82KATries=0,x82Retry=null;
function x82TSRun(){
  var app=document.getElementById('app');if(!app)return;
  if(typeof renderMathInElement==='function'){
    try{KAT=true}catch(eK0){}
    try{renderMathInElement(app,{delimiters:[{left:'$$',right:'$$',display:true},{left:'\\[',right:'\\]',display:true},{left:'\\(',right:'\\)',display:false}],throwOnError:false})}catch(e0){}
    try{x82LawSweep()}catch(e1){}
    return;
  }
  if(x82KATries<5){x82KATries++;x82Retry=setTimeout(function(){x82Retry=null;try{typesetApp()}catch(eR){}},900);return}
  try{KAT=false}catch(eK1){}
  try{x82LawSweep()}catch(e2){}
}
typesetApp=function(){
  try{
    if(x82TSTo){return}
    x82TSTo=setTimeout(function(){x82TSTo=null;try{x82TSRun()}catch(e0){}},60)
  }catch(e1){try{x82TSRun()}catch(e2){}}
};
/* 82.ب تصحيح النصوص */
var X82TXT=[[/حقيقى/g,'حقيقي'],[/الذى/g,'الذي'],[/التى/g,'التي'],[/هذة/g,'هذه']];
function x82TxtNode(n,depth){
  if(!n||depth>12)return 0;
  var c=0,i;
  if(n.nodeType===3){
    var t=n.nodeValue;
    if(t&&t.length>2){
      var o=t;
      for(i=0;i<X82TXT.length;i++){try{o=o.replace(X82TXT[i][0],X82TXT[i][1])}catch(e){}}
      if(o!==t){try{n.nodeValue=o;c=1}catch(e2){}}
    }
    return c;
  }
  if(n.nodeType!==1)return c;
  var tn=(''+(n.nodeName||'')).toUpperCase();
  if(tn==='SCRIPT'||tn==='STYLE'||tn==='TEXTAREA'||tn==='INPUT')return c;
  var kids=n.childNodes;
  if(kids){for(i=0;i<kids.length;i++){c+=x82TxtNode(kids[i],depth+1)}}
  return c;
}
function x82TextSweep(){try{x82TxtNode(document.getElementById('app'),0)}catch(e){}}
/* 82.ج سياسة الخصوصية الكاملة */
var __x82Doc=xShowDoc;
xShowDoc=function(which){
  if(which==='privacy'){
    var P=
     '<h4>١) ما الذي نجمعه؟</h4>'+
     '<ul><li><b>بيانات الحساب:</b> البريد الإلكتروني (متحقق منه)، الاسم واللقب، السنة الدراسية والشعبة، وما تدخله طوعًا: سنة الميلاد والصورة الشخصية.</li>'+
     '<li><b>بيانات التقدم:</b> الدروس التي بدأتها وأكملتها، نتائج اختباراتك، محفوظاتك، وإعدادات تخصيصك.</li></ul>'+
     '<h4>٢) أين تُخزَّن؟</h4>'+
     '<ul><li><b>على جهازك:</b> إن لم تسجّل حسابًا، كل بياناتك تُحفظ داخل تخزين المتصفح على جهازك أنت وحده — لا تغادر الجهاز أبدًا.</li>'+
     '<li><b>على الخادم:</b> إذا سجّلت حسابًا، تُخزن بيانات حسابك وتقدمك لدى مزوّد الخدمة Supabase (خارج الجزائر) في جداول مخصصة، والصورة الشخصية في مخزن إضافي محمي لأصحابك حدهم.</li>'+
     '<li><b>كلمات المرور:</b> لا نجمعها ولا نراها إطلاقًا — الدخول برمز تحقق مؤقت يصل إلى بريدك ويُستعمل مرة واحدة.</li></ul>'+
     '<h4>٣) كم نبقيها؟ (مدة الاحتفاظ)</h4>'+
     '<ul><li>تبقى بياناتك ما دام حسابك نشطًا وتستعمل المنصة.</li>'+
     '<li><b>عند طلب الحذف:</b> بيانات جهازك تُمسح فورًا، وبيانات الخادم تُحذف نهائيًا في أقرب وقت وبحد أقصى <b>30 يومًا</b> من تنفيذ طلبك من طرف الإدارة، ويشمل الحذف بيانات التقدم والصورة كلها.</li>'+
     '<li>إذا بقي الحساب مهجورًا (سنة فأكثر بلا أي نشاط)، يحق للإدارة حذفه بعد إشعار بريدي مسبق.</li></ul>'+
     '<h4>٤) حقوقك</h4>'+
     '<ul><li><b>الوصول والتعديل:</b> من صفحة ملفك تعدّل اسمك وبريدك وسنتك وشعبتك وصورتك متى شئت.</li>'+
     '<li><b>الحذف:</b> زر «حذف الحساب» في صفحة ملفك يرسل طلبًا فوريًا للإدارة، ويشمل الحذف كل بياناتك وتقدمك.</li>'+
     '<li><b>سحب الموافقة:</b> يمكنك التوقف عن استعمال الحساب وطلب حذفه في أي وقت دون أي تبرير.</li>'+
     '<li><b>نسخة من بياناتك:</b> يحق لك طلبها بمراسلة إدارة المنصة وتصلك خلال 30 يومًا.</li></ul>'+
     '<h4>٥) ما لا نفعله أبدًا</h4>'+
     '<ul><li>لا نشارك بياناتك مع أي طرف ثالث، ولا نبيعها، ولا نستعملها في إعلانات.</li>'+
     '<li>لا نجمع كلمات المرور ولا رموز التحقق ولا محتوى بريدك.</li>'+
     '<li>إشعار التسجيل الذي يصل مؤسسة X.HAK لا يشمل إلا الاسم والمعلومات الدراسية وتاريخ التسجيل.</li></ul>'+
     '<h4>٦) التواصل</h4>'+
     '<p>لأي سؤال عن خصوصيتك أو لطلب حذف بياناتك: راسل إدارة المنصة (مؤسسة X.HAK) من داخل المنصة أو عبر بريدها الرسمي.</li>'+
     '<p class="set-note">آخر تحديث لهذه السياسة: 2026-11-06 — الإصدار '+APP_META.ver+'.</p>';
    try{xModal('🔒 سياسة الخصوصية',P)}catch(eM){}
    return;
  }
  return __x82Doc(which);
};
/* 82.د لمسة التصميم الاحترافية */
try{
  var st82=document.createElement('style');
  st82.id='x82-style';
  st82.textContent=
   'button,.btn,.bnav-btn,.option,.x48-pill,.x48-sech,.x48-gitem{touch-action:manipulation!important;-webkit-user-select:none!important;user-select:none!important}'+
   '.btn{min-height:48px;padding:11px 22px;letter-spacing:.2px}'+
   '.btn:active{transform:scale(.965)}'+
   '.btn:focus-visible{outline:2px solid #35BDF2!important;outline-offset:2px}'+
   '.option{min-height:52px;margin:10px 0;border-radius:14px;font-size:15.5px;line-height:1.6;transition:transform .15s ease,background .2s,border-color .2s}'+
   '.option:active{transform:scale(.985)}'+
   '.option:focus-visible{outline:2px solid #35BDF2!important;outline-offset:2px}'+
   '.bnav-btn{border-radius:15px;transition:color .2s,background .25s,transform .15s}'+
   '.bnav-btn:active{transform:scale(.94)}'+
   '.bnav-btn:focus-visible{outline:2px solid #35BDF2!important;outline-offset:2px}'+
   '.bnav-btn.bnav-on{background:linear-gradient(135deg,rgba(53,189,242,.16),rgba(139,108,255,.14))!important;font-weight:800}'+
   '.x48-sech{min-height:58px}'+
   '.x48-sech:focus-visible{outline:2px solid #35BDF2!important;outline-offset:-2px}'+
   '.x48-row{min-height:54px}'+
   '.x48-pill{min-height:40px;border-radius:12px;font-weight:700}'+
   '.x48-pill:focus-visible{outline:2px solid #35BDF2!important;outline-offset:2px}'+
   '.x48-range{accent-color:#35BDF2}'+
   '.x48-sec.open{box-shadow:0 6px 18px rgba(2,10,20,.25)}'+
   'html[data-theme="light"] .x48-sec,html[data-theme="light"] .x48-qcard{background:#ffffff!important;border-color:#E3E9F0!important}'+
   'html[data-theme="light"] .x48-sech .x48-ic{background:#F0F5FB!important;color:#1E7FC4!important}'+
   'html[data-theme="light"] .x48-sech span,html[data-theme="light"] .x48-row span,html[data-theme="light"] .x48-lbl,html[data-theme="light"] .x48-note{color:#5B6B80!important}'+
   'html[data-theme="light"] .x48-sech b,html[data-theme="light"] .x48-row b{color:#172437!important}'+
   '*{scrollbar-width:thin;scrollbar-color:rgba(120,150,190,.35) transparent}'+
   '::-webkit-scrollbar{width:8px;height:8px}'+
   '::-webkit-scrollbar-thumb{background:rgba(120,150,190,.35);border-radius:8px}'+
   '::-webkit-scrollbar-track{background:transparent}'+
   '.lawcard{transition:box-shadow .2s}'+
   '.lawcard:hover{box-shadow:0 6px 16px rgba(2,10,20,.18)}';
  var hd82=document.head||document.documentElement;
  if(hd82&&hd82.appendChild){hd82.appendChild(st82)}
}catch(eSt82){}
/* 82.هـ غلاف render */
var __x82R=render;
render=function(){
  try{__x82R()}catch(e0){}
  try{x82TextSweep()}catch(e1){}
  try{setTimeout(function(){try{x82LawSweep()}catch(e2){}try{x82TextSweep()}catch(e3){}},350)}catch(e4){}
};
/* 82.و هوية الإصدار */
APP_META.ver='82.0';APP_META.date='2026-11-06';APP_META.lastUpdate='2026-11-06';
APP_META.notes='الإصدار 82 — الاحترافية الكاملة: قوانين الدروس تعمل دائمًا حتى مع أعقد المعادلات، سياسة خصوصية كاملة بمدة الاحتفاظ ومكان التخزين وحقوق الحذف، لمسة تصميم احترافية مقاسة بالميكروسكوب، وتصحيح تلقائي للأغلاط في النصوص.';
try{APP_META.changelog.unshift({ver:'82.0',date:'2026-11-06',notes:'قوانين حصينة تعمل دائمًا + سياسة خصوصية كاملة + لمسة تصميم احترافية + تصحيح النصوص + README جديد.'})}catch(eV1){}
