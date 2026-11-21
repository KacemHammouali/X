'use strict';
/* ============ الطبقة 38 — الإصدار 38: تبويبات مثل التطبيقات العالمية + قتل الخط النهائي ============ */

/* 38.1 مفتاح عام: فتح وإغلاق أي عنوان بضغطة */
function x38Fold(btn){try{var p=btn.parentNode;if(p&&p.classList)p.classList.toggle('open')}catch(e){}}

/* 38.2 الدروس: كل عنوان قسم يصير زرًا يفتح ما تحته — بلا تمرير طويل */
var __x38Secs=secsHTML;
secsHTML=function(list){
  try{
    if(!list||!list.length)return __x38Secs(list);
    var groups=[],cur={t:null,b:[]},i;
    for(i=0;i<list.length;i++){
      var s=list[i];
      if((s&&s.k==='h2')||(s&&s.k==='h3')){
        if(cur.t!==null||cur.b.length)groups.push(cur);
        cur={t:(''+(s.x||'')),b:[]};
      }else{cur.b.push(s)}
    }
    if(cur.t!==null||cur.b.length)groups.push(cur);
    var titled=0;for(i=0;i<groups.length;i++){if(groups[i].t!==null)titled++}
    if(titled<1)return __x38Secs(list);
    var h='';
    for(i=0;i<groups.length;i++){
      var g=groups[i];
      if(g.t===null){h+=__x38Secs(g.b);continue}
      h+='<div class="x38-acc"><button type="button" class="x38-acc-h" onclick="x38Fold(this)"><span>'+g.t+'</span><i>▾</i></button><div class="x38-acc-b">'+__x38Secs(g.b)+'</div></div>';
    }
    return h;
  }catch(e){return __x38Secs(list)}
};

/* 38.3 تحدي البكالوريا: مغلق بضغطة ثم يظهر التمرين — والحل سرّي بضغطة ثانية */
var __x38Bac=bacHTML;
bacHTML=function(cid){
  try{
    var B=(typeof BAC!=='undefined')?BAC[cid]:null;
    if(!B)return __x38Bac(cid);
    return '<div class="bac-card x38-acc"><button type="button" class="x38-acc-h" onclick="x38Fold(this)"><span>🏆 تحدي البكالوريا — اضغط لعرض التمرين</span><i>▾</i></button>'+
     '<div class="x38-acc-b">'+
     '<p class="bac-p">'+B.p+'</p>'+
     (B.parts||[]).map(function(pt,i){return '<div class="bac-part"><span class="pn">'+(i+1)+'</span><div>'+pt+'</div></div>'}).join('')+
     '<details class="bac-sol"><summary>🔐 السر — اضغط ليكشف الحل النموذجي المفصل</summary><ol class="bac-steps">'+
     (B.s||[]).map(function(st){return '<li>'+st+'</li>'}).join('')+
     '</ol></details></div></div>';
  }catch(e){return __x38Bac(cid)}
};

/* 38.4 الخلاصتان في آخر الدرس: تُفتحان بضغطة */
var __x38Lesson=renderLesson;
renderLesson=function(sid,cid){
  var h=__x38Lesson(sid,cid);
  try{
    var i=h.indexOf('<div class="summary-box">');
    var k=h.indexOf('<div class="kp-box');
    if(k>0&&i>k){
      h=h.slice(0,k)+'<details class="x38-foldsum"><summary>🗂️ خلاصة الوحدة — القوانين وأهم الملاحظات<i>▾</i></summary>'+h.slice(k,i)+'</details>'+h.slice(i);
      i=h.indexOf('<div class="summary-box">');
    }
    if(i>0){
      var j=h.indexOf('</ul></div>',i);
      if(j>i){
        h=h.slice(0,i)+'<details class="x38-foldsum" style="margin-top:12px"><summary>🧠 الخلاصة — اضغط ثم يظهر ما تحفظه من هذا الدرس<i>▾</i></summary>'+h.slice(i,j+11)+'</details>'+h.slice(j+11);
      }
    }
  }catch(e){}
  return h;
};

