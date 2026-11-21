/* ===== طبقة 77: نشر صادق قابل للإصلاح + زر التطبيق في شريط الموقع + ثبات ===== */
var x77Last={t:'',b:''};
function x77Base(){try{return (''+location.origin)+(''+location.pathname).replace(/[^\/]*$/,'')}catch(e0){return ''}}
function x77Share(){
  try{
    if(navigator&&navigator.share){
      try{navigator.share({title:'منصة X التعليمية',text:'جرّب منصة X التعليمية — دروس وملاخصات وتحديات للطورين المتوسط والثانوي:',url:x77Base()}).then(function(){}).catch(function(){})}catch(e1){}
      return;
    }
  }catch(e2){}
  try{
    if(navigator&&navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(x77Base());try{toast('✅ نُسخ رابط المنصة — الصقه لأصدقائك','success')}catch(e3){}return}
  }catch(e4){}
  try{toast('⚠️ المشاركة غير مدعومة في هذا المتصفح')}catch(e5){}
}
function x77AppSheet(){
  try{
    var apk='';try{apk=(typeof x42ApkUrl==='function')?x42ApkUrl():'./X.apk'}catch(e0){apk='./X.apk'}
    var u='';try{u=x77Base()}catch(e1){u=''}
    xModal('📲 التطبيق — شاركه أو نزّله',
     '<div class="btn-row" style="display:flex;flex-wrap:wrap;gap:10px">'+
     '<button class="btn btn-primary" onclick="try{x77Share()}catch(e){}" style="flex:1 1 140px">📤 مشاركة</button>'+
     '<a class="btn btn-primary" href="'+escAttr(apk||'./X.apk')+'" download="X.apk" style="flex:1 1 140px;text-decoration:none;display:inline-flex;align-items:center;justify-content:center">⬇️ تنزيل APK</a>'+
     '</div>'+
     '<p class="x17-mute" style="margin-top:12px;font-size:12.5px">«مشاركة» تفتح تطبيقات هاتفك مباشرة (واتساب، تيليجرام، الرسائل...) والرابط جاهز — و«تنزيل APK» يجلب التطبيق مباشرة إلى هاتفك دون نسخ أي رابط.</p>');
  }catch(e2){}
}
var __x77BN=renderBottomNav;
renderBottomNav=function(){
  var h='';try{h=__x77BN()}catch(e0){h=''}
  try{
    if(h&&(''+h).indexOf('x77-appbtn')<0){
      var ch='web';try{ch=((typeof x76IsApp==='function')&&x76IsApp())?'app':'web'}catch(e1){ch='web'}
      if(ch==='web'){
        var btn='<button class="bnav-btn x77-appbtn" onclick="try{x77AppSheet()}catch(e){}" aria-label="التطبيق">📲<span>التطبيق</span></button>';
        h=(''+h).replace('</nav>',btn+'</nav>');
      }
    }
  }catch(e2){}
  return h;
};
var __x77AP=adPublish;
adPublish=function(){
  try{
    var t=(''+(((gid('adm-nt')||{}).value)||'')).trim();
    var b=(''+(((gid('adm-nb')||{}).value)||'')).trim();
    if(t&&b){x77Last={t:t,b:b}}
  }catch(e0){}
  try{__x77AP()}catch(e1){}
};
function x77RetryPub(){
  try{
    var t=x77Last.t||'';var b=x77Last.b||'';
    if(!t||!b){try{toast('✍️ لا يوجد إعلان محفوظ لإعادة المحاولة')}catch(e2){}return}
    try{if(typeof xCloseModal==='function'){xCloseModal()}}catch(e3){}
    try{toast('⏳ إعادة محاولة النشر الآن...')}catch(e4){}
    try{XNEWS.loaded=false}catch(e5){}
    try{XNEWS.items=null}catch(e6){}
    try{
      if(typeof x66AnnWrite==='function'){
        x66AnnWrite(t,b,function(mode,err){
          try{
            if(mode==='rest'){try{toast('✅ نُشر الإعلان في قاعدة البيانات — سيظهر لجميع التلاميذ','success')}catch(e7){}}
            else if(mode==='storage'){try{toast('✅ نُشر الإعلان عبر قناة المكتبة — سيظهر لجميع التلاميذ','success')}catch(e8){}}
            else if(mode==='local'){try{x71LocalModal(t,b)}catch(e9){}}
            else{try{toast('❌ '+err)}catch(e10){}}
          }catch(e11){}
          try{render()}catch(e12){}
        });
      }
    }catch(e13){}
  }catch(e14){}
}
var __x77LM=x71LocalModal;
x71LocalModal=function(t,b){
  try{
    var k=null;try{k=(typeof x66Keys==='function')?x66Keys():null}catch(e1){}
    var c=null;try{c=(typeof x66StorCfg==='function')?x66StorCfg():null}catch(e2){}
    var host='';try{host=(''+((k&&k.url)||'')).replace(/^https?:\/\//,'').split('.')[0]}catch(e3){}
    var authed=false;try{authed=!!(USER&&USER.session&&USER.session.access_token)}catch(e4){}
    var sql='';try{sql=(typeof X71_SQL==='string')?X71_SQL:''}catch(e5){}
    xModal('⚠️ لم يصل الإعلان للتلاميذ — التشخيص الدقيق والحل',
     '<p>حُفظ إعلانك («'+escAttr(t)+'») على هذا الجهاز مؤقتًا، وأُرسل تنبيه إلى بريد المنصة حتى لا يمر الأمر بصمت.</p>'+
     '<p><b>حالة القنوات الآن على هذا الجهاز:</b></p><ul>'+
     '<li>🔗 قاعدة البيانات <b>'+escAttr(host||'غير مهيأة')+'</b>: '+(k&&k.url?('مفتاح الاتصال موجود، لكن جدول الإعلانات غير موجود في هذا المشروع تحديدًا أو سياسة النشر تمنع الإدراج'+(authed?'':' — وأنت غير مسجل بحساب موثّق حاليًا')):'لا مفتاح اتصال محفوظ — جهّز اتصال قاعدة البيانات من الإعدادات')+'</li>'+
     '<li>📚 مكتبة الملفات (القناة الاحتياطية): '+(c?'جاهزة':'بطاقة التجهيز svc غير محفوظة على هذا الجهاز — جهّزها من الإعدادات ← اتصال المكتبة')+'</li>'+
     '</ul>'+
     '<p><b>الحل في دقيقة واحدة:</b> افتح Supabase ← SQL Editor ← تأكد أن المشروع المفتوح هو <b>'+escAttr(host)+'</b> نفسه بالضبط (أشهر سبب للفشل: تشغيل السكربت في مشروع مختلف) ← الصق السكربت ← Run ← ارجع واضغط «أعد المحاولة»:</p>'+
     (sql?('<div class="x71-sql">'+escAttr(sql)+'</div>'):'')+
     '<div class="btn-row" style="display:flex;flex-wrap:wrap;gap:8px">'+
     '<button class="btn btn-primary" onclick="try{x71CopySql()}catch(e){}">📋 نسخ السكربت</button>'+
     '<a class="btn" href="https://supabase.com/dashboard/project/_/sql/new" target="_blank" rel="noopener" style="text-decoration:none">🔗 افتح SQL Editor</a>'+
     '<button class="btn" onclick="try{x77RetryPub()}catch(e){}">↻️ أعد المحاولة</button>'+
     '</div>');
  }catch(e0){try{__x77LM(t,b)}catch(e6){}}
};
APP_META.ver='77.0';APP_META.date='2026-11-05';APP_META.lastUpdate='2026-11-05';
APP_META.notes='الإصدار 77 — الاحتراف والثبات والاستقرار: نافذة تشخيص حية عند تعثر نشر إعلان (تظهر حالة القناتين واسم مشروعك بالضبط مع زر فتح SQL Editor وزر إعادة المحاولة من داخل المنصة)، وزر «التطبيق» جديد في شريط الموقع فقط بخانتين: مشاركة مباشرة تفتح تطبيقات هاتفك بلا نسخ رابط، وتنزيل APK فوري.';
try{APP_META.changelog.unshift({ver:'77.0',date:'2026-11-05',notes:'نافذة تشخيص النشر الحية + إعادة المحاولة + زر التطبيق في شريط الموقع (مشاركة مباشرة + تنزيل APK) + ثبات.'})}catch(e9){}
