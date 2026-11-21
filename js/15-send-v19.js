'use strict';
/* ============================================================
   منصة X — طبقة الإصدار 19: الإرسال الصامت والواجهة المبسطة
   1) التسجيل والإبلاغ يُرسلان مباشرة من داخل المنصة — دون فتح تطبيق البريد
   2) بلا شريط علوي — التنقل من التبويبات السفلية فقط
   3) صفحة رئيسية مبسطة: الشعار ثم اسم المنصة ثم موجز تعريفي
   4) الاختبار ينتقل للسؤال التالي تلقائيًا بعد الإجابة
   ============================================================ */
/* ---- 19.0 بيانات الإصدار ---- */
APP_META.ver='19.0';APP_META.date='2026-10-30';APP_META.notes='الإصدار 19 — الإرسال الصامت والواجهة المبسطة.';

/* ---- 19.1 الإرسال الصامت عبر خدمة النماذج (بلا فتح تطبيق البريد) ---- */
function x19Send(subject,body,from){
  var payload={_subject:subject,_template:'box',message:body};
  if(from){payload.email=from;payload.name='مستخدم منصة X'}else{payload.name='زائر منصة X'}
  try{
    fetch('https://formsubmit.co/ajax/'+XOWNER_MAIL,{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify(payload)})
    .then(function(r){return r.json()})
    .then(function(j){
      if(j&&(j.success===true||j.success==='true')){toast('✅ تم الإرسال مباشرة إلى بريد المنصة','success')}
      else{toast('⚠️ تعذر الإرسال — استخدم زر «نسخ الرسالة» أو أعد المحاولة','error')}
    })
    .catch(function(e){toast('⚠️ تعذر الإرسال — تحقق من اتصالك بالإنترنت','error')});
  }catch(e){toast('⚠️ تعذر الإرسال — استخدم زر «نسخ الرسالة»','error')}
}

/* ---- 19.2 تسجيل صامت: نفس خطوتي الإصدار 18 لكن الإرسال من داخل المنصة ---- */
function x18FormNext(){
  x18CollectForm();
  var f=XAUTH18.form,editing=!!(USER.session&&USER.profile);
  XAUTH18.errs={};
  if(!f.fn.trim())XAUTH18.errs.fn='اكتب اسمك';
  if(!f.ln.trim())XAUTH18.errs.ln='اكتب لقبك';
  if(!f.year)XAUTH18.errs.year='اختر السنة الدراسية';
  if(!f.branch)XAUTH18.errs.branch='اختر الشعبة';
  XAUTH18.consent=!!((gid('x18-consent')||{}).checked);
  if(!XAUTH18.consent)XAUTH18.errs.consent='يلزم الموافقة على سياسة الخصوصية';
  if(XAUTH18.errs.fn||XAUTH18.errs.ln||XAUTH18.errs.year||XAUTH18.errs.branch||XAUTH18.errs.consent){xSound('error');render();return}
  if(editing){
    var p=x18ProfileFromForm();
    x18SaveUser(p);
    xSound('success');toast('✅ تم حفظ تعديلاتك');
    navigate('profile');
    return;
  }
  var em=XAUTH18.email;
  x19Send('تسجيل مستخدم جديد — '+f.fn+' '+f.ln,x18RegBody(f,em),em);
  x18SaveUser(x18ProfileFromForm());
  XAUTH18.prefilled=true;
  xSound('success');
  toast('✅ تم إرسال بياناتك — أهلًا بك في منصة X!');
  navigate('home');
}
function x18Resend(){
  var p=USER.profile;if(!p)return;
  var f={fn:p.first_name||'',ln:p.last_name||'',by:((p.birth_year||'')+''),year:p.study_year||'',branch:p.branch||'',gender:p.gender||'',wilaya:p.wilaya||'',phone:p.phone||''};
  var em=(USER.session&&USER.session.user&&USER.session.user.email)||p.email||'';
  x19Send('تسجيل مستخدم — '+f.fn+' '+f.ln,x18RegBody(f,em),em);
}

/* ---- 19.3 الإبلاغ الصامت ---- */
function sendMsg(){
  var e=gid('msg-mail'),t=gid('msg-type'),b=gid('msg-body'),btn=gid('sendMsg');
  var em=((e&&e.value)||'').trim(),ty=(t&&t.value)||'رسالة',bd=((b&&b.value)||'').trim();
  var emailOK=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(em);
  if(!emailOK){toast('✍️ أدخل بريدًا إلكترونيًا صحيحًا حتى يستطيع إدارة المنصة الرد عليك','error');if(e)e.focus();return}
  if(bd.length<10){toast('✍️ اكتب رسالة واضحة لا تقل عن 10 أحرف','error');if(b)b.focus();return}
  if(btn&&btn.disabled)return;
  var old=btn?btn.textContent:'';
  if(btn){btn.disabled=true;btn.textContent='⏳ جارٍ إرسال الرسالة…';btn.setAttribute('aria-busy','true')}
  var body=bd+'\n\n— نوع الرسالة: '+ty+'\n— بريد المرسل للرد: '+em+'\n— أُرسلت من منصة X الإصدار '+APP_META.ver;
  x19Send('[منصة X] '+ty,body,em,function(success,queued){
    if(btn){btn.disabled=false;btn.textContent=old||'✉️ إرسال الرسالة';btn.removeAttribute('aria-busy')}
    if(success){if(b)b.value='';}
    else if(queued){toast('لم يصل تأكيد الإرسال بعد؛ احتفظ بالصفحة مفتوحة حتى تتوفر الشبكة لإعادة المحاولة.','error')}
  });
}

/* ---- 19.4 بلا شريط علوي: التنقل من التبويبات السفلية فقط ---- */
function renderNavbar(){return ''}

/* ---- 19.4b قسم الإبلاغ ينتقل إلى صفحة الإعدادات (الرئيسية مبسطة) ---- */
function renderSettingsPage(){
  var h=renderSettingsPage16();
  try{
    var i=h.indexOf('xdot');
    if(i>0){h=h.slice(0,i)+'<button class="xdot'+(XCFG.accent==='azure'?' on':'')+'" style="background:#229ED9" onclick="setX(\'accent\',\'azure\')" aria-label="أزرق منصة X"></button>'+h.slice(i)}
  }catch(e){}
  return h+contactHTML();
}

/* ---- 19.5 صفحة رئيسية مبسطة: الشعار ثم اسم المنصة ثم موجز تعريفي ---- */
function renderHome18(){
  return '<div class="fade-in" style="min-height:56vh;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:34px 18px 20px">'+
   '<div class="logo-big" style="margin:0 auto 18px"><div class="logo-mark">'+LOGO+'</div></div>'+
   '<h1 style="font-size:32px;margin:0 0 12px;letter-spacing:.5px">منصة X</h1>'+
   '<p style="max-width:540px;margin:0 auto;opacity:.82;font-size:14.5px;line-height:2">منصة تعليمية جزائرية مجانية للطورين المتوسط والثانوي: دروس وملخصات وقوانين، تمارين واختبارات تفاعلية، مكتبات PDF وفيديو، وتقدمك محفوظ على جهازك. تعمل حتى دون إنترنت.</p>'+
  '</div>';
}

/* ---- 19.6 الاختبار: انتقال تلقائي للسؤال التالي بعد الإجابة ---- */
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
   '<p style="text-align:center;color:var(--text-mute);font-size:12px;margin:12px 0 0">⏳ ستظهر الإجابة الصحيحة ثم ينتقل الاختبار تلقائيًا للسؤال التالي</p>'+
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
  setTimeout(function(){nextQuiz(sid,cid)},900);
}
