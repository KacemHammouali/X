'use strict';
/* ============================================================
   منصة X — الإصدار 16 — الموقع الرسمي
   محرك العرض + الخلفية الهندسية المستقرة + تنسيق المعادلات (KaTeX مع بديل بدون إنترنت)
   ============================================================ */

/* ---------------- 0. التخزين الآمن ---------------- */
var MEM={};
function stGet(k,d){try{var v=localStorage.getItem(k);return v?JSON.parse(v):d}catch(e){return (MEM[k]!==undefined)?MEM[k]:d}}
function stSet(k,v){MEM[k]=v;try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}

var STATE={
  done:stGet('n12_done',{}),
  saved:stGet('n12_saved',[]),
  quiz:stGet('n12_quiz',{}),
  fx:stGet('n12_fx',true),
  theme:stGet('n14_theme','dark')
};
function saveState(){stSet('n12_done',STATE.done);stSet('n12_saved',STATE.saved);stSet('n12_quiz',STATE.quiz);stSet('n12_fx',STATE.fx)}

/* ---------------- 1. بنك المحتوى (يُملأ في أجزاء لاحقة) ---------------- */
var CH_MATH=[],CH_PHYS=[];
var CURR={
  math:{name:'الرياضيات',icon:'📐',cls:'math',chapters:CH_MATH,
    desc:'أحد عشر محورًا وفق البرنامج السنوي الرسمي ومرتبة حسب الفصول الثلاثة: دروس مبسطة، رسومات توضيحية، خلاصة وقوانين في نهاية كل درس، وتحدي بكالوريا في نهاية كل محور.'},
  phys:{name:'العلوم الفيزيائية',icon:'⚛️',cls:'phys',chapters:CH_PHYS,
    desc:'اثنتا عشرة وحدة وفق البرنامج الرسمي: الميكانيك والطاقة (بما فيها الطاقة الداخلية)، كمية المادة والمعايرة، الكهرومغناطيسية والحث، ومدخل إلى الكيمياء العضوية.'}
};
var QUIZZES={};

function findChapter(sid,cid){var L=CURR[sid].chapters;for(var i=0;i<L.length;i++){if(L[i].id===cid)return L[i]}return null}
function chapterPos(sid,cid){var L=CURR[sid].chapters;for(var i=0;i<L.length;i++){if(L[i].id===cid)return i}return -1}
function totalLessons(){return CH_MATH.length+CH_PHYS.length}

/* ---------------- 2. تحويل LaTeX إلى نص مقروء (بديل KaTeX) ---------------- */
var TEXMAP={pi:'π',alpha:'α',beta:'β',gamma:'γ',theta:'θ',lambda:'λ',mu:'μ',omega:'ω',Delta:'Δ',delta:'δ',varepsilon:'ε',epsilon:'ε',phi:'φ',sigma:'σ',tau:'τ',rho:'ρ',infty:'∞',times:'×',cdot:'·',div:'÷',le:'≤',leq:'≤',ge:'≥',geq:'≥',ne:'≠',neq:'≠',approx:'≈',equiv:'≡',pm:'±',mp:'∓',Rightarrow:'⇒',rightarrow:'→',to:'→',mapsto:'↦',iff:'⇔',Longleftrightarrow:'⇔',implies:'⇒',in:'∈',notin:'∉',cup:'∪',cap:'∩',subset:'⊂',emptyset:'∅',varnothing:'∅',sum:'Σ',prod:'∏',int:'∫',angle:'∠',perp:'⊥',parallel:'∥',triangle:'△',because:'∵',therefore:'∴',cos:'cos',sin:'sin',tan:'tan',ln:'ln',log:'log',exp:'exp',lim:'lim',land:'∧',lor:'∨',uparrow:'↑',downarrow:'↓',nearrow:'↗',searrow:'↘',mid:'|',gcd:'gcd',max:'max',min:'min',arccos:'arccos',arcsin:'arcsin',arctan:'arctan',overrightarrow:'',vec:'',mathbb:'',mathcal:'',left:'',right:'',displaystyle:'',limits:'',quad:'',text:'',overline:'',bar:'',hat:'',begin:'',end:'',cases:'',aligned:'',array:'',overset:'',stackrel:'',longrightarrow:'⟶',longmapsto:'⟼',Gamma:'Γ',Omega:'Ω',deg:'deg',qquad:'  ',widehat:'',cdots:'⋯',ell:'ℓ',pmod:' mod ',bmod:' mod ',not:'¬',exists:'∃',forall:'∀'};
var SUP={'0':'⁰','1':'¹','2':'²','3':'³','4':'⁴','5':'⁵','6':'⁶','7':'⁷','8':'⁸','9':'⁹','-':'⁻','+':'⁺','n':'ⁿ','i':'ⁱ'};
var SUB={'0':'₀','1':'₁','2':'₂','3':'₃','4':'₄','5':'₅','6':'₆','7':'₇','8':'₈','9':'₉','n':'ₙ','k':'ₖ','i':'ᵢ','a':'ₐ','e':'ₑ','x':'ₓ','f':'ꜰ','A':'ₐ','B':'ᴃ','c':'с'};
function supConv(s){var o='',u;for(var i=0;i<s.length;i++){u=SUP[s[i]];if(u===undefined)return '^('+s+')';o+=u}return o}
function subConv(s){var o='',u;for(var i=0;i<s.length;i++){u=SUB[s[i]];if(u===undefined)return '_('+s+')';o+=u}return o}
function texFallback(tex){
  var s=tex;
  s=s.replace(/\\\\/g,'   ');
  s=s.replace(/\\tfrac/g,'\\frac');
  for(var it=0;it<6;it++){
    var m=s.match(/\\frac\{([^{}]*)\}\{([^{}]*)\}/);
    if(!m)break;
    s=s.replace(m[0],'('+m[1]+')∕('+m[2]+')');
  }
  s=s.replace(/\\sqrt\{([^{}]*)\}/g,'√($1)');
  s=s.replace(/\\sqrt\[(.*?)\]\{([^{}]*)\}/g,'$2^(1/$1)');
  s=s.replace(/\\overrightarrow\{([^{}]*)\}/g,'$1⃗');
  s=s.replace(/\\vec\{([^{}]*)\}/g,'$1⃗');
  s=s.replace(/\\mathbb\{([A-Z])\}/g,function(_,c){return {R:'ℝ',N:'ℕ',Z:'ℤ',Q:'ℚ',C:'ℂ'}[c]||c});
  s=s.replace(/\\lim\{\\limits\}?\{([^{}]*)\}/g,'lim');
  s=s.replace(/\\lim_{([^{}]*)}/g,'lim($1) ');
  s=s.replace(/\\text\{([^{}]*)\}/g,'$1');
  s=s.replace(/\^\{([^{}]*)\}/g,function(_,g){return supConv(g)});
  s=s.replace(/\^([A-Za-z0-9\-+])/g,function(_,g){return supConv(g)});
  s=s.replace(/_\{([^{}]*)\}/g,function(_,g){return subConv(g)});
  s=s.replace(/_([A-Za-z0-9])/g,function(_,g){return subConv(g)});
  s=s.replace(/\\([A-Za-z]+)/g,function(_,w){var t=TEXMAP[w];if(t!==undefined)return t;return ''});
  s=s.replace(/[{}]/g,'');
  return s;
}

