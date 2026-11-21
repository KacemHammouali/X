/* ===================== طبقة 96.0 — منصة X: فتح فوري + لوحة الإدارة للمالك + خلفية كاملة + سهم مكتبات بذاكرة + مكتبة فيديو صادقة متسامحة ===================== */
try{
(function(){
'use strict';

/* 96.أ CSS: الخلفية المختارة تظهر كاملة بلا قصّ في كل الصفحات (التطبيق كله وشاشات الدخول) + معاينة الخلفية أيضًا كاملة */
function x96Style(){
  try{
    var s=document.getElementById('x96style');
    if(!s){
      s=document.createElement('style');
      s.id='x96style';s.type='text/css';
      (document.head||document.documentElement).appendChild(s);
    }
    s.textContent=
      'html body{background-size:contain !important;background-repeat:no-repeat !important}'+
      'html body .x48-pv{background-size:contain !important;background-repeat:no-repeat !important}';
  }catch(e){}
}
x96Style();

/* 96.ب لوحة الإدارة: بريد الإدارة الموثّق يكفي — لم تعد تتطلب role=admin من قاعدة البيانات (سبب اختفاء اللوحة) */
var __x96IA=null;
try{__x96IA=isAdmin}catch(eI1){}
isAdmin=function(){
  try{
    if(typeof x54OwnerOk==='function'&&x54OwnerOk()){return true}
  }catch(eI2){}
  try{return __x96IA()}catch(eI3){return false}
};

/* 96.ج معاينة صوتية فورية عند تحريك منزلق درجة الصوت (توست بالمستوى + نغمة تجريبية) */
var X96_VPT=null;
function x96VolPrev(){
  try{if(X96_VPT){clearTimeout(X96_VPT)}}catch(eV1){}
  try{
    X96_VPT=setTimeout(function(){
      X96_VPT=null;
      try{toast('🔊 مستوى الصوت: '+((XCFG.vol===undefined)?6:XCFG.vol)+'/10','info')}catch(eV2){}
      try{xSound('success')}catch(eV3){}
    },280);
  }catch(eV4){}
}
try{
  document.addEventListener('input',function(e){
    try{
      var t=e.target;
      if(!t||t.nodeType!==1){return}
      if((''+t.type).toLowerCase()!=='range'){return}
      if((''+t.max)!=='10'){return}
      if((t.className||'').indexOf('x48-range')<0){return}
      x96VolPrev();
    }catch(eV5){}
  },true);
}catch(eV6){}

/* 96.د سهم رجوع المكتبات: ذاكرة الرجوع الكاملة أولًا (X57) ثم ذاكرة الدروس (X69) ثم الرئيسية */
function x96LibBack(){
  try{
    if(typeof gid==='function'&&gid('xmodal')){
      try{xCloseModal()}catch(eM1){}
      return;
    }
  }catch(eM2){}
  var n57=0;
  try{n57=(X57_HIST&&X57_HIST.length)||0}catch(eB1){}
  if(n57>0){try{x41Back();return}catch(eB2){}}
  var n69=0;
  try{n69=(X69&&X69.hist&&X69.hist.length)||0}catch(eB3){}
  if(n69>0){try{x69Back();return}catch(eB4){}}
  try{x41Back()}catch(eB5){try{navigate('home')}catch(eB6){}}
}

/* 96.هـ ربط زر رجوع المكتبات بسلوك الدروس بعد كل عرض */
var __x96R=render;
render=function(){
  var rr;
  try{rr=__x96R.apply(this,arguments)}catch(eR1){}
  try{
    var pg=((window.ROUTE&&ROUTE.page)||'');
    if(pg==='vidlib'||pg==='pdflib'){
      var bb=document.getElementById('x95back');
      if(bb){bb.onclick=function(){try{x96LibBack()}catch(eL1){try{navigate('home')}catch(eL2){}}}}
    }
  }catch(eR2){}
  return rr;
};

/* 96.و قراءة JSON متسامحة: تصلح الفاصلة الزائدة قبل ] أو } بصمت (سبب اختفاء الفيديوهات المضافة) */
function x96JGet(url,cb){
  try{
    fetch(url+'?nc='+Date.now()).then(function(r){
      if(!r.ok){cb(null);return}
      return r.text().then(function(txt){
        var arr=null;
        try{arr=JSON.parse(txt)}catch(eJ1){
          try{arr=JSON.parse(txt.replace(/,[ \t]*([\]}])/g,'$1'))}catch(eJ2){arr=null}
        }
        cb(arr);
      });
    }).catch(function(){cb(null)});
  }catch(eJ3){cb(null)}
}

/* 96.ز مكتبة الفيديو: تحميل متسامح + تجديد تلقائي كل دقيقة + إكمال البيانات الناقصة */
var X96_VT=0;
function x96NormList(list){
  try{
    for(var i=0;i<list.length;i++){
      var f=list[i];
      if(!f){continue}
      try{
        if(!f.cycle){
          var yr=(''+(f.year||'')).trim();
          f.cycle=(yr.charAt(0)==='m')?'mid':'sec';
        }
      }catch(eN1){}
      try{f.subject=(''+(f.subject||'')).trim()}catch(eN2){}
    }
  }catch(eN3){}
  return list;
}
x35Files=function(force,cb){
  var done=false;
  function deliver(list,why){
    if(done){return}
    done=true;
    setTimeout(function(){cb(list,why)},0);
  }
  try{
    var fresh=force||!X35_VIDS||((+new Date())-X96_VT>60000);
    if(!fresh){deliver(X35_VIDS);return}
    X96_VT=+new Date();
    x96JGet('./videos.json',function(arr){
      if(arr&&typeof arr.length==='number'){
        arr=x96NormList(arr);
        X35_VIDS=arr;
        try{localStorage.setItem('x35_vids_cache',JSON.stringify(arr))}catch(eS1){}
        deliver(arr);return;
      }
      if(X35_VIDS){deliver(X35_VIDS);return}
      var cached=null;
      try{cached=JSON.parse(localStorage.getItem('x35_vids_cache')||'null')}catch(eS2){cached=null}
      if(cached&&typeof cached.length==='number'){X35_VIDS=cached;deliver(cached);return}
      deliver(null,'nojson');
    });
  }catch(eS3){deliver(null,'nojson')}
};

/* 96.ح مكتبة PDF: نفس المعالجة المتسامحة */
var X96_PT=0;
x30Files=function(force,cb){
  var done=false;
  function deliver(list,why){
    if(done){return}
    done=true;
    setTimeout(function(){cb(list,why)},0);
  }
  try{
    var fresh=force||!X33_PDFS||((+new Date())-X96_PT>60000);
    if(!fresh){deliver(X33_PDFS);return}
    X96_PT=+new Date();
    x96JGet('./pdfs.json',function(arr){
      if(arr&&typeof arr.length==='number'){
        X33_PDFS=arr;
        try{localStorage.setItem('x33_pdfs_cache',JSON.stringify(arr))}catch(eP1){}
        deliver(arr);return;
      }
      if(X33_PDFS){deliver(X33_PDFS);return}
      var cached=null;
      try{cached=JSON.parse(localStorage.getItem('x33_pdfs_cache')||'null')}catch(eP2){cached=null}
      if(cached&&typeof cached.length==='number'){X33_PDFS=cached;deliver(cached);return}
      deliver(null,'nojson');
    });
  }catch(eP3){deliver(null,'nojson')}
};

/* 96.ط صفحة مكتبة الفيديو: مطابقة متسامحة للمادة + الفيديوهات العامة تظهر في كل الأقسام + البيانات الناقصة لا تحجب + رسالة صادقة للإدارة */
function x96NS(s){
  try{
    s=(''+(s||'')).trim();
    return s.replace(/^ال/,'').replace(/\s+/g,'');
  }catch(eS1){return ''}
}
renderX35Vid=function(){
  var r=ROUTE;
  var cycle=r.cycle||'sec',year=r.year||'s2',subject=r.subject||'';
  var branch=(r.branch||'')+'';
  var term=r.term||0;
  var yName=x30YearOf(year);
  var bObj=x32Branch(year,branch);
  var bName=(branch&&bObj)?bObj.name:'';
  var h='<div class="fade-in x30-home"><section class="x17-card">'+
   '<div class="x30-crumb"><button onclick="navigate(\'home\')">الرئيسية</button><span>←</span>'+
   '<button onclick="x30Go({page:\'year\',cycle:\''+cycle+'\',year:\''+year+'\'})">'+escAttr(yName)+'</button>'+
   (bName?('<span>←</span><button onclick="x30Go({page:\'branch\',cycle:\''+cycle+'\',year:\''+year+'\',branch:\''+branch+'\'})">'+escAttr(bName)+'</button>'):'')+
   '</div>'+
   '<h2>🎬 مكتبة الفيديو'+(bName?(' — '+escAttr(bName)):'')+(subject?(' — '+escAttr(subject)):'')+'</h2><div>';
  h+='<button class="x30-tab'+((!term)?' on':'')+'" onclick="x30Go({page:\'vidlib\',cycle:\''+cycle+'\',year:\''+year+'\',branch:\''+branch+'\',subject:\''+escAttr(subject)+'\',term:0})">📚 الكل</button>';
  for(var tm=1;tm<=3;tm++){
    h+='<button class="x30-tab'+((term===tm)?' on':'')+'" onclick="x30Go({page:\'vidlib\',cycle:\''+cycle+'\',year:\''+year+'\',branch:\''+branch+'\',subject:\''+escAttr(subject)+'\',term:'+tm+'})">'+X30_TERMS[tm]+'</button>';
  }
  h+='</div><div class="x30-row" style="margin-top:8px"><button class="btn btn-sm" onclick="x35VidReload()">🔄 تحديث المكتبة</button></div></section>'+
   '<section class="x17-card" id="x35-list"><p class="x17-empty">⏳ جارٍ تحميل مكتبة الفيديو…</p></section></div>';
  x35Files(false,function(list,why){
    var box=gid('x35-list');
    if(!box){return}
    if(!list){
      if(why==='nojson'){
        if(isAdmin()){
          box.innerHTML='<div class="x30-err">🎬 مكتبة الفيديو لم تُحمَّل.<br>أشهر الأسباب: خطأ صيغة في ملف <b>videos.json</b> بالمستودع (فاصلة زائدة قبل ] أو قوس ناقص) — راجعه ثم اضغط «تحديث المكتبة»، أو انقطع الاتصال بالإنترنت.</div>'+
           '<div class="x30-row" style="margin-top:10px"><button class="btn btn-primary" onclick="navigate(\'admin\')">🛡️ فتح لوحة الإدارة الآن</button></div>';
        }else{
          box.innerHTML='<div class="x30-err">🎬 لم تُضف فيديوهات بعد لهذا القسم.<br>تضيفها إدارة المنصة قريبًا — وستظهر هنا تلقائيًا دون تحديث التطبيق.</div>';
        }
      }else{
        box.innerHTML='<div class="x30-err">⚠️ تعذر جلب الفيديوهات الآن — تحقق من اتصالك واضغط «🔄 تحديث المكتبة».</div>';
      }
      return;
    }
    var rows=[];
    for(var i=0;i<list.length;i++){
      var f=list[i];
      var okC=(!f.cycle||f.cycle===cycle),okY=(!f.year||f.year===year);
      var fS=x96NS(f.subject),pS=x96NS(subject);
      var okS=(!subject)||(fS===''||fS===pS);
      var fbr=(''+(f.branch||'')).split(',');var okB=(!f.branch)||(branch&&(fbr.indexOf(branch)>=0));
      var okT=(!term||!f.term||(''+f.term)===(''+term));
      if(okC&&okY&&okS&&okB&&okT){rows.push(f)}
    }
    try{rows.sort(function(a,b){var ta=(a&&a.term)?(parseInt(a.term,10)||0):0,tb=(b&&b.term)?(parseInt(b.term,10)||0):0;if(ta!==tb){return ta-tb}return (''+((a&&a.title)||'')).localeCompare(''+((b&&b.title)||''))})}catch(e35s){}
    if(!rows.length){
      var msg='لا توجد فيديوهات في هذا القسم بعد — تضيفها إدارة المنصة قريبًا.';
      if(isAdmin()){
        box.innerHTML='<p class="x17-empty">'+msg+'</p>'+
         '<div class="x30-row" style="margin-top:10px"><button class="btn btn-primary" onclick="navigate(\'admin\')">🛡️ أنت الإدارة — أضف فيديوهات من لوحة الإدارة</button></div>';
      }else{
        box.innerHTML='<p class="x17-empty">'+msg+'</p>';
      }
      return;
    }
    var b='',lastTerm=-1;
    for(var k=0;k<rows.length;k++){
      var ff=rows[k];
      var tt=(ff.term)?(parseInt(ff.term,10)||0):0;
      if(tt!==lastTerm){
        lastTerm=tt;
        b+='<h3 class="x35-term">📅 '+((tt&&X30_TERMS[tt])?X30_TERMS[tt]:'فيديوهات عامة')+'</h3>';
      }
      b+='<div class="x30-file"><b>🎬 '+escAttr(ff.title||'فيديو')+'</b>'+
       ((ff.descr)?('<div class="x30-meta">'+escAttr(ff.descr)+'</div>'):'')+
       ((ff.subject)?('<div class="x30-meta">'+escAttr(ff.subject)+'</div>'):'')+
       '<button class="btn btn-sm btn-primary" onclick="x35Play('+ff.id+')">▶️ مشاهدة الآن</button></div>';
    }
    box.innerHTML=b;
  });
  return h;
};

/* 96.ي بيانات الإصدار */
try{
  APP_META.ver='96.0';APP_META.date='2026-11-07';APP_META.lastUpdate='2026-11-07';
  APP_META.notes='الإصدار 96.0 — فتح فوري واستقرار ولوحة الإدارة للمالك: الفتح صار فوريًا من الذاكرة مع تحديث خلفي صامت (كان كل فتح ينتظر تنزيل كامل المنصة من الشبكة — سبب البطء)، لوحة X.HAK تظهر فور تسجيل الدخول ببريد الإدارة (لم تعد تتطلب إعداد قاعدة البيانات)، الخلفية المختارة تظهر كاملة بلا قصّ في كل الصفحات، سهم رجوع المكتبات بذاكرة كاملة مثل الدروس تمامًا، درجة الصوت تسمع فور تحريك المنزلق، ومكتبة الفيديو تقرأ videos.json بمعالجة متسامحة تصلح الفاصلة الزائدة تلقائيًا وتُظهر الفيديوهات العامة في كل الأقسام.';
}catch(eM1){}
try{APP_META.changelog.unshift('الإصدار 96.0 — فتح فوري + لوحة الإدارة للمالك + خلفية كاملة بلا قصّ + سهم مكتبات بذاكرة كاملة + معاينة صوت المنزلق + مكتبة فيديو تصلح أخطاء videos.json وتظهر الفيديوهات العامة.')}catch(eM2){}

window.x96t={libBack:x96LibBack,jget:x96JGet,volPrev:x96VolPrev,vidlib:renderX35Vid,normList:x96NormList,ns:x96NS};
})();
}catch(eW96){}
