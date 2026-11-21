/* ============ الطبقة 93 — الإصدار 93.0 «الاستقرار والثبات»: خلاصة تتبدل فعلًا + مؤشر ضبابي داخل الشريط + صوت يعمل في التطبيق ============ */
try{

/* 93.أ CSS */
function x93Style(){
  try{
    var el=gid('x93-style');
    if(!el){el=document.createElement('style');el.id='x93-style';(document.head||document.documentElement).appendChild(el)}
    el.textContent=
     '#x92pill{display:none!important}'+
     '#x93pill{position:absolute!important;top:0!important;left:0;display:none;width:46px;height:4.5px;border-radius:99px;pointer-events:none;background:linear-gradient(90deg,rgba(53,189,242,.6),rgba(139,108,255,.6));box-shadow:0 0 12px rgba(53,189,242,.35);backdrop-filter:blur(3px);-webkit-backdrop-filter:blur(3px);opacity:.95}'+
     'html[data-theme="light"] #x93pill{background:linear-gradient(90deg,rgba(22,142,191,.55),rgba(118,87,219,.55));box-shadow:0 0 10px rgba(22,142,191,.25)}'+
     '.kp-box.x93-one .kp-slide{display:block!important}';
  }catch(eS){}
}
try{x93Style()}catch(eS2){}

/* 93.ب الخلاصة: التبديل الصحيح فوق أي ترميز — انزع أصناف 90 ثم بدّل صنفًا واحدًا، وأعد التوليد للترميز المفرد */
function x93KpShow(i){
  var idx=(i===1)?1:0;
  try{KPI=idx}catch(eK){}
  try{
    var boxes=document.querySelectorAll('.kp-box');
    for(var bi=0;bi<boxes.length;bi++){
      var bx=boxes[bi];
      var slides=bx.querySelectorAll('.kp-slide');
      var cn=' '+bx.className+' ';
      if(slides.length===1){
        var cid=bx.getAttribute('data-cid');
        var done=false;
        if(cid&&window.kpHTML){
          try{
            var fresh=window.kpHTML(cid);
            if(fresh&&fresh.indexOf('kp-box')>=0){
              var t=document.createElement('div');t.innerHTML=fresh;
              var nb=t.firstChild;
              if(nb&&nb.nodeType===1){
                var ncn=' '+nb.className+' ';
                ncn=ncn.replace(/ x90-k0/g,'').replace(/ x90-k1/g,'').replace(/ x92-law/g,'');
                nb.className=ncn.replace(/^ +| +$/g,'');
                if(bx.parentNode){bx.parentNode.replaceChild(nb,bx);done=true}
              }
            }
          }catch(eR){}
        }
        if(!done){
          cn=cn.replace(/ x92-law/g,'').replace(/ x90-k0/g,'').replace(/ x90-k1/g,'');
          bx.className=cn.replace(/  +/g,' ').replace(/^ +| +$/g,'');
        }
      } else {
        cn=cn.replace(/ x90-k0/g,'').replace(/ x90-k1/g,'');
        if(idx===1){if(cn.indexOf(' x92-law ')<0){cn=cn+' x92-law '}}
        else{cn=cn.replace(/ x92-law/g,'')}
        bx.className=cn.replace(/  +/g,' ').replace(/^ +| +$/g,'');
      }
    }
  }catch(eB){}
  try{
    for(var j=0;j<2;j++){var b=document.getElementById('kpt'+j);if(b){b.className='kpt'+(j===idx?' kpt-on':'')}}
    var d=document.getElementById('kpdots');
    if(d){var s=d.children;for(var k=0;k<s.length;k++){s[k].className='kpd'+(k===idx?' kpd-on':'')}}
  }catch(eD){}
}
window.kpTab=function(i){try{x93KpShow(i)}catch(e){}};
window.kpMove=function(dl){try{x93KpShow(((KPI||0)+dl+2)%2)}catch(e){}};
window.kpSync=function(){try{x93KpShow(KPI||0)}catch(e){}};
window.x90Kp=function(cid,i){try{x93KpShow(i)}catch(e){}};
window.x88KpShow=function(i){try{x93KpShow(i)}catch(e){}};
window.x87KpShow=function(i){try{x93KpShow(i)}catch(e){}};
try{
  document.addEventListener('click',function(e){
    try{
      var t=e.target;var g=0;
      while(t&&t.nodeType===1&&g<12){
        if(t.id==='kpt0'){x93KpShow(0);break}
        if(t.id==='kpt1'){x93KpShow(1);break}
        t=t.parentNode;g++;
      }
    }catch(eC){}
  },true);
}catch(eL){}

/* 93.ج الحبة داخل الشريط نفسه — ضبابية لا تتحرك مع التمرير ولا تطفو فوق النوافذ */
function x93PillNow(){
  try{
    var op=gid('x92pill');
    if(op&&op.parentNode){op.parentNode.removeChild(op)}
  }catch(eO){}
  try{
    var nav=document.querySelector('nav.bnav');
    if(!nav){nav=document.querySelector('.bnav')}
    if(!nav){return}
    var pl=gid('x93pill');
    if(pl&&pl.parentNode!==nav){try{pl.parentNode.removeChild(pl)}catch(eX){}pl=null}
    var btn=null;var kds=nav.querySelectorAll('.bnav-btn');
    for(var i=0;i<kds.length;i++){if((' '+kds[i].className+' ').indexOf(' bnav-on ')>=0){btn=kds[i];break}}
    if(!btn){if(pl){pl.style.display='none'}return}
    if(!pl){pl=document.createElement('div');pl.id='x93pill';nav.appendChild(pl)}
    pl.style.display='block';
    var fresh=(!pl.getAttribute('data-x93'));
    if(fresh){pl.style.transition='none';pl.setAttribute('data-x93','1')}
    var br=btn.getBoundingClientRect();
    var nr=nav.getBoundingClientRect();
    pl.style.left=(br.left-nr.left+((br.width-46)/2))+'px';
    if(fresh){setTimeout(function(){try{pl.style.transition='left .34s cubic-bezier(.32,.72,.28,1)'}catch(eT){}},40)}
  }catch(eP){}
}
try{window.addEventListener('resize',function(){try{x93PillNow()}catch(e){}})}catch(eR2){}
var x93PillT=null;
function x93Pill(){
  try{if(x93PillT){clearTimeout(x93PillT)}}catch(eC1){}
  try{x93PillT=setTimeout(function(){try{x93PillNow()}catch(e){}},30)}catch(eC2){}
}

/* 93.د الصوت يعمل في التطبيق: فتح قفل الصوت عند أول لمسة + إعادة إنشاء تلقائية + بديل WAV مضمون */
var X93_WAV='data:audio/wav;base64,UklGRiQFAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQAFAACAgIGCgoKAf317e3x+goWHiIeDf3p2dXZ6gIaMjo6Jgnpzb29ze4WOlJWRiH1yamhrdICNl5uZkYR1aWJjaniIl6Chm418a19bYG6Ak6KopZiFcF9VVmJ1i5+srqWSemNTTlVngJmstbGgh2xVSUpZco+oubuvlnhcSEJMYoCetL64pIhpUENFVnGPqru9sJd4XEhCTGKAnrS+uKSIaVBDRVZxj6q7vbCXeFxIQkxigJ60vrikiGlQQ0VWcY+qu72wl3hcSEJMYoCetL64pIhpUENFVnGPqru9sJd4XEhCTGKAnrS+uKSIaVBDRVZxj6q7vbCXeFxIQkxigJ60vrikiGlQQ0VWcY+qu72wl3hcSEJMYoCetL64pIhpUENFVnGPqru9sJd4XEhCTGKAnrS+uKSIaVBDRVZxj6q7vbCXeFxIQkxigJ60vrikiGlQQ0VWcY+qu72wl3hcSEJMYoCetL64pIhpUENFVnGPqru9sJd4XEhCTGKAnrS+uKSIaVBDRVZxj6q7vbCXeFxIQkxigJ60vrikiGlQQ0VWcY+qu72wl3hcSEJMYoCetL64pIhpUENFVnGPqru9sJd4XEhCTGKAnrS+uKSIaVBDRVZxj6q7vbCXeFxIQkxigJ60vrikiGlQQ0VWcY+qu72wl3hcSEJMYoCetL64pIhpUENFVnGPqru9sJd4XEhCTGKAnrS+uKSIaVBDRVZxj6q7vbCXeFxIQkxigJ60vrikiGlQQ0VWcY+qu72wl3hcSEJMYoCetL64pIhpUENFVnGPqru9sJd4XEhCTGKAnrS+uKSIaVBDRVZxj6q7vbCXeFxIQkxigJ60vrikiGlQQ0VWcY+qu72wl3hcSEJMYoCetL64pIhpUENFVnGPqru9sJd4XEhCTGKAnrS+uKSIaVBDRVZxj6q7vbCXeFxIQkxigJ60vrikiGlQQ0VWcY+qu72wl3hcSEJMYoCetL64pIhpUENFVnGPqru9sJd4XEhCTGKAnrS+uKSIaVBDRVZxj6q7vbCXeFxIQkxigJ60vrikiGlRREdXcY+puLqtlXleTEdQZYCbr7exoIdsV0xOXHONo7Gyp5J6Y1NPV2mAl6ivqpuGb11UVWF1i56pqqGQe2daV11sgJOip6OXhXJjW11nd4mZoqObjXxsYV9kcICQm6CckoR1aWNkbHmHk5ublYp9cWhma3SAjJSYlY6DeG9qa3F7hY6Tk4+HfnVvbnF4gIiOkI6Jgnt1cnN3fYOJjIyJhH96dnZ4e4CEh4iHhYF9e3p6fH+Bg4SEg4GAfn1+fn+AgYGBgA==';
function x93Beep(f,dur,when,vol){
  var ctx=x93Beep.ctx;
  var o=ctx.createOscillator(),g=ctx.createGain();
  o.frequency.value=f;o.type='sine';
  g.gain.setValueAtTime(.0001,ctx.currentTime+when);
  g.gain.exponentialRampToValueAtTime(vol,ctx.currentTime+when+.012);
  g.gain.exponentialRampToValueAtTime(.0001,ctx.currentTime+when+dur);
  o.connect(g);g.connect(ctx.destination);
  o.start(ctx.currentTime+when);o.stop(ctx.currentTime+when+dur+.02);
}
function x93CtxOK(){
  try{
    var AC=window.AudioContext||window.webkitAudioContext;
    if(!AC){return null}
    var c=x93Beep.ctx;
    if(!c||c.state==='closed'){c=new AC();x93Beep.ctx=c}
    if(c.state==='suspended'){try{var p=c.resume();if(p&&p.catch){p.catch(function(){})}}catch(eR){}}
    if(c.state==='running'){return c}
    try{var c2=new AC();try{var p2=c2.resume();if(p2&&p2.catch){p2.catch(function(){})}}catch(eR2){}
      if(c2.state==='running'){x93Beep.ctx=c2;return c2}}catch(eN){}
    return null;
  }catch(e){return null}
}
window.x93Unlock=function(){
  try{
    if(window.x93Unlock.done){return}
    window.x93Unlock.done=true;
    var AC=window.AudioContext||window.webkitAudioContext;
    if(!AC){return}
    if(!x93Beep.ctx){x93Beep.ctx=new AC()}
    var c=x93Beep.ctx;
    try{var p=c.resume();if(p&&p.catch){p.catch(function(){})}}catch(eR){}
    try{x93Beep(1,.01,0,.0001)}catch(eS2){}
  }catch(e){}
};
try{
  document.addEventListener('touchend',function(){try{window.x93Unlock()}catch(e){}},true);
  document.addEventListener('click',function(){try{window.x93Unlock()}catch(e){}},true);
}catch(eLU){}
window.xSound=function(kind){
  try{
    if(!XCFG.sound){return}
    if(kind==='tap'){if(!XCFG.beep){return}}else{if(XCFG.sndNtf===false){return}}
    var vol=((XCFG.vol===undefined?6:XCFG.vol)/10)*.18;
    var seq=(kind==='success')?[[660,0,.09],[880,.10,.12]]:(kind==='error')?[[220,0,.16]]:[[520,0,.07]];
    var ok=false;
    try{
      var c=x93CtxOK();
      if(c){
        for(var i=0;i<seq.length;i++){x93Beep(seq[i][0],seq[i][2],seq[i][1],vol)}
        ok=true;
      }
    }catch(eW){}
    if(!ok){
      try{
        var a=new Audio(X93_WAV);
        try{a.volume=Math.max(0,Math.min(1,(XCFG.vol===undefined?6:XCFG.vol)/10))}catch(eV){}
        var pp=a.play();
        if(pp&&pp.catch){pp.catch(function(){})}
      }catch(eA){}
    }
  }catch(e){}
};

/* 93.هـ غلاف render: تطبيع الخلاصة بعد كل عرض + الحبة الجديدة + إزالة القديمة */
var __x93R=render;
render=function(){
  var rr;
  try{rr=__x93R.apply(this,arguments)}catch(eR2){}
  try{x93Style()}catch(eS3){}
  try{
    var boxes=document.querySelectorAll('.kp-box');
    for(var bi=0;bi<boxes.length;bi++){
      var bx=boxes[bi];
      var slides=bx.querySelectorAll('.kp-slide');
      var cn=' '+bx.className+' ';
      cn=cn.replace(/ x90-k0/g,'').replace(/ x90-k1/g,'');
      if(slides.length>=2){
        if(KPI===1){if(cn.indexOf(' x92-law ')<0){cn=cn+' x92-law '}}
        else{cn=cn.replace(/ x92-law/g,'')}
      } else {
        cn=cn.replace(/ x92-law/g,'');
      }
      bx.className=cn.replace(/  +/g,' ').replace(/^ +| +$/g,'');
    }
  }catch(eN2){}
  try{x93PillNow()}catch(eP2){}
  try{x93Pill()}catch(eP3){}
  try{setTimeout(x93PillNow,180)}catch(eT3){}
  try{setTimeout(x93PillNow,760)}catch(eT4){}
  try{setTimeout(x93PillNow,1500)}catch(eT5){}
  return rr;
};

/* 93.و هوية الإصدار */
APP_META.ver='93.0';APP_META.date='2026-11-07';APP_META.lastUpdate='2026-11-07';
APP_META.notes='الإصدار 93 — الاستقرار والثبات: تبديل خلاصة الدرس يعمل فعلًا في كل درس، مؤشر ضبابي داخل الشريط لا يتحرك مع التمرير ولا يطفو فوق النوافذ، والصوت يعمل في التطبيق.';
try{APP_META.changelog.unshift('الإصدار 93.0 (2026-11-07): إصلاح تبديل الخلاصة على الترميز الفعلي المعروض (نزع أصناف 90 + تبديل صنف واحد + إعادة توليد للترميز المفرد) + مؤشر التبويب داخل الشريط نفسه بضبابية ناعمة (لا يتحرك مع التمرير ولا يطفو فوق النوافذ) + الصوت في التطبيق: فتح قفل AudioContext عند أول لمسة وإعادة إنشاء تلقائية وبديل WAV مضمون.')}catch(eV93){}
}catch(eW93){}
