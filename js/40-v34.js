'use strict';
/* ============ الطبقة 34 — الإصدار 34: الاستقرار النهائي ============ */
/* 34.هـ إشعارات هاتفية: تبقى 6 ثوانٍ + سحب يمينًا أو يسارًا أو نقرة لإزالتها */
var X34_TOAST_MS=6000;
function x34Toast(msg,cls){
  var box=document.getElementById('toasts');
  if(!box){return}
  /* سقف 3 إشعارات معًا حفاظًا على السرعة والثبات */
  try{while(box.children&&box.children.length>2){box.removeChild(box.children[0])}}catch(e){}
  var t=document.createElement('div');
  t.className='toast '+(cls||'');
  t.textContent=msg;
  box.appendChild(t);
  var gone=false;
  function kill(dir){
    if(gone){return}
    gone=true;
    var x=((dir>=0)?1:-1)*380;
    try{
      t.style.transition='transform .28s ease,opacity .28s ease';
      t.style.transform='translateX('+x+'px)';
      t.style.opacity='0';
    }catch(e){}
    setTimeout(function(){try{t.remove()}catch(e2){}},320);
  }
  var timer=setTimeout(function(){kill(1)},X34_TOAST_MS);
  try{
    var sx=0,sy=0,dx=0,drag=false;
    t.addEventListener('touchstart',function(e){
      var p=(e.touches&&e.touches[0])||{};
      sx=(p.clientX||0);sy=(p.clientY||0);dx=0;drag=true;
      try{t.style.transition='none'}catch(e2){}
    },{passive:true});
    t.addEventListener('touchmove',function(e){
      if(!drag){return}
      var p=(e.touches&&e.touches[0])||{};
      dx=(p.clientX||0)-sx;
      if(Math.abs(dx)>6){try{t.style.transform='translateX('+dx+'px)'}catch(e2){}}
    },{passive:true});
    t.addEventListener('touchend',function(){
      if(!drag){return}
      drag=false;
      if(Math.abs(dx)>70){clearTimeout(timer);kill(dx)}
      else{try{t.style.transition='transform .22s ease';t.style.transform='translateX(0)'}catch(e2){}}
      dx=0;
    },{passive:true});
    t.addEventListener('click',function(){clearTimeout(timer);kill(1)});
  }catch(e){}
}
toast=x34Toast;
/* 34.و الإدارة: التعرف على الإدارة ببريده مباشرة — يعمل فورًا مهما كان الدور المحفوظ على الجهاز */
var X34_OWNER=(''+XOWNER_MAIL).toLowerCase();
function x34IsOwner(em){
  try{return !!em&&((''+em).toLowerCase())===X34_OWNER}catch(e){return false}
}
var __x34IsAdmin=isAdmin;
isAdmin=function(){
  if(__x34IsAdmin()){return true}
  try{
    var em=(USER.profile&&USER.profile.email)||((USER.session&&USER.session.user)||{}).email||'';
    return x34IsOwner(em);
  }catch(e){return false}
};
function x34OwnerSync(){
  try{
    if(USER.session&&USER.profile&&USER.profile.role!=='admin'){
      var em=(USER.profile&&USER.profile.email)||((USER.session&&USER.session.user)||{}).email||'';
      if(x34IsOwner(em)){USER.profile.role='admin';try{x18SaveUser(USER.profile)}catch(e2){}}
    }
  }catch(e){}
}
var __x34Restore=x18Restore;
x18Restore=function(){__x34Restore();try{x34OwnerSync()}catch(e){}};
var __x34Render=render;
render=function(){try{x34OwnerSync()}catch(e){}__x34Render()};
try{x34OwnerSync()}catch(e){}
/* 34.ز مكتبة PDF: عند الفراغ يظهر للمالك زر مباشر للوحة الإدارة — ولكل مستخدم رسالة صادقة واضحة */
function renderX30Lib(){
  var r=ROUTE;
  var cycle=r.cycle||'sec',year=r.year||'s2',subject=r.subject||'';
  var branch=(r.branch||'')+'';
  var tab=r.tab||'sum',mode=r.mode||'hw',term=r.term||0;
  var yName=x30YearOf(year);
  var bObj=x32Branch(year,branch);
  var bName=(branch&&bObj)?bObj.name:'';
  var h='<div class="fade-in x30-home"><section class="x17-card">'+
   '<div class="x30-crumb"><button onclick="navigate(\'home\')">الرئيسية</button><span>←</span>'+
   '<button onclick="x30Go({page:\'year\',cycle:\''+cycle+'\',year:\''+year+'\'})">'+escAttr(yName)+'</button>'+
   (bName?('<span>←</span><button onclick="x30Go({page:\'branch\',cycle:\''+cycle+'\',year:\''+year+'\',branch:\''+branch+'\'})">'+escAttr(bName)+'</button>'):'')+
   '</div>'+
   '<h2>📄 مكتبة ملفات PDF'+(bName?(' — '+escAttr(bName)):'')+(subject?(' — '+escAttr(subject)):'')+'</h2><div>';
  for(var t=0;t<X30_TYTAB.length;t++){
    var tt=X30_TYTAB[t];
    h+='<button class="x30-tab'+((tt.id===tab)?' on':'')+'" onclick="x30Go({page:\'pdflib\',cycle:\''+cycle+'\',year:\''+year+'\',branch:\''+branch+'\',subject:\''+escAttr(subject)+'\',tab:\''+tt.id+'\',mode:\'\',term:0})">'+tt.name+'</button>';
  }
  h+='</div>';
  if(tab==='hwex'){
    h+='<div>'+
     '<button class="x30-tab'+((mode==='hw')?' on':'')+'" onclick="x30Go({page:\'pdflib\',cycle:\''+cycle+'\',year:\''+year+'\',branch:\''+branch+'\',subject:\''+escAttr(subject)+'\',tab:\'hwex\',mode:\'hw\',term:0})">📝 الفروض</button>'+
     '<button class="x30-tab'+((mode==='test')?' on':'')+'" onclick="x30Go({page:\'pdflib\',cycle:\''+cycle+'\',year:\''+year+'\',branch:\''+branch+'\',subject:\''+escAttr(subject)+'\',tab:\'hwex\',mode:\'test\',term:0})">🧪 الاختبارات</button>'+
     '</div><div>';
    for(var tm=1;tm<=3;tm++){
      h+='<button class="x30-tab'+((term===tm)?' on':'')+'" onclick="x30Go({page:\'pdflib\',cycle:\''+cycle+'\',year:\''+year+'\',branch:\''+branch+'\',subject:\''+escAttr(subject)+'\',tab:\'hwex\',mode:\''+mode+'\',term:'+tm+'})">'+X30_TERMS[tm]+'</button>';
    }
    h+='</div>';
  }
  h+='<div class="x30-row" style="margin-top:8px"><button class="btn btn-sm" onclick="x33LibReload()">🔄 تحديث المكتبة</button></div>';
  h+='</section><section class="x17-card" id="x30-list"><p class="x17-empty">⏳ جارٍ تحميل المكتبة…</p></section></div>';
  x30Files(false,function(files,why){
    var box=gid('x30-list');
    if(!box){return}
    if(!files){
      if(why==='nojson'){
        if(isAdmin()){
          box.innerHTML='<div class="x30-err">📄 المكتبة فارغة بعد — أنت الإدارة.<br>أضف أول ملف: ارفع ملف الـ PDF إلى المستودع، ثم ولّد سطرك في لوحة الإدارة والصقه في pdfs.json — ويظهر هنا فورًا.</div>'+
           '<div class="x30-row" style="margin-top:10px"><button class="btn btn-primary" onclick="navigate(\'admin\')">🛡️ فتح لوحة الإدارة الآن</button></div>';
        }else{
          box.innerHTML='<div class="x30-err">📄 لم تُضف ملفات PDF بعد لهذا القسم.<br>تضيفها إدارة المنصة قريبًا — وستظهر هنا تلقائيًا بعد إضافتها دون تحديث التطبيق.</div>';
        }
      }else{
        box.innerHTML='<div class="x30-err">⚠️ تعذر جلب الملفات الآن — تحقق من اتصالك واضغط «🔄 تحديث المكتبة».</div>';
      }
      return;
    }
    var rows=[];
    for(var i=0;i<files.length;i++){
      var f=files[i];
      var okC=(!cycle||f.cycle===cycle),okY=(!year||f.year===year),okS=(!subject||f.subject===subject);
      /* خصوصية الشعب: ملف الشعبة يظهر لطلاب شعبته فقط، والملف العام يظهر للجميع */
      var fbr=(''+(f.branch||'')).split(',');var okB=(!f.branch)||(branch&&(fbr.indexOf(branch)>=0));      var okT=true;
      if(tab==='sum'){okT=(f.type==='sum')}
      else if(tab==='ex'){okT=(f.type==='ex')}
      else{okT=(f.type===mode&&(!term||!f.term||(''+f.term)===(''+term)))}
      if(okC&&okY&&okS&&okB&&okT){rows.push(f)}
    }
    try{rows.sort(function(a,b){var ta=(a&&a.term)?(parseInt(a.term,10)||0):0,tb=(b&&b.term)?(parseInt(b.term,10)||0):0;if(ta!==tb){return ta-tb}return (''+((a&&a.name)||'')).localeCompare(''+((b&&b.name)||''))})}catch(e35s){}
    if(!rows.length){
      var msg=(bName?('لا توجد ملفات في مكتبة هذه الشعبة بعد — تضيفها إدارة المنصة قريبًا.'):'لا توجد ملفات في هذا القسم بعد — تُضاف تدريجيًا.');
      if(isAdmin()){
        box.innerHTML='<p class="x17-empty">'+msg+'</p>'+
         '<div class="x30-row" style="margin-top:10px"><button class="btn btn-primary" onclick="navigate(\'admin\')">🛡️ أنت الإدارة — أضف ملفات من لوحة الإدارة</button></div>';
      }else{
        box.innerHTML='<p class="x17-empty">'+msg+'</p>';
      }
      return;
    }
    var b='';
    for(var k=0;k<rows.length;k++){
      var ff=rows[k];
      var metaParts=[X30_TYPE[ff.type]||'',x30YearOf(ff.year)||''];
      if(bName){metaParts.push(bName)}
      if(ff.subject){metaParts.push(ff.subject)}
      if(ff.term&&(X30_TERMS[ff.term]||'')){metaParts.push(X30_TERMS[ff.term])}
      var meta='';
      for(var m=0;m<metaParts.length;m++){if(metaParts[m]){meta+=((m>0&&meta)?' · ':'')+escAttr(metaParts[m])}}
      b+='<div class="x30-file"><b>'+escAttr(ff.name||'ملف')+'</b>'+
       ((ff.descr)?('<div class="x30-meta">'+escAttr(ff.descr)+'</div>'):'')+
       ((meta)?('<div class="x30-meta">'+meta+'</div>'):'')+
       '<button class="btn btn-sm" onclick="x30Preview('+ff.id+')">👁 معاينة قبل التنزيل</button> '+
       '<button class="btn btn-sm btn-primary" onclick="x30Dl('+ff.id+')">⬇️ تنزيل</button></div>';
    }
    box.innerHTML=b;
  });
  return h;
}
/* 34.ح بيانات الإصدار 34 */
APP_META.ver='34.0';APP_META.date='2026-10-31';
APP_META.notes='الإصدار 34 — الاستقرار النهائي: قُتل التوهج/الخط أعلى الشاشة نهائيًا في كل الصفحات (كان توهجًا في خلفية الصفحة وظهر إصلاحه الحقيقي هنا)، وصار التعرف على حساب الإدارة ببريده مباشرة يعمل فورًا دون أي إعداد، والتبويب النشط في الشريط السفلي رقاقة زجاجية أنيقة بدل الشعاع، وكل النصوص الباهتة صارت واضحة في الوضعين الرأسي والأفقي، والإشعارات تبقى 6 ثوانٍ وتُزاح بالسحب يمينًا أو يسارًا أو بالنقرة مثل إشعارات الهاتف، وعند فراغ مكتبة PDF يظهر للمالك زر مباشر للوحة الإدارة، مع كل مزايا الإصدارات السابقة: مكتبة PDF خاصة بكل شعبة عبر pdfs.json بلا أي خدمة خارجية.';
try{APP_META.changelog.unshift('الإصدار 34 — الاستقرار النهائي: لا خط ولا توهج أعلى الشاشة في أي صفحة بعد اليوم (عُثر على المصدر الحقيقي وأُزيل)، وحساب الإدارة يُعرف ببريده تلقائيًا فتفتح له لوحة الإدارة فورًا، والتبويب النشط رقاقة زجاجية بلا شعاع، والنصوص الباهتة واضحة تمامًا في الوضعين الرأسي والأفقي، والإشعارات تبقى 6 ثوانٍ وتُسحب للإزالة كإشعارات الهاتف، وزر مباشر للمالك عند فراغ المكتبة.')}catch(e){}
function fallbackNews18(){
  return [{title:'الإصدار 34 — الاستقرار النهائي',
    body:'لا خط ولا توهج أعلى الشاشة في أي صفحة بعد اليوم، ولوحة الإدارة تفتح لحساب الإدارة فورًا ببريده، والتبويب النشط رقاقة زجاجية أنيقة، وكل النصوص واضحة في الوضعين الرأسي والأفقي، والإشعارات تبقى 6 ثوانٍ وتُزاح بالسحب مثل الهاتف.',
    date:APP_META.date}];
}
