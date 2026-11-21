/* ===================== طبقة 82.1 — KaTeX داخل التطبيق: المعادلات تعمل بلا إنترنت دائمًا ===================== */
/* 82.1.أ المكنس المحصّن: أي خطأ أحمر من KaTeX يُستبدل فورًا بنص مقروء نظيف، وأي كود خام يُحوَّل بلا انتظار */
var x821TSTo=null;
function x821LawSweep(){
  try{
    var app=document.getElementById('app');if(!app)return;
    var els=app.querySelectorAll('.math-block');
    if(!els||!els.length)return;
    for(var i=0;i<els.length;i++){
      var el=els[i],err=null,k=null,tx=null,raw,cn;
      try{err=el.querySelector('.katex-error')}catch(e0){err=null}
      try{k=el.querySelector('.katex')}catch(e1){k=null}
      if(err&&!k){
        try{tx=el.getAttribute('data-tex')}catch(e2){tx=null}
        raw=''+(el.textContent||'');
        if(!tx){tx=raw.replace(/\$\$/g,'')}
        try{el.textContent=texFallback(tx);cn=''+(el.className||'');if(cn.indexOf('math-fallback')<0){el.className=cn+' math-fallback'}el.setAttribute('data-done','1')}catch(e3){}
        continue;
      }
      if(k&&!err){continue}
      raw=''+(el.textContent||'');
      if(raw.indexOf('$$')>=0||raw.indexOf('\\frac')>=0||raw.indexOf('\\longrightarrow')>=0||raw.indexOf('\\longmapsto')>=0||raw.indexOf('\\mathbb')>=0||raw.indexOf('\\begin')>=0||raw.indexOf('\\sqrt')>=0||raw.indexOf('\\overrightarrow')>=0||raw.indexOf('\\;')>=0){
        try{tx=el.getAttribute('data-tex')}catch(e4){tx=null}
        if(!tx){tx=raw.replace(/\$\$/g,'')}
        try{el.textContent=texFallback(tx);cn=''+(el.className||'');if(cn.indexOf('math-fallback')<0){el.className=cn+' math-fallback'}el.setAttribute('data-done','1')}catch(e5){}
      }
    }
  }catch(e6){}
}
/* 82.1.ب موظف المعادلات: KaTeX الآن مضمّن داخل الملف فمتاح فورًا؛ إن غاب (حالة نادرة) البديل المقروء فوري بلا انتظار */
function x821TSRun(){
  var app=document.getElementById('app');if(!app)return;
  if(typeof renderMathInElement==='function'){
    try{KAT=true}catch(eK0){}
    try{renderMathInElement(app,{delimiters:[{left:'$$',right:'$$',display:true},{left:'\\[',right:'\\]',display:true},{left:'\\(',right:'\\)',display:false}],throwOnError:false})}catch(e0){}
    try{x821LawSweep()}catch(e1){}
    try{setTimeout(function(){try{x821LawSweep()}catch(e2){}},650)}catch(e3){}
    return;
  }
  try{KAT=false}catch(eK1){}
  try{x821LawSweep()}catch(e2){}
}
typesetApp=function(){
  try{
    if(x821TSTo){return}
    x821TSTo=setTimeout(function(){x821TSTo=null;try{x821TSRun()}catch(e0){}},60);
  }catch(e1){try{x821TSRun()}catch(e2){}}
};
/* 82.1.ج هوية الإصدار */
APP_META.ver='82.1';APP_META.date='2026-11-06';APP_META.lastUpdate='2026-11-06';
APP_META.notes='الإصدار 82.1 — إصلاح جذري للمعادلات: مكتبة KaTeX صارت مضمّنة داخل التطبيق نفسه فتُرسم المعادلات دائمًا حتى بلا إنترنت وبلا أي خادم خارجي، وأي معادلة يفشل رسمها تتحول فورًا إلى نص مقروء نظيف، مع تصحيح عنوان سياسة الخصوصية وملف README من الرموز المشوهة وتصحيح أخطاء لغوية.';
try{APP_META.changelog.unshift({ver:'82.1',date:'2026-11-06',notes:'KaTeX مضمّن داخل التطبيق = معادلات تعمل بلا إنترنت دائمًا + مكنس فوري لأي خطأ + إصلاح رموز الخصوصية وREADME.'})}catch(eV2){}
