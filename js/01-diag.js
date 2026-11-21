/* ---- 17.0 التشخيص الذاتي v2: يجمع كل الأخطاء بالترتيب ولا يمحو أي رسالة سابقة ---- */
function __xDiag(m){try{
var d=document.getElementById('xdiag');
if(!d){d=document.createElement('div');d.id='xdiag';d.style.cssText='position:fixed;top:0;left:0;right:0;z-index:2147483647;background:#b3261e;color:#fff;font:13px/1.6 sans-serif;padding:8px 14px;direction:rtl;text-align:right;max-height:45vh;overflow:auto';(document.body||document.documentElement).appendChild(d);}
if(!d.getAttribute('data-n')){d.setAttribute('data-n','0');d.innerHTML='<div style="font-weight:900">⚠ تقرير التشخيص — اضغط زر النسخ ثم أرسل التقرير للمطور:</div>';
var b=document.createElement('button');b.textContent='📋 نسخ التقرير';b.style.cssText='margin:6px 0;padding:5px 12px;border:0;border-radius:6px;background:#fff;color:#b3261e;font-weight:900;font-family:inherit;cursor:pointer';
b.onclick=function(){try{var t=document.getElementById('xdiag').innerText;if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(t).then(function(){b.textContent='✓ تم النسخ'},function(){try{window.prompt('انسخ التقرير يدويًا:',t)}catch(x){}})}else{try{window.prompt('انسخ التقرير يدويًا:',t)}catch(x){}}}catch(e){try{window.prompt('انسخ التقرير يدويًا:',t)}catch(x){}}};
d.appendChild(b);}
var n=parseInt(d.getAttribute('data-n'),10)+1;d.setAttribute('data-n',''+n);
if(n>8){return}
var div=document.createElement('div');div.style.borderTop='1px solid rgba(255,255,255,.3)';div.style.marginTop='5px';div.style.paddingTop='5px';
div.textContent=n+') '+m;d.appendChild(div);
}catch(e){}}
window.onerror=function(m,s,l){try{__xDiag('خطأ برمجي: '+m+' — سطر '+l)}catch(e){}};
window.addEventListener('unhandledrejection',function(e){try{__xDiag('عملية فاشلة: '+((e&&e.reason)?e.reason:'غير معروف'))}catch(x){}});
window.addEventListener('load',function(){setTimeout(function(){try{
var a=document.getElementById('app'),n=(a&&a.innerHTML)?a.innerHTML.length:0;
if(n<50){
  if(typeof TERMS==='undefined'){__xDiag('جافاسكربت لا يعمل في هذا المتصفح — افتح الرابط بمتصفح Chrome أو Safari الأصلي. ('+((navigator.userAgent||'').slice(0,90))+')');return}
  var r='التطبيق اشتغل لكن الواجهة فارغة — الصفحة: '+((typeof ROUTE!=='undefined'&&ROUTE&&ROUTE.page)?ROUTE.page:'غير معروف')+' | حجم الواجهة: '+n+' حرف';
  try{r+=' | KaTeX:'+((typeof KAT!=='undefined'&&KAT)?'جاهز':'متوقف')}catch(e){r+=' | KaTeX:?'}
  try{localStorage.setItem('__x18','1');localStorage.removeItem('__x18');r+=' | التخزين المحلي:جاهز'}catch(e){r+=' | التخزين المحلي:متوقف'}
  try{r+=' | الخدمة:'+((navigator.serviceWorker&&navigator.serviceWorker.controller)?'نشطة':'غير نشطة')}catch(e){r+=' | الخدمة:?'}
  r+=' | نظام:'+((navigator.userAgent||'').slice(0,90));
  __xDiag(r);
}
}catch(e){}},2500)});
