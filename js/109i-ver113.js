/* ================================================================
   منصة X التعليمية — الطبقة 109i — الإصدار 113.0
   التحديث الذاتي العالمي: المنصة تمسح النسخ القديمة وتثبت الجديد وحدها
   بلا زر وبلا خطوات — مرة واحدة لكل إصدار، مثل تيليجرام.
   © 2026 مؤسسة X.HAK (HAMMOUALI Kacem) — جميع الحقوق محفوظة.
   قواعد البناء: ES5 فقط — لا يمس js/00-keys.js ولا الهوية الرسمية.
   عامل الخدمة أصلا يثبت النسخة الجديدة وحدها منذ الإصدار 98 (install →
   skipWaiting وactivate → clients.claim). هذه الطبقة تكمل السلسلة:
   إعادة تحميل واحدة بعد تسلّم النسخة الجديدة + مسح مخازن القديم +
   شفاء ذاتي بسؤال versions.json من الشبكة مباشرة عند كل إقلاع،
   وكل 4 دقائق، وعند كل استيقاظ للشاشة.
   ================================================================ */
(function () {
  'use strict';
  if (window.__x113Active) { return; }
  window.__x113Active = true;

  var V = '113.0';
  var HEAL_KEY = 'x113_heal';
  var TOAST_KEY = 'x113_toast';

  function vNum(s) {
    try {
      var p = String(s || '').replace(/[^0-9.]/g, '').split('.');
      return (parseInt(p[0], 10) || 0) * 10000 + (parseInt(p[1], 10) || 0) * 100 + (parseInt(p[2], 10) || 0);
    } catch (e) { return 0; }
  }

  function wipeCaches(done) {
    try {
      var C = window.caches;
      if (!C || !C.keys) { try { done(); } catch (e0) {} return; }
      C.keys().then(function (ks) {
        var left = ks.length;
        function step() { left = left - 1; if (left <= 0) { try { done(); } catch (e2) {} } }
        if (!left) { try { done(); } catch (e1) {} return; }
        ks.forEach(function (k) { C.delete(k).then(step).catch(step); });
      }).catch(function () { try { done(); } catch (e3) {} });
    } catch (e) { try { done(); } catch (e4) {} }
  }

  function kickSW() {
    try {
      var sw = navigator.serviceWorker;
      if (!sw || !sw.getRegistration) { return; }
      sw.getRegistration().then(function (reg) {
        if (!reg) { return; }
        try { if (reg.waiting) { reg.waiting.postMessage('skipWaiting'); } } catch (e1) {}
        try { if (reg.installing) { reg.installing.postMessage('skipWaiting'); } } catch (e2) {}
        try { reg.update(); } catch (e3) {}
      }).catch(function () {});
    } catch (e) {}
  }

  try {
    var locked = false;
    navigator.serviceWorker.addEventListener('controllerchange', function () {
      if (locked) { return; }
      locked = true;
      try {
        var seen = sessionStorage.getItem('x113_reloaded');
        if (seen === V) { return; }
        sessionStorage.setItem('x113_reloaded', V);
      } catch (e0) {}
      wipeCaches(function () { location.reload(); });
    });
  } catch (e) {}

  function selfHeal() {
    try {
      if (!navigator.onLine) { return; }
      fetch('versions.json', { cache: 'no-store' }).then(function (r) {
        try { return r.json(); } catch (e0) { return null; }
      }).then(function (j) {
        try {
          if (!j || !j.ver) { return; }
          var cur = vNum(window.APP_META && window.APP_META.ver);
          var tgt = vNum(j.ver);
          var seen = '';
          try { seen = window.localStorage.getItem(HEAL_KEY) || ''; } catch (e1) {}
          if (tgt > cur && seen !== j.ver) {
            try { window.localStorage.setItem(HEAL_KEY, String(j.ver)); } catch (e2) {}
            try { window.localStorage.setItem(TOAST_KEY, String(j.ver)); } catch (e3) {}
            wipeCaches(function () {
              var unreg = null;
              try {
                unreg = navigator.serviceWorker.getRegistrations().then(function (rs) {
                  return Promise.all(rs.map(function (rx) { return rx.unregister(); }));
                });
              } catch (e4) { unreg = null; }
              var go = function () { location.replace(location.pathname + '?xv=' + Date.now() + location.hash); };
              if (unreg && unreg.then) { unreg.then(go, go); } else { go(); }
            });
          }
        } catch (e5) {}
      }).catch(function () {});
    } catch (e) {}
  }

  function doneToast() {
    try {
      var t = window.localStorage.getItem(TOAST_KEY) || '';
      if (t !== V) { return; }
      setTimeout(function () {
        try {
          if (document.getElementById('x113-toast')) { return; }
          var d = document.createElement('div');
          d.id = 'x113-toast';
          d.textContent = 'تم تحديث منصة X إلى 113.0 ✨';
          d.style.cssText = 'position:fixed;left:50%;bottom:26px;transform:translateX(-50%);z-index:2147483600;background:#0d1625;color:#f5f7fc;border:1px solid #26384d;border-radius:14px;padding:10px 16px;font-size:13px;box-shadow:0 8px 30px rgba(0,0,0,.45);direction:rtl;font-family:inherit;';
          document.body.appendChild(d);
          setTimeout(function () { if (d && d.parentNode) { d.parentNode.removeChild(d); } }, 4200);
          window.localStorage.removeItem(TOAST_KEY);
        } catch (e1) {}
      }, 1200);
    } catch (e) {}
  }

  var prevBoot = (typeof window.boot === 'function') ? window.boot : null;
  window.boot = function () {
    try { if (prevBoot) { prevBoot(); } } catch (e) {}
    try {
      window.APP_META.ver = V;
      window.APP_META.date = '2026-11-22';
      window.APP_META.notes = 'تحديث ذاتي كامل: المنصة تمسح النسخ القديمة من الذاكرة وتثبت الجديد وحدها بلا زر مهما كان الإصدار عندك.';
      if (window.APP_META.changelog && window.APP_META.changelog.unshift) {
        var hasV = false;
        var cl = window.APP_META.changelog;
        for (var ci = 0; ci < cl.length; ci++) { if (String(cl[ci].ver) === V) { hasV = true; break; } }
        if (!hasV) { cl.unshift({ ver: V, date: '2026-11-22', notes: window.APP_META.notes }); }
      }
    } catch (e2) {}
    doneToast();
    setTimeout(function () { kickSW(); selfHeal(); }, 1500);
    setTimeout(function () { kickSW(); }, 9000);
  };

  (function loop() {
    try {
      setTimeout(function () { kickSW(); selfHeal(); loop(); }, 240000);
    } catch (e) {}
  })();
  try {
    document.addEventListener('visibilitychange', function () {
      if (document.visibilityState === 'visible') { setTimeout(function () { kickSW(); selfHeal(); }, 800); }
    });
  } catch (e) {}

  window.x113t = { ver: V, autoUpdate: true, selfHeal: true };

})();
