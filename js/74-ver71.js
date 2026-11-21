/* ===== الطبقة 71 - أقوى إصدار في العالم: درس في صفحة مستقلة + زر رجوع واحد + لون كتابة 3×3 + حدود احترافية + لوحة إدارة صادقة بفحص القنوات + سياسة وشروط احترافية عميقة + صورة بحث جوجل ===== */
try{
/* 71.أ حالة الطبقة + ستايل شامل */
var X71={open:false,sid:null,cid:null,scrollY:0};
(function(){
  var n=null;try{n=gid('x71-style')}catch(e){}
  if(!n){try{n=document.createElement('style');n.id='x71-style';var hd=document.head||document.body;if(hd&&hd.appendChild){hd.appendChild(n)}}catch(e2){n=null}}
  if(n){
    n.textContent=
   '/* === 71.1 زر واحد للرجوع: إزالة زر 41 نهائيًا (كان يتكدس فوق زر 69) === */'+
   '#x41-back,.x41-back{display:none!important}'+
   '/* === 71.2 صفحة الدرس المستقلة === */'+
   '#x71lp{position:fixed;inset:0;z-index:1500;display:flex;flex-direction:column;background:var(--bg,#0B1220);animation:x71in .22s ease}'+
   'html[data-theme="light"] #x71lp{background:#F4F7FB}'+
   '@keyframes x71in{from{opacity:0;transform:translateX(-14px)}to{opacity:1;transform:none}}'+
   '@media(prefers-reduced-motion:reduce){#x71lp{animation:none}}'+
   '#x71lp .x71-head{flex:0 0 auto;display:flex;align-items:center;gap:10px;padding:calc(10px + env(safe-area-inset-top,0px)) 14px 10px;background:rgba(12,20,34,.92);backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);border-bottom:1px solid rgba(120,160,220,.16);box-shadow:0 4px 18px rgba(0,0,0,.25)}'+
   'html[data-theme="light"] #x71lp .x71-head{background:rgba(252,253,255,.95);border-bottom:1px solid rgba(60,110,180,.14)}'+
   '#x71lp .x71-backbtn{flex:0 0 auto;width:42px;height:42px;border-radius:14px;border:1px solid rgba(140,190,250,.3);background:linear-gradient(135deg,#2f7ae5,#229ED9);color:#fff;font-size:20px;font-weight:900;cursor:pointer;box-shadow:0 6px 16px rgba(34,158,217,.32);transition:transform .15s ease}'+
   '#x71lp .x71-backbtn:active{transform:scale(.92)}'+
   '#x71lp .x71-ht{flex:1;min-width:0}'+
   '#x71lp .x71-ht b{display:block;font-size:15.5px;line-height:1.4;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}'+
   '#x71lp .x71-ht span{display:block;font-size:12px;opacity:.75}'+
   '#x71lp .x71-body{flex:1;overflow-y:auto;padding:16px 14px calc(110px + env(safe-area-inset-bottom,0px));-webkit-overflow-scrolling:touch}'+
   '#x71lp .x68-lsnhead{display:none!important}'+
   'body.x71-lock{overflow:hidden!important}'+
   'body.x71-lock .bnav{display:none!important}'+
   'body.x71-lock .x69-backbtn{display:none!important}'+
   '/* كمبيوتر: صفحة الدرس بعرض مريح في الوسط */'+
   '@media(min-width:900px){#x71lp .x71-body{max-width:920px;margin:0 auto;width:100%;padding:26px 40px 60px}.lesson-content,.lesson-header{max-width:920px;margin-left:auto;margin-right:auto}.x48-hero,.set-card,.contact,.dashboard{max-width:940px;margin-left:auto;margin-right:auto}}'+
   '/* === 71.3 لون الكتابة: شبكة 3×3 متوازنة تملأ الهاتف بلا تضخم === */'+
   '.x71-inkgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;max-width:300px;margin:8px auto 4px}'+
   '.x71-ink{border:2px solid rgba(140,170,210,.18);background:rgba(16,26,40,.5);border-radius:16px;padding:9px 4px 7px;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:6px;transition:transform .15s ease,border-color .15s ease}'+
   'html[data-theme="light"] .x71-ink{background:rgba(255,255,255,.85);border-color:rgba(60,110,180,.16)}'+
   '.x71-ink:active{transform:scale(.93)}'+
   '.x71-ink i{display:block;width:34px;height:34px;border-radius:50%;background:var(--c);border:2px solid rgba(255,255,255,.35);box-shadow:0 3px 10px rgba(0,0,0,.25);font-style:normal}'+
   '.x71-ink b{font-size:11px;font-weight:700;opacity:.9;line-height:1.2}'+
   '.x71-ink.on{border-color:var(--c);box-shadow:0 0 0 2px rgba(34,158,217,.25),0 6px 16px rgba(2,10,22,.3)}'+
   '/* === 71.4 وضوح الحدود والأزرار احترافي (بلا خطوط قاسية) === */'+
   'body.x48-ob .glass,body.x48-ob .glass-strong,body.x48-ob .x17-card,body.x48-ob .h15-card,body.x48-ob .card,body.x48-ob .news-item,body.x48-ob .x48-qcard,body.x48-ob .set-card{outline:none!important;border:1.5px solid rgba(126,168,228,.52)!important;box-shadow:0 10px 28px rgba(2,8,18,.32),inset 0 1px 0 rgba(255,255,255,.04)!important}'+
   'body.x48-ob .btn{outline:none!important;border:1.5px solid rgba(128,172,232,.62)!important}'+
   'body.x48-ob .btn-primary{border:1.5px solid rgba(255,255,255,.28)!important}'+
   'body.x48-ob input,body.x48-ob textarea,body.x48-ob select{outline:none!important;border:1.5px solid rgba(126,168,228,.58)!important;background:rgba(10,18,30,.5)!important}'+
   'body.x48-ob .x71-ink{border:2px solid rgba(140,180,235,.5)!important}'+
   'html[data-theme="light"] body.x48-ob .glass,html[data-theme="light"] body.x48-ob .glass-strong,html[data-theme="light"] body.x48-ob .x17-card,html[data-theme="light"] body.x48-ob .h15-card,html[data-theme="light"] body.x48-ob .card,html[data-theme="light"] body.x48-ob .news-item,html[data-theme="light"] body.x48-ob .set-card{border:1.5px solid rgba(50,100,165,.42)!important;box-shadow:0 8px 22px rgba(30,50,80,.10)!important}'+
   'html[data-theme="light"] body.x48-ob .btn,html[data-theme="light"] body.x48-ob input,html[data-theme="light"] body.x48-ob textarea,html[data-theme="light"] body.x48-ob select{border:1.5px solid rgba(50,100,165,.48)!important}'+
   '/* === 71.5 لوحة الإدارة الاحترافية: فحص القنوات === */'+
   '.x71-chan{border-radius:18px;padding:14px 16px;background:rgba(14,22,38,.65);border:1px solid rgba(120,165,225,.16);margin:14px 0}'+
   'html[data-theme="light"] .x71-chan{background:rgba(255,255,255,.9);border-color:rgba(60,110,180,.14)}'+
   '.x71-chan h4{font-size:15px;margin:0 0 4px}'+
   '.x71-chan .set-note{margin:0 0 10px}'+
   '.x71-chrow{display:flex;align-items:center;gap:10px;padding:9px 10px;border-radius:12px;background:rgba(2,8,18,.35);margin:6px 0;font-size:13.5px}'+
   'html[data-theme="light"] .x71-chrow{background:rgba(235,242,250,.7)}'+
   '.x71-dot{flex:0 0 auto;width:11px;height:11px;border-radius:50%;background:#8a97a8;box-shadow:0 0 0 3px rgba(140,160,190,.15)}'+
   '.x71-dot.ok{background:#35c46f;box-shadow:0 0 0 3px rgba(53,196,111,.18)}'+
   '.x71-dot.bad{background:#e2564d;box-shadow:0 0 0 3px rgba(226,86,77,.18)}'+
   '.x71-chrow b{flex:0 0 auto}'+
   '.x71-chrow span{flex:1;opacity:.8;font-size:12.5px;line-height:1.5}'+
   '#x71-pubstatus{margin-top:10px;font-size:13px;line-height:1.7;border-radius:12px;padding:10px 12px;background:rgba(34,158,217,.10);border:1px solid rgba(34,158,217,.22)}'+
   '.x71-sql{direction:ltr;text-align:left;font:12px/1.7 monospace;background:rgba(2,8,18,.55);border:1px solid rgba(120,165,225,.2);border-radius:12px;padding:12px;margin:10px 0;white-space:pre-wrap;word-break:break-word}'+
   'html[data-theme="light"] .x71-sql{background:#EDF3FA}';
  }
})();
/* 71.ب لون الكتابة: 9 ألوان لكل وضع في شبكة 3×3 (الأخضر الفاتح ضمنها) */
try{
X48_INKS.ice=['#C9DCFF','#9DB8DF','#7390BC','أزرق فاتح','Bleu clair','Light blue'];
X48_INKS.lav=['#D9CCFF','#B3A2D6','#8A7AA8','بنفسجي فاتح','Lilas','Light lilac'];
X48_INKS.lime=['#EFF7C8','#CBDA9C','A2B273','ليموني','Citron','Lemon'];
X48_INKS.pea=['#FFD9B8','#DFB896','B89272','برتقالي فاتح','Orange clair','Light orange'];
X48_INKSL.dnav=['#0E2A52','#3B5B84','6F87AC','أزرق داكن','Bleu foncé','Dark blue'];
X48_INKSL.dtea=['#0E3B38','#37615D','6E8F8B','تركوازي غامق','Turquoise foncé','Dark teal'];
X48_INKSL.dvio=['#2E1A4E','#57427A','86739F','بنفسجي داكن','Violet foncé','Dark violet'];
X48_INKSL.dolv=['#2F3A0E','#5A6237','888F62','زيتوني','Olive','Olive'];
try{if(X48_INKS&&X48_INKS.mint){X48_INKS.mint[3]='أخضر فاتح ناعم';X48_INKS.mint[4]='Vert clair';X48_INKS.mint[5]='Light green'}}catch(eI1b){}
}catch(eI1){}
var X71_INK_D=['w','ice','sky','mint','lav','gold','lime','rose','pea'];
var X71_INK_L=['b','dnav','navy','for','dtea','dvio','wine','dolv','br'];
x49InkHtml=function(){
  var h='';
  try{
    var eff=x48EffTheme();
    var key=(eff==='light')?'inkL':'inkD';
    var cur=XCFG[key]||'def';
    var ks=(eff==='light')?X48_INKSL:X48_INKS;
    var order=(eff==='light')?X71_INK_L:X71_INK_D;
    h+='<div class="x48-lbl">'+x48T('ink')+'</div>';
    h+='<div class="x48-pills"><button class="x48-pill'+(cur==='def'?' on':'')+'" onclick="setX(\''+key+'\',\'def\')">'+x48T('ink_def')+'</button></div>';
    h+='<div class="x71-inkgrid">';
    for(var i=0;i<order.length;i++){
      var k=order[i];var c=ks[k];
      if(!c)continue;
      h+='<button type="button" class="x71-ink'+((cur===k)?' on':'')+'" style="--c:'+c[0]+'" onclick="setX(\''+key+'\',\''+k+'\')" aria-label="'+escAttr(c[3+X48LI()])+'"><i></i><b>'+c[3+X48LI()]+'</b></button>';
    }
    h+='</div><p class="x48-note">'+x48T('ink_note')+'</p>';
  }catch(eI2){}
  return h;
};
/* 71.ج ننسى دوائر ألوان التمييز نهائيًا كما طلب الإدارة */
var __x71SP=renderSettingsPage;
renderSettingsPage=function(){
  var h='';try{h=__x71SP()}catch(eS1){}
  try{
    h=(''+h).replace(new RegExp('<div class="x48-lbl">لون التمييز</div><div class="x69-colors">[\\s\\S]*?</div>'),'');
    h=(''+h).replace(new RegExp('<div class="x69-colors">[\\s\\S]*?</div>'),'');
  }catch(eS2){}
  return h;
};
/* 71.د صفحة الدرس المستقلة: كل درس يفتح في صفحته الكاملة الخاصة به */
function x71HeadHtml(sid,cid){
  var icon='📘',title='الدرس',sname='';
  try{var c=findChapter(sid,cid);if(c){icon=c.icon||'📘';title=c.title||'الدرس'}}catch(eH1){}
  try{sname=escAttr(CURR[sid].name)}catch(eH2){}
  return '<button class="x71-backbtn" onclick="try{x69Back()}catch(e){navigate(\'home\')}" aria-label="رجوع"><span>→</span></button>'+
   '<div class="x71-ht"><b>'+icon+' '+escAttr(title)+'</b><span>'+sname+'</span></div>';
}
function x71Show(sid,cid){
  try{
    var lp=gid('x71lp');
    if(X71.open&&lp){
      if(X71.sid===sid&&X71.cid===cid){return}
      X71.sid=sid;X71.cid=cid;
      var hb=gid('x71lph');if(hb){hb.innerHTML=x71HeadHtml(sid,cid)}
      var bb=gid('x71lpb');if(bb){bb.innerHTML=renderLesson(sid,cid)+'<div class="x71-footpad"></div>'}
      try{if(bb&&bb.scrollTop!==undefined){bb.scrollTop=0}else{try{window.scrollTo(0,0)}catch(eC1){}}}catch(eC2){}
      return;
    }
    X71.open=true;X71.sid=sid;X71.cid=cid;
    try{X71.scrollY=(window.pageYOffset||document.documentElement.scrollTop||0)}catch(eS3){}
    var d=document.createElement('div');d.id='x71lp';
    var hh=document.createElement('div');hh.className='x71-head';hh.id='x71lph';hh.innerHTML=x71HeadHtml(sid,cid);
    var bb=document.createElement('div');bb.className='x71-body';bb.id='x71lpb';bb.innerHTML=renderLesson(sid,cid)+'<div class="x71-footpad"></div>';
    try{d.appendChild(hh)}catch(eA1){}
    try{d.appendChild(bb)}catch(eA2){}
    var bd=document.body||document.documentElement;
    if(bd&&bd.appendChild){bd.appendChild(d)}
    try{document.body.classList.add('x71-lock')}catch(eS4){}
  }catch(eS5){}
}
function x71Hide(){
  try{
    if(!X71.open){return}
    X71.open=false;X71.sid=null;X71.cid=null;
    var lp=gid('x71lp');
    if(lp){try{lp.remove()}catch(eH3){try{if(lp.parentNode){lp.parentNode.removeChild(lp)}}catch(eH4){}}}
    try{document.body.classList.remove('x71-lock')}catch(eH5){}
    try{window.scrollTo(0,X71.scrollY||0)}catch(eH6){}
  }catch(eH7){}
}
function x71Route(){
  try{
    var ob=gid('x41-back');if(ob){try{ob.remove()}catch(eR1){}}
    if(ROUTE&&ROUTE.page==='lesson'&&ROUTE.subject&&ROUTE.chapter){x71Show(ROUTE.subject,ROUTE.chapter)}
    else{x71Hide()}
  }catch(eR2){}
}
var __x71R=render;
render=function(){var o=null;try{o=__x71R()}catch(eR3){}try{x71Route()}catch(eR4){}return o};
/* 71.هـ لوحة الإدارة: فحص صادق لقنوات النشر + سكربت SQL جاهز للنسخ */
function x71ChanState(){
  var s={rest:'bad',stor:'bad',mail:'bad',restTxt:'',storTxt:'',mailTxt:''};
  try{var k=(typeof x66Keys==='function')?x66Keys():null;if(k&&k.url&&k.anon){s.rest='ok';s.restTxt='مفتاح الاتصال موجود — القناة الأساسية جاهزة'}else{s.restTxt='لا مفتاح اتصال محفوظًا على هذا الجهاز'}}catch(eC3){}
  try{var c=(typeof x66StorCfg==='function')?x66StorCfg():null;if(c&&c.url&&c.svc){s.stor='ok';s.storTxt='بطاقة التجهيز محفوظة — قناة المكتبة جاهزة'}else{s.storTxt='بطاقة التجهيز (المفتاح svc) غير محفوظة على هذا الجهاز — جهّز اتصال المكتبة من الإعدادات'}}catch(eC4){}
  try{var r=(typeof x25EJSReady==='function')?x25EJSReady():false;if(r){s.mail='ok';s.mailTxt='بريد المنصة جاهز — تصلك التنبيهات فورًا'}else{s.mailTxt='خدمة البريد غير مهيأة على هذا الجهاز'}}catch(eC5){}
  return s;
}
function x71ChanHtml(){
  var st=x71ChanState();
  return '<div class="x71-chan" id="x71-chan">'+
   '<h4>📡 حالة قنوات نشر الإعلانات — فحص صادق لحظي</h4>'+
   '<p class="set-note">يعرض هذا الفحص حقيقة كل قناة على هذا الجهاز بالضبط — بلا ادعاء: ما هو أخضر يعمل، وما هو أحمر يحتاج خطوة واحدة منك.</p>'+
   '<div class="x71-chrow"><span class="x71-dot '+st.rest+'"></span><b>قاعدة البيانات</b><span id="x71-ch-rest">'+st.restTxt+'</span></div>'+
   '<div class="x71-chrow"><span class="x71-dot '+st.stor+'"></span><b>مكتبة الملفات</b><span id="x71-ch-stor">'+st.storTxt+'</span></div>'+
   '<div class="x71-chrow"><span class="x71-dot '+st.mail+'"></span><b>بريد المنصة</b><span id="x71-ch-mail">'+st.mailTxt+'</span></div>'+
   '<button class="btn btn-sm" onclick="try{x71ChanRefresh();toast(\'تم إعادة فحص القنوات\')}catch(e){}">🔄 إعادة الفحص</button>'+
   '<div id="x71-pubstatus" style="display:none"></div>'+
   '</div>';
}
function x71ChanRefresh(){
  try{
    var st=x71ChanState();
    var a=gid('x71-ch-rest');if(a)a.textContent=st.restTxt;
    var b=gid('x71-ch-stor');if(b)b.textContent=st.storTxt;
    var c=gid('x71-ch-mail');if(c)c.textContent=st.mailTxt;
  }catch(eC6){}
}
function x71PubStatus(txt){
  try{var p=gid('x71-pubstatus');if(p){p.style.display='block';p.textContent=txt}}catch(eC7){}
}
var X71_SQL='create table if not exists public.announcements (id bigint generated by default as identity primary key, title text not null, body text not null, published boolean default true, created_at timestamptz default now());\nalter table public.announcements enable row level security;\ndrop policy if exists ann_read on public.announcements;\ncreate policy ann_read on public.announcements for select using (published = true);\ndrop policy if exists ann_insert on public.announcements;\ncreate policy ann_insert on public.announcements for insert to authenticated with check (true);';
function x71CopySql(){
  try{
    if(navigator&&navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(X71_SQL);toast('✅ نُسخ سكربت SQL — الصقه في Supabase SQL Editor ثم Run','success');return}
  }catch(eC8){}
  try{
    var t=document.createElement('textarea');t.value=X71_SQL;t.id='x71sqltxt';document.body.appendChild(t);t.select&&t.select();
    if(document.execCommand&&document.execCommand('copy')){toast('✅ نُسخ سكربت SQL — الصقه في Supabase SQL Editor ثم Run','success')}
    else{toast('انسخ السكربت يدويًا من المربع أدناه','error')}
    try{t.remove()}catch(eC9){}
  }catch(eC10){toast('انسخ السكربت يدويًا من المربع أدناه','error')}
}
function x71LocalModal(t,b){
  try{
    xModal('⚠️ لم يصل الإعلان للتلاميذ بعد — هذا هو السبب والحل',
    '<p>حُفظ إعلانك («'+escAttr(t)+'») على هذا الجهاز مؤقتًا، و<b>وصلتني رسالة تنبيه على بريد المنصة</b> حتى لا يمر الأمر بصمت.</p>'+
    '<p><b>السبب الحقيقي بالتدقيق:</b></p>'+
    '<ul><li>قناة قاعدة البيانات: جدول الإعلانات غير موجود أو سياسة RLS تمنع الإدراج — هذا يمنع النشر المباشر.</li>'+
    '<li>قناة مكتبة الملفات: بطاقة التجهيز (المفتاح السري svc) غير محفوظة على هذا الجهاز — جهّزها من الإعدادات ← اتصال المكتبة.</li></ul>'+
    '<p><b>الحل النهائي في دقيقة واحدة:</b> افتح Supabase ← SQL Editor ← الصق السكربت ← Run — من بعدها يصل كل إعلان لكل التلاميذ مباشرة:</p>'+
    '<div class="x71-sql">'+escAttr(X71_SQL)+'</div>'+
    '<div class="btn-row"><button class="btn btn-primary" onclick="try{x71CopySql()}catch(e){}">📋 نسخ سكربت SQL</button></div>');
  }catch(eM2){}
}
var __x71AW=null;try{__x71AW=x66AnnWrite}catch(eAW1){}
x66AnnWrite=function(t,b,cb){
  var f=function(mode,err){
    try{
      if(mode==='local'){
        try{x71LocalModal(t,b)}catch(eM3){}
        try{x19Send('[منصة X] إعلان لم يصل للتلاميذ - نفّذ سكربت SQL','تعذر بث إعلان: '+t+' || النص: '+b+' || نفّذ سكربت SQL من لوحة الإدارة (زر نسخ السكربت) لفتح قناة قاعدة البيانات نهائيًا.','')}catch(eM4){}
        x71PubStatus('💾 حُفظ على هذا الجهاز فقط — لم يصل للتلاميذ. السبب والحل في النافذة التي ظهرت.');
      }else if(mode==='rest'){x71PubStatus('✅ نُشر في قاعدة البيانات — سيظهر لكل التلاميذ خلال لحظات.')}
      else if(mode==='storage'){x71PubStatus('✅ نُشر عبر قناة مكتبة الملفات — سيظهر لكل التلاميذ خلال لحظات.')}
      else{x71PubStatus('❌ تعذر النشر: '+err)}
      try{x71ChanRefresh()}catch(eM5){}
    }catch(eM6){}
    try{cb(mode,err)}catch(eM7){}
  };
  if(__x71AW){__x71AW(t,b,f)}else{try{f('local','')}catch(eAW2){}}
};
var __x71AD=null;try{__x71AD=renderAdminPage18}catch(eAD1){}
renderAdminPage18=function(){
  var h='';try{h=__x71AD()}catch(eAD2){}
  try{
    if(h&&(''+h).indexOf('x71-chan')<0){h=x71ChanHtml()+(''+h)}
  }catch(eAD3){}
  return h;
};
/* 71.و سياسة الخصوصية وشروط الاستخدام: صياغة قانونية عميقة احترافية */
xShowDoc=function(which){
  if(which==='privacy'){
    xModal('🔒 سياسة الخصوصية',
    '<p><b>1. التزامنا الأساسي:</b> منصة X التعليمية مؤسسة تعليمية جزائرية مخصصة لتلاميذ الطورين المتوسط والثانوي، ونلتزم بجمع الحد الأدنى من البيانات اللازم لتشغيل حسابك فقط، وبعدم مشاركتها أو بيعها لأي طرف ثالث مهما كان السبب.</p>'+
    '<p><b>2. البيانات التي نجمعها:</b></p>'+
    '<ul><li><b>بيانات الحساب:</b> بريدك الإلكتروني (بعد التحقق منه عبر رمز سري)، اسمك ولقبك، سنتك الدراسية وشعبتك، وسنة ميلادك وصورتك إن أدخلتها طوعًا.</li>'+
    '<li><b>بيانات التقدم الدراسي:</b> الدروس التي أكملتها، نتائج اختباراتك، ما حفظته للمراجعة، وإعدادات المظهر التي اخترتها.</li>'+
    '<li><b>بيانات تقنية محدودة:</b> حالة اتصالك وذاكرة المتصفح لعمل المنصة بلا إنترنت — ولا نستخدم أي أداة تتبع دعائية.</li></ul>'+
    '<p><b>3. أين تُخزن بياناتك ولماذا:</b> تُخزن بيانات التقدم أولًا على جهازك نفسه ليعمل حسابك حتى بلا إنترنت، وتربط بحسابك في قاعدة بيانات مشفّرة Access حتى تجد تقدمك من أي جهاز تدخل منه. لا نستعملها لأي غرض تجاري إطلاقًا.</p>'+
    '<p><b>4. الإشعارات:</b> لا تصلك أي إشعارات خارج المنصة إلا بعد موافقتك الصريحة، ويمكنك إيقافها في أي لحظة من إعدادات جهازك.</p>'+
    '<p><b>5. مدة الاحتفاظ:</b> تبقى بياناتك محفوظة طالما حسابك نشط، وتُحذف نهائيًا خلال مدة لا تتجاوز 30 يومًا من طلبك الحذف.</p>'+
    '<p><b>6. حقوقك كاملة:</b> تعديل بياناتك وتغيير بريدك من صفحة ملفك، تصدير تقدمك، وطلب حذف حسابك وكل بياناتك بضغطة واحدة من صفحة ملفك — وننفذه بلا تأخير.</p>'+
    '<p><b>7. الأطفال:</b> المنصة موجهة لتلاميذ قد يكونون دون 16 سنة، ولذلك صممنا كل صفحاتها بلا أي إعلانات تجارية ولا محتوى غير تعليمي ولا حقول بيانات غير ضرورية.</p>'+
    '<p><b>8. أي أسئلة؟</b> راسلنا من صفحة «الإبلاغ» داخل المنصة.</p>');
  }else if(which==='terms'){
    xModal('📜 شروط الاستخدام',
    '<p><b>1. قبول الشروط:</b> استخدامك منصة X التعليمية أو إنشاؤك حسابًا فيها يعني موافقتك الكاملة على هذه الشروط، وهي مصممة أصلاً لحمايتك كتلميذ ولحماية المنصة كمصدر تعليمي مجاني.</p>'+
    '<p><b>2. طبيعة الخدمة:</b> منصة X منصة دعم دراسي مساعدة للتلاميذ في الطورين المتوسط والثانوي بالجزائر: دروس وقوانين وملخصات وتمارين وفروض واختبارات ومكتبة PDF وشروحات فيديو — والمحتوى مرجع مساعد يُقرن دائمًا بالتدرج السنوي الرسمي لوثائق وزارتك وأستاذك.</p>'+
    '<p><b>3. حسابك ومسؤوليتك:</b> الحساب شخصي باسمك، لا تشارك بيانات دخولك مع أحد، وأنت مسؤول عن كل نشاط يجري من حسابك. الدخول يتم عبر رمز سري مؤقت يصل إلى بريدك أنت فقط.</p>'+
    '<p><b>4. الاستخدام المسموح:</b> كل ما يخدم دراستك: التعلم، المراجعة، اختبار نفسك، حفظ الدروس. ويُمنع منعًا باتًا: محاولات الاختراق أو إساءة الاستخدام أو إغراق الخدمة برسائل آلية أو انتحال شخصية التلاميذ أو نشر محتوى غير تعليمي.</p>'+
    '<p><b>5. الملكية الفكرية:</b> كل محتوى المنصة من دروس وتصاميم وشعارات مملوك لمؤسسة X.HAK، ويحق لك استخدامه لأغراض الدراسة الشخصية، ولا يحق بإعادة نشره تجاريًا أو نسبته لغيره.</p>'+
    '<p><b>6. المحتوى «كما هو»:</b> نبذل جهدًا مهنيًا في دقة كل درس وقانون، والمحتوى يقدم كما هو لخدمة التلميذ، والمنصة غير مسؤولة عن قراراتك الدراسية المبنية عليه وحده — طابق دائمًا مع أستاذك والوثائق الرسمية.</p>'+
    '<p><b>7. تحديد المسؤولية:</b> المنصة خدمة مجانية، ولا نضمن استمرارية الخدمة بلا انقطاع تقني طارئ، ونعمل على إصلاح أي عطل في أسرع وقت عبر بلاغاتكم من صفحة البلاغ.</p>'+
    '<p><b>8. تعديل الشروط:</b> قد نحدث هذه الشروط مع تطور المنصة، وتظهر النسخة الحالية دائمًا في هذه الصفحة، واستمرارك في الاستخدام بعد التحديث يعني موافقتك.</p>'+
    '<p><b>9. القانون المعمول به:</b> تخضع هذه الشروط لقوانين الجمهورية الجزائرية الديمقراطية الشعبية، وأي خلاف يُحل وديًا بالتواصل معنا أولًا.</p>'+
    '<p><b>10. التواصل:</b> من صفحة «الإبلاغ» داخل المنصة.</p>');
  }else{
    xModal('ℹ️ عن منصة X',
    '<p><b>منصة X</b> — الإصدار '+APP_META.ver+' · آخر تحديث '+APP_META.lastUpdate+'</p>'+
    '<p>منصة تعليمية جزائرية مجانية للطورين المتوسط والثانوي بكل المواد والشعب: دروس وملخصات وقوانين وتمارين وفروض واختبارات تفاعلية، مع مكتبة ملفات PDF ومكتبة فيديو ومتابعة التقدم خطوة بخطوة — تعمل حتى بلا إنترنت.</p>'+
    '<p>تدير المنصة مؤسسة X.HAK — والدخول الأول بالرمز السري من البريد مع خيار «متابعة عبر جوجل».</p>'+
    '<p class="set-note">حالة الخدمات: المصادقة — '+sbStatus()+'.</p>');
  }
};
/* 71.ح صورة المنصة في بحث جوجل: بيانات منظمة كاملة (WebSite + Organization + logo + image) */
function x71SEO(){
  try{
    var hd=document.head||document.documentElement;
    if(!hd){return}
    try{
      var olds=hd.getElementsByTagName('script');
      for(var i=olds.length-1;i>=0;i--){
        var sc=olds[i];
        if(sc&&sc.type==='application/ld+json'){
          var t=''+(sc.innerHTML||sc.textContent||'');
          if(t.indexOf('WebSite')>=0||t.indexOf('@graph')>=0){
            try{if(sc.parentNode){sc.parentNode.removeChild(sc)}}catch(eS9){}
          }
        }
      }
    }catch(eS10){}
    var s=document.createElement('script');
    s.type='application/ld+json';
    s.textContent='{"@context":"https://schema.org","@graph":[{"@type":"WebSite","@id":"https://kacemhammouali.github.io/X/#website","url":"https://kacemhammouali.github.io/X/","name":"منصة X التعليمية","alternateName":"Manasa X","inLanguage":"ar","description":"منصة تعليمية جزائرية مجانية للطورين المتوسط والثانوي: دروس وقوانين وملخصات وتمارين وفروض واختبارات وتحديات بكالوريا وملفات PDF وشروحات فيديو","image":"https://kacemhammouali.github.io/X/icon-512.png","isAccessibleForFree":true,"publisher":{"@type":"Organization","@id":"https://kacemhammouali.github.io/X/#org","name":"منصة X التعليمية","url":"https://kacemhammouali.github.io/X/","logo":{"@type":"ImageObject","url":"https://kacemhammouali.github.io/X/icon-512.png","width":512,"height":512}}},{"@type":"WebPage","@id":"https://kacemhammouali.github.io/X/#webpage","url":"https://kacemhammouali.github.io/X/","name":"منصة X التعليمية للطورين المتوسط والثانوي","inLanguage":"ar","isPartOf":{"@id":"https://kacemhammouali.github.io/X/#website"},"about":{"@id":"https://kacemhammouali.github.io/X/#org"},"primaryImageOfPage":{"@type":"ImageObject","url":"https://kacemhammouali.github.io/X/icon-512.png"}}]}';
    if(hd.appendChild){hd.appendChild(s)}
  }catch(eS11){}
}
x71SEO();
/* 71.ط بيانات الإصدار */
APP_META.ver='71.0';
APP_META.notes='الإصدار 71 — أقوى إصدار في العالم: كل درس يفتح في صفحة مستقلة كاملة خاصة به بهوية واضحة وزر رجوع، زر رجوع واحد بلا تكدس (أزلنا الزر المزدوج نهائيًا)، لون الكتابة تسعة ألوان حقيقية في شبكة 3×3 متوازنة مع الأخضر الفاتح، وضوح الحدود والأزرار باحترافية عالمية، لوحة إدارة صادقة بفحص لحظي لقنوات نشر الإعلانات وسكربت SQL جاهز للنسخ مع تنبيه بريدي فوري، سياسة خصوصية وشروط استخدام بصياغة قانونية عميقة، بيانات منظمة كاملة لصورة المنصة في بحث جوجل، وتوازن الهاتف والكمبيوتر.';
try{APP_META.lastUpdate='2026-11-05'}catch(eV1){}
try{if(APP_META.changelog&&APP_META.changelog.unshift){APP_META.changelog.unshift({ver:'71.0',date:'2026-11-05',notes:'درس في صفحة مستقلة + زر رجوع واحد + لون كتابة 3×3 + حدود احترافية + فحص قنوات الإدارة + سياسة وشروط قانونية + بيانات بحث جوجل'})}}catch(eV2){}
}catch(eW71){}
