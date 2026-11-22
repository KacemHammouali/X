/* ================================================================
   منصة X التعليمية — ملف المفاتيح الخارجية (js/00-keys.js)
   الإصدار 1.0 — 2026-11-22 — مؤسسة X.HAK
   قواعد الذهب (للمالك ولأي مطوّر):
   1) يُحمَّل أول شيء في index.html وقبل كل الطبقات، ويبقى كما هو في كل
      تحديث مستقبلي — التحديثات لا تمسه أبدًا، فلا مفاتيح تضيع ولا تُكسر.
   2) هذا الملف عام (أي زائر يستطيع رؤيته) — يُوضع فيه فقط المفاتيح المصممة
      للاستخدام من المتصفح: Supabase URL وanon key، وروابط إشعارات عامة.
   3) ممنوع نهائيًا وضعه هنا: كلمات المرور، كلمة تطبيق SMTP، مفتاح service_role،
      مفاتيح الدفع السرية — تلك تُضبط في لوحة الخدمة نفسها أو خادم خاص فقط.
   4) لإضافة خدمة جديدة: أضف بندًا داخل X_KEYS بالشكل الموضح في فتحة future
      ثم ارفع الملف — تقرأه المنصة تلقائيًا عند الإقلاع.
   ================================================================ */
window.X_KEYS = {
  updatedAt: '2026-11-22',
  supabase: {
    url: 'https://ykbvibkeguikrppvghir.supabase.co',
    anon: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlrYnZpYmtlZ3Vpa3JwcHZnaGlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTM1NjQ0MTQsImV4cCI6MjEwOTE0MDQxNH0.dFXVEnLMQNiVwKWJQcwD_BbapfObE5NecmEGcg4h3Ws'
  },
  push: {
    provider: 'sendpulse',
    src: 'https://web.webpushs.com/js/push/272eeb2577f3407a2bef12f4ec1c7769_1.js'
  },
  future: {
    /* مثال مستقبلي: mail: { provider: 'brevo', publicSiteKey: '...' } */
  }
};
