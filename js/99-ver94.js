/* ============ الطبقة 94 — الإصدار 94.0 «إصدار التصميم الأخير»: تمييز التبويب النشط (أهم الملاحظات/القوانين) فوري ومضمون + حرس استقرار دائم ============ */
try{
(function(){
'use strict';

/* 94.أ CSS: تمييز نشط واضح لا لبس فيه — شارة أسفل الزر + توهج، أساسي + وضع فاتح */
function x94Style(){
  try{
    var s=document.getElementById('x94style');
    if(!s){
      s=document.createElement('style');
      s.id='x94style';
      s.type='text/css';
      (document.head||document.documentElement).appendChild(s);
    }
    s.textContent='.kpt.kpt-on{background:rgba(100,181,239,.28)!important;color:var(--cyan)!important;box-shadow:inset 0 -3px 0 0 rgba(100,181,239,.9),0 0 14px rgba(100,181,239,.2)!important;font-weight:900!important}'
      +'html[data-theme="light"] .kpt.kpt-on{background:rgba(51,144,236,.20)!important;color:#155a94!important;box-shadow:inset 0 -3px 0 0 #3390ec!important}'
      +'.kpd.kpd-on{color:var(--cyan)!important;text-shadow:0 0 6px rgba(100,181,239,.6)}'
      +'.kpt{transition:background .2s,color .2s,box-shadow .2s}';
  }catch(e){}
}
x94Style();

/* 94.ب مزامنة التمييز: زرا kpt0/kpt1 (صنف kpt-on) + النقاط kpdots */
function x94TabSync(idx){
  try{
    var j,b,want;
    for(j=0;j<2;j++){
      b=document.getElementById('kpt'+j);
      if(b){
        want='kpt'+(j===idx?' kpt-on':'');
        if(b.className!==want){b.className=want}
      }
    }
    var d=document.getElementById('kpdots');
    if(d){
      var s=d.children,k,w;
      for(k=0;k<s.length;k++){
        w='kpd'+(k===idx?' kpd-on':'');
        if(s[k].className!==w){s[k].className=w}
      }
    }
  }catch(e){}
}

/* 94.ج تبديل المحتوى عبر طبقة 93 (الجذرية) مع احتياط داخلي إن غابت */
function x94Content(idx){
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

/* 94.د العرض: تبديل المحتوى ثم فرض التمييز فورًا + نبضات مجدولة تهزم أي فرض قديم متأخر */
function x94KpShow(i){
  var idx=(i===1)?1:0;
  x94Content(idx);
  x94TabSync(idx);
  var dls=[30,90,200,420,800,1500,2600];
  for(var q=0;q<dls.length;q++){
    (function(dd){
      setTimeout(function(){
        try{x94TabSync((window.KPI===1)?1:0)}catch(e){}
      },dd);
    })(dls[q]);
  }
}

/* 94.هـ تجاوز كل مداخل التبويب — آخر من يكسب */
window.kpTab=function(i){try{x94KpShow(i)}catch(e){}};
window.kpMove=function(dl){try{x94KpShow((((window.KPI||0)+dl)+2)%2)}catch(e){}};
window.kpSync=function(){try{x94KpShow((window.KPI===1)?1:0)}catch(e){}};
window.x90Kp=function(cid,i){try{x94KpShow(i)}catch(e){}};
window.x88KpShow=function(i){try{x94KpShow(i)}catch(e){}};
window.x87KpShow=function(i){try{x94KpShow(i)}catch(e){}};
window.x92KpShow=function(i){try{x94KpShow(i)}catch(e){}};

/* 94.و مستمع نقر capture احتياطي على مستوى المستند */
try{
  document.addEventListener('click',function(e){
    try{
      var t=e.target,g=0;
      while(t&&t.nodeType===1&&g<15){
        if(t.id==='kpt0'){x94KpShow(0);break}
        if(t.id==='kpt1'){x94KpShow(1);break}
        t=t.parentNode;g++;
      }
    }catch(e2){}
  },true);
}catch(eC){}

/* 94.ز حرس دوري خفيف: يصحح التمييز تلقائيًا إن خالف الوضع الفعلي KPI (مهما أعادت أي طبقة بناء الصندوق) */
function x94Guard(){
  try{
    if(!document.querySelector('.kp-box')){return}
    var idx=(window.KPI===1)?1:0;
    var b0=document.getElementById('kpt0'),b1=document.getElementById('kpt1');
    var on0=!!(b0&&((' '+b0.className+' ').indexOf(' kpt-on ')>=0));
    var on1=!!(b1&&((' '+b1.className+' ').indexOf(' kpt-on ')>=0));
    var ok=(idx===0&&on0&&!on1)||(idx===1&&on1&&!on0);
    if(!ok){x94TabSync(idx)}
  }catch(e){}
}
try{setInterval(function(){x94Guard()},900)}catch(eI){}

/* 94.ح مراقب طفرات: إعادة إلحاق تلقائي بعد أي إعادة بناء + تصحيح فوري عند أي تغيير صنف على الزرين */
var x94MO=null,x94MOT=0;
function x94Watch(){
  try{
    if(!window.MutationObserver){return}
    if(x94MO){try{x94MO.disconnect()}catch(ed){}}
    x94MO=new window.MutationObserver(function(){
      try{
        if(x94MOT){clearTimeout(x94MOT)}
        x94MOT=setTimeout(function(){x94Guard()},40);
      }catch(em){}
    });
    var b0=document.getElementById('kpt0'),b1=document.getElementById('kpt1');
    if(b0){x94MO.observe(b0,{attributes:true,attributeFilter:['class']})}
    if(b1){x94MO.observe(b1,{attributes:true,attributeFilter:['class']})}
  }catch(e){}
}
try{setTimeout(function(){x94Watch()},400)}catch(eT1){}
try{setInterval(function(){x94Watch()},4000)}catch(eW1){}

/* 94.ط كشف اختباري للهارنس */
window.x94t={show:x94KpShow,sync:x94TabSync,guard:x94Guard,watch:x94Watch,content:x94Content};

/* 94.ي هوية الإصدار */
try{
  APP_META.ver='94.0';APP_META.date='2026-11-07';APP_META.lastUpdate='2026-11-07';
  APP_META.notes='الإصدار 94 — إصدار التصميم الأخير: تمييز التبويب النشط (أهم الملاحظات/القوانين) واضح وفوري ومضمون، وحرس استقرار دائم يصحح أي حالة شاذة تلقائيًا.';
}catch(eM){}
try{
  APP_META.changelog.unshift('الإصدار 94.0 (2026-11-07): تمييز التبويب النشط في خلاصة الدرس بشارة واضحة وتوهج يتحرك فورًا مع الضغط، ويُعاد فرضه بجدولة زمنية تهزم أي معالج قديم، مع حرس دوري ومراقب طفرات يصححان التمييز تلقائيًا إن خالف الوضع الفعلي — إصدار التصميم الأخير: سلاسة وثبات واستقرار.');
}catch(eC2){}

})();
}catch(eW94){}
