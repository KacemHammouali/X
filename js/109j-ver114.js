/* ================================================================
   منصة X التعليمية — الطبقة 109j — الإصدار 114.0
   (أ) حراس الملفات: أي ملف تعثر تحميله على الشبكة يعاد جلبه
       تلقائيًا حتى 4 مرات بفواصل ذكية، ثم شبكة أمان للأخطاء
       تعيد الإصلاح تلقائيًا عند تكرار دالة ناقصة.
   (ب) الواجهة الخارقة: عشبة زجاجية عميقة بأسلوب إنستغرام × تيليجرام ×
       iOS: بطاقات متعددة الظلال، أزرار تدرج رسمي متوهجة، شريط سفلي
       عائم زجاجي، حقول بتوهج تركيز، توست زجاجي طائر.
   © 2026 مؤسسة X.HAK (HAMMOUALI Kacem). ES5 فقط. لا يمس js/00-keys.js.
   ================================================================ */
(function () {
  'use strict';
  if (window.__x114Active) { return; }
  window.__x114Active = true;
  var V = '114.0';

  var RETRIED = {};
  function retryScript(p) {
    try {
      var s = document.createElement('script');
      s.src = p + ((p.indexOf('?') >= 0) ? '&' : '?') + 'xr=' + Date.now();
      s.onload = function () {
        try { toast('✅ تم إصلاح ملف ناقص تلقائيًا — أعد المحاولة بثقة', 'success'); } catch (e) {}
      };
      document.body.appendChild(s);
    } catch (e) {}
  }
  window.addEventListener('error', function (ev) {
    try {
      var el = ev && ev.target;
      if (!el || el.tagName !== 'SCRIPT') { return; }
      var p = el.getAttribute && el.getAttribute('src');
      if (!p || RETRIED[p] >= 4) { return; }
      RETRIED[p] = (RETRIED[p] || 0) + 1;
      setTimeout(function () { retryScript(p); }, 900 * RETRIED[p]);
    } catch (e) {}
  }, true);

  var ERRC = 0;
  window.addEventListener('error', function (ev) {
    try {
      var m = String((ev && ev.message) || '');
      if (m.indexOf('is not defined') < 0) { return; }
      ERRC = ERRC + 1;
      if (ERRC < 3) { return; }
      var last = parseInt((window.localStorage.getItem('x114_heal') || '0'), 10) || 0;
      if (Date.now() - last < 3600000) { return; }
      try { window.localStorage.setItem('x114_heal', String(Date.now())); } catch (e2) {}
      try {
        var C = window.caches;
        if (C && C.keys) { C.keys().then(function (ks) { ks.forEach(function (k) { C.delete(k); }); }); }
      } catch (e3) {}
      location.replace(location.pathname + '?xv=' + Date.now());
    } catch (e) {}
  });

  function skin() {
    try {
      if (document.getElementById('x114-style')) { return; }
      var st = document.createElement('style');
      st.id = 'x114-style';
      st.textContent = [
        'body{-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}',
        '.glass,.glass-strong,.x17-card,.auth-card,.stat-card,.subject-card,.qcard,.x30-cycle,.x30-hubcard,.set-card,.info-card,.bac-card,.results-card{border-radius:20px!important;border:1px solid var(--border)!important;box-shadow:0 1px 0 rgba(255,255,255,.05) inset,0 12px 34px rgba(0,0,0,.38),0 2px 8px rgba(0,0,0,.22)!important;background:linear-gradient(165deg,rgba(255,255,255,.055),rgba(255,255,255,.018))!important;transition:transform .18s ease,box-shadow .25s ease,border-color .25s ease}',
        '.x30-cycle:active,.x30-hubcard:active,.stat-card:active,.subject-card:active,.qcard:active{transform:translateY(-2px) scale(.99);border-color:rgba(53,189,242,.4)!important}',
        '.btn{border-radius:14px!important;font-weight:800!important;letter-spacing:.2px;transition:transform .16s ease,box-shadow .22s ease,filter .2s ease!important;box-shadow:0 6px 16px rgba(0,0,0,.28)}',
        '.btn:active{transform:scale(.96);filter:brightness(1.12)}',
        '.btn-primary{background:linear-gradient(135deg,#35BDF2 0%,#5C8AE6 50%,#8B6CFF 100%)!important;border:0!important;color:#fff!important;box-shadow:0 10px 26px rgba(53,189,242,.32),0 3px 8px rgba(0,0,0,.3),0 1px 0 rgba(255,255,255,.25) inset!important}',
        '.bnav{border-radius:24px!important;border:1px solid var(--border)!important;background:rgba(13,22,37,.72)!important;-webkit-backdrop-filter:blur(26px) saturate(1.25);backdrop-filter:blur(26px) saturate(1.25);box-shadow:0 -10px 40px rgba(0,0,0,.5),0 1px 0 rgba(255,255,255,.06) inset!important}',
        '.bnav-btn{transition:transform .18s ease,color .18s ease!important;border-radius:16px}',
        '.bnav-btn:active{transform:translateY(-3px) scale(.92)}',
        '.bnav-on{color:#35BDF2!important;text-shadow:0 0 16px rgba(53,189,242,.6)}',
        '.inp,.x30-inp,input[type="email"],input[type="text"]{border-radius:12px!important;border:1px solid var(--border)!important;background:rgba(255,255,255,.045)!important;transition:border-color .2s ease,box-shadow .2s ease!important}',
        '.inp:focus,.x30-inp:focus,input:focus{border-color:#35BDF2!important;box-shadow:0 0 0 3px rgba(53,189,242,.18)!important;outline:0!important;background:rgba(255,255,255,.06)!important}',
        '#toasts>*{border-radius:16px!important;border:1px solid var(--border)!important;background:rgba(13,22,37,.86)!important;-webkit-backdrop-filter:blur(16px);backdrop-filter:blur(16px);box-shadow:0 14px 40px rgba(0,0,0,.5),0 1px 0 rgba(255,255,255,.06) inset!important;animation:x114up .3s cubic-bezier(.2,.9,.3,1.1) both}',
        '@keyframes x114up{from{opacity:0;transform:translateY(16px) scale(.92)}to{opacity:1;transform:none}}',
        '.success{border-color:rgba(57,185,138,.55)!important}',
        '.error{border-color:rgba(225,111,124,.55)!important}',
        '.x20-hero h2{background:linear-gradient(90deg,var(--text) 20%,#35BDF2 65%,#8B6CFF 100%);-webkit-background-clip:text;background-clip:text;color:transparent!important}',
        '.x30-chip,.pill,.xpill,.x22-badge{border-radius:999px!important;transition:transform .15s ease}',
        '.x30-chip:active,.pill:active{transform:scale(.94)}',
        'body.fx-off #toasts>*,body.fx-off .fade-in,body.fx-off .bnav-btn,body.fx-off .btn{animation:none!important;transition:none!important}',
        '@media (prefers-reduced-motion:reduce){#toasts>*{animation:none}}',
        '::-webkit-scrollbar{width:3px}',
        '::-webkit-scrollbar-thumb{background:rgba(53,189,242,.35);border-radius:99px}',
        '::selection{background:rgba(53,189,242,.35)}'
      ].join('\n');
      document.head.appendChild(st);
    } catch (e) {}
  }
  skin();
  setTimeout(skin, 60);

  var prevBoot = (typeof window.boot === 'function') ? window.boot : null;
  window.boot = function () {
    try { if (prevBoot) { prevBoot(); } } catch (e) {}
    skin();
    try {
      window.APP_META.ver = V;
      window.APP_META.date = '2026-11-22';
      window.APP_META.notes = 'واجهة خارقة بأسلوب تطبيقات العالم: زجاج عميق متعدد الظلال وأزرار متوهجة وشريط عائم + حراس ملفات يعيدون جلب أي ملف تعثر تحميله تلقائيًا فلا تفنى دالة بعد اليوم.';
      var cl = window.APP_META.changelog;
      if (cl && cl.unshift) {
        var hasV = false;
        for (var ci = 0; ci < cl.length; ci++) { if (String(cl[ci].ver) === V) { hasV = true; break; } }
        if (!hasV) { cl.unshift({ ver: V, date: '2026-11-22', notes: window.APP_META.notes }); }
      }
    } catch (e2) {}
  };

  window.x114t = { ver: V, scriptGuard: true, skin: true };
})();