/* ---------------- 3. تنسيق المعادلات ---------------- */
var KAT=null; /* null: غير معروف بعد، true: KaTeX متاح، false: بديل */
function typesetApp(){
  var app=document.getElementById('app');if(!app)return;
  if(KAT===true){try{renderMathInElement(app,{delimiters:[{left:'$$',right:'$$',display:true}],throwOnError:false});return}catch(e){KAT=false}}
  if(KAT===false){
    app.querySelectorAll('.math-block[data-tex]:not([data-done])').forEach(function(el){
      el.textContent=texFallback(el.dataset.tex);el.classList.add('math-fallback');el.dataset.done='1';
    });
    return;
  }
  setTimeout(function(){KAT=(typeof renderMathInElement==='function');typesetApp()},900);
}

/* ---------------- 4. العرض: أنواع الأقسام ---------------- */
function escAttr(s){return String(s).replace(/"/g,'&quot;')}
function mathBlock(tex){return '<div class="math-block" data-tex="'+escAttr(tex)+'">$$'+tex+'$$</div>'}
function secHTML(s){
  if((s.k==='ul'||s.k==='ol'||s.k==='warn'||s.k==='sum'||s.k==='method')&&!s.i&&Array.isArray(s.x)){s.i=s.x}
  switch(s.k){
    case 'h2':return '<h2>'+s.x+'</h2>';
    case 'h3':return '<h3>'+s.x+'</h3>';
    case 'p':return '<p>'+s.x+'</p>';
    case 'def':return '<div class="definition"><p><span class="dt">📘 '+(s.t||'تعريف')+' —</span> '+s.x+'</p></div>';
    case 'note':return '<div class="note-box"><b>💡 ملاحظة:</b> '+s.x+'</div>';
    case 'law':return '<div class="lawcard"><div class="lt"><span class="num">'+(s.n||'§')+'</span>'+s.t+'</div>'+mathBlock(s.m)+(s.x?'<div class="ln">'+s.x+'</div>':'')+'</div>';
    case 'math':return mathBlock(s.x);
    case 'ul':return '<ul>'+s.i.map(function(t){return '<li>'+t+'</li>'}).join('')+'</ul>';
    case 'ol':return '<ol>'+s.i.map(function(t){return '<li>'+t+'</li>'}).join('')+'</ol>';
    case 'ex':return '<div class="example"><p><span class="dt">✍️ '+(s.t||'مثال محلول')+' —</span></p><p>'+String(s.x).replace(/\n/g,'<br>')+'</p></div>';
    case 'exer':return '<div class="exer"><p class="eq"><span class="qn">'+(s.n||'?')+'</span>'+s.q+'</p><details><summary>📝 اعرض الحل المفصل</summary><ol class="sol">'+s.s.map(function(t){return '<li>'+t+'</li>'}).join('')+'</ol></details></div>';
    case 'warn':return '<div class="warning-box"><span class="dt">⚠️ أخطاء شائعة — تجنّبها:</span><ul>'+s.i.map(function(t){return '<li>'+t+'</li>'}).join('')+'</ul></div>';
    case 'sum':return '<div class="summary-box"><span class="dt">📌 الخلاصة الذهبية:</span><ul>'+s.i.map(function(t){return '<li>'+t+'</li>'}).join('')+'</ul></div>';
    case 'method':return '<div class="method"><div class="mt">🧭 '+(s.t||'منهجية الحل')+'</div><ol>'+s.i.map(function(t){return '<li>'+t+'</li>'}).join('')+'</ol></div>';
    case 'tbl':return '<div class="tblwrap"><table class="dtable"><thead><tr>'+s.h.map(function(t){return '<th>'+t+'</th>'}).join('')+'</tr></thead><tbody>'+s.r.map(function(row){return '<tr>'+row.map(function(c){return '<td>'+c+'</td>'}).join('')+'</tr>'}).join('')+'</tbody></table></div>';
    case 'map':return '<div class="cmap">'+s.i.map(function(m,idx){return '<div class="cm"><span class="n">'+(idx+1)+'</span><div><b>'+m.t+'</b><small>'+m.d+'</small></div></div>'}).join('')+'</div>';
    case 'svg':return '<div class="figwrap">'+s.x+(s.cap?'<div class="figcap">'+s.cap+'</div>':'')+'</div>';
  }
  return '';
}
function secsHTML(list){return list.map(secHTML).join('')}

/* ---------------- 5. التنقل (hash) ---------------- */
var ROUTE={page:'home',subject:null,chapter:null};
function parseHash(){
  var h=location.hash.replace(/^#\/?/,'');var p=h.split('/').filter(Boolean);
  ROUTE={page:'home',subject:null,chapter:null};
  if(p.length){ROUTE.page=p[0];if(p[1])ROUTE.subject=p[1];if(p[2])ROUTE.chapter=p[2]}
  if(ROUTE.page==='lesson'||ROUTE.page==='quiz'){if(!ROUTE.subject||!findChapter(ROUTE.subject,ROUTE.chapter||'')){ROUTE.page='home'}}
}
function navigate(page,subject,chapter){
  var h='#/'+page+(subject?'/'+subject:'')+(chapter?'/'+chapter:'');
  if(location.hash===h){render()}else{location.hash=h}
}
window.addEventListener('hashchange',function(){parseHash();render();window.scrollTo({top:0,behavior:'smooth'})});

/* ---------------- 6. الواجهات ---------------- */
function navLinkHTML(page,label){
  var act=(ROUTE.page===page)?' class="nav-link active"':' class="nav-link"';
  return '<span'+act+' onclick="navigate(\''+page+'\')">'+label+'</span>';
}
/* ===== لوغو المنصة X ===== */
var LOGO='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="100%" height="100%"><defs><linearGradient id="lxg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ff6b5e"/><stop offset=".45" stop-color="#f51d0d"/><stop offset="1" stop-color="#8f0b02"/></linearGradient><filter id="lxp" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="1.5" dy="1.5" stdDeviation="1.4" flood-color="#5c0700" flood-opacity=".5"/></filter></defs><rect width="64" height="64" rx="14" fill="#0a0a0a"/><circle cx="11" cy="15" r="1" fill="#c22012" opacity=".7"/><circle cx="52" cy="9" r="1.2" fill="#d83a28" opacity=".55"/><circle cx="57" cy="49" r="1" fill="#c22012" opacity=".6"/><circle cx="8" cy="50" r="1.2" fill="#d83a28" opacity=".5"/><g filter="url(#lxp)"><rect x="8" y="26" width="48" height="12" rx="5" fill="url(#lxg)" transform="rotate(45 32 32)"/><rect x="8" y="26" width="48" height="12" rx="5" fill="url(#lxg)" transform="rotate(-45 32 32)"/></g><rect x="10" y="27" width="44" height="2.4" rx="1.2" fill="#ffffff" opacity=".26" transform="rotate(45 32 32)"/><rect x="10" y="27" width="44" height="2.4" rx="1.2" fill="#ffffff" opacity=".26" transform="rotate(-45 32 32)"/></svg>';
/* ===== شريط التقدم القرائي ===== */
function initReadbar(){
  var bar=document.getElementById('readbar');
  if(!bar)return;
  var upd=function(){
    var h=document.documentElement.scrollHeight-window.innerHeight;
    var p=h>0?Math.min(100,Math.max(0,100*((window.pageYOffset||document.documentElement.scrollTop||0)/h))):0;
    bar.style.setProperty('--rp',p.toFixed(1)+'%');
  };
  window.addEventListener('scroll',upd,{passive:true});
  window.addEventListener('resize',upd);
  upd();
}
/* ===== تبويب خلاصة الوحدة (أهم النقاط والقوانين) ===== */
function kpHTML(cid){
  var kp=KP[cid];if(!kp)return '';
  var pts=(kp.pts||[]).map(function(t){return '<li>'+t+'</li>'}).join('');
  var laws=(kp.laws||[]).map(function(l){return '<div class="kp-law"><div class="kp-lt">📌 '+l.t+'</div>'+(l.m?mathBlock(l.m):(l.x?'<div class="kp-lx">'+l.x+'</div>':''))+'</div>'}).join('');
  var noLaws=(kp.laws||[]).length===0;
  if(noLaws&&!(kp.pts||[]).length)return '';
  return '<div class="kp-box fade-in"><div class="kp-head">🗂️ خلاصة الدرس — أهم الملاحظات والقوانين التي يجب أن تتذكرها</div>'+
   '<div class="kp-tabs">'+
   '<button id="kpt0" class="kpt kpt-on" onclick="kpTab(0)">🧠 أهم الملاحظات <span class="kpt-n">'+(kp.pts||[]).length+'</span></button>'+
   '<button id="kpt1" class="kpt" onclick="kpTab(1)">📜 القوانين <span class="kpt-n">'+(kp.laws||[]).length+'</span></button>'+
   '</div>'+
   '<div class="kp-vp" id="kpvp"><div class="kp-track" id="kptrack">'+
   '<div class="kp-slide"><div class="kp-ch">🧠 أهم الملاحظات</div><ul class="kp-pts">'+pts+'</ul></div>'+
   '<div class="kp-slide"><div class="kp-ch">📜 القوانين الواجب حفظها</div>'+laws+'</div>'+
   '</div></div>'+
   '<div class="kp-nav"><button class="kp-ar" onclick="kpMove(-1)" aria-label="السابق">◀</button><div class="kp-dots" id="kpdots"><span class="kpd kpd-on">●</span><span class="kpd">●</span></div><button class="kp-ar" onclick="kpMove(1)" aria-label="التالي">▶</button></div>'+
   '</div>';
}
var KPI=0;
function kpSync(){
  KPI=0;
  var tr=document.getElementById('kptrack');
  if(tr)tr.style.transform='translateX(0)';
  var d=document.getElementById('kpdots');
  if(d){var s=d.children;if(s[0])s[0].className='kpd kpd-on';if(s[1])s[1].className='kpd'}
}
function kpTab(i){
  KPI=(i+2)%2;
  var tr=document.getElementById('kptrack');
  if(tr)tr.style.transform='translateX('+(KPI?-100:0)+'%)';
  for(var j=0;j<2;j++){var b=document.getElementById('kpt'+j);if(b)b.className='kpt'+(j===KPI?' kpt-on':'')}
  var d=document.getElementById('kpdots');
  if(d){var s=d.children;for(var k=0;k<s.length;k++)s[k].className='kpd'+(k===KPI?' kpd-on':'')}
}
function kpMove(d){kpTab(KPI+d)}
/* السحب باللمس داخل خلاصة الدرس: يمين/يسار لتبديل التبويب */
var __ksw=null;
function kpTouchStart(x){__ksw=x}
function kpTouchEnd(x){
  if(__ksw===null)return;
  var dx=x-__ksw;__ksw=null;
  if(Math.abs(dx)>45)kpTab(KPI+(dx>0?0:1));
}
/* ===== تبويب الرسائل في الصفحة الرئيسية ===== */
function contactHTML(){
  return '<section class="contact glass-strong fade-in">'+
   '<h3 class="ct-head">📬 أرسل رسالة أو أبلغ عن خطأ</h3>'+
   '<p class="ct-sub">لاحظت خطأً في درس؟ عندك اقتراح أو استفسار؟ اكتب رسالتك هنا وسنصلك فورًا.</p>'+
   '<div class="ct-form">'+
   '<input id="msg-mail" class="inp" type="email" placeholder="بريدك الإلكتروني (ليصلك الرد)">'+
   '<select id="msg-type" class="inp"><option>تصحيح خطأ في درس</option><option>استفسار في درس</option><option>اقتراح تحسين</option><option>طلب حل تمرين / تحدي بكالوريا</option></select>'+
   '<textarea id="msg-body" class="inp" rows="4" placeholder="اكتب رسالتك هنا — إن كان خطأً اذكر الدرس والفقرة بالضبط…"></textarea>'+
   '<div class="btn-row">'+
   '<button id="sendMsg" class="btn btn-primary" onclick="sendMsg()">✉️ إرسال الرسالة</button>'+
   '<button class="btn" onclick="xCopyMsg()">📋 نسخ الرسالة</button>'+
'</div></div>'+
   '</section>';
}
function sendMsg(){
  var e=document.getElementById('msg-mail'),t=document.getElementById('msg-type'),b=document.getElementById('msg-body');
  var em=(e&&e.value||'').trim(),ty=(t&&t.value||'رسالة'),bd=(b&&b.value||'').trim();
  if(!em||em.indexOf('@')<1){toast('✍️ اكتب بريدك الإلكتروني أولًا','error');return}
  if(bd.length<5){toast('✍️ اكتب رسالتك أولًا','error');return}
  var btn=document.getElementById('sendMsg');
  var old=(btn&&btn.textContent)||'';
  try{if(btn){btn.disabled=true;btn.textContent='⏳ جارٍ الإرسال…'}}catch(e3){}
  fetch('https://formsubmit.co/ajax/kasembouhonali@gmail.com',{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify({_subject:'[منصة X] '+ty,_replyto:em,email:em,message:bd})})
  .then(function(r){
    try{if(btn){btn.disabled=false;btn.textContent=old}}catch(e3){}
    if(r&&r.ok){toast('✅ أُرسلت رسالتك بنجاح، شكرًا لك!','success');if(b)b.value='';if(e)e.value=''}
    else{toast('⚠️ تعذر الإرسال — تحقق من الاتصال وأعد المحاولة','error')}
  })
  .catch(function(){
    try{if(btn){btn.disabled=false;btn.textContent=old}}catch(e3){}
    toast('⚠️ تعذر الإرسال — تحقق من الاتصال بالإنترنت ثم أعد المحاولة','error');
  });
}
function renderNavbar(){
  var links=navLinkHTML('home','الرئيسية')+navLinkHTML('subject/math','الرياضيات')+navLinkHTML('subject/phys','الفيزياء والكيمياء')+navLinkHTML('dash','تقدّمي');
  return '<nav class="navbar">'+
   '<div class="logo" onclick="navigate(\'home\')"><div class="logo-mark">'+LOGO+'</div><span class="logo-text">X</span></div>'+
   '<div class="nav-links">'+links+'</div>'+
   '<div class="nav-side">'+
     '<button class="btn btn-sm '+(STATE.fx?'':'btn-ghost')+'" onclick="toggleFX()" title="تشغيل/إيقاف المؤثرات">'+(STATE.fx?'✨ مؤثرات':'💤 هادئ')+'</button>'+
     '<button class="btn btn-sm btn-ghost" onclick="toggleTheme()" title="التبديل بين الوضع الليلي والنهاري">'+(STATE.theme==='light'?'🌙 ليلي':'☀️ نهاري')+'</button>'+
     '<button class="mobile-menu-btn" onclick="toggleMobile()" aria-label="القائمة">☰</button>'+
   '</div></nav>'+
   '<div id="mmenu" class="mobile-menu glass-strong hidden">'+links+'</div>';
}
function toggleMobile(){var m=document.getElementById('mmenu');m.classList.toggle('hidden');m.classList.toggle('show')}
function toggleFX(){STATE.fx=!STATE.fx;saveState();applyFX();render();toast(STATE.fx?'✨ المؤثرات البصرية مفعّلة':'💤 الوضع الهادئ مفعّل (أداء أسرع)')}
function applyFX(){document.body.classList.toggle('fx-off',!STATE.fx)}
function applyTheme(){document.documentElement.setAttribute('data-theme',STATE.theme==='light'?'light':'dark')}
function toggleTheme(){STATE.theme=(STATE.theme==='light'?'dark':'light');stSet('n14_theme',STATE.theme);applyTheme();render()}

function doneCount(){return Object.keys(STATE.done).length}
function renderHome(){
  var md=CH_MATH.filter(function(c){return STATE.done[c.id]}).length;
  var pd=CH_PHYS.filter(function(c){return STATE.done[c.id]}).length;
  var html='<div class="hero fade-in">'+
   '<span class="ver-badge">الإصدار 17 — الهوية البصرية الاحترافية</span>'+
   '<h1>منصة X التعليمية<br>الطوران المتوسط والثانوي — المنهاج الجزائري</h1>'+
   '<p>شرح مفصّل محورًا بمحور: تعاريف دقيقة، قوانين مشروحة تفسيرًا واضحًا، مبرهنات، أمثلة محلولة خطوة بخطوة، تمارين مصحّحة، أخطاء شائعة، واختبارات تفاعلية.</p>'+
   '<div class="hero-cta"><button class="btn btn-primary" onclick="navigate(\'subject\',\'math\')">📐 ابدأ بالرياضيات</button>'+
   '<button class="btn" onclick="navigate(\'subject\',\'phys\')">⚛️ وحدات الفيزياء والكيمياء</button>'+
   '<button class="btn btn-ghost" onclick="navigate(\'dash\')">📊 تقدّمي</button></div>'+
   '<div class="hero-stats">'+
     '<span class="hstat"><b>'+CH_MATH.length+'</b>محور رياضيات</span><span class="hstat"><b>'+CH_PHYS.length+'</b>وحدات فيزياء وكيمياء</span>'+
     '<span class="hstat"><b>'+(md+pd)+'</b>دروس مكتملة عندك</span><span class="hstat"><b>'+Object.keys(STATE.quiz).length+'</b>اختبارات منجزة</span>'+
   '</div></div>'+
   '<div class="subjects-grid">'+
     '<div class="subject-card glass" onclick="navigate(\'subject\',\'math\')"><div><div class="subject-icon math">📐</div><h3>الرياضيات</h3><p>'+CURR.math.desc+'</p></div><div class="subject-meta"><span class="chip">'+CH_MATH.length+' محاور</span><span class="chip">'+md+' مكتمل</span></div></div>'+
     '<div class="subject-card glass" onclick="navigate(\'subject\',\'phys\')"><div><div class="subject-icon phys">⚛️</div><h3>العلوم الفيزيائية</h3><p>'+CURR.phys.desc+'</p></div><div class="subject-meta"><span class="chip">'+CH_PHYS.length+' وحدات</span><span class="chip">'+pd+' مكتمل</span></div></div>'+
   '</div>'+
   '<div class="section-header"><h2>🔎 ابحث في كل المحاور</h2><p>اكتب كلمة مفتاحية (مثل: المماس، المرجح، الناقلية...) للوصول السريع.</p></div>'+
   '<div style="max-width:520px;margin:0 auto 4px;padding:0 16px"><div class="search-bar"><span>🔍</span><input id="homeSearch" placeholder="ابحث عن محور أو درس..." oninput="homeFilter(this.value)"></div></div>'+
   '<div id="searchGrid" class="cards-grid"></div>'+
   contactHTML()+
   '<div class="footer-note">منصة X — مرجع تعليمي مساعد. طابق دائمًا مع التدرج السنوي لأستاذك والوثائق الرسمية للوزارة.</div>';
  return html;
}
function homeFilter(q){
  var g=document.getElementById('searchGrid');if(!g)return;
  q=(q||'').trim();
  if(!q){g.innerHTML='';return}
  var res=[];
  ['math','phys'].forEach(function(sid){CURR[sid].chapters.forEach(function(c){
    var hay=c.title+' '+c.desc+' '+(c.keys||[]).join(' ');
    if(hay.indexOf(q)>=0)res.push(chapterCard(sid,c));
  })});
  g.innerHTML=res.length?res.join(''):'<div class="glass" style="padding:18px;text-align:center;color:var(--text-dim)">لا نتائج مطابقة — جرّب كلمة أخرى.</div>';
}
function chapterCard(sid,c){
  var done=STATE.done[c.id];
  var q=STATE.quiz[c.id];
  return '<div class="info-card" onclick="navigate(\'lesson\',\''+sid+'\',\''+c.id+'\')">'+
   '<div class="ic-head"><div class="ic-icon">'+c.icon+'</div><h4>'+c.title+'</h4></div>'+
   '<p>'+c.desc+'</p>'+
   '<div><span class="tag s'+(c.sem||1)+'">الفصل '+(c.sem||1)+'</span>'+
   (done?'<span class="tag done">✓ مكتمل</span>':'')+
   (q?'<span class="pill">اختبار: '+q.best+'/'+q.total+'</span>':'<span class="pill">اختبار متاح 🎯</span>')+
   '</div></div>';
}
var TERMS={math:{1:['ma1','ma2','ma3'],2:['ma4','ma5','ma6','ma7'],3:['ma8','ma9','ma10','ma11']},phys:{1:['ph1','ph2','ph3'],2:['ph4','ph5','ph6'],3:['ph7','ph8','ph9']}};
function termName(n){return ['','الفصل الأول','الفصل الثاني','الفصل الثالث'][n]}
function renderSubject(sid){
  var S=CURR[sid];var T=TERMS[sid];var html='<div class="section-header fade-in"><h2>'+x92SubjIco(sid)+' '+S.name+'</h2><p>'+S.desc+'</p></div>';
  for(var t=1;t<=3;t++){
    var list=(T&&T[t])?T[t].map(function(id){return findChapter(sid,id)}).filter(Boolean):[];
    if(!list.length)continue;
    html+='<div class="term-header glass fade-in"><span style="font-size:20px">📁</span><b>'+termName(t)+'</b><span style="color:var(--text-mute);font-size:13px">'+list.length+(list.length===1?' وحدة':' وحدات')+'</span></div>'+
     '<div class="cards-grid">'+list.map(function(c){return chapterCard(sid,c)}).join('')+'</div>';
  }
  return html;
}
function bacHTML(cid){
  var B=BAC[cid];if(!B)return '';
  return '<div class="bac-card"><div class="bac-head">🏆 تحدي البكالوريا — تمرين شامل بأسلوب الامتحان</div>'+
   '<p class="bac-p">'+B.p+'</p>'+
   (B.parts||[]).map(function(pt,i){return '<div class="bac-part"><span class="pn">'+(i+1)+'</span><div>'+pt+'</div></div>'}).join('')+
   '<details class="bac-sol"><summary>💡 الحل النموذجي المفصل</summary><ol class="bac-steps">'+
   (B.s||[]).map(function(st){return '<li>'+st+'</li>'}).join('')+
   '</ol></details></div>';
}
function renderLesson(sid,cid){
  var c=findChapter(sid,cid);if(!c)return '<div class="lesson-view">الدرس غير موجود</div>';
  var pos=chapterPos(sid,cid);var L=CURR[sid].chapters;
  var prev=pos>0?L[pos-1]:null;var next=pos<L.length-1?L[pos+1]:null;
  var isDone=STATE.done[cid];var isSaved=STATE.saved.indexOf(cid)>=0;
  var html='<div class="lesson-view fade-in">'+
   '<div class="lesson-header glass-strong">'+
     '<div class="breadcrumb"><span onclick="navigate(\'home\')">الرئيسية</span> / <span onclick="navigate(\'subject\',\''+sid+'\')">'+CURR[sid].name+'</span> / '+c.title+'</div>'+
     '<h1>'+x92LecIco(sid)+' '+c.title+'</h1>'+
     '<div class="objectives"><strong>🎯 أهداف المحور:</strong> '+c.obj+'</div>'+
     '<div class="lesson-actions">'+
       '<button class="btn '+(isDone?'btn-success':'btn-primary')+'" onclick="markDone(\''+sid+'\',\''+cid+'\')">'+(isDone?'✓ مكتمل':'✓ تحديد كمكتمل')+'</button>'+
       '<button class="btn" onclick="toggleSave(\''+cid+'\')">'+(isSaved?'🔖 محفوظ':'🔖 حفظ للمراجعة')+'</button>'+
       '<button class="btn btn-ghost" onclick="navigate(\'quiz\',\''+sid+'\',\''+cid+'\')">🎯 اختبر نفسك</button>'+
     '</div>'+
   '</div>'+
   '<div class="lesson-content glass">'+secsHTML(c.sections)+bacHTML(cid)+kpHTML(cid)+
   '<div class="summary-box"><span class="dt">🧠 ماذا تحفظ من '+c.title+'؟</span><ul>'+
     (c.take||[]).map(function(t){return '<li>'+t+'</li>'}).join('')+
   '</ul></div>'+
   '</div>'+
   '<div style="display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap;margin-top:18px">'+
     (prev?'<button class="btn btn-ghost" onclick="navigate(\'lesson\',\''+sid+'\',\''+prev.id+'\')">▶ المحور السابق: '+prev.title+'</button>':'')+
     (next?'<button class="btn btn-primary" onclick="navigate(\'lesson\',\''+sid+'\',\''+next.id+'\')">المحور التالي: '+next.title+' ◀</button>':'')+
   '</div></div>';
  return html;
}
function renderDash(){
  var doneIds=Object.keys(STATE.done);
  var qKeys=Object.keys(STATE.quiz);
  var avg=0;if(qKeys.length){qKeys.forEach(function(k){avg+=STATE.quiz[k].best});avg=Math.round(avg/qKeys.length)}
  var rows=function(list){return list.map(function(id){
    var sid=CH_MATH.some(function(c){return c.id===id})?'math':'phys';
    var c=findChapter(sid,id);if(!c)return '';
    return '<div class="done-item"><span onclick="navigate(\'lesson\',\''+sid+'\',\''+id+'\')">'+c.icon+' '+c.title+'</span>'+(STATE.quiz[id]?'<span class="pill">أفضل نتيجة: '+STATE.quiz[id].best+'/'+STATE.quiz[id].total+'</span>':'<span class="pill">لم تختبر بعد</span>')+'</div>';
  }).join('')};
  return '<div class="dashboard fade-in" style="max-width:1000px;margin:0 auto;padding:22px 16px">'+
   '<div class="section-header" style="padding:10px 0 20px"><h2>'+xi('chart',22)+' تقدّمي</h2><p>إحصائيات دراستك ونتائج اختباراتك.</p></div>'+
   '<div class="dash-grid">'+
     '<div class="stat-card glass"><div class="label">الدروس المكتملة</div><div class="value">'+doneIds.length+' / '+totalLessons()+'</div><div class="sub">'+Math.round(100*doneIds.length/totalLessons())+'% من المنهاج</div></div>'+
     '<div class="stat-card glass"><div class="label">الاختبارات المنجزة</div><div class="value">'+qKeys.length+'</div><div class="sub">من '+totalLessons()+' اختبارًا متاحًا</div></div>'+
     '<div class="stat-card glass"><div class="label">متوسط النتائج</div><div class="value">'+avg+'%</div><div class="sub">'+(avg>=80?'ممتاز! استمر 👏':(avg>=50?'جيد، واصل المراجعة 💪':'راجع الدروس ثم أعد الاختبار 📖'))+'</div></div>'+
     '<div class="stat-card glass"><div class="label">دروس محفوظة</div><div class="value">'+STATE.saved.length+'</div><div class="sub">للرجوع إليها لاحقًا</div></div>'+
   '</div>'+
   '<div class="glass" style="padding:22px;border-radius:20px;margin-bottom:16px"><h3 style="margin-bottom:10px">✅ الدروس المكتملة</h3>'+(doneIds.length?rows(doneIds):'<p style="color:var(--text-dim)">لم تكمل أي درس بعد — ابدأ الآن من الرئيسية.</p>')+'</div>'+
   '<div class="glass" style="padding:22px;border-radius:20px"><h3 style="margin-bottom:10px">🔖 المحفوظة للمراجعة</h3>'+(STATE.saved.length?rows(STATE.saved):'<p style="color:var(--text-dim)">لا توجد دروس محفوظة.</p>')+'</div>'+
   '</div>';
}

/* ---------------- 7. الاختبارات ---------------- */
var QZ=null;
function __QZREC__(q){}
function renderQuiz(sid,cid){
  var c=findChapter(sid,cid);var bank=QUIZZES[cid];
  if(!c||!bank)return '<div class="lesson-view">الاختبار غير موجود</div>';
  if(!QZ||QZ.cid!==sid+'/'+cid){QZ={cid:sid+'/'+cid,i:0,correct:0,answered:false,finished:false};__QZREC__(QZ)}
  if(QZ.finished){
    var pct=Math.round(100*QZ.correct/bank.qs.length);
    return '<div class="quiz-view fade-in"><div class="results-card glass-strong">'+
      '<h2>🎉 انتهى اختبار: '+c.title+'</h2>'+
      '<div class="score">'+QZ.correct+' / '+bank.qs.length+'</div>'+
      '<p>نتيجتك: <b style="color:var(--cyan)">'+pct+'%</b> — '+(pct===100?'ممتاز! إتقان كامل 🏆':(pct>=70?'أحسنت! راجع الأخطاء فقط 👏':(pct>=50?'قاعدة جيدة، أعد قراءة القوانين ثم أعد المحاولة 💪':'راجع الدرس كاملًا ثم أعد الاختبار 📖')))+'</p>'+
      '<div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-top:18px">'+
      '<button class="btn btn-primary" onclick="restartQuiz(\''+sid+'\',\''+cid+'\')">🔄 إعادة الاختبار</button>'+
      '<button class="btn" onclick="navigate(\'lesson\',\''+sid+'\',\''+cid+'\')">📖 العودة إلى الدرس</button></div>'+
      '</div></div>';
  }
  var q=bank.qs[QZ.i];
  var pctBar=Math.round(100*QZ.i/bank.qs.length);
  return '<div class="quiz-view fade-in">'+
   '<div class="qbar glass"><span class="qtitle">🎯 '+c.title+'</span><span style="color:var(--text-mute);font-size:13px">سؤال '+(QZ.i+1)+' من '+bank.qs.length+'</span><div class="pbar"><div class="pfill" style="width:'+pctBar+'%"></div></div></div>'+
   '<div class="qcard glass-strong"><h3><span class="qn">'+(QZ.i+1)+'.</span>'+q.q+'</h3>'+
   q.o.map(function(op,idx){return '<button class="option" id="opt'+idx+'" onclick="answerQuiz('+idx+')">'+op+'</button>'}).join('')+
   '<div class="qwhy" id="qwhy"></div>'+
   (QZ.answered?'<div style="margin-top:16px"><button class="btn btn-primary" onclick="nextQuiz(\''+sid+'\',\''+cid+'\')">'+(QZ.i===bank.qs.length-1?'🏁 عرض النتيجة':'التالي ◀')+'</button></div>':'')+
   '</div></div>';
}
function answerQuiz(idx){
  if(!QZ||QZ.answered)return;QZ.answered=true;
  var bank=QUIZZES[QZ.cid.split('/')[1]];
  var q=bank.qs[QZ.i];
  var sid=QZ.cid.split('/')[0],cid=QZ.cid.split('/')[1];
  document.getElementById('opt'+q.a).classList.add('correct');
  if(idx===q.a){QZ.correct++;toast('✅ إجابة صحيحة!','success')}
  else{document.getElementById('opt'+idx).classList.add('wrong');toast('❌ إجابة خاطئة')}
  for(var i=0;i<q.o.length;i++)document.getElementById('opt'+i).disabled=true;
  var why=document.getElementById('qwhy');why.innerHTML='<b>💡 التوضيح:</b> '+q.why;why.classList.add('show');
  var r=document.getElementById('app');r.innerHTML=renderNavbar()+renderQuiz(sid,cid);typesetApp();
}
function nextQuiz(sid,cid){
  if(!QZ)return;
  var bank=QUIZZES[cid];
  if(QZ.i===bank.qs.length-1){
    QZ.finished=true;
    var prev=STATE.quiz[cid];
    if(!prev||QZ.correct>prev.best){STATE.quiz[cid]={best:QZ.correct,total:bank.qs.length};saveState()}
    if(QZ.correct===bank.qs.length)confetti();
  }else{QZ.i++;QZ.answered=false}
  render();
}
function restartQuiz(sid,cid){QZ=null;__QZREC__(null);render()}

/* ---------------- 8. أدوات ---------------- */
function toast(msg,cls){
  var t=document.createElement('div');t.className='toast '+(cls||'');t.textContent=msg;
  try{t.style.transition='transform .3s cubic-bezier(.34,1.2,.44,1),opacity .3s ease'}catch(e0){}
  document.getElementById('toasts').appendChild(t);
  setTimeout(function(){
    try{t.style.transform='translateY(-30px) scale(.55)'}catch(e1){}
    t.style.opacity='0';setTimeout(function(){t.remove()},320)
  },2200);
}
function confetti(){
  if(!STATE.fx)return;
  var cols=['#6ab3f3','#6f8fc0','#e0975f','#5ec26a'];
  for(var i=0;i<26;i++){
    var c=document.createElement('div');c.className='confetti';
    c.style.left=(Math.random()*100)+'vw';c.style.top='-12px';
    c.style.background=cols[i%4];c.style.transform='rotate('+(Math.random()*360)+'deg)';
    document.body.appendChild(c);
    var dur=1800+Math.random()*1600;
    c.animate([{transform:'translate(0,0) rotate(0)',opacity:1},{transform:'translate('+(Math.random()*60-30)+'px,'+(window.innerHeight+60)+'px) rotate(360deg)',opacity:.6}],{duration:dur,easing:'cubic-bezier(.2,.7,.3,1)'});
    setTimeout(function(el){return function(){el.remove()}}(c),dur+100);
  }
}
function markDone(sid,cid){
  if(STATE.done[cid]){delete STATE.done[cid];toast('أُلغي تعيين الدرس كمكتمل')}
  else{STATE.done[cid]=Date.now();toast('🎉 أحسنت! سُجّل إنجاز المحور','success');confetti()}
  saveState();render();
}
function toggleSave(cid){
  var i=STATE.saved.indexOf(cid);
  if(i>=0){STATE.saved.splice(i,1);toast('أُزيل من المحفوظات')}
  else{STATE.saved.push(cid);toast('🔖 حُفظ للمراجعة')}
  saveState();render();
}

/* ---------------- 9. الخلفية الهندسية المستقرة ---------------- */
function initField(){
  var cv=document.getElementById('bg-canvas');if(!cv)return;
  var ctx;try{ctx=cv.getContext('2d')}catch(e){return}
  var DPR=Math.min(window.devicePixelRatio||1,1.5);
  var W,H;
  function resize(){W=window.innerWidth;H=window.innerHeight;cv.width=Math.round(W*DPR);cv.height=Math.round(H*DPR);cv.style.width=W+'px';cv.style.height=H+'px';ctx.setTransform(DPR,0,0,DPR,0,0)}
  resize();window.addEventListener('resize',resize);
  var reduced=false;
  try{reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches}catch(e){}
  /* نقاط تنجرف في خطوط مستقيمة (حركة سلسة تمامًا بلا اهتزاز) */
  var N=Math.max(18,Math.min(42,Math.round(W*H/26000)));
  var pts=[];
  for(var i=0;i<N;i++){
    pts.push({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-0.5)*0.08,vy:(Math.random()-0.5)*0.08,r:1.1+Math.random()*1.6});
  }
  /* مضلعات هندسية كبيرة تدور ببطء شديد */
  var polys=[
    {n:6,r:170,x:0.18,y:0.22,a:0,va:0.00055},
    {n:4,r:120,x:0.82,y:0.62,a:1.1,va:-0.00048},
    {n:3,r:145,x:0.55,y:0.88,a:0.4,va:0.0004}
  ];
  var run=true,last=0;
  document.addEventListener('visibilitychange',function(){
    var wasRun=run;run=!document.hidden;
    if(run&&!wasRun)requestAnimationFrame(frame);
  });
  function frame(t){
    if(!run)return;
    requestAnimationFrame(frame);
    if(t-last<40)return; /* تثبيت ~25 إطارًا/ث لأداء مستقر */
    last=t;
    ctx.clearRect(0,0,W,H);
    var k=reduced?0:1;
    for(var p=0;p<polys.length;p++){
      var P=polys[p];P.a+=P.va*k;
      var px=P.x*W,py=P.y*H;
      ctx.beginPath();
      for(var v=0;v<=P.n;v++){
        var ang=P.a+v*2*Math.PI/P.n;
        var X=px+Math.cos(ang)*P.r,Y=py+Math.sin(ang)*P.r;
        if(v===0)ctx.moveTo(X,Y);else ctx.lineTo(X,Y);
      }
      ctx.strokeStyle='rgba(140,200,240,0.05)';ctx.lineWidth=1.4;ctx.stroke();
    }
    var md=Math.min(165,W/6),md2=md*md;
    for(var i2=0;i2<N;i2++){
      var a2=pts[i2];
      a2.x+=a2.vx*k;a2.y+=a2.vy*k;
      if(a2.x<-24)a2.x=W+24;else if(a2.x>W+24)a2.x=-24;
      if(a2.y<-24)a2.y=H+24;else if(a2.y>H+24)a2.y=-24;
      ctx.beginPath();ctx.arc(a2.x,a2.y,a2.r,0,6.2832);
      ctx.fillStyle='rgba(120,175,225,0.20)';ctx.fill();
    }
    for(var i3=0;i3<N;i3++){
      for(var j=i3+1;j<N;j++){
        var A=pts[i3],B2=pts[j];
        var dx=A.x-B2.x,dy=A.y-B2.y,d2=dx*dx+dy*dy;
        if(d2<md2){
          var o=1-Math.sqrt(d2)/md;
          ctx.strokeStyle='rgba(94,234,212,'+(o*0.05).toFixed(3)+')';
          ctx.beginPath();ctx.moveTo(A.x,A.y);ctx.lineTo(B2.x,B2.y);ctx.stroke();
        }
      }
    }
  }
  requestAnimationFrame(frame);
}

/* ---------------- 10. التشغيل ---------------- */
function render(){
  parseHash();
  var app=document.getElementById('app');
  var body='';
  switch(ROUTE.page){
    case 'subject':body=renderSubject(ROUTE.subject||'math');break;
    case 'lesson':body=renderLesson(ROUTE.subject,ROUTE.chapter);break;
    case 'quiz':body=renderQuiz(ROUTE.subject,ROUTE.chapter);break;
    case 'dash':body=renderDash();break;
    default:body=renderHome();
  }
  app.innerHTML=renderNavbar()+body;
  var mm=document.getElementById('mmenu');if(mm)mm.classList.add('hidden');
  document.querySelectorAll('#mmenu .nav-link').forEach(function(el){
    el.addEventListener('click',function(){var m=document.getElementById('mmenu');m.classList.add('hidden');m.classList.remove('show')});
  });
  typesetApp();
  try{kpSync()}catch(e){}
}
function boot(){
  applyTheme();initReadbar();
  applyFX();
  if(!location.hash)location.hash='#/home';
  parseHash();
  render();
  if(STATE.fx){try{initField()}catch(e){var c=document.getElementById('bg-canvas');if(c)c.style.display='none'}}
  document.addEventListener('touchstart',function(e){var t=e.target;if(t&&t.closest&&t.closest('.kp-vp'))kpTouchStart(e.touches[0].clientX)},{passive:true});
  document.addEventListener('touchend',function(e){if(typeof __ksw!=='undefined'&&__ksw!==null)kpTouchEnd(e.changedTouches[0].clientX)},{passive:true});
  /* عند عودة الاتصال: يُعاد تنسيق المعادلات بـ KaTeX تلقائيًا */
  window.addEventListener('load',function(){setTimeout(function(){KAT=(typeof renderMathInElement==='function');typesetApp()},600)});
}
/* boot() تُستدعى في نهاية الملف بعد تحميل كل بيانات المحتوى */
/* التقط نسخ المحرك هنا قبل أن ترفع طبقة 15 تعريفاتها وتحل محلها (إصلاح رفع الدوال داخل نفس الكتلة) */
var saveState14=saveState,renderLesson14=renderLesson,markDone14=markDone,confetti14=confetti,answerQuiz14=answerQuiz;
