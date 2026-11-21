/* ============ الطبقة 49 — الإصدار 49: إصلاحات جذرية + لون الكتابة + مصادقة مضمّنة ============ */
/* 49.أ إصلاح الخلفية الجذري: body::before كان غلافًا معتمًا يغطي خلفية الجسم كاملة — نطبق الخلفية عليه وعلى الجسم معًا */
function x48BgApply(){
  try{
    var eff=x48EffTheme();
    var dim=(eff==='light')?(XCFG.dimL===undefined?.15:XCFG.dimL):(XCFG.dimD===undefined?.45:XCFG.dimD);
    var id=(eff==='light')?(XCFG.bgL||'def'):(XCFG.bgD||'def');
    var img=(eff==='light')?(XCFG.imgL||''):(XCFG.imgD||'');
    var pos=(eff==='light')?(XCFG.posL||'center'):(XCFG.posD||'center');
    var cssv='';
    if(img){cssv='url("'+(''+img).split('"').join('%22')+'")'}
    else if(id&&id!=='def'){for(var i=0;i<X48_BGS.length;i++){if(X48_BGS[i].id===id){cssv=X48_BGS[i].css}}}
    var el=gid('x48-bgstyle');
    if(!el){el=document.createElement('style');el.id='x48-bgstyle';(document.head||document.documentElement).appendChild(el)}
    if(!cssv){el.textContent='';return}
    var ov=(eff==='light')?'rgba(244,247,252,'+dim+')':'rgba(8,13,24,'+dim+')';
    var bs='background:'+ov+','+cssv+' !important;background-size:cover !important;background-position:'+pos+' !important';
    el.textContent='body{'+bs+'}body::before{'+bs+'}';
  }catch(e){}
}
/* 49.ب لون الكتابة: لوحة ألوان مستقلة لكل وضع (داكن/فاتح) تُطبَّق عبر متغيرات النص الأصلية للمنصة */
var X48_INKS={
 w:['#FFFFFF','#E2EAF3','#BAC6D4','أبيض ناصع','Blanc éclatant','Pure white'],
 sky:['#CFE8FF','#A7C4E5','#7FA5CE','سماوي','Bleu ciel','Sky blue'],
 mint:['#C9F5E3','#9CD3BC','#70A896','أخضر ناعم','Vert tendre','Soft green'],
 gold:['#F8E3A8','#D2BA80','#A68F5D','ذهبي','Doré','Golden'],
 rose:['#FFD9E4','#DBAFC1','#AF8698','وردي هادئ','Rose doux','Soft rose']
};
var X48_INKSL={
 b:['#07090C','#36404B','#68737F','أسود فحمي','Noir charbon','Charcoal'],
 navy:['#12293E','#3A5A7A','#6C8BA9','كحلي','Bleu marine','Navy'],
 for:['#0B3D2C','#31725A','#659F87','أخضر غابي','Vert forêt','Forest'],
 wine:['#43111C','#75404F','#A67281','نبيذي','Bordeaux','Burgundy'],
 br:['#33200E','#63492F','#957B61','بني دافئ','Brun chaud','Warm brown']
};
X48L.ink=['لون الكتابة','Couleur du texte','Text color'];
X48L.ink_def=['افتراضي','Par défaut','Default'];
X48L.ink_note=['يُطبَّق على الوضع الحالي (داكن/فاتح) ولكل وضع لونه المستقل.','S\u2019applique au mode actuel ; chaque mode a sa couleur propre.','Applies to the current mode; each mode has its own color.'];
function x48InkApply(){
  try{
    var el=gid('x48-inkstyle');
    if(!el){el=document.createElement('style');el.id='x48-inkstyle';(document.head||document.documentElement).appendChild(el)}
    var css='';
    var dk=X48_INKS[XCFG.inkD||'def'];
    if(dk){css+='html[data-theme="dark"]{--text:'+dk[0]+' !important;--text-dim:'+dk[1]+' !important;--text-mute:'+dk[2]+' !important}'}
    var lt=X48_INKSL[XCFG.inkL||'def'];
    if(lt){css+='html[data-theme="light"]{--text:'+lt[0]+' !important;--text-dim:'+lt[1]+' !important;--text-mute:'+lt[2]+' !important}'}
    el.textContent=css;
  }catch(e){}
}
function x49InkHtml(){
  var h='';
  try{
    var eff=x48EffTheme();
    var key=(eff==='light')?'inkL':'inkD';
    var cur=XCFG[key]||'def';
    var ks=(eff==='light')?X48_INKSL:X48_INKS;
    h+='<div class="x48-lbl">'+x48T('ink')+'</div><div class="x48-pills">';
    h+='<button class="x48-pill'+(cur==='def'?' on':'')+'" onclick="setX(\''+key+'\',\'def\')">'+x48T('ink_def')+'</button>';
    for(var k in ks){
      if(!ks.hasOwnProperty(k))continue;
      var c=ks[k];
      h+='<button class="x48-pill'+(cur===k?' on':'')+'" onclick="setX(\''+key+'\',\''+k+'\')" aria-label="'+escAttr(c[3+X48LI()])+'">'+
       '<span class="x48-dot" style="background:'+c[0]+'"></span>'+c[3+X48LI()]+'</button>';
    }
    h+='</div><p class="x48-note">'+x48T('ink_note')+'</p>';
  }catch(e){}
  return h;
}
function x48ApplyAll(){x48ApplyLang();x48A11y();x48BgApply();x48InkApply()}
try{
  var __x49ApBase=X48_SECS[0].b;
  X48_SECS[0].b=function(){return __x49ApBase()+x49InkHtml()};
}catch(e){}
/* 49.ج صدق حفظ صورة الخلفية: إن ضاقت مساحة الجهاز نخبرك بصراحة بدل ادعاء النجاح */
function x48BgApplySel(){
  try{
    var eff=x48EffTheme();
    var d=(+X48.pdim||0)/100;
    if(eff==='light'){XCFG.bgL=(X48.pimg?'def':(X48.pid||'def'));XCFG.imgL=X48.pimg||'';XCFG.dimL=d;XCFG.posL=X48.ppos||'center'}
    else{XCFG.bgD=(X48.pimg?'def':(X48.pid||'def'));XCFG.imgD=X48.pimg||'';XCFG.dimD=d;XCFG.posD=X48.ppos||'center'}
    saveXCFG();
    var okSave=true;
    if(X48.pimg){
      var v2=null;
      try{v2=JSON.parse(localStorage.getItem(xcfgKey())||'null')}catch(e5){v2=null}
      okSave=(v2&&(v2.imgD===XCFG.imgD)&&(v2.imgL===XCFG.imgL));
    }
    x48BgApply();xCloseModal();
    if(okSave){toast('🖼️ تم تطبيق الخلفية وحفظها','success')}
    else{toast('⚠️ الصورة أكبر من مساحة الجهاز — اختر صورة أصغر أو خلفية من المعرض','error')}
    try{render()}catch(e){}
  }catch(e){toast('❌ تعذر تطبيق الخلفية','error')}
}
/* 49.د المصادقة المضمّنة: مفاتيح افتراضية داخل الكود (المفتاح العام anon مصمم ليكون علنيًا وتحميه سياسات RLS) ولوحة الإدارة تتجاوزها محليًا — مع بدائل تحميل للمكتبة إذا حُجب CDN الأول */
function x49Url(u){u=(''+u).replace(/\/+$/,'');if(u.slice(-8)==='/rest/v1'){u=u.slice(0,-8).replace(/\/+$/,'')}return u}
var X49_SB_DEF={url:'https://ykbvibkeguikrppvghir.supabase.co',anon:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlrYnZpYmtlZ3Vpa3JwcHZnaGlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTM1NjQ0MTQsImV4cCI6MjEwOTE0MDQxNH0.dFXVEnLMQNiVwKWJQcwD_BbapfObE5NecmEGcg4h3Ws'};
function x49SbSync(){
  try{
    var c=null;
    try{c=JSON.parse(localStorage.getItem('x30_admin_cfg')||'null')}catch(e1){c=null}
    if(c&&c.url&&c.anon){SB_CFG.url=x49Url(c.url);SB_CFG.anon=''+c.anon}
    else if(X49_SB_DEF.url&&X49_SB_DEF.anon){SB_CFG.url=x49Url(X49_SB_DEF.url);SB_CFG.anon=''+X49_SB_DEF.anon}
    if(SB_CFG.url&&SB_CFG.url.slice(-8)==='/rest/v1'){SB_CFG.url=x49Url(SB_CFG.url);try{SB.client=null;SB.ready=false}catch(e4){}}
    if(!SB.ready&&SB_CFG.url&&SB_CFG.anon&&typeof window.supabase!=='undefined'&&window.supabase&&typeof window.supabase.createClient==='function'){
      try{SB.client=window.supabase.createClient(SB_CFG.url,SB_CFG.anon);SB.ready=true;try{render()}catch(e2){}}catch(e3){}
    }
    return SB.ready;
  }catch(e){return false}
}
var X49_CDNS=[
 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/supabase.min.js',
 'https://unpkg.com/@supabase/supabase-js@2/dist/supabase.min.js',
 'https://fastly.jsdelivr.net/npm/@supabase/supabase-js@2/dist/supabase.min.js'
];
var X49_CDNI=0,X49_TRIES=0;
function x49SbInject(){
  try{
    var s=document.createElement('script');
    s.src=X49_CDNS[X49_CDNI];s.async=true;
    s.onerror=function(){X49_CDNI=(X49_CDNI+1)%X49_CDNS.length;x49SbInject()};
    (document.head||document.documentElement).appendChild(s);
  }catch(e){}
}
function x49SbTick(){
  try{
    if(SB_CFG.url&&SB_CFG.url.slice(-8)==='/rest/v1'){SB_CFG.url=x49Url(SB_CFG.url);try{SB.client=null;SB.ready=false}catch(e9){}}
    if(SB.ready)return;
    if(typeof window.supabase==='undefined'){
      if(X49_TRIES===8&&X49_CDNI<1){X49_CDNI=1;x49SbInject()}
      else if(X49_TRIES===16&&X49_CDNI<2){X49_CDNI=2;x49SbInject()}
    }
    x49SbSync();
    if(!SB.ready&&X49_TRIES<45){X49_TRIES++;setTimeout(x49SbTick,700)}
  }catch(e){}
}
x49SbTick();
/* 49.ه توصيل الإقلاع: لون الكتابة افتراضيًا + إعادة تطبيق الخلفية بالإصلاح الجديد + نقاط ألوان المعاينة */
try{
  XCFG.inkD=XCFG.inkD||'def';XCFG.inkL=XCFG.inkL||'def';
  try{loadXCFG()}catch(e0){}
  x48InkApply();
  x48BgApply();
  var x49s=document.createElement('style');
  x49s.id='x49-css';
  x49s.textContent='.x48-dot{display:inline-block;width:12px;height:12px;border-radius:50%;margin-inline-end:6px;vertical-align:-1px;border:1px solid rgba(255,255,255,.35)}html[data-theme="light"] .x48-dot{border-color:rgba(0,0,0,.25)}';
  (document.head||document.documentElement).appendChild(x49s);
}catch(e){}
/* 49.و بيانات الإصدار */
APP_META.ver='49.0';APP_META.date='2026-11-02';APP_META.lastUpdate='2026-11-02';
APP_META.notes='الإصدار 49 — إصلاح جذري للخلفية (كان غلاف معتم يغطيها فأصبحت تظهر فعليًا)، لون الكتابة الجديد بلوحة ألوان لكل وضع، مصادقة مضمّنة تعمل لكل الزوار مع بدائل تحميل للمكتبة، وصدق كامل في حفظ صور الخلفية.';
try{APP_META.changelog.unshift('الإصدار 49 — إصلاح الخلفية الجذري (طبقة الغلاف المعتم)، إضافة لون الكتابة لكل وضع، تضمين مفاتيح المصادقة افتراضيًا ليعمل الدخول بالرمز لدى كل الزوار مع بدائل CDN، وتحقق صادق من حفظ صور الخلفية.')}catch(e){}
function fallbackNews18(){
  return [{title:'الإصدار 49 — إصلاحات جذرية',
    body:'خلفيات التطبيق تعمل الآن فعلًا (أصلحنا الغلاف المعتم الذي كان يخفيها)، وأضفنا لون الكتابة بلوحة ألوان أنيقة لكل وضع، والدخول بالرمز صار مضمّنًا يعمل لدى كل الزوار.',
    date:APP_META.date}];
}
