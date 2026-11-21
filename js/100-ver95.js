/* ============ الطبقة 95 — الإصدار 95.0 «إصدار التصفيه النهائية»: معاينة الخلفية فورية + تمييز التبويب على كل النسخ + سهم رجوع أعلى المكتبات + ثلاث نغمات صوت ============ */
try{
(function(){
'use strict';

/* 95.أ CSS */
function x95Style(){
  try{
    var s=document.getElementById('x95style');
    if(!s){
      s=document.createElement('style');
      s.id='x95style';
      s.type='text/css';
      (document.head||document.documentElement).appendChild(s);
    }
    s.textContent=
      '#x95back{display:none;position:fixed;top:calc(12px + env(safe-area-inset-top,0px));left:12px;z-index:1600;width:42px;height:42px;border-radius:14px;border:1px solid rgba(140,190,250,.3);background:linear-gradient(135deg,#2f7ae5,#229ED9);color:#fff;font-size:20px;font-weight:900;font-family:inherit;cursor:pointer;box-shadow:0 6px 16px rgba(34,158,217,.32);align-items:center;justify-content:center;transition:transform .15s ease}'+
      '#x95back:active{transform:scale(.92)}'+
      'html[data-theme="light"] #x95back{background:linear-gradient(135deg,#168EBF,#2f7ae5)}'+
      'body.x95lib #x95back{display:inline-flex!important}'+
      'body.x95lib #x69-back,body.x95lib .x69-backbtn,body.x95lib #x41-back,body.x95lib .x41-back{display:none!important}'+
      '.x95-tone{display:inline-flex;align-items:center;justify-content:center;line-height:1}';
  }catch(e){}
}
x95Style();

/* 95.ب معاينة الخلفية فورية: سمة style المولدة تنكسر بعلامات الاقتباس داخل data-URI
   فنسند القيمة عبر JS بعد فتح النافذة مباشرة + نبضتان مؤجلتان احتياطًا */
function x95FixPv(){
  try{
    var pv=document.getElementById('x48-pv');
    if(!pv){return}
    var css='';
    try{css=(typeof window.x48PvCss==='function')?window.x48PvCss():''}catch(eC){}
    if(css){try{pv.style.background=css}catch(eS1){}}
    try{pv.style.backgroundPosition=((window.X48&&X48.ppos)||'center')}catch(eP1){}
    try{pv.style.backgroundSize='cover'}catch(eP2){}
    try{pv.style.backgroundRepeat='no-repeat'}catch(eP3){}
  }catch(e){}
}
try{
  var __x95PvM=window.x48PvModal;
  if(typeof __x95PvM==='function'){
    window.x48PvModal=function(isImg){
      __x95PvM(isImg);
      x95FixPv();
      try{setTimeout(function(){x95FixPv()},60)}catch(eT1){}
      try{setTimeout(function(){x95FixPv()},250)}catch(eT2){}
    };
  }
}catch(eM1){}

/* 95.ج تمييز تبويب الخلاصة على كل النسخ: تكرار المعرفات (kpt0/kpt1) كان يُفشل المزامنة
   القديمة التي تستهدف النسخة الأولى فقط — هنا نوازن كل العناصر المتطابقة */
function x95TabSyncAll(idx){
  try{
    var bs=document.querySelectorAll('[id="kpt0"],[id="kpt1"]'),i,b,j,want;
    for(i=0;i<bs.length;i++){
      b=bs[i];j=(b.id==='kpt1')?1:0;
      want='kpt'+(j===idx?' kpt-on':'');
      if(b.className!==want){b.className=want}
    }
    var ds=document.querySelectorAll('[id="kpdots"]'),k,s,w;
    for(i=0;i<ds.length;i++){
      s=ds[i].children;
      for(k=0;k<s.length;k++){
        w='kpd'+(k===idx?' kpd-on':'');
        if(s[k].className!==w){s[k].className=w}
      }
    }
  }catch(e){}
}
function x95Content(idx){
  try{
    if(typeof window.x93KpShow==='function'){window.x93KpShow(idx);return}
  }catch(eL){}
  try{
    var boxes=document.querySelectorAll('.kp-box');
    for(var bi=0;bi<boxes.length;bi++){
      var bx=boxes[bi];
      var slides=bx.querySelectorAll('.kp-slide');
      if(slides.length>=2){
        var cn=' '+bx.className+' ';
        cn=cn.replace(/ x90-k0/g,'').replace(/ x90-k1/g,'');
        if(idx===1){if(cn.indexOf(' x92-law ')<0){cn=cn+' x92-law '}}
        else{cn=cn.replace(/ x92-law/g,'')}
        bx.className=cn.replace(/  +/g,' ').replace(/^ +| +$/g,'');
      }
    }
  }catch(eB){}
}
function x95KpShow(i){
  var idx=(i===1)?1:0;
  x95Content(idx);
  x95TabSyncAll(idx);
  var dls=[30,90,200,420,800,1500,2600],q;
  for(q=0;q<dls.length;q++){
    (function(dd){
      setTimeout(function(){
        try{x95TabSyncAll((window.KPI===1)?1:0)}catch(e){}
      },dd);
    })(dls[q]);
  }
}
window.kpTab=function(i){try{x95KpShow(i)}catch(e){}};
window.kpMove=function(dl){try{x95KpShow((((window.KPI||0)+dl)+2)%2)}catch(e){}};
window.kpSync=function(){try{x95KpShow((window.KPI===1)?1:0)}catch(e){}};
window.x90Kp=function(cid,i){try{x95KpShow(i)}catch(e){}};
window.x88KpShow=function(i){try{x95KpShow(i)}catch(e){}};
window.x87KpShow=function(i){try{x95KpShow(i)}catch(e){}};
window.x92KpShow=function(i){try{x95KpShow(i)}catch(e){}};
try{
  document.addEventListener('click',function(e){
    try{
      var t=e.target,g=0;
      while(t&&t.nodeType===1&&g<15){
        if(t.id==='kpt0'){x95KpShow(0);break}
        if(t.id==='kpt1'){x95KpShow(1);break}
        t=t.parentNode;g++;
      }
    }catch(e2){}
  },true);
}catch(eC1){}
function x95Guard(){
  try{
    if(!document.querySelector('.kp-box')){return}
    var idx=(window.KPI===1)?1:0;
    x95TabSyncAll(idx);
  }catch(e){}
}
try{setInterval(function(){x95Guard()},900)}catch(eI1){}
var x95MO=null,x95MOT=0;
function x95Watch(){
  try{
    if(!window.MutationObserver){return}
    if(x95MO){try{x95MO.disconnect()}catch(ed){}}
    x95MO=new window.MutationObserver(function(){
      try{
        if(x95MOT){clearTimeout(x95MOT)}
        x95MOT=setTimeout(function(){x95Guard()},40);
      }catch(em){}
    });
    var bs=document.querySelectorAll('[id="kpt0"],[id="kpt1"]'),i;
    for(i=0;i<bs.length;i++){x95MO.observe(bs[i],{attributes:true,attributeFilter:['class']})}
  }catch(e){}
}
try{setTimeout(function(){x95Watch()},400)}catch(eT3){}
try{setInterval(function(){x95Watch()},4000)}catch(eW2){}

/* 95.د المكتبات (الفيديو/PDF): سهم رجوع أعلى الصفحة مثل الدروس + إخفاء السهم السفلي */
function x95LibSync(){
  try{
    var pg=((window.ROUTE&&ROUTE.page)||'');
    var isLib=(pg==='vidlib'||pg==='pdflib');
    var b=document.body;
    if(!b){return}
    var cls=''+(b.className||'');
    var has=(' '+cls+' ').indexOf(' x95lib ')>=0;
    if(isLib&&!has){b.className=(cls?cls+' ':'')+'x95lib'}
    else if(!isLib&&has){b.className=(' '+cls+' ').split(' x95lib ').join(' ').replace(/^\s+|\s+$/g,'')}
    if(isLib){
      var btn=document.getElementById('x95back');
      if(!btn){
        btn=document.createElement('button');
        btn.id='x95back';btn.type='button';
        btn.setAttribute('aria-label','رجوع إلى الصفحة السابقة');
        btn.innerHTML='&#8594;';
        btn.onclick=function(){try{window.x41Back()}catch(e1){try{navigate('home')}catch(e2){}}};
        document.body.appendChild(btn);
      }
    }
  }catch(e){}
}
try{
  var __x95R=window.render;
  window.render=function(){
    var rr;
    try{rr=__x95R.apply(this,arguments)}catch(eR1){}
    try{x95LibSync()}catch(eS1){}
    try{x95Guard()}catch(eS2){}
    return rr;
  };
}catch(eR2){}

/* 95.هـ ثلاث نغمات صوت قابلة للاختيار + توليد WAV احتياطي لكل نغمة */
function x95Seqs(kind){
  var snd=0;
  try{snd=((window.XCFG&&(XCFG.snd===1||XCFG.snd===2))?XCFG.snd:0)}catch(e){}
  if(snd===1){
    if(kind==='success'){return [[523,0,.12],[659,.13,.14]]}
    if(kind==='error'){return [[262,0,.2]]}
    return [[440,0,.08]];
  }
  if(snd===2){
    if(kind==='success'){return [[587,0,.09],[740,.1,.09],[988,.2,.16]]}
    if(kind==='error'){return [[196,0,.12],[165,.14,.16]]}
    return [[660,0,.06]];
  }
  if(kind==='success'){return [[660,0,.09],[880,.1,.12]]}
  if(kind==='error'){return [[220,0,.16]]}
  return [[520,0,.07]];
}
var X95_WAVC={};
function x95Wav(kind){
  try{
    var key=kind+'_'+(((window.XCFG&&(XCFG.snd===1||XCFG.snd===2))?XCFG.snd:0));
    if(X95_WAVC[key]){return X95_WAVC[key]}
    if(typeof window.btoa!=='function'){try{return (window.X93_WAV||'')}catch(eW0){return ''}}
    var sr=8000,total=0.25,i;
    var seq=x95Seqs(kind);
    for(i=0;i<seq.length;i++){var end=seq[i][1]+seq[i][2];if(end>total){total=end}}
    var len=Math.floor(sr*(total+0.06));
    var pcm='';
    for(var t=0;t<len;t++){
      var tm=t/sr,v=0,j;
      for(j=0;j<seq.length;j++){
        var f=seq[j][0],st=seq[j][1],du=seq[j][2];
        if(tm>=st&&tm<st+du){
          var env=Math.sin(Math.PI*((tm-st)/du));
          v+=Math.sin(2*Math.PI*f*(tm-st))*env;
        }
      }
      if(v>1){v=1}
      if(v<-1){v=-1}
      pcm+=String.fromCharCode(Math.round(128+v*110));
    }
    var h='RIFF'+String.fromCharCode((36+len)&255,((36+len)>>8)&255,((36+len)>>16)&255,((36+len)>>24)&255)+'WAVEfmt '+String.fromCharCode(16,0,0,0,1,0,1,0,(sr&255),((sr>>8)&255),0,0,(sr&255),((sr>>8)&255),0,0,1,0,8,0)+'data'+String.fromCharCode(len&255,(len>>8)&255,(len>>16)&255,(len>>24)&255);
    var uri='data:audio/wav;base64,'+window.btoa(h+pcm);
    X95_WAVC[key]=uri;
    return uri;
  }catch(e){try{return (window.X93_WAV||'')}catch(eW1){return ''}}
}
window.xSound=function(kind){
  try{
    if(!window.XCFG){return}
    if(!XCFG.sound){return}
    if(kind==='tap'){if(!XCFG.beep){return}}else{if(XCFG.sndNtf===false){return}}
    var vol=((XCFG.vol===undefined?6:XCFG.vol)/10)*.18;
    var seq=x95Seqs(kind);
    var ok=false;
    try{
      var c=null;
      try{c=((typeof window.x93CtxOK==='function')?window.x93CtxOK():null)}catch(eC1){}
      if(c){
        for(var i=0;i<seq.length;i++){
          try{window.x93Beep(seq[i][0],seq[i][2],seq[i][1],vol)}catch(eB1){}
        }
        ok=true;
      }
    }catch(eW){}
    if(!ok){
      try{
        var w=x95Wav(kind);
        if(w){
          var a=new window.Audio(w);
          try{a.volume=Math.max(0,Math.min(1,(XCFG.vol===undefined?6:XCFG.vol)/10))}catch(eV){}
          var pp=a.play();
          if(pp&&pp.catch){pp.catch(function(){})}
        }
      }catch(eA){}
    }
  }catch(e){}
};
function x95SndSel(){
  var cur=0;
  try{cur=((XCFG.snd===1||XCFG.snd===2)?XCFG.snd:0)}catch(e){}
  var defs=[[0,'🎼 كلاسيكية'],[1,'🌊 ناعمة'],[2,'🎉 حيوية']];
  var h='<div class="x48-lbl">نغمة الأصوات (اختر واحدة)</div><div class="x48-pills">';
  for(var i=0;i<defs.length;i++){
    h+='<button class="x48-pill'+(cur===defs[i][0]?' on':'')+'" onclick="try{XCFG.snd='+defs[i][0]+';saveXCFG();xSound(\'success\');render()}catch(e){}">'+defs[i][1]+'</button>';
  }
  h+='</div><p class="x48-note">اختر النغمة التي تعجبك فتسمعها فورًا — تعمل في كل أنحاء التطبيق (نجاح، خطأ، لمسة).</p>';
  return h;
}
try{
  var secs=window.X48_SECS;
  if(secs&&secs.length){
    for(var s95i=0;s95i<secs.length;s95i++){
      if(secs[s95i].id==='snd'){
        var __x95SndB=secs[s95i].b;
        secs[s95i].b=(function(f){return function(){var r='';try{r=f()}catch(e1){}return r+x95SndSel()}})(__x95SndB);
      }
    }
  }
}catch(eS3){}

/* 95.و كشف اختباري للهارنس */
window.x95t={show:x95KpShow,syncAll:x95TabSyncAll,guard:x95Guard,watch:x95Watch,content:x95Content,libSync:x95LibSync,fixPv:x95FixPv,wav:x95Wav,seqs:x95Seqs,sndSel:x95SndSel};

/* 95.ز هوية الإصدار */
try{
  APP_META.ver='95.0';APP_META.date='2026-11-07';APP_META.lastUpdate='2026-11-07';
  APP_META.notes='الإصدار 95 — إصدار التصفيه النهائية: معاينة صورة الخلفية تظهر فورًا عند اختيارها، تمييز تبويب الخلاصة يعمل على كل النسخ مهما تكررت، سهم رجوع أعلى مكتبتي الفيديو وPDF مثل الدروس، وثلاث نغمات صوت قابلة للاختيار مع بديل WAV لكل نغمة.';
}catch(eM2){}
try{
  APP_META.changelog.unshift('الإصدار 95.0 (2026-11-07): إصلاح معاينة الخلفية (السمة المولدة كانت تنكسر بعلامات الاقتباس فتظهر المعاينة فارغة حتى تحريك المنزلق — صارت تُسند عبر JS فورًا) + مزامنة تمييز تبويب الخلاصة على كل أزواج الأزرار (تكرار المعرفات كان يُبطل المزامنة على الزر المرئي) + سهم رجوع أعلى مكتبات الفيديو/PDF مع إخفاء السهم السفلي مثل الدروس + ثلاث نغمات صوت (كلاسيكية/ناعمة/حيوية) تختارها من الإعدادات مع توليد WAV احتياطي لكل نغمة.');
}catch(eC2){}

})();
}catch(eW95){}