/* 38.5 الإعدادات: تبويبات واضحة بلا تمرير + نزع الكتابات أسفل لون التمييز + نقل قنوات الرسائل للمالك */
var X38_SET_TAB=0,X38_ADM_TAB=0;
function x38SetTab(i){
  X38_SET_TAB=i;
  try{
    var j,b,p;
    for(j=0;j<5;j++){
      b=document.getElementById('x38-stab'+j);if(b)b.className='x38-tbtn'+(j===i?' on':'');
      p=document.getElementById('x38-spane'+j);if(p)p.className='x38-pane'+(j===i?' on':'');
    }
  }catch(e){}
}
function x38AdmTab(i){
  X38_ADM_TAB=i;
  try{
    var j,b,p;
    for(j=0;j<4;j++){
      b=document.getElementById('x38-atab'+j);if(b)b.className='x38-tbtn'+(j===i?' on':'');
      p=document.getElementById('x38-apane'+j);if(p)p.className='x38-pane'+(j===i?' on':'');
    }
  }catch(e){}
}
function x38CutSection(h,id){
  var a=h.indexOf('id="'+id+'"');
  if(a<0)return h;
  var st=h.lastIndexOf('<section',a);
  var en=h.indexOf('</section>',a);
  if(st<0||en<a)return h;
  return h.slice(0,st)+h.slice(en+10);
}
function x38StripNotes(blk){
  for(;;){
    var i=blk.indexOf('<p class="set-note">');
    if(i<0)break;
    var j=blk.indexOf('</p>',i);
    if(j<0)break;
    blk=blk.slice(0,i)+blk.slice(j+4);
  }
  return blk;
}
function x38Marks(h){
  var marks=[],pats=['<div class="set-card','<section class="contact','<section class="x17-card'],p,m,from;
  for(p=0;p<pats.length;p++){from=0;while((m=h.indexOf(pats[p],from))>=0){marks.push(m);from=m+1}}
  marks.sort(function(a,b){return a-b});
  return marks;
}
function x38SettingsTabs(h){
  var ids=['x22-outbox','x23-tgcard','x25-ejscard','x25-w3fcard','x27-card','x28-card'],n;
  for(n=0;n<ids.length;n++){h=x38CutSection(h,ids[n])}
  try{
    var ci=h.indexOf('<section class="contact');
    if(ci>0){var wi=h.lastIndexOf('</div>',ci);if(wi>0)h=h.slice(0,wi)+h.slice(wi+6)}
  }catch(e){}
  var marks=x38Marks(h),blocks=[],i;
  for(i=0;i<marks.length;i++){
    var end=(i+1<marks.length)?marks[i+1]:h.length;
    blocks.push(h.slice(marks[i],end));
  }
  var tabs=[[],[],[],[],[]];
  for(i=0;i<blocks.length;i++){
    var b=blocks[i];
    if(i===blocks.length-1&&b.length>6&&b.slice(-6)==='</div>'){b=b.slice(0,-6)}
    if(!b)continue;
    if(b.indexOf('عن المنصة')>=0||b.indexOf('class="contact"')>=0){tabs[4].push(b)}
    else if(b.indexOf('المظهر')>=0||b.indexOf('المؤثرات')>=0){tabs[0].push(x38StripNotes(b))}
    else if(b.indexOf('الصوت')>=0||b.indexOf('الإشعارات')>=0){tabs[1].push(x38StripNotes(b))}
    else if(b.indexOf('الحساب')>=0||b.indexOf('اللغة')>=0){tabs[2].push(x38StripNotes(b))}
    else if(b.indexOf('تطبيق')>=0){tabs[3].push(b)}
    else{tabs[4].push(b)}
  }
  var names=['🎨 المظهر','🔊 الصوت','👤 الحساب','📱 التطبيق','ℹ️ حول'];
  var out='<div class="fade-in set-wrap" id="x38-setwrap"><h2 class="sec15">⚙️ الإعدادات</h2><div class="x38-tabs">';
  for(i=0;i<5;i++){out+='<button type="button" id="x38-stab'+i+'" class="x38-tbtn'+(i===X38_SET_TAB?' on':'')+'" onclick="x38SetTab('+i+')">'+names[i]+'</button>'}
  out+='</div>';
  for(i=0;i<5;i++){out+='<div id="x38-spane'+i+'" class="x38-pane'+(i===X38_SET_TAB?' on':'')+'">'+tabs[i].join('')+'</div>'}
  return out+'</div>';
}
var __x38Settings=renderSettingsPage;
renderSettingsPage=function(){
  var h=__x38Settings();
  try{return x38SettingsTabs(h)}catch(e){return h}
};

