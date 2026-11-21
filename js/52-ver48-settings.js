/* ============ الطبقة 48 — الإصدار 48: تبويب الإعدادات الاحترافي (نظام تصميم موحد + مظهر + لغة + صوت + إشعارات + خصوصية + وصول + تخزين + مساعدة) ============ */
/* 48.أ نظام التصميم: هوية رسمية موحدة + مفاتيح تبديل حقيقية + معرض خلفيات + بطاقات مقاسات موحدة (نصف قطر 16/12، عناصر 48-52px، انتقالات 160-220ms) */
try{
  var x48css=document.createElement('style');
  x48css.textContent=
   '.x48-page{padding:20px;max-width:640px;margin:0 auto}'+
   '.x48-hero{margin:0 0 24px}'+
   '.x48-hero h1{font-size:24px;margin:6px 0 2px}'+
   '.x48-hero p{font-size:14px;color:#A2AEC0;margin:0}'+
   '.x48-hicon{width:48px;height:48px;border-radius:14px;background:linear-gradient(135deg,rgba(53,189,242,.18),rgba(139,108,255,.16));display:flex;align-items:center;justify-content:center;color:#35BDF2}'+
   '.x48-qcard{border-radius:16px;padding:16px;display:flex;align-items:center;gap:12px;margin:0 0 24px;border:1px solid #26384D;background:#111D2D}'+
   '.x48-qsw{width:74px;height:48px;border-radius:12px;overflow:hidden;display:flex;border:1px solid #26384D;flex:0 0 auto}'+
   '.x48-qsw i{flex:1}'+
   '.x48-sec{border-radius:16px;border:1px solid #26384D;background:#111D2D;margin-bottom:12px;overflow:hidden;transition:box-shadow .2s,border-color .2s}'+
   '.x48-sech{width:100%;min-height:52px;display:flex;align-items:center;gap:12px;padding:14px 16px;background:none;border:0;color:inherit;text-align:start;cursor:pointer;font-family:inherit}'+
   '.x48-sech .x48-ic{width:40px;height:40px;border-radius:12px;background:#17263A;display:flex;align-items:center;justify-content:center;color:#35BDF2;flex:0 0 auto}'+
   '.x48-sech b{display:block;font-size:16px}'+
   '.x48-sech span{display:block;font-size:13px;color:#A2AEC0}'+
   '.x48-chv{margin-inline-start:auto;transition:transform .2s;color:#A2AEC0;font-style:normal}'+
   '.x48-sec.open .x48-chv{transform:rotate(180deg)}'+
   '.x48-secb{padding:4px 16px 16px;animation:x48fade .2s ease}'+
   '@keyframes x48fade{from{opacity:0;transform:translateY(-4px)}to{opacity:1}}'+
   '.x48-row{display:flex;align-items:center;gap:12px;min-height:52px;padding:8px 0;border-bottom:1px solid rgba(38,56,77,.5)}'+
   '.x48-row:last-child{border-bottom:0}'+
   '.x48-row b{display:block;font-size:14.5px}'+
   '.x48-row span{display:block;font-size:12.5px;color:#A2AEC0}'+
   '.x48-tsw{position:relative;width:46px;height:26px;flex:0 0 auto;margin-inline-start:auto}'+
   '.x48-tsw input{opacity:0;width:0;height:0}'+
   '.x48-tsw i{position:absolute;top:0;left:0;right:0;bottom:0;border-radius:13px;background:#26384D;transition:background .2s}'+
   '.x48-tsw i:after{content:"";position:absolute;top:3px;left:3px;width:20px;height:20px;border-radius:50%;background:#F5F7FC;transition:transform .2s}'+
   '.x48-tsw input:checked+i{background:#35BDF2}'+
   '.x48-tsw input:checked+i:after{transform:translateX(20px)}'+
   'html[dir="ltr"] .x48-tsw i:after{left:auto;right:3px}'+
   'html[dir="ltr"] .x48-tsw input:checked+i:after{transform:translateX(-20px)}'+
   '.x48-thcards{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin:8px 0 4px}'+
   '.x48-thc{border-radius:16px;border:2px solid #26384D;background:#0D1625;padding:10px;cursor:pointer;transition:border-color .2s;text-align:center;font-family:inherit;color:inherit}'+
   '.x48-thc.on{border-color:#35BDF2}'+
   '.x48-thc .pv{height:64px;border-radius:10px;margin-bottom:8px;border:1px solid rgba(38,56,77,.6)}'+
   '.x48-thc.pv-dark .pv{background:linear-gradient(135deg,#080D18,#111D2D 60%,#17263A)}'+
   '.x48-thc.pv-light .pv{background:linear-gradient(135deg,#F4F7FC,#EDF2F8 60%,#FFFFFF)}'+
   '.x48-thc.pv-auto .pv{background:linear-gradient(90deg,#080D18 50%,#F4F7FC 50%)}'+
   '.x48-thc b{font-size:13px}'+
   '.x48-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin:8px 0}'+
   '.x48-gitem{aspect-ratio:1/1.25;border-radius:12px;border:2px solid #26384D;cursor:pointer;position:relative;transition:transform .18s,border-color .18s;background-size:cover !important}'+
   '.x48-gitem:active{transform:scale(.95)}'+
   '.x48-gitem.on{border-color:#35BDF2}'+
   '.x48-gitem.on:after{content:"\\2713";position:absolute;top:4px;inset-inline-end:4px;width:20px;height:20px;border-radius:50%;background:#35BDF2;color:#080D18;font-weight:900;font-size:13px;display:flex;align-items:center;justify-content:center}'+
   '.x48-pv{height:170px;border-radius:14px;border:1px solid #26384D;margin:10px 0;background-size:cover !important}'+
   '.x48-lbl{font-size:13px;color:#A2AEC0;margin:12px 0 4px}'+
   '.x48-pills{display:flex;gap:8px;flex-wrap:wrap}'+
   '.x48-pill{min-height:48px;padding:0 16px;border-radius:12px;border:1px solid #26384D;background:#0D1625;color:#F5F7FC;font-size:14px;cursor:pointer;transition:border-color .18s;font-family:inherit}'+
   '.x48-pill.on{border-color:#35BDF2;color:#35BDF2}'+
   '.x48-range{width:100%;height:48px;accent-color:#35BDF2}'+
   '.x48-note{font-size:12.5px;color:#A2AEC0;line-height:1.8;margin:8px 0}'+
   '.x48-btnrow{display:flex;gap:12px;flex-wrap:wrap;margin-top:12px}'+
   '.x48-infocard{border-radius:16px;border:1px solid #26384D;background:#111D2D;padding:20px;text-align:center;margin-top:12px}'+
   '.x48-logo{width:72px;height:72px;border-radius:18px;box-shadow:0 10px 30px rgba(53,189,242,.25)}'+
   'body.x48-dense .x48-sec{margin-bottom:8px}'+
   'body.x48-dense .x48-sech{padding-top:8px;padding-bottom:8px;min-height:44px}'+
   'body.x48-hc{filter:contrast(1.12) saturate(1.05)}'+
   'body.x48-ob .btn,body.x48-ob .x17-card,body.x48-ob .glass,body.x48-ob .glass-strong,body.x48-ob .x48-sec{box-shadow:0 0 0 1px rgba(120,180,230,.4),0 10px 28px rgba(2,6,12,.35)}'+
   'html[data-theme="light"] .x48-sec,html[data-theme="light"] .x48-qcard,html[data-theme="light"] .x48-infocard{background:#FFFFFF;border-color:#DFE6EF}'+
   'html[data-theme="light"] .x48-sech .x48-ic{background:#EDF2F8;color:#168EBF}'+
   'html[data-theme="light"] .x48-hero p,html[data-theme="light"] .x48-sech span,html[data-theme="light"] .x48-row span,html[data-theme="light"] .x48-lbl,html[data-theme="light"] .x48-note{color:#64748B}'+
   'html[data-theme="light"] .x48-tsw i{background:#DFE6EF}'+
   'html[data-theme="light"] .x48-tsw i:after{background:#FFFFFF}'+
   'html[data-theme="light"] .x48-tsw input:checked+i{background:#168EBF}'+
   'html[data-theme="light"] .x48-thc,html[data-theme="light"] .x48-pill{border-color:#DFE6EF;background:#EDF2F8;color:#172437}'+
   'html[data-theme="light"] .x48-thc.on,html[data-theme="light"] .x48-gitem.on,html[data-theme="light"] .x48-pill.on{border-color:#168EBF;color:#168EBF}'+
   'html[data-theme="light"] .x48-gitem{border-color:#DFE6EF}'+
   'html[data-theme="light"] .x48-gitem.on:after{background:#168EBF;color:#fff}';
  (document.head||document.documentElement).appendChild(x48css);
}catch(e){}
/* 48.ب اللغة: قاموس ثلاثي اللغات موحد + ترجمة أسماء التنقل + اتجاه الواجهة دون المساس بالجلسة */
var X48={open:'ap',pid:'',pimg:'',pdim:45,ppos:'center',pendingImg:''};
function X48LI(){var m={ar:0,fr:1,en:2};var i=m[(typeof XCFG!=='undefined'&&XCFG.lang)?XCFG.lang:'ar'];return (i===undefined)?0:i}
function x48T(k){try{var a=X48L[k];if(!a)return k;var i=X48LI();return a[i]||a[0]}catch(e){return k}}
var X48L={
 title:['الإعدادات','Réglages','Settings'],
 sub:['خصص تجربتك وتحكم في منصة X التعليمية','Personnalisez votre expérience sur la plateforme X','Customize your experience and control Platform X'],
 quick:['المظهر الحالي','Apparence actuelle','Current appearance'],
 quickbtn:['تخصيص المظهر','Personnaliser','Customize'],
 sec_ap:['المظهر والعرض','Apparence et affichage','Appearance & display'],
 sec_ap_d:['الوضع والخلفية وحجم النص','Thème, fond et taille du texte','Theme, background and text size'],
 sec_lang:['اللغة','Langue','Language'],
 sec_lang_d:['عربية، فرنسية، إنجليزية','Arabe, français, anglais','Arabic, French, English'],
 sec_snd:['الصوت','Son','Sound'],
 sec_snd_d:['أصوات التطبيق ودرجتها','Sons de l application et volume','App sounds and volume'],
 sec_ntf:['الإشعارات','Notifications','Notifications'],
 sec_ntf_d:['تحكم في ما يصلك داخل التطبيق','Contrôlez ce qui vous parvient','Control what reaches you in-app'],
 sec_priv:['الخصوصية والأمان','Confidentialité et sécurité','Privacy & security'],
 sec_priv_d:['حسابك وبياناتك','Votre compte et vos données','Your account and data'],
 sec_a11y:['إمكانية الوصول','Accessibilité','Accessibility'],
 sec_a11y_d:['تباين وحركة ووضوح','Contraste, mouvement et clarté','Contrast, motion and clarity'],
 sec_stor:['التخزين والبيانات','Stockage et données','Storage & data'],
 sec_stor_d:['المساحة المستخدمة والذاكرة المؤقتة','Espace utilisé et cache','Used space and cache'],
 sec_help:['المساعدة والدعم','Aide et support','Help & support'],
 sec_help_d:['الأسئلة الشائعة والتواصل','FAQ et contact','FAQ and contact'],
 sec_app:['التطبيق وحول','L application et à propos','App & about'],
 sec_app_d:['تحديث وتثبيت ومعلومات','Mise à jour, installation et infos','Update, install and info'],
 theme:['الوضع','Thème','Theme'],
 dark:['داكن','Sombre','Dark'],
 lightm:['فاتح','Clair','Light'],
 auto:['تلقائي حسب الجهاز','Auto selon l appareil','Auto (device)'],
 mode_now:['الوضع الحالي','Mode actuel','Current mode'],
 bg:['خلفية التطبيق','Fond de l application','App background'],
 bg_note:['تُطبَّق الخلفية على الوضع الحالي (داكن/فاتح) ولكل وضع خلفيته المستقلة — الخلفية لا تؤثر في وضوح النصوص أبدًا.','Le fond s applique au mode actuel ; chaque mode a son fond propre.','Applies to the current mode; each mode has its own background.'],
 pick_img:['اختيار صورة من الجهاز','Choisir une image','Choose from device'],
 reset_bg:['استعادة الخلفية الافتراضية','Fond par défaut','Default background'],
 remove_img:['إزالة الصورة الشخصية','Supprimer l image','Remove custom image'],
 dim:['درجة تعتيم الخلفية','Assombrissement du fond','Background dimming'],
 apply:['تطبيق الخلفية','Appliquer le fond','Apply background'],
 cancel:['إلغاء','Annuler','Cancel'],
 pos:['موضع الصورة','Position de l image','Image position'],
 top:['أعلى','Haut','Top'],
 mid:['وسط','Centre','Middle'],
 bot:['أسفل','Bas','Bottom'],
 fs:['حجم النص','Taille du texte','Text size'],
 s:['صغير','Petit','Small'],
 m:['متوسط','Moyen','Medium'],
 l:['كبير','Grand','Large'],
 density:['كثافة الواجهة','Densité de l interface','Interface density'],
 cozy:['مريحة','Confortable','Comfortable'],
 compact:['مضغوطة','Compacte','Compact'],
 contrast:['تباين النصوص','Contraste du texte','Text contrast'],
 borders:['وضوح الحدود والأزرار','Netteté des bordures et boutons','Border and button clarity'],
 lang_note:['الترجمة تغطي الإعدادات والتنقل الأساسي حاليًا — صفحات المحتوى التعليمي تبقى بالعربية وتُترجم تدريجيًا.','La traduction couvre les réglages et la navigation ; le contenu pédagogique reste en arabe pour le moment.','Translation covers settings and navigation; educational pages remain in Arabic for now.'],
 snd_master:['أصوات التطبيق','Sons de l application','App sounds'],
 snd_master_d:['إيقافها يسكت كل الأصوات فعلًا','Les couper coupe réellement tout','Switching off truly silences all'],
 snd_ntf:['صوت الإشعارات ورسائل النجاح','Sons des notifications et réussites','Notification and success sounds'],
 snd_tap:['صوت التفاعل مع الأزرار','Son de toucher des boutons','Button touch sound'],
 vol:['درجة الصوت','Volume','Sound volume'],
 ntf_upd:['إشعار التحديث داخل التطبيق','Avis de mise à jour dans l app','In-app update notice'],
 ntf_quiet:['إخفاء كل الإشعارات داخل التطبيق','Masquer les avis dans l app','Hide all in-app notices'],
 push_state:['إشعارات خارج التطبيق (Push)','Notifications Push (hors app)','Outside-app push notifications'],
 push_on:['مهيأة ✓','Configurée ✓','Configured ✓'],
 push_off:['غير مهيأة بعد','Pas encore configurée','Not configured yet'],
 push_note:['إشعارات Push يرسلها الإدارة من لوحة خدمة الإشعارات وتصل حتى والتطبيق مغلق — التحكم الكامل فيها من إعدادات الإشعارات في هاتفك.','Les push sont envoyés par le propriétaire ; contrôle total via les réglages du téléphone.','Push notices are sent by the owner; full control stays in your phone settings.'],
 soon_note:['إشعارات المجتمع وتذكيرات التعلم: تُضاف تلقائيًا عند إطلاق هذه الميزات في المنصة.','Notifications communauté et rappels : ajoutées au lancement de ces fonctions.','Community notices and study reminders: added when those features launch.'],
 priv_info:['حماية حسابك: الدخول يتم برمز تحقق سري يُرسل إلى بريدك — المنصة لا تحفظ كلمات مرور إطلاقًا ولا تعرض الرموز.','Protection du compte : connexion par code secret envoyé à votre e-mail — aucun mot de passe.','Account protection: login uses a secret code e-mailed to you — no passwords stored.'],
 priv_hide:['إخفاء بريدي في صفحة ملفي','Masquer mon e-mail dans Profil','Hide my email in Profile'],
 priv_logout:['تسجيل الخروج من الجلسة الحالية','Se déconnecter de la session actuelle','Sign out of current session'],
 priv_devices:['الأجهزة والجلسات النشطة: يتطلب نظام جلسات على الخادم — غير متاح بعد، ولن نعرض زرًا غير حقيقي.','Appareils et sessions : nécessite un serveur — pas encore disponible.','Devices and sessions: requires server-side sessions — not yet available.'],
 priv_policy:['سياسة الخصوصية','Politique de confidentialité','Privacy policy'],
 terms:['شروط الاستخدام','Conditions d utilisation','Terms of use'],
 a11y_big:['تكبير النصوص','Agrandir le texte','Enlarge text'],
 a11y_hc:['زيادة التباين','Contraste élevé','Higher contrast'],
 a11y_rm:['تقليل الحركات والمؤثرات','Réduire les animations','Reduce motion'],
 a11y_sr:['تسميات قارئ الشاشة مفعّلة في كل أزرار الإعدادات','Étiquettes lecteur d écran actives','Screen-reader labels enabled'],
 stor_used:['التخزين المستخدم','Espace utilisé','Storage used'],
 stor_local:['بياناتك المحلية على الجهاز','Données locales','Local data on device'],
 clear_cache:['مسح الذاكرة المؤقتة','Vider le cache','Clear cache'],
 clear_note:['المسح يحذف الملفات المؤقتة المخزنة لتسريع عرض الصفحات فقط — لا يلمس بياناتك ولا تقدمك الدراسي ولا حسابك ولا إعداداتك.','Le nettoyage supprime uniquement les fichiers temporaires — jamais vos données ni votre progression.','Clearing removes temporary files only — never your data, progress or settings.'],
 clear_ask:['ما الذي سيُحذف؟','Quoi sera supprimé ?','What will be deleted?'],
 help_center:['مركز المساعدة','Centre d aide','Help center'],
 faq:['الأسئلة الشائعة','FAQ','FAQ'],
 report:['الإبلاغ عن مشكلة','Signaler un problème','Report a problem'],
 contactb:['التواصل مع المؤسسة','Contacter l institution','Contact the institution'],
 check_upd:['فحص تحديث المنصة','Vérifier les mises à jour','Check for updates'],
 install:['تثبيت التطبيق على هاتفك','Installer l application','Install the app'],
 share:['مشاركة التطبيق','Partager l application','Share the app'],
 app_name:['منصة X التعليمية','Plateforme X Éducative','X Educational Platform'],
 org:['مؤسسة X.HAK — أسسها المبرمج HAMMOUALI Kacem','Institution X.HAK — fondée par HAMMOUALI Kacem','X.HAK Institution — founded by HAMMOUALI Kacem'],
 ver:['الإصدار','Version','Version'],
 lastupd:['آخر تحديث','Dernière mise à jour','Last update'],
 rights:['© 2026 X.HAK — جميع الحقوق محفوظة','© 2026 X.HAK — Tous droits réservés','© 2026 X.HAK — All rights reserved'],
 off:['متوقف','Désactivé','Off'],
 on:['مفعّل','Activé','On'],
 logout_done:['تم تسجيل الخروج — بياناتك محفوظة على جهازك','Déconnecté','Signed out']
};
var X48_IC={
 ap:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M18 6l-2.5 2.5M8.5 15.5L6 18"/></svg>',
 lang:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9S14.5 18.4 12 21C9.5 18.4 8.2 15.4 8.2 12S9.5 5.6 12 3z"/></svg>',
 snd:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H3v6h3l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13"/></svg>',
 ntf:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/></svg>',
 priv:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5z"/><path d="M9 12l2 2 4-4"/></svg>',
 a11y:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="4.5" r="1.6"/><path d="M4.5 8.5h15M12 8.5V15M8 21l4-6 4 6"/></svg>',
 stor:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5.5" rx="8" ry="2.8"/><path d="M4 5.5v13c0 1.6 3.6 2.8 8 2.8s8-1.2 8-2.8v-13M4 12c0 1.6 3.6 2.8 8 2.8s8-1.2 8-2.8"/></svg>',
 help:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M9.2 9a2.9 2.9 0 0 1 5.6.9c0 1.9-2.8 2.2-2.8 4"/><circle cx="12" cy="17.2" r=".4" fill="currentColor"/></svg>',
 app:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="4" y="4" width="16" height="16" rx="4"/><path d="M9 9h6v6H9z"/></svg>',
 gear:'<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="3.2"/><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M18.7 5.3l-2.1 2.1M7.4 16.6l-2.1 2.1"/></svg>'
};
/* 48.ج المظهر: الوضع الفعلي + تطبيق الخلفية بنظام وضعين مستقلين (داكن/فاتح) عبر طبقة تعتيم مدمجة */
function x48EffTheme(){var t=(typeof XCFG!=='undefined')?XCFG.theme:'dark';if(t==='auto'){try{t=(window.matchMedia&&window.matchMedia('(prefers-color-scheme: light)').matches)?'light':'dark'}catch(e){t='dark'}}return t==='light'?'light':'dark'}
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
    el.textContent='body{background:'+ov+','+cssv+' !important;background-size:cover !important;background-position:'+pos+' !important}';
  }catch(e){}
}
var X48_BGCATS=[
 ['داكنة هادئة','Sombres calmes','Calm darks'],
 ['متدرجة','Dégradés','Gradients'],
 ['هندسية','Géométriques','Geometric'],
 ['فضائية','Spatiales','Space'],
 ['طبيعية','Naturelles','Nature'],
 ['تجريدية','Abstraites','Abstract'],
 ['ألوان موحدة','Couleurs unies','Solid colors']
];
var X48_BGS=[
 {id:'d1',cat:0,css:'linear-gradient(180deg,#0A1220,#0D1A2E)'},
 {id:'d2',cat:0,css:'radial-gradient(ellipse at 30% 10%,#12233C,#0A101C 70%)'},
 {id:'d3',cat:0,css:'linear-gradient(160deg,#0C1626,#0A0F1C 60%,#101B2B)'},
 {id:'g1',cat:1,css:'linear-gradient(135deg,#0E1C30,#123A5C 55%,#0D2A46)'},
 {id:'g2',cat:1,css:'linear-gradient(120deg,#131033,#1E2A63 60%,#2B1E5C)'},
 {id:'g3',cat:1,css:'linear-gradient(150deg,#07182E,#0E4A6E 70%)'},
 {id:'g4',cat:1,css:'linear-gradient(115deg,#0F1626,#263A5C 50%,#3B2E68)'},
 {id:'h1',cat:2,css:'repeating-linear-gradient(45deg,#0C1524 0 22px,#0E1A2C 22px 44px)'},
 {id:'h2',cat:2,css:'repeating-linear-gradient(90deg,rgba(53,189,242,.05) 0 2px,transparent 2px 26px),linear-gradient(180deg,#0B1320,#0C1826)'},
 {id:'h3',cat:2,css:'repeating-linear-gradient(0deg,rgba(139,108,255,.06) 0 1px,transparent 1px 24px),repeating-linear-gradient(90deg,rgba(53,189,242,.05) 0 1px,transparent 1px 24px),#0C1524'},
 {id:'s1',cat:3,css:'radial-gradient(1.5px 1.5px at 20% 30%,#BFE3FF,transparent),radial-gradient(1px 1px at 60% 15%,#CFE6FF,transparent),radial-gradient(1.5px 1.5px at 80% 60%,#B9D8FF,transparent),radial-gradient(1px 1px at 40% 80%,#D5EBFF,transparent),linear-gradient(180deg,#060B16,#0A1524)'},
 {id:'s2',cat:3,css:'radial-gradient(circle at 25% 20%,rgba(139,108,255,.18),transparent 40%),radial-gradient(2px 2px at 70% 40%,#E8F2FF,transparent),radial-gradient(1.5px 1.5px at 30% 65%,#CDE4FF,transparent),linear-gradient(200deg,#050A14,#081120)'},
 {id:'s3',cat:3,css:'radial-gradient(ellipse at 50% 100%,rgba(53,189,242,.20),transparent 55%),#060B15'},
 {id:'n1',cat:4,css:'linear-gradient(180deg,#0B1E1A,#0A2A28 60%,#0C3A2E)'},
 {id:'n2',cat:4,css:'radial-gradient(ellipse at 20% 90%,rgba(57,185,138,.18),transparent 50%),linear-gradient(180deg,#0A1614,#0B2018)'},
 {id:'n3',cat:4,css:'linear-gradient(160deg,#14261C,#0E1A14 70%)'},
 {id:'n4',cat:4,css:'linear-gradient(180deg,#1B2A1E,#233A24 55%,#0F1A10)'},
 {id:'a1',cat:5,css:'conic-gradient(from 180deg at 70% 20%,rgba(53,189,242,.22),rgba(139,108,255,.18),transparent 60%),#0A101C'},
 {id:'a2',cat:5,css:'radial-gradient(circle at 15% 85%,rgba(22,126,173,.25),transparent 45%),radial-gradient(circle at 85% 15%,rgba(139,108,255,.22),transparent 40%),#0A0F1A'},
 {id:'a3',cat:5,css:'linear-gradient(60deg,rgba(53,189,242,.12) 25%,transparent 25% 75%,rgba(139,108,255,.14) 75%),linear-gradient(60deg,rgba(139,108,255,.12) 25%,transparent 25% 75%,rgba(53,189,242,.14) 75%),#0B1220'},
 {id:'u1',cat:6,css:'#0D1625'},
 {id:'u2',cat:6,css:'#111D2D'},
 {id:'u3',cat:6,css:'#101828'},
 {id:'blk',cat:6,css:'#000000'}
];
function x48PvCss(){
  var bgc='';
  if(X48.pimg){bgc='url("'+X48.pimg.split('"').join('%22')+'")'}
  else{for(var i=0;i<X48_BGS.length;i++){if(X48_BGS[i].id===X48.pid){bgc=X48_BGS[i].css}}}
  var d=(+X48.pdim||0)/100;
  var ov=(x48EffTheme()==='light')?'rgba(244,247,252,'+d+')':'rgba(8,13,24,'+d+')';
  return ov+','+bgc;
}
function x48PvModal(isImg){
  var eff=x48EffTheme();
  var modeName=x48T(eff==='light'?'lightm':'dark');
  var h='<div class="x48-pv" id="x48-pv" style="background:'+x48PvCss()+';background-position:'+X48.ppos+'"></div>'+
   '<div class="x48-lbl">'+x48T('dim')+' — '+x48T('mode_now')+': <b>'+modeName+'</b></div>'+
   '<input class="x48-range" type="range" min="0" max="85" value="'+Math.round(X48.pdim)+'" aria-label="'+escAttr(x48T('dim'))+'" oninput="X48.pdim=+this.value;try{document.getElementById(\'x48-pv\').style.background=x48PvCss();document.getElementById(\'x48-pv\').style.backgroundPosition=X48.ppos}catch(e){}">'+
   (isImg?'<div class="x48-lbl">'+x48T('pos')+'</div><div class="x48-pills">'+
     '<button class="x48-pill'+(X48.ppos==='top'?' on':'')+'" onclick="X48.ppos=\'top\';try{document.getElementById(\'x48-pv\').style.backgroundPosition=\'top\'}catch(e){}">'+x48T('top')+'</button>'+
     '<button class="x48-pill'+(X48.ppos==='center'?' on':'')+'" onclick="X48.ppos=\'center\';try{document.getElementById(\'x48-pv\').style.backgroundPosition=\'center\'}catch(e){}">'+x48T('mid')+'</button>'+
     '<button class="x48-pill'+(X48.ppos==='bottom'?' on':'')+'" onclick="X48.ppos=\'bottom\';try{document.getElementById(\'x48-pv\').style.backgroundPosition=\'bottom\'}catch(e){}">'+x48T('bot')+'</button>'+
   '</div>':'')+
   '<div class="x48-btnrow"><button class="btn btn-primary" onclick="x48BgApplySel()">'+x48T('apply')+'</button>'+
   '<button class="btn" onclick="xCloseModal()">'+x48T('cancel')+'</button></div>';
  xModal(x48T('bg'),h);
}
function x48BgPreview(id){
  X48.pid=id;X48.pimg='';X48.pendingImg='';
  var eff=x48EffTheme();
  X48.pdim=((eff==='light')?(XCFG.dimL===undefined?.15:XCFG.dimL):(XCFG.dimD===undefined?.45:XCFG.dimD))*100;
  X48.ppos=(eff==='light')?(XCFG.posL||'center'):(XCFG.posD||'center');
  x48PvModal(false);
}
function x48BgApplySel(){
  try{
    var eff=x48EffTheme();
    var d=(+X48.pdim||0)/100;
    if(eff==='light'){XCFG.bgL=(X48.pimg?'def':(X48.pid||'def'));XCFG.imgL=X48.pimg||'';XCFG.dimL=d;XCFG.posL=X48.ppos||'center'}
    else{XCFG.bgD=(X48.pimg?'def':(X48.pid||'def'));XCFG.imgD=X48.pimg||'';XCFG.dimD=d;XCFG.posD=X48.ppos||'center'}
    saveXCFG();x48BgApply();xCloseModal();
    toast('🖼️ تم تطبيق الخلفية وحفظها','success');
    try{render()}catch(e){}
  }catch(e){toast('❌ تعذر تطبيق الخلفية','error')}
}
function x48BgReset(){
  try{XCFG.bgD='def';XCFG.imgD='';XCFG.bgL='def';XCFG.imgL='';saveXCFG();x48BgApply();toast('↩️ استُعيدت الخلفية الافتراضية','success');try{render()}catch(e){}}catch(e){}
}
function x48BgRemoveImg(){
  try{
    var eff=x48EffTheme();
    if(eff==='light'){XCFG.imgL=''}else{XCFG.imgD=''}
    saveXCFG();x48BgApply();toast('🗑️ أُزيلت الصورة الشخصية','success');try{render()}catch(e){}
  }catch(e){}
}
function x48BgPick(inp){
  try{
    var f=inp.files&&inp.files[0];if(!f)return;
    if(!/^image\//.test(f.type||'')){toast('⚠️ اختر ملف صورة فقط','error');return}
    if(f.size>8*1024*1024){toast('⚠️ الصورة كبيرة جدًا (الحد 8 ميغابايت)','error');return}
    var rd=new FileReader();
    rd.onload=function(){
      try{
        var im=new Image();
        im.onload=function(){
          try{
            var mx=1080,sc=Math.min(1,mx/Math.max(im.width,im.height));
            var cv=document.createElement('canvas');cv.width=Math.round(im.width*sc);cv.height=Math.round(im.height*sc);
            var cx=cv.getContext('2d');cx.drawImage(im,0,0,cv.width,cv.height);
            X48.pendingImg=cv.toDataURL('image/jpeg',.82);
            X48.pid='';X48.pimg=X48.pendingImg;
            var eff=x48EffTheme();
            X48.pdim=((eff==='light')?(XCFG.dimL===undefined?.15:XCFG.dimL):(XCFG.dimD===undefined?.45:XCFG.dimD))*100;
            X48.ppos=(eff==='light')?(XCFG.posL||'center'):(XCFG.posD||'center');
            x48PvModal(true);
          }catch(e1){toast('❌ تعذر معالجة الصورة','error')}
        };
        im.src=''+rd.result;
      }catch(e2){toast('❌ تعذر قراءة الصورة','error')}
    };
    rd.readAsDataURL(f);
  }catch(e){toast('❌ تعذر اختيار الصورة','error')}
}
/* 48.د الصوت: إعادة تعريف حقيقية — المفتاح الرئيسي يسكت كل شيء فعليًا، ولكل نوع مفتاحه */
function xSound(kind){
  try{
    if(!XCFG.sound)return;
    if(kind==='tap'){if(!XCFG.beep)return}else{if(XCFG.sndNtf===false)return}
    var AC=window.AudioContext||window.webkitAudioContext;if(!AC)return;
    if(!xSound.ctx)xSound.ctx=new AC();var ctx=xSound.ctx;
    if(ctx.state==='suspended')ctx.resume();
    var seq=(kind==='success')?[[660,0,.09],[880,.10,.12]]:(kind==='error')?[[220,0,.16]]:[[520,0,.07]];
    for(var i=0;i<seq.length;i++){
      var o=ctx.createOscillator(),g=ctx.createGain();
      o.frequency.value=seq[i][0];o.type='sine';
      g.gain.setValueAtTime(.0001,ctx.currentTime+seq[i][1]);
      g.gain.exponentialRampToValueAtTime((XCFG.vol/10)*.18,ctx.currentTime+seq[i][1]+.01);
      g.gain.exponentialRampToValueAtTime(.0001,ctx.currentTime+seq[i][1]+seq[i][2]);
      o.connect(g);g.connect(ctx.destination);
      o.start(ctx.currentTime+seq[i][1]);o.stop(ctx.currentTime+seq[i][1]+seq[i][2]+.02);
    }
  }catch(e){}
}
/* 48.ه الإشعارات داخل التطبيق: مفاتيح حقيقية تتحكم في عرض الإشعارات فعلًا (لا شيء شكلي) */
var __x48UB=updBanner;
updBanner=function(){
  try{if(XCFG.quiet===true||XCFG.ntfUpd===false)return ''}catch(e){}
  return __x48UB();
};
function x48PushState(){
  try{
    if(typeof X44_PUSH_SRC!=='undefined'&&X44_PUSH_SRC)return x48T('push_on');
    if(typeof X43_PUSH!=='undefined'&&X43_PUSH&&X43_PUSH.provider&&X43_PUSH.id)return x48T('push_on');
  }catch(e){}
  return x48T('push_off');
}
/* 48.و الخصوصية: إخفاء البريد في ملفي — تحكم حقيقي في العرض */
var __x48Pv=renderProfilePage18;
renderProfilePage18=function(){
  var h=__x48Pv();
  try{
    if(XCFG.hideMail===true&&USER&&USER.session&&USER.session.user&&USER.session.user.email){
      h=(''+h).split(USER.session.user.email).join('••••••••');
    }
  }catch(e){}
  return h;
};
/* 48.ز إمكانية الوصول والكثافة: تطبيق فوري عبر أصناف CSS موحدة */
function x48A11y(){
  try{
    document.body.classList.toggle('x48-dense',XCFG.density==='compact');
    document.body.classList.toggle('x48-hc',XCFG.contrast===true);
    document.body.classList.toggle('x48-ob',XCFG.borders===true);
  }catch(e){}
}
/* 48.ح اللغة: تغيير الاتجاه والترجمة دون المساس بالجلسة أبدًا */
function x48ApplyLang(){
  try{
    var L=XCFG.lang||'ar';
    document.documentElement.setAttribute('dir',L==='ar'?'rtl':'ltr');
    document.documentElement.setAttribute('lang',L);
  }catch(e){}
}
function x48NavXlate(h){
  try{
    var L=XCFG.lang||'ar';if(L==='ar')return h;
    var m=(L==='fr')?{'الرئيسية':'Accueil','المواد':'Matières','تقدّمي':'Progrès','ملفي':'Profil','الإعدادات':'Réglages','الدخول':'Connexion'}:{'الرئيسية':'Home','المواد':'Subjects','تقدّمي':'Progress','ملفي':'Profile','الإعدادات':'Settings','الدخول':'Sign in'};
    for(var k in m){h=(''+h).split(k).join(m[k])}
  }catch(e){}
  return h;
}
var __x48Nav=renderNavbar;
renderNavbar=function(){return x48NavXlate(__x48Nav())};
var __x48BN=renderBottomNav;
renderBottomNav=function(){return x48NavXlate(__x48BN())};
var __x48AXC=applyXCFG;
applyXCFG=function(){__x48AXC();try{x48ApplyAll()}catch(e){}};
function x48ApplyAll(){x48ApplyLang();x48BgApply();x48A11y()}
/* 48.ط التخزين: أرقام حقيقية من الجهاز (تقدير التخزين + حجم بياناتك المحلية) — والمسح لا يلمس بيانات المستخدم */
function x48FmtMB(n){try{return (Math.round((n/1048576)*10)/10)+' MB'}catch(e){return '—'}}
function x48StorageFill(){
  try{
    var el=gid('x48-stor');if(!el)return;
    var b=0,i,kk;
    try{for(i=0;i<localStorage.length;i++){kk=localStorage.key(i);b+=(''+(localStorage.getItem(kk)||'')).length}}catch(e1){}
    el.innerHTML=x48T('stor_local')+': <b>'+(Math.round(b/1024))+' KB</b>';
    var e2=gid('x48-stor2');
    if(e2){e2.innerHTML=x48T('stor_used')+': <b>…</b>'}
    try{
      if(navigator.storage&&navigator.storage.estimate){
        navigator.storage.estimate().then(function(es){
          try{
            var e3=gid('x48-stor2');if(!e3)return;
            e3.innerHTML=x48T('stor_used')+': <b>'+x48FmtMB(es.usage||0)+'</b>'+(es.quota?(' / '+x48FmtMB(es.quota)):'');
          }catch(e4){}
        },function(){});
      }
    }catch(e5){}
  }catch(e){}
}
function x48ClearAsk(){
  xModal(x48T('clear_ask'),
   '<p class="x48-note">'+x48T('clear_note')+'</p>'+
   '<div class="x48-btnrow"><button class="btn btn-danger" onclick="x48Clear()">'+x48T('clear_cache')+'</button>'+
   '<button class="btn" onclick="xCloseModal()">'+x48T('cancel')+'</button></div>');
}
function x48Clear(){
  try{
    try{
      if(typeof caches!=='undefined'&&caches.keys){
        caches.keys().then(function(ks){try{for(var i=0;i<ks.length;i++){caches.delete(ks[i])}}catch(e1){}},function(){});
      }
    }catch(e2){}
    XUPD.checked=false;XUPD.newer=null;
    xCloseModal();
    toast('🧹 تم مسح الذاكرة المؤقتة — بياناتك وتقدمك وإعداداتك سليمة تمامًا','success');
    try{render()}catch(e3){}
  }catch(e){toast('❌ تعذر المسح','error')}
}
/* 48.ي المساعدة: مركز مساعدة + أسئلة شائعة حقيقية + الإبلاغ عبر قناة المنصة */
var X48_FAQ=[
 [['هل المنصة مجانية؟','نعم — كل المحتوى مجاني بالكامل لتلاميذ الطورين المتوسط والثانوي.'],['Où sont mes données ?','Sur votre appareil uniquement — aucune base externe.'],['Where is my data?','On your device only — no external database.']],
 [['هل أحتاج إنترنت للاستخدام؟','بعد أول زيارة تعمل الدروس بلا إنترنت، والمكتبات تحتاج اتصالًا لجلب الملفات أول مرة.'],['Faut-il Internet ?','Après la première visite, les leçons fonctionnent hors ligne.'],['Do I need Internet?','After the first visit, lessons work offline.']],
 [['نسيت بريدي المسجل؟','من صفحة ملفي جرّب الدخول ببريدك — رمز التحقق يصل إلى بريدك مباشرة.'],['E-mail oublié ?','Essayez la connexion ; le code arrive sur votre e-mail.'],['Forgot email?','Try signing in; the code is sent to your e-mail.']],
 [['كيف أتلقى الإشعارات؟','اضغط «موافق» عند طلب التفعيل أول مرة — وتصل الإشعارات حتى والتطبيق مغلق.'],['Notifications ?','Acceptez la demande au premier lancement.'],['Notifications?','Accept the prompt on first launch.']],
 [['كيف أحدث التطبيق؟','من الإعدادات ← التطبيق وحول ← فحص تحديث المنصة، أو اضغط زر التحديث عند ظهور إشعاره.'],['Mise à jour ?','Réglages → L application → Vérifier les mises à jour.'],['How to update?','Settings → App → Check for updates.']]
];
function x48Faq(){
  var i=X48LI(),h='';
  for(var q=0;q<X48_FAQ.length;q++){
    h+='<p style="margin:12px 0 2px"><b>'+X48_FAQ[q][i][0]+'</b></p><p class="x48-note" style="margin-top:0">'+X48_FAQ[q][i][1]+'</p>';
  }
  xModal(x48T('faq'),h);
}
function x48Help(){
  var h='<p class="x48-note">'+
   ['ابدأ من الرئيسية ← اختر مادتك ← الدروس والتمارين والاختبارات، وتقدمك يُحفظ على جهازك تلقائيًا.',
    'Accueil → matières → leçons, exercices et quiz ; votre progression est sauvegardée automatiquement.',
    'Home → subjects → lessons, exercises and quizzes; your progress saves automatically.'][X48LI()]+'</p>'+
   '<p class="x48-note">'+
   ['لأي مشكلة استخدم «الإبلاغ عن مشكلة» فيصل تقريرك إلى مؤسسة X.HAK مباشرة.',
    'Pour tout problème, utilisez « Signaler un problème ».',
    'For any issue, use "Report a problem".'][X48LI()]+'</p>';
  xModal(x48T('help_center'),h);
}
/* 48.ك صفحة الإعدادات الجديدة كاملة: رأس + بطاقة مظهر سريع + أقسام قابلة للفتح — نظام موحد قابل لإعادة الاستخدام في كل التبويبات القادمة */
function x48Sec(id){X48.open=(X48.open===id?'':id);try{render()}catch(e){}}
function x48Sw(on,labelKey,descKey,handler){
  return '<div class="x48-row" role="switch" aria-checked="'+(on?'true':'false')+'"><div><b>'+x48T(labelKey)+'</b>'+
   (descKey?'<span>'+x48T(descKey)+'</span>':'')+'</div>'+
   '<label class="x48-tsw"><input type="checkbox" '+(on?'checked':'')+' aria-label="'+escAttr(x48T(labelKey))+'" onchange="'+handler+'"><i></i></label></div>';
}
function x48Pill(key,val,lk){
  var cur=(key==='font')?(XCFG.font||'m'):(XCFG.density||'cozy');
  return '<button class="x48-pill'+(cur===val?' on':'')+'" onclick="setX(\''+key+'\',\''+val+'\')" aria-label="'+escAttr(x48T(lk))+'">'+x48T(lk)+'</button>';
}
function x48GalleryHtml(){
  var eff=x48EffTheme();
  var cur=(eff==='light')?(XCFG.bgL||'def'):(XCFG.bgD||'def');
  var curImg=(eff==='light')?XCFG.imgL:XCFG.imgD;
  var h='';
  for(var c=0;c<X48_BGCATS.length;c++){
    h+='<div class="x48-lbl">'+X48_BGCATS[c][X48LI()]+'</div><div class="x48-grid">';
    for(var i=0;i<X48_BGS.length;i++){
      if(X48_BGS[i].cat!==c)continue;
      h+='<div class="x48-gitem'+((!curImg&&cur===X48_BGS[i].id)?' on':'')+'" role="button" tabindex="0" aria-label="'+escAttr(X48_BGCATS[c][X48LI()])+'" style="background:'+X48_BGS[i].css+'" onclick="x48BgPreview(\''+X48_BGS[i].id+'\')"></div>';
    }
    h+='</div>';
  }
  return h;
}
function x48BodyAp(){
  var h='<div class="x48-lbl">'+x48T('theme')+'</div><div class="x48-thcards">'+
   '<button class="x48-thc pv-dark'+(XCFG.theme==='dark'?' on':'')+'" onclick="setX(\'theme\',\'dark\')" aria-label="'+escAttr(x48T('dark'))+'"><div class="pv"></div><b>'+x48T('dark')+'</b></button>'+
   '<button class="x48-thc pv-light'+(XCFG.theme==='light'?' on':'')+'" onclick="setX(\'theme\',\'light\')" aria-label="'+escAttr(x48T('lightm'))+'"><div class="pv"></div><b>'+x48T('lightm')+'</b></button>'+
   '<button class="x48-thc pv-auto'+(XCFG.theme==='auto'?' on':'')+'" onclick="setX(\'theme\',\'auto\')" aria-label="'+escAttr(x48T('auto'))+'"><div class="pv"></div><b>'+x48T('auto')+'</b></button>'+
   '</div>';
  h+='<div class="x48-lbl">'+x48T('bg')+'</div>';
  h+=x48GalleryHtml();
  h+='<div class="x48-btnrow">'+
   '<input type="file" accept="image/*" id="x48-bgfile" style="display:none" onchange="x48BgPick(this)">'+
   '<button class="btn" onclick="try{document.getElementById(\'x48-bgfile\').click()}catch(e){}">'+x48T('pick_img')+'</button>'+
   '<button class="btn" onclick="x48BgReset()">'+x48T('reset_bg')+'</button>'+
   (((x48EffTheme()==='light')?XCFG.imgL:XCFG.imgD)?'<button class="btn" onclick="x48BgRemoveImg()">'+x48T('remove_img')+'</button>':'')+
   '</div>';
  h+='<p class="x48-note">'+x48T('bg_note')+'</p>';
  h+='<div class="x48-lbl">'+x48T('fs')+'</div><div class="x48-pills">'+x48Pill('font','s','s')+x48Pill('font','m','m')+x48Pill('font','l','l')+'</div>';
  h+='<div class="x48-lbl">'+x48T('density')+'</div><div class="x48-pills">'+x48Pill('density','cozy','cozy')+x48Pill('density','compact','compact')+'</div>';
  h+=x48Sw(XCFG.contrast===true,'contrast','','setX(\'contrast\',this.checked)');
  h+=x48Sw(XCFG.borders===true,'borders','','setX(\'borders\',this.checked)');
  return h;
}
function x48BodyLang(){
  var cur=XCFG.lang||'ar';
  var defs=[['ar','العربية'],['fr','Français'],['en','English']];
  var h='<div class="x48-thcards">';
  for(var i=0;i<defs.length;i++){
    h+='<button class="x48-thc'+(cur===defs[i][0]?' on':'')+'" onclick="setX(\'lang\',\''+defs[i][0]+'\')" aria-label="'+defs[i][1]+'">'+
     '<div class="pv" style="display:flex;align-items:center;justify-content:center;font-weight:800;font-size:15px">'+defs[i][1]+'</div><b>'+(cur===defs[i][0]?'✓ ':'')+defs[i][1]+'</b></button>';
  }
  h+='</div><p class="x48-note">'+x48T('lang_note')+'</p>';
  return h;
}
function x48BodySnd(){
  var h=x48Sw(XCFG.sound!==false,'snd_master','snd_master_d','setX(\'sound\',this.checked)');
  h+=x48Sw(XCFG.sndNtf!==false,'snd_ntf','','setX(\'sndNtf\',this.checked)');
  h+=x48Sw(XCFG.beep!==false,'snd_tap','','setX(\'beep\',this.checked)');
  h+='<div class="x48-lbl">'+x48T('vol')+'</div>'+
   '<input class="x48-range" type="range" min="0" max="10" value="'+(XCFG.vol===undefined?6:XCFG.vol)+'" aria-label="'+escAttr(x48T('vol'))+'" oninput="try{XCFG.vol=+this.value;saveXCFG()}catch(e){}">';
  return h;
}
function x48BodyNtf(){
  var h=x48Sw(XCFG.ntfUpd!==false,'ntf_upd','','setX(\'ntfUpd\',this.checked)');
  h+=x48Sw(XCFG.quiet===true,'ntf_quiet','','setX(\'quiet\',this.checked)');
  h+='<div class="x48-row"><div><b>'+x48T('push_state')+'</b><span>'+x48PushState()+'</span></div></div>';
  h+='<p class="x48-note">'+x48T('push_note')+'</p>';
try{if((typeof x54OwnerOk==='function')&&x54OwnerOk()){h+='<p class="x48-note">'+x48T('soon_note')+'</p>'}}catch(eA){};
  return h;
}
function x48BodyPriv(){
var h='';try{if((typeof x54OwnerOk==='function')&&x54OwnerOk()){h='<p class="x48-note">'+x48T('priv_info')+'</p>'}}catch(eB){};
  h+=x48Sw(XCFG.hideMail===true,'priv_hide','','setX(\'hideMail\',this.checked)');
  h+='<div class="x48-btnrow">'+
   '<button class="btn btn-danger-ghost" onclick="try{logoutUser()}catch(e){}">'+x48T('priv_logout')+'</button>'+
   '<button class="btn" onclick="try{xShowDoc(\'privacy\')}catch(e){}">'+x48T('priv_policy')+'</button>'+
   '<button class="btn" onclick="try{xShowDoc(\'terms\')}catch(e){}">'+x48T('terms')+'</button>';
  try{if(typeof isAdmin==='function'&&isAdmin()){h+='<button class="btn btn-primary" onclick="try{navigate(\'admin\')}catch(e){}">🛡️ لوحة X.HAK</button>'}}catch(e){}
h+='</div>';try{if((typeof x54OwnerOk==='function')&&x54OwnerOk()){h+='<p class="x48-note">'+x48T('priv_devices')+'</p>'}}catch(eC){};
  return h;
}
function x48BodyA11y(){
  var h=x48Sw(XCFG.font==='l','a11y_big','','setX(\'font\',this.checked?\'l\':\'m\')');
  h+=x48Sw(XCFG.contrast===true,'a11y_hc','','setX(\'contrast\',this.checked)');
  h+=x48Sw(XCFG.motion===false,'a11y_rm','','setX(\'motion\',!this.checked)');
  h+=x48Sw(XCFG.borders===true,'borders','','setX(\'borders\',this.checked)');
  h+='<p class="x48-note">'+x48T('a11y_sr')+'</p>';
  return h;
}
function x48BodyStor(){
  return '<div class="x48-row"><div><b>'+x48T('stor_used')+'</b><span id="x48-stor2">…</span></div></div>'+
   '<div class="x48-row"><div><b>'+x48T('stor_local')+'</b><span id="x48-stor">…</span></div></div>'+
   '<div class="x48-btnrow"><button class="btn" onclick="x48ClearAsk()">'+x48T('clear_cache')+'</button></div>'+
   '<p class="x48-note">'+x48T('clear_note')+'</p>';
}
function x48ReportShow(){try{xModal(x48T('report'),contactHTML())}catch(e){}}
function x48BodyHelp(){
  return '<div class="x48-btnrow" style="margin-top:0">'+
   '<button class="btn" onclick="x48Help()">'+x48T('help_center')+'</button>'+
   '<button class="btn" onclick="x48Faq()">'+x48T('faq')+'</button>'+
   '<button class="btn" onclick="x48ReportShow()">'+x48T('report')+'</button>'+
   '<button class="btn" onclick="try{xShowDoc(\'about\')}catch(e){}">'+x48T('contactb')+'</button>'+
   '</div>';
}
function x48BodyApp(){
  var h='';
  try{h+='<div class="x48-note" style="margin-top:0">'+xInstallRow()+'</div>'}catch(e){}
  try{h+='<div style="margin-top:8px">'+x42ApkCard()+'</div>'}catch(e){}
  h+='<div class="x48-btnrow">'+
   '<button class="btn" onclick="try{checkUpdate()}catch(e){}">'+x48T('check_upd')+'</button>';
  try{if(typeof x44Share==='function'){h+='<button class="btn" onclick="try{x44Share()}catch(e){}">'+x48T('share')+'</button>'}}catch(e){}
  h+='</div>';
  h+='<div class="x48-infocard"><img src="./icon-512.png" class="x48-logo" alt="'+escAttr(x48T('app_name'))+'">'+
   '<h3 style="margin:12px 0 2px">'+x48T('app_name')+'</h3>'+
   '<p class="x48-note" style="margin:4px 0">'+x48T('org')+'</p>'+
   '<p class="x48-note" style="margin:4px 0">'+x48T('ver')+': <b>'+APP_META.ver+'</b> · '+x48T('lastupd')+': <b>'+APP_META.lastUpdate+'</b></p>'+
   '<p class="x48-note" style="margin:4px 0">'+x48T('rights')+'</p></div>';
  return h;
}
var X48_SECS=[
 {id:'ap',icon:'ap',k:'sec_ap',b:x48BodyAp},
 {id:'lang',icon:'lang',k:'sec_lang',b:x48BodyLang},
 {id:'snd',icon:'snd',k:'sec_snd',b:x48BodySnd},
 {id:'ntf',icon:'ntf',k:'sec_ntf',b:x48BodyNtf},
 {id:'priv',icon:'priv',k:'sec_priv',b:x48BodyPriv},
 {id:'a11y',icon:'a11y',k:'sec_a11y',b:x48BodyA11y},
 {id:'stor',icon:'stor',k:'sec_stor',b:x48BodyStor},
 {id:'help',icon:'help',k:'sec_help',b:x48BodyHelp},
 {id:'app',icon:'app',k:'sec_app',b:x48BodyApp}
];
function x48SecHtml(s){
  var open=(X48.open===s.id);
  return '<div class="x48-sec'+(open?' open':'')+'" id="x48-sec-'+s.id+'">'+
   '<button class="x48-sech" onclick="x48Sec(\''+s.id+'\')" aria-expanded="'+(open?'true':'false')+'" aria-label="'+escAttr(x48T(s.k))+'">'+
   '<span class="x48-ic">'+X48_IC[s.icon]+'</span>'+
   '<span style="text-align:start;flex:1"><b>'+x48T(s.k)+'</b><span>'+x48T(s.k+'_d')+'</span></span>'+
   '<i class="x48-chv">⌄</i></button>'+
   (open?'<div class="x48-secb">'+s.b()+'</div>':'')+
   '</div>';
}
renderSettingsPage=function(){
  var eff=x48EffTheme();
  var modeName=x48T(XCFG.theme==='auto'?'auto':(XCFG.theme==='light'?'lightm':'dark'));
  var h='<div class="x48-page fade-in">';
  h+='<div class="x48-hero"><div class="x48-hicon">'+X48_IC.gear+'</div><h1>'+x48T('title')+'</h1><p>'+x48T('sub')+'</p></div>';
  h+='<div class="x48-qcard">'+
   '<div class="x48-qsw" aria-hidden="true"><i style="background:#080D18"></i><i style="background:'+(eff==='light'?'#F4F7FC':'#0D1625')+'"></i><i style="background:'+(eff==='light'?'#168EBF':'#35BDF2')+'"></i></div>'+
   '<div style="flex:1"><b>'+x48T('quick')+'</b><span style="display:block;font-size:12.5px;color:'+(eff==='light'?'#64748B':'#A2AEC0')+'">'+modeName+'</span></div>'+
   '<button class="btn btn-sm btn-primary" onclick="X48.open=\'ap\';try{render()}catch(e){}" aria-label="'+escAttr(x48T('quickbtn'))+'">'+x48T('quickbtn')+'</button></div>';
  for(var i=0;i<X48_SECS.length;i++){h+=x48SecHtml(X48_SECS[i])}
  h+='</div>';
  try{setTimeout(x48StorageFill,60)}catch(e){}
  return h;
};
/* 48.ل التوصيل: مفاتيح جديدة افتراضية + ترحيل خلفية 45 القديمة + تحميل المحفوظ + تطبيق كل شيء عند الإقلاع */
try{
  var x48k=['density','contrast','borders','hideMail','quiet','sndNtf','ntfUpd','bgD','bgL','dimD','dimL','imgD','imgL','posD','posL'];
  var x48d={density:'cozy',contrast:false,borders:false,hideMail:false,quiet:false,sndNtf:true,ntfUpd:true,bgD:'def',bgL:'def',dimD:.45,dimL:.15,imgD:'',imgL:'',posD:'center',posL:'center'};
  for(var x48i=0;x48i<x48k.length;x48i++){if(XCFG[x48k[x48i]]===undefined){XCFG[x48k[x48i]]=x48d[x48k[x48i]]}}
  if(typeof X45V_BGMODE!=='undefined'&&X45V_BGMODE==='img'&&X45V_BGIMG){
    XCFG.imgD=X45V_BGIMG;X45V_BGMODE='default';try{x45vBgApply()}catch(e0){}
  }else if(typeof X45V_BGMODE!=='undefined'&&X45V_BGMODE==='black'){
    XCFG.bgD='blk';X45V_BGMODE='default';try{x45vBgApply()}catch(e1){}
  }
  loadXCFG();
  applyXCFG();
  try{
    if(window.matchMedia){
      var x48mq=window.matchMedia('(prefers-color-scheme: light)');
      if(x48mq&&typeof x48mq.addListener==='function'){x48mq.addListener(function(){try{if(XCFG.theme==='auto')applyXCFG()}catch(e){}})}
      else if(x48mq&&typeof x48mq.addEventListener==='function'){x48mq.addEventListener('change',function(){try{if(XCFG.theme==='auto')applyXCFG()}catch(e){}})}
    }
  }catch(e2){}
}catch(e){}
/* 48.م بيانات الإصدار */
APP_META.ver='48.0';APP_META.date='2026-11-02';APP_META.lastUpdate='2026-11-02';
APP_META.notes='الإصدار 48 — تبويب الإعدادات الاحترافي الجديد بالكامل: نظام تصميم موحد بالهوية الرسمية (بطاقات 16px وأزرار 12px وعناصر 48-52px وانتقالات 160-220ms)، رأس أنيق وبطاقة مظهر سريعة، وتسعة أقسام حقيقية: المظهر والعرض (الوضع داكن/فاتح/تلقائي مع معاينة، معرض 24 خلفية بسبع فئات مع معاينة وتعتيم وموضع، صورة من الجهاز بضغط تلقائي وحد 8MB، خلفية مستقلة لكل وضع، حجم النص والكثافة والتباين والحدود)، اللغة (عربية/فرنسية/إنجليزية مع تغيير الاتجاه الحي دون المساس بالجلسة)، الصوت (مفاتيح حقيقية تسكت الأصوات فعليًا + درجة الصوت)، الإشعارات (تحكم حقيقي في إشعارات التحديث داخل التطبيق وحالة Push الفعلية بلا ادعاء)، الخصوصية والأمان (إخفاء البريد، خروج، سياسات، وصدق حول ما يتطلب خادمًا)، إمكانية الوصول (تكبير، تباين، تقليل حركة، وضوح أزرار، تسميات قارئ شاشة)، التخزين (أرقام حقيقية ومسح آمن للذاكرة المؤقتة فقط)، المساعدة (مركز + أسئلة شائعة + إبلاغ)، ومعلومات التطبيق. كل اختيار يُحفظ فعليًا ويبقى بعد إغلاق التطبيق.';
try{APP_META.changelog.unshift('الإصدار 48 — تبويب الإعدادات الاحترافي: أقسام قابلة للفتح بالهوية الرسمية، معرض خلفيات بمعاينة وتعتيم، لغة ثلاثية باتجاه حي، مفاتيح صوت حقيقية، إشعارات صادقة، خصوصية وإمكانية وصول وتخزين حقيقي، ومساعدة — وكل شيء يُحفظ على الجهاز.')}catch(e){}
function fallbackNews18(){
  return [{title:'الإصدار 48 — الإعدادات الاحترافية',
    body:'تبويب الإعدادات صار كتطبيقات العالم الكبرى: مظهر داكن/فاتح/تلقائي، معرض خلفيات مع معاينة، لغة عربية/فرنسية/إنجليزية، صوت وإشعارات وخصوصية وإمكانية وصول وتخزين حقيقي — وكل اختيار يُحفظ على جهازك.',
    date:APP_META.date}];
}
