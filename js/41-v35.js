'use strict';
/* ============ الطبقة 35 — الإصدار 35: مكتبة الفيديو + ترتيب الفصول ============ */
/* 35.أ مكتبة الفيديو: ملف videos.json في المستودع هو كل شيء — مثل pdfs.json تمامًا */
var X35_VIDS=null;
function x35Files(force,cb){
  if(X35_VIDS&&!force){cb(X35_VIDS);return}
  try{
    fetch('./videos.json?nc='+Date.now()).then(function(r){
      if(!r.ok){throw new Error('nojson')}
      return r.json();
    }).then(function(list){
      if(!list||typeof list.length!=='number'){throw new Error('bad')}
      X35_VIDS=list;
      try{localStorage.setItem('x35_vids_cache',JSON.stringify(list))}catch(e2){}
      cb(list);
    }).catch(function(){
      var cached=null;
      try{cached=JSON.parse(localStorage.getItem('x35_vids_cache')||'null')}catch(e3){cached=null}
      if(cached&&typeof cached.length==='number'){X35_VIDS=cached;cb(cached);return}
      cb(null,'nojson');
    });
  }catch(e){cb(null,'nojson')}
}
function x35VidReload(){
  X35_VIDS=null;
  toast('🔄 نحدّث مكتبة الفيديو…','info');
  x35Files(true,function(){try{render()}catch(e){}});
}
/* 35.ب المشغل: يوتيوب داخل المنصة + احتياط يفتح الرابط في المتصفح */
function x35YTId(u){
  try{
    u=(''+u).trim();
    var m=u.match(/(?:youtube\.com\/(?:watch\?[^#]*v=|embed\/|shorts\/|live\/)|youtu\.be\/)([A-Za-z0-9_-]{6,})/);
    if(m&&m[1]){return m[1]}
  }catch(e){}
  return null;
}
function x35Play(id){
  var fs=X35_VIDS||[];
  var f=null;
  for(var i=0;i<fs.length;i++){if((''+fs[i].id)===(''+id)){f=fs[i];break}}
  if(!f){toast('⚠️ لم يُعثر على الفيديو — اضغط «تحديث المكتبة» ثم أعد المحاولة','error');return}
  var u=(''+(f.url||'')).trim();
  if(!u){toast('⚠️ رابط هذا الفيديو غير موجود','error');return}
  var inner='';
  var yt=x35YTId(u);
  if(yt){
    inner='<div class="x35-ratio"><iframe src="https://www.youtube.com/embed/'+yt+'?rel=0" allow="accelerometer;autoplay;encrypted-media;picture-in-picture" allowfullscreen></iframe></div>'+
     '<div class="x30-row" style="margin-top:10px"><a class="btn btn-sm" href="'+escAttr(u)+'" target="_blank" rel="noopener">↗ فتح في يوتيوب</a></div>';
  }else if(/\.(mp4|webm|ogg)(\?|#|$)/i.test(u)){
    inner='<div class="x35-ratio"><video controls playsinline style="position:absolute;top:0;left:0;width:100%;height:100%;background:#000;border:0" src="'+escAttr(u)+'"></video></div>';
  }else{
    inner='<div class="x30-err">⚠️ هذا الرابط لا يُشغَّل داخل المنصة مباشرة — افتحه في المتصفح:</div>'+
     '<div class="x30-row" style="margin-top:10px"><a class="btn btn-primary" href="'+escAttr(u)+'" target="_blank" rel="noopener">↗ فتح الفيديو في المتصفح</a></div>';
  }
  try{
    var old=gid('x35p');
    if(old){old.remove()}
    var d=document.createElement('div');
    d.id='x35p';
    d.className='xmodal';
    d.innerHTML='<div class="xmodal-bg" onclick="x35ClosePlay()"></div><div class="xmodal-card glass-strong" id="x35p-card" style="max-width:640px"><h3>🎬 '+escAttr(f.title||'فيديو')+'</h3><div class="xmodal-body">'+inner+'</div><div class="x30-row" style="margin-top:10px"><button class="btn btn-sm" onclick="x35FS()">⛶ شاشة كاملة</button></div><button class="btn btn-primary btn-block" onclick="x35ClosePlay()">إغلاق</button></div>';    document.body.appendChild(d);
  }catch(e){try{window.open(u,'_blank')}catch(e2){}}
}
function x35ClosePlay(){
  var d=gid('x35p');
  if(d){d.remove()}
}
/* 35.ج صفحة مكتبة الفيديو: الفصول بالترتيب دائمًا — الأول ثم الثاني ثم الثالث */
function renderX35Vid(){
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
          box.innerHTML='<div class="x30-err">🎬 مكتبة الفيديو فارغة بعد — أنت الإدارة.<br>أضف أول فيديو: انسخ رابطه من يوتيوب، ثم ولّد سطرك في «لوحة الإدارة» والصقه في ملف videos.json — ويظهر هنا فورًا.</div>'+
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
      var okC=(!cycle||f.cycle===cycle),okY=(!year||f.year===year),okS=(!subject||f.subject===subject);
      var fbr=(''+(f.branch||'')).split(',');var okB=(!f.branch)||(branch&&(fbr.indexOf(branch)>=0));      var okT=(!term||!f.term||(''+f.term)===(''+term));
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
}
/* 35.د بطاقة «مكتبة الفيديو» في صفحة كل مادة */
var __x35Hub=renderX30Hub;
renderX30Hub=function(cycle,year,subject){
  var h=__x35Hub(cycle,year,subject);
  try{
    var br='';
    try{br=(ROUTE.branch||'')+''}catch(e3){br=''}
    var subs=X30_SUBJECTS[year]||[];
    var nm='';
    for(var i=0;i<subs.length;i++){if(subs[i].id===subject){nm=subs[i].name}}
    var card='<div class="x30-hubcard" onclick="x30Go({page:\'vidlib\',cycle:\''+cycle+'\',year:\''+year+'\',branch:\''+br+'\',subject:\''+(nm?escAttr(nm):'')+'\',term:0})"><span style="font-size:26px;line-height:1.1">🎬</span><h3>🎬 مكتبة الفيديو</h3><p class="set-note">شروحات مرئية مرتبة بالفصول</p></div>';
    var k=h.lastIndexOf('</section></div>');
    if(k>0){h=h.slice(0,k)+card+h.slice(k)}
  }catch(e){}
  return h;
};
/* 35.هـ زر «مكتبة الفيديو الخاصة بالشعبة» في صفحة الشعبة */
var __x35Branch=renderX32Branch;
renderX32Branch=function(cycle,year,branch){
  var h=__x35Branch(cycle,year,branch);
  try{
    var btn='<section class="x17-card" style="margin-top:12px"><button class="btn btn-primary" style="width:100%" onclick="x30Go({page:\'vidlib\',cycle:\''+cycle+'\',year:\''+year+'\',branch:\''+branch+'\',subject:\'\',term:0})">🎬 مكتبة الفيديو الخاصة بالشعبة</button></section>';
    var k=h.lastIndexOf('</div>');
    if(k>0){h=h.slice(0,k)+btn+h.slice(k)}
  }catch(e){}
  return h;
};
/* 35.و محرك العرض: صفحة vidlib */
var __x35Render=render;
render=function(){
  var vid=null;
  try{
    if(X30_HASH&&(''+X30_HASH.page)==='vidlib'){vid=X30_HASH;X30_HASH=null}
    else if(!X30_HASH&&ROUTE&&(''+ROUTE.page)==='vidlib'){vid=ROUTE}
  }catch(e){}
  if(vid){
    var need=false;
    try{need=authScreenNeeded()}catch(e2){need=false}
    if(!need){
      try{x34OwnerSync()}catch(e3){}
      try{
        ROUTE=vid;
        var app=document.getElementById('app');
        app.innerHTML=renderX35Vid()+updBanner()+renderBottomNav();
        try{typesetApp()}catch(e4){}
        try{kpSync()}catch(e5){}
        return;
      }catch(e6){}
    }
  }
  __x35Render();
};
/* 35.ز لوحة الإدارة: قسم مكتبة الفيديو ومولد سطرها */
function x35BranchSync(){
  try{
    var yr=(gid('x35g-year')||{}).value||'m1';
    var bs=gid('x35g-branch');
    if(bs){bs.innerHTML=x33BranchOpts(yr)}
  }catch(e){}
}
function x35JEsc(s){return (''+s).replace(/\\/g,'\\\\').replace(/"/g,'\\"')}
function x35AdminSect(){
  var yOpts='',firstY='';
  for(var k in X30_YEARS){if(!firstY){firstY=k}yOpts+='<option value="'+k+'">'+X30_YEARS[k]+'</option>'}
  var h='<section class="x17-card x33-admin" id="x35-admin"><h3>🎬 مكتبة الفيديو — الطريقة السهلة (videos.json)</h3>'+
   '<p class="x33-step"><b>الخطوة 1:</b> انسخ رابط الفيديو من يوتيوب (زر «مشاركة» ← «نسخ الرابط»).</p>'+
   '<p class="x33-step"><b>الخطوة 2:</b> افتح ملف <b>videos.json</b> في المستودع واضغط قلم التعديل ✏️.</p>'+
   '<p class="x33-step"><b>الخطوة 3:</b> عبّئ الخانات بالأسفل — واختر <b>الشعبة</b> والفصل — ثم اضغط «📋 توليد سطر الفيديو» وانسخ السطر والصقه داخل <b>[ ]</b>: سطر واحد بلا فاصلة، وعدة أسطر ضع فاصلة <b>,</b> بين كل سطرين.</p>'+
   '<p class="x33-step"><b>الخطوة 4 (الحذف):</b> امسح سطر الفيديو من videos.json واضغط Commit — يختفي من المنصة فورًا.</p>'+
   '<div class="x33-gen">'+
   '<input class="x30-inp" id="x35g-title" placeholder="عنوان الفيديو الظاهر للطلاب (مثل: شرح الدوال خطوة بخطوة)">'+
   '<input class="x30-inp" id="x35g-url" placeholder="رابط الفيديو من يوتيوب (مثل: https://youtu.be/XXXXXXXXXXX)">'+
   '<div class="x30-row"><select class="x30-inp" id="x35g-year" style="width:auto" onchange="x35BranchSync()">'+yOpts+'</select>'+
   '<select class="x30-inp" id="x35g-branch" style="width:auto">'+x33BranchOpts(firstY)+'</select>'+
   '<select class="x30-inp" id="x35g-term" style="width:auto">'+
   '<option value="0">عام — كل الفصول</option><option value="1">الفصل الأول</option><option value="2">الفصل الثاني</option><option value="3">الفصل الثالث</option></select></div>'+
   '<input class="x30-inp" id="x35g-subject" placeholder="المادة (مثل: الرياضيات) — اتركها فارغة لفيديو عام">'+
   '<input class="x30-inp" id="x35g-descr" placeholder="وصف مختصر (اختياري)">'+
   '<button class="btn btn-primary" onclick="x35GenLine()">📋 توليد سطر الفيديو</button>'+
   '<textarea class="x33-out" id="x35g-out" placeholder="سيظهر السطر الجاهز هنا بعد الضغط على «توليد سطر الفيديو»"></textarea>'+
   '</div></section>';
  return h;
}
function x35GenLine(){
  var ti=((gid('x35g-title')||{}).value||'').trim();
  var ur=((gid('x35g-url')||{}).value||'').trim();
  var yr=(gid('x35g-year')||{}).value||'s2';
  var cy=(yr.charAt(0)==='m')?'mid':'sec';
  var br=((gid('x35g-branch')||{}).value||'');
  var tm=parseInt((gid('x35g-term')||{}).value||'0',10)||0;
  var sb=((gid('x35g-subject')||{}).value||'').trim();
  var ds=((gid('x35g-descr')||{}).value||'').trim();
  if(!ti){toast('✍️ اكتب عنوان الفيديو أولًا (مثل: شرح الدوال)','error');return}
  if(!ur){toast('✍️ الصق رابط الفيديو أولًا','error');return}
  if(!x35YTId(ur)&&!/^https?:\/\//i.test(ur)){toast('⚠️ هذا لا يبدو رابطًا — انسخ الرابط كاملًا من يوتيوب','error');return}
  var id=Date.now();
  var line='{"id":'+id+',"cycle":"'+cy+'","year":"'+yr+'","branch":"'+x35JEsc(br)+'","subject":"'+x35JEsc(sb)+'","term":'+tm+',"title":"'+x35JEsc(ti)+'","descr":"'+x35JEsc(ds)+'","url":"'+x35JEsc(ur)+'"}';
  var out=gid('x35g-out');
  if(out){out.value=line}
  x35GenModal(line,ti);
}
function x35GenModal(line,ti){
  xModal('📋 سطر videos.json جاهز — انسخه والصقه',
   '<p class="x33-step"><b>1.</b> انسخ السطر التالي.</p>'+
   '<textarea class="x33-out" id="x35g-copy">'+escAttr(line)+'</textarea>'+
   '<p class="x33-step"><b>2.</b> افتح ملف <b>videos.json</b> في المستودع.</p>'+
   '<p class="x33-step"><b>3.</b> الصق السطر داخل القوس المربع <b>[ ]</b> — سطر واحد لا يحتاج أي فاصلة نهائيًا، وعند وجود عدة أسطر ضع فاصلة <b>,</b> بين كل سطرين فقط.</p>'+
   '<p class="x33-step"><b>4.</b> اضغط Commit changes — سيظهر الفيديو «'+escAttr(ti)+'» في مكتبة الفيديو فورًا.</p>'+
   '<div class="x30-row"><button class="btn btn-primary" onclick="x33CopyTxt(document.getElementById(\'x35g-copy\').value)">📋 نسخ السطر</button></div>');
}
var __x35Admin=renderAdminPage18;
renderAdminPage18=function(){
  var h=__x35Admin();
  try{
    if(isAdmin()){
      var i=h.indexOf('<section class="x17-card x33-admin"');
      if(i>0){h=h.slice(0,i)+x35AdminSect()+h.slice(i)}
    }
  }catch(e){}
  return h;
};
/* 35.ح بيانات الإصدار 35 */
APP_META.ver='35.0';APP_META.date='2026-10-31';
APP_META.notes='الإصدار 35 — مكتبة الفيديو والترتيب: صفحة فيديوهات لكل مادة وشعبة بملف videos.json السهل مثل pdfs.json تمامًا والمشغل يفتح داخل المنصة، والفصول مرتبة دائمًا الأول ثم الثاني ثم الثالث في الفروض والاختبارات ومكتبة الفيديو، مع إصلاح خطأ برمجي كان يعطّل تحسينات الإصدار 34 (لوحة الإدارة والإشعارات والمكتبة).';
try{APP_META.changelog.unshift('الإصدار 35 — مكتبة فيديو كاملة (videos.json + مولد السطر في لوحة الإدارة + مشغل يوتيوب داخل المنصة)، وترتيب الفصول إجباريًا الأول ثم الثاني ثم الثالث، وإصلاح الخطأ البرمجي الذي عطّل لوحة الإدارة في الإصدار 34.')}catch(e){}
function fallbackNews18(){
  return [{title:'الإصدار 35 — مكتبة الفيديو',
    body:'صفحة فيديوهات لكل مادة وشعبة بملف videos.json السهل، والمشغل يفتح داخل المنصة، والفصول مرتبة دائمًا الأول ثم الثاني ثم الثالث.',
    date:APP_META.date}];
}