/* 38.6 لوحة الإدارة: أربع تبويبات مرتبة (نظرة عامة | مكتبة PDF | مكتبة الفيديو | الرسائل) */
function x38ChanHTML(){
  var h='';
  try{h+=x22OutHTML()}catch(e){}
  try{h+=x25EJSHTML()}catch(e){}
  try{h+=x25W3FHTML()}catch(e){}
  try{h+=x27HTML()}catch(e){}
  try{h+=x28ToolsHTML()}catch(e){}
  if(!h){h='<p class="set-note">لا توجد قنوات إرسال مهيأة.</p>'}
  return h;
}
var __x38Admin=renderAdminPage18;
renderAdminPage18=function(){
  var h=__x38Admin();
  try{
    if(isAdmin()){
      var marks=[],pats=['<div class="set-card','<section class="x17-card'],p,m,from;
      for(p=0;p<pats.length;p++){from=0;while((m=h.indexOf(pats[p],from))>=0){marks.push(m);from=m+1}}
      marks.sort(function(a,b){return a-b});
      if(marks.length){
        var prefix=h.slice(0,marks[0]),blocks=[],i;
        var headPart=prefix,dashPart='';
        var hEnd=prefix.indexOf('</h2>');
        if(hEnd>0){headPart=prefix.slice(0,hEnd+5);dashPart=prefix.slice(hEnd+5)}
        for(i=0;i<marks.length;i++){
          var end=(i+1<marks.length)?marks[i+1]:h.length;
          blocks.push(h.slice(marks[i],end));
        }
        var tabs=[[],[],[]];
        for(i=0;i<blocks.length;i++){
          var b=blocks[i];
          if(i===blocks.length-1&&b.length>6&&b.slice(-6)==='</div>'){b=b.slice(0,-6)}
          if(!b)continue;
          if(b.indexOf('id="x35-admin"')>=0){tabs[2].push(b)}
          else if(b.indexOf('id="x30-admin"')>=0||b.indexOf('id="x33-admin"')>=0){tabs[1].push(b)}
          else{tabs[0].push(b)}
        }
        var names=['📊 نظرة عامة','📚 مكتبة PDF','🎬 مكتبة الفيديو','📡 الرسائل'];
        var out=headPart+'<div class="x38-tabs">';
        for(i=0;i<4;i++){out+='<button type="button" id="x38-atab'+i+'" class="x38-tbtn'+(i===X38_ADM_TAB?' on':'')+'" onclick="x38AdmTab('+i+')">'+names[i]+'</button>'}
        out+='</div>';
        out+='<div id="x38-apane0" class="x38-pane'+(X38_ADM_TAB===0?' on':'')+'">'+dashPart+tabs[0].join('')+'</div>';
        for(i=1;i<3;i++){out+='<div id="x38-apane'+i+'" class="x38-pane'+(i===X38_ADM_TAB?' on':'')+'">'+tabs[i].join('')+'</div>'}
        out+='<div id="x38-apane3" class="x38-pane'+(X38_ADM_TAB===3?' on':'')+'">'+x38ChanHTML()+'</div>';
        h=out+'</div>';
      }
    }
  }catch(e){}
  return h;
};

/* 38.7 إصلاح: قائمة ملفات مكتبة PDF في لوحة الإدارة لم تكن تُفتح (خطأ في المعرّف) */
var __x38Render=render;
render=function(){
  __x38Render();
  try{var d=document.getElementById('x30-alist');if(d&&typeof x30AList==='function')x30AList()}catch(e){}
};

/* 38.8 بيانات الإصدار 38 */
APP_META.ver='38.0';APP_META.date='2026-11-01';
APP_META.notes='الإصدار 38 — التبويبات الاحترافية مثل التطبيقات العالمية: قُتل الخط الرفيع أعلى اليمين نهائيًا (كان مقبض شريط التمرير — أُخفي كليًا مثل تيليجرام وفيسبوك)، وصارت الإعدادات خمسة تبويبات واضحة (المظهر، الصوت، الحساب، التطبيق، حول) بلا تمرير طويل ونُزعت الكتابات أسفل «لون التمييز»، وصارت صفحة الدرس عناوين تُفتح بضغطة، والخلاصة وتحدي البكالوريا في آخر الدرس يُكشفان بضغطة (والحل سرّي بضغطة ثانية)، وأُعيد بناء لوحة الإدارة أربع تبويبات نظيفة (نظرة عامة، مكتبة PDF، مكتبة الفيديو، الرسائل) ونُقلت قنوات الإرسال من إعدادات الطلاب إلى لوحة الإدارة، وشُرحت فاصلة ملف videos.json ببساطة (سطر واحد = بلا فاصلة)، وأُصلح خلل قائمة ملفات الإدارة وأسطر الرأس المكررة، وحُسّن ظهور المنصة في محركات البحث (وصف جديد + وسوم نشر + ملف robots.txt).';
try{APP_META.changelog.unshift('الإصدار 38 — تبويبات احترافية وفتح بالضغط: الإعدادات خمسة تبويبات ولوحة الإدارة أربع تبويبات مع قنوات الرسائل، والدرس عناوين تُفتح بضغطة والخلاصة وتحدي البكالوريا سرّيان بضغطة، وقتل نهائي للخط الرفيع أعلى اليمين (كان مقبض شريط التمرير)، وإصلاح قائمة ملفات الإدارة، وتحسين الظهور في محركات البحث.')}catch(e){}
function fallbackNews18(){
  return [{title:'الإصدار 38 — تبويبات مثل التطبيقات العالمية',
    body:'الإعدادات ولوحة الإدارة صارتا تبويبات واضحة، والدرس عناوين تُفتح بضغطة، والخلاصة وتحدي البكالوريا بضغطة، وقُتل الخط الرفيع أعلى اليمين نهائيًا.',
    date:APP_META.date}];
}
