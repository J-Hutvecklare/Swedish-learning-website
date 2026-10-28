/* 词汇列表、闪卡、测验、搜索 */
const COUNTS = [5,10,15,20];
/* ========== BATCH ========== */
function shuffle(a){ const x=a.slice(); for(let i=x.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [x[i],x[j]]=[x[j],x[i]]; } return x; }
function practicePool(){ return VOCAB.filter(w=>!isMastered(w.id)); }
function buildBatch(){
  const pool=practicePool();
  if(!pool.length) return [];
  return shuffle(pool).slice(0, Math.min(state.count, pool.length));
}
function activeBatch(){
  if(state.practiceSource==="wordbook") return state.wbBatch;
  if(state.practiceSource==="review") return state.reviewBatch;
  return state.batch;
}
function getIdx(){
  if(state.practiceSource==="wordbook") return state.wbIndex;
  if(state.practiceSource==="review") return state.reviewIndex;
  return state.index;
}
function setIdx(i){
  if(state.practiceSource==="wordbook") state.wbIndex=i;
  else if(state.practiceSource==="review") state.reviewIndex=i;
  else state.index=i;
}
function cur(){ return activeBatch()[getIdx()]||null; }
function isWbPractice(){ return state.practiceSource==="wordbook"; }
function isReviewPractice(){ return state.practiceSource==="review"; }
function practiceHeading(mainTitle){
  if(isReviewPractice()){
    const src = state.reviewLabel || reviewSourceLabel();
    return `${t("reviewMode")} - ${src}`;
  }
  if(isWbPractice()) return t("intensifyTitle");
  return mainTitle;
}
function returnToMainBtn(){
  if(isWbPractice() || isReviewPractice()){
    return `<button type="button" class="btn btn-ghost" id="btnBackMain">${t("backMain")}</button>`;
  }
  return "";
}
/* ========== VOCAB UI ========== */
function searchVocab(q){
  const needle=String(q||"").trim().toLowerCase();
  if(!needle) return [];
  const seen=new Set();
  const out=[];
  for(const w of VOCAB){
    const sv=String(w.swedish||"").toLowerCase();
    const zh=String(w.chinese||"").toLowerCase();
    const en=String(w.english||"").toLowerCase();
    if(!(sv.includes(needle)||zh.includes(needle)||en.includes(needle))) continue;
    const key=String(w.swedish||"");
    if(seen.has(key)) continue;
    seen.add(key);
    out.push(w);
  }
  return out;
}

function clearVocabSearch(){
  state.searchQuery="";
  state.searchExpandedId=null;
  const input=document.getElementById("vocabSearchInput");
  if(input) input.value="";
  renderVocabSearch();
}

function searchItemHtml(w){
  const open=state.searchExpandedId===w.id;
  const tags=[];
  if(isMastered(w.id)) tags.push(`<span class="tag yes">${t("tagMastered")}</span>`);
  if(inWordbook(w.id)) tags.push(`<span class="tag wb">${t("tagWB")}</span>`);
  const gloss=`<span class="word-zh">${esc(w.chinese)}</span>`;
  const tr=exampleTrOf(w);
  const enLine=state.uiLang==="en"&&w.english
    ? `<div class="word-zh" style="color:var(--muted);font-weight:500;margin-bottom:.35rem">${esc(w.english)}</div>`
    : "";
  const detail=open?`<div class="search-detail"><div class="search-detail-inner">
      ${enLine}
      ${hasForms(w)?`<div class="word-forms" style="margin-bottom:.35rem">${esc(w.forms)}</div>`:""}
      <div class="word-ex">${esc(w.example)}${tr?`<br><span class="word-ex-zh">${esc(tr)}</span>`:""}</div>
      <div class="search-actions">
        <button type="button" class="btn-speak" data-speak="${esc(w.swedish)}">${t("speak")}</button>
        <button type="button" class="btn btn-accent btn-search-wb" data-wb-id="${esc(w.id)}">${t("addWB")}</button>
      </div>
    </div></div>`:"";
  return `<li class="search-item${open?" open":""}" data-search-id="${esc(w.id)}">
    <button type="button" class="search-item-main" data-search-toggle="${esc(w.id)}" aria-expanded="${open?"true":"false"}">
      <span class="word-sv">${esc(w.swedish)}</span>
      ${gloss}
      ${tags.join("")}
      ${open?"":`<span class="empty" style="padding:0;margin-left:auto;font-size:.8rem">${t("searchExpandHint")}</span>`}
    </button>
    ${!open?`<div class="search-actions" style="padding:0 .85rem .7rem">
      <button type="button" class="btn btn-accent btn-search-wb" data-wb-id="${esc(w.id)}">${t("addWB")}</button>
    </div>`:""}
    ${detail}
  </li>`;
}

function renderVocabSearch(){
  const panel=document.getElementById("vocabSearchPanel");
  if(!panel) return;
  const q=state.searchQuery.trim();
  if(!q){ panel.hidden=true; panel.innerHTML=""; return; }
  const hits=searchVocab(q);
  panel.hidden=false;
  panel.innerHTML=`<div class="search-panel-head">
      <h3>${t("searchResults")}</h3>
      <button type="button" class="search-close" id="btnSearchClose" aria-label="${t("searchClose")}" title="${t("searchClose")}">×</button>
    </div>
    ${hits.length
      ? `<ul class="search-list">${hits.map(searchItemHtml).join("")}</ul>`
      : `<p class="empty">${t("searchEmpty")}</p>`}`;
}

function renderVocab(){
  const el=document.getElementById("tab-vocab");
  const qEsc=esc(state.searchQuery);
  el.innerHTML = `
    <div class="card">
      <div class="vocab-toolbar" id="vocabToolbar">
        <div class="vocab-toolbar-left" id="phaseTabs">
          <button type="button" class="phase-btn${state.phase==="setup"?" active":""}" data-phase="setup" id="btnPickCount">${t("pickCount")}</button>
          <select class="count-select" id="countSelect" aria-label="${t("pickCount")}">
            ${COUNTS.map(n=>`<option value="${n}"${state.count===n?" selected":""}>${n}</option>`).join("")}
          </select>
          <button type="button" class="btn btn-primary" id="btnConfirm">${t("confirm")}</button>
          <button type="button" class="phase-btn${state.phase==="list"?" active":""}" data-phase="list">${t("wordList")}</button>
          <button type="button" class="phase-btn${state.phase==="flash"?" active":""}" data-phase="flash">${t("flash")}</button>
          <button type="button" class="phase-btn${state.phase==="quiz"?" active":""}" data-phase="quiz">${t("quiz")}</button>
          <button type="button" class="phase-btn${state.phase==="wordbook"?" active":""}" data-phase="wordbook">${t("wordbook")}</button>
          <button type="button" class="phase-btn${state.phase==="review"?" active":""}" data-phase="review">${t("reviewEntry")}</button>
        </div>
        <div class="vocab-toolbar-search">
          <input type="search" id="vocabSearchInput" placeholder="${t("searchPlaceholder")}" value="${qEsc}" autocomplete="off" aria-label="${t("searchPlaceholder")}" />
        </div>
      </div>
    </div>
    <div class="card" id="vocabSearchPanel" hidden></div>
    <div class="card" id="vocabBody"></div>
  `;
  renderVocabSearch();
  renderVocabBody();
  bindVocab();
}

function renderVocabBody(){
  const el=document.getElementById("vocabBody");
  if(!el) return;

  if(state.phase==="review"){
    el.innerHTML=`<h3>${t("reviewSetupTitle")}</h3>
      <p class="empty" style="padding:.5rem 0 0">${t("reviewSetupHint")}</p>
      <div class="review-options">
        <fieldset>
          <legend>${t("reviewCalendar")}</legend>
          ${renderReviewCalendarHtml()}
        </fieldset>
        <div id="reviewDayPanel">${renderReviewDayPanelHtml()}</div>
      </div>`;
    return;
  }

  if(state.phase==="wordbook"){
    const wb=[...state.wordbook].map(id=>VOCAB.find(w=>w.id===id)).filter(Boolean);
    el.innerHTML=`<h3>${t("wbTitle")}</h3>
      <p class="progress">${wb.length} ${t("wbCount")}</p>
      <div class="actions" style="margin-bottom:1rem">
        <button type="button" class="btn btn-primary" id="btnPracticeWB" ${wb.length?"":"disabled"}>${t("strengthenWB")}</button>
        <button type="button" class="btn btn-ghost" id="btnClearWB">${t("clearWB")}</button>
        ${state.wbBatch.length?`<button type="button" class="btn btn-ghost" id="btnBackMain">${t("backMain")}</button>`:""}
      </div>
      <ul class="word-list">${wb.length?wb.map(w=>wordItemHtml(w)).join(""):`<li class="empty">${t("wbEmpty")}</li>`}</ul>`;
    return;
  }

  if(state.phase==="setup"){
    el.innerHTML=`<h3>${t("startLearn")}</h3><p class="empty">${t("startHint")}</p>`;
    return;
  }

  const batch=activeBatch();
  if(!batch.length){
    el.innerHTML=`<h3>${practiceHeading(t("wordList"))}</h3><p class="empty">${
      isReviewPractice()?t("reviewEmpty"):(isWbPractice()?t("wbEmptyQueue"):t("needConfirm"))
    }</p>
      <div class="actions">${returnToMainBtn()}</div>`;
    return;
  }

  if(state.phase==="list"){
    const batchLabel = isReviewPractice()
      ? t("reviewBatchLabel")
      : (isWbPractice()?t("wbPracticeLabel"):t("batchWords"));
    const batchNote = isReviewPractice() || isWbPractice() ? "" : t("exclMastered");
    el.innerHTML=`<h3>${practiceHeading(t("wordList"))}</h3>
      <p class="progress">${batchLabel} ${batch.length} ${t("wordsUnit")}${batchNote}</p>
      <ul class="word-list">${batch.map(w=>wordItemHtml(w)).join("")}</ul>
      <div class="actions" style="margin-top:1rem">
        <button type="button" class="btn btn-accent" id="btnToFlash">${t("startFlash")}</button>
        <button type="button" class="btn btn-primary" id="btnToQuiz">${t("startQuiz")}</button>
        ${returnToMainBtn()}
      </div>`;
    return;
  }

  if(state.phase==="flash"){
    const w=cur();
    if(w) markLearned(w.id);
    if(!w){ el.innerHTML=`<div class="done"><h3>${practiceHeading(t("flashPractice"))}</h3>
      <div class="actions" style="margin-top:1rem">
        <button type="button" class="btn btn-accent" id="btnToQuiz">${t("startQuiz")}</button>
        <button type="button" class="btn btn-primary" id="btnRedraw">${isReviewPractice()?t("reviewStart"):t("learnNew")}</button>
        ${returnToMainBtn()}
      </div></div>`; return; }
    const modes=[["cn2sv", state.uiLang==="en"?t("modeEn2sv"):t("modeCn2sv")],["sv2cn", state.uiLang==="en"?t("modeSv2en"):t("modeSv2cn")],["spell", t("modeSpell")]];
    const prog=`${getIdx()+1} / ${activeBatch().length}`;
    if(state.flashMode==="spell"){
      el.innerHTML=`<h3>${practiceHeading(t("flashPractice"))}</h3><p class="progress">${prog}</p>
        <div class="center">
          <div class="mode-switch">${modes.map(([k,l])=>`<button type="button" class="mode-btn${state.flashMode===k?" active":""}" data-mode="${k}">${l}</button>`).join("")}</div>
          <div class="flash" style="cursor:default"><div class="flash-prompt">${state.uiLang==="en"?t("promptSpellEn"):t("promptSpell")}</div>
            <div class="flash-main">${esc(meaningOf(w))}</div></div>
          <div class="spell-box">
            <input type="text" id="spellInput" placeholder="${t("placeholderSpell")}" autocomplete="off" />
            <div class="feedback ${state.spellFeedback===t("correct")?"ok":state.spellFeedback?"bad":""}" id="spellFb">${esc(state.spellFeedback)}</div>
          </div>
          <div class="actions">
            <button type="button" class="btn-speak" data-speak="${esc(w.swedish)}">${t("speak")}</button>
            <button type="button" class="btn btn-ghost" id="btnCheckSpell">${t("check")}</button>
            <button type="button" class="btn btn-ok" id="btnMastered">${t("mastered")}</button>
            <button type="button" class="btn btn-accent" id="btnAddWB">${t("addWB")}</button>
            <button type="button" class="btn btn-primary" id="btnNext">${t("next")}</button>
          </div>
        </div>`;
      setTimeout(()=>document.getElementById("spellInput")?.focus(),40);
    } else {
      const showMeaning = state.flashMode==="cn2sv";
      const main = showMeaning ? meaningOf(w) : w.swedish;
      const reveal = showMeaning ? w.swedish : meaningOf(w);
      const prompt = showMeaning
        ? (state.uiLang==="en"?t("promptEn2sv"):t("promptCn2sv"))
        : (state.uiLang==="en"?t("promptSv2en"):t("promptSv2cn"));
      el.innerHTML=`<h3>${practiceHeading(t("flashPractice"))}</h3><p class="progress">${prog}</p>
        <div class="center">
          <div class="mode-switch">${modes.map(([k,l])=>`<button type="button" class="mode-btn${state.flashMode===k?" active":""}" data-mode="${k}">${l}</button>`).join("")}</div>
          <div class="flash${state.flipped?" flipped":""}" id="flashCard" tabindex="0" role="button">
            <div class="flash-prompt">${prompt}</div>
            <div class="flash-main">${esc(main)}</div>
            <div class="flash-sub">${state.flipped?esc(reveal):"？"}</div>
            <div class="flash-hint">${state.flipped?(formsHint(w)?formsHint(w)+" · ":"")+esc(w.example):t("revealHint")}</div>
          </div>
          <div class="actions">
            <button type="button" class="btn-speak" data-speak="${esc(w.swedish)}">${t("speak")}</button>
            <button type="button" class="btn btn-ghost" id="btnReveal">${t("showAnswer")}</button>
            <button type="button" class="btn btn-ok" id="btnMastered">${t("mastered")}</button>
            <button type="button" class="btn btn-accent" id="btnAddWB">${t("addWB")}</button>
            <button type="button" class="btn btn-primary" id="btnNext">${t("next")}</button>
          </div>
        </div>`;
    }
    return;
  }

  if(state.phase==="quiz"){
    const w=cur();
    if(w) markLearned(w.id);
    if(!w){ el.innerHTML=`<div class="done"><h3>${practiceHeading(t("quizDone"))}</h3><p>${t("quizDoneHint")}</p>
      <div class="actions" style="margin-top:1rem">
        <button type="button" class="btn btn-primary" id="btnRedraw">${isReviewPractice()?t("reviewStart"):t("learnNew")}</button>
        <button type="button" class="btn btn-ghost" id="btnGoWB2">${t("wordbook")}</button>
        ${returnToMainBtn()}
      </div></div>`; return; }
    const askMeaning = state.quizDir==="cn2sv";
    el.innerHTML=`<h3>${practiceHeading(t("quizTitle"))}</h3>
      <p class="progress">${getIdx()+1} / ${activeBatch().length} · ${askMeaning?(state.uiLang==="en"?t("modeEn2sv"):t("modeCn2sv")):(state.uiLang==="en"?t("modeSv2en"):t("modeSv2cn"))}</p>
      <div class="center">
        <div class="quiz-q">${esc(askMeaning?meaningOf(w):w.swedish)}</div>
        <div class="spell-box">
          <input type="text" id="quizInput" placeholder="${askMeaning?t("placeholderQuizSv"):t("placeholderQuizMeaning")}" autocomplete="off" />
          <div class="feedback ${state.quizFeedback.startsWith(t("correct"))||state.quizFeedback===t("correct")?"ok":state.quizFeedback?"bad":""}">${esc(state.quizFeedback)}</div>
        </div>
        <div class="actions">
          <button type="button" class="btn-speak" data-speak="${esc(w.swedish)}">${t("speak")}</button>
          <button type="button" class="btn btn-ghost" id="btnCheckQuiz">${t("check")}</button>
          <button type="button" class="btn btn-ghost" id="btnShowAns">${t("showCorrect")}</button>
          <button type="button" class="btn btn-primary" id="btnNextQuiz">${t("next")}</button>
        </div>
      </div>`;
    setTimeout(()=>document.getElementById("quizInput")?.focus(),40);
  }
}

function wordItemHtml(w){
  const tags=[];
  if(isMastered(w.id)) tags.push(`<span class="tag yes">${t("tagMastered")}</span>`);
  if(inWordbook(w.id)) tags.push(`<span class="tag wb">${t("tagWB")}</span>`);
  const tr = exampleTrOf(w);
  return `<li class="word-item"><div class="word-top">
    <span class="word-sv">${esc(w.swedish)}</span>
    <span class="word-zh">${esc(meaningOf(w))}</span>
    ${hasForms(w)?`<span class="word-forms">${esc(w.forms)}</span>`:""}
    <button type="button" class="btn-speak" data-speak="${esc(w.swedish)}">${t("speak")}</button>
    ${tags.join("")}
  </div><div class="word-ex">${esc(w.example)}${tr?`<br><span class="word-ex-zh">${esc(tr)}</span>`:""}</div></li>`;
}

function bindVocab(){
  const root=document.getElementById("tab-vocab");
  root.querySelector("#countSelect")?.addEventListener("change",e=>{
    state.count=+e.target.value;
  });
  root.querySelector("#btnConfirm")?.addEventListener("click",()=>{
    state.count=+(document.getElementById("countSelect")?.value || state.count);
    state.practiceSource="main";
    state.batch=buildBatch(); state.index=0; state.phase="list";
    state.flipped=false; state.spellFeedback=""; state.quizFeedback="";
    if(!state.batch.length) alert(t("noPractice"));
    renderVocab();
  });
  const searchInput=root.querySelector("#vocabSearchInput");
  searchInput?.addEventListener("input",e=>{
    state.searchQuery=e.target.value;
    state.searchExpandedId=null;
    renderVocabSearch();
  });
  const onPhaseClick=e=>{
    if(e.target.closest("#btnConfirm") || e.target.closest("#countSelect") || e.target.closest("#vocabSearchInput")) return;
    if(e.target.closest(".btn-search-wb") || e.target.closest("[data-search-toggle]") || e.target.closest("[data-speak]")) return;
    const b=e.target.closest("[data-phase]"); if(!b) return;
    const phase=b.dataset.phase;
    state.flipped=false; state.spellFeedback=""; state.quizFeedback="";
    if(phase==="review"){
      state.phase="review";
      renderVocab();
      return;
    }
    if(phase==="setup"){
      state.practiceSource="main";
    }
    state.phase=phase;
    const ab=activeBatch();
    if(state.phase!=="wordbook" && state.phase!=="review" && ab.length && getIdx()>=ab.length) setIdx(0);
    if((state.phase==="quiz") && ab.length){ state.quizDir=Math.random()<.5?"cn2sv":"sv2cn"; }
    renderVocab();
  };
  root.querySelector("#vocabToolbar")?.addEventListener("click",onPhaseClick);

  const searchPanel=root.querySelector("#vocabSearchPanel");
  searchPanel?.addEventListener("click",e=>{
    const tg=e.target;
    if(tg.id==="btnSearchClose"||tg.closest("#btnSearchClose")){
      e.preventDefault();
      clearVocabSearch();
      return;
    }
    if(tg.closest("[data-speak]")) return;
    const wbBtn=tg.closest(".btn-search-wb");
    if(wbBtn){
      e.preventDefault();
      e.stopPropagation();
      const id=wbBtn.getAttribute("data-wb-id");
      const w=VOCAB.find(x=>x.id===id);
      if(w){
        state.wordbook.add(w.id);
        saveSet(LS_WORDBOOK,state.wordbook);
        recordWordbookDate(w.id);
        alert(t("addedWB")+w.swedish);
        renderVocabSearch();
      }
      return;
    }
    const toggle=tg.closest("[data-search-toggle]");
    if(toggle){
      const id=toggle.getAttribute("data-search-toggle");
      state.searchExpandedId=state.searchExpandedId===id?null:id;
      renderVocabSearch();
    }
  });

  const body=root.querySelector("#vocabBody");
  body?.addEventListener("click",e=>{
    const tg=e.target;
    if(tg.id==="btnCalPrev"||tg.closest("#btnCalPrev")){
      state.calMonth -= 1;
      if(state.calMonth < 0){ state.calMonth = 11; state.calYear -= 1; }
      renderVocabBody();
      return;
    }
    if(tg.id==="btnCalNext"||tg.closest("#btnCalNext")){
      state.calMonth += 1;
      if(state.calMonth > 11){ state.calMonth = 0; state.calYear += 1; }
      renderVocabBody();
      return;
    }
    const calDay = tg.closest("[data-cal-day]");
    if(calDay){
      const key = calDay.dataset.calDay;
      if(!dayHasLearningRecord(key)){ alert(t("reviewCalEmpty")); return; }
      state.reviewDay = key;
      state.reviewScope = "dayAll";
      renderVocabBody();
      return;
    }
    if(tg.id==="btnClearReviewDay"||tg.closest("#btnClearReviewDay")){
      state.reviewDay = null;
      renderVocabBody();
      return;
    }
    if(tg.id==="btnStartReview"||tg.closest("#btnStartReview")){
      if(!state.reviewDay || !dayHasLearningRecord(state.reviewDay)){
        alert(t("reviewCalEmpty"));
        return;
      }
      const scopeEl = root.querySelector('input[name="reviewScope"]:checked');
      const countEl = root.querySelector('input[name="reviewCount"]:checked');
      if(scopeEl) state.reviewScope = scopeEl.value;
      if(countEl) state.reviewCount = countEl.value === "all" ? "all" : (+countEl.value || 10);
      state.reviewLabel = reviewSourceLabel();
      state.reviewBatch = buildReviewBatch();
      state.reviewIndex = 0;
      state.practiceSource = "review";
      state.phase = "list";
      state.flipped=false; state.spellFeedback=""; state.quizFeedback="";
      if(!state.reviewBatch.length){
        alert(t("reviewEmpty"));
        state.phase="review";
        state.practiceSource="main";
        state.reviewLabel="";
      }
      renderVocab();
      return;
    }
    if(tg.id==="btnToFlash"||tg.closest("#btnToFlash")){ state.phase="flash"; setIdx(0); state.flipped=false; state.spellFeedback=""; renderVocab(); return; }
    if(tg.id==="btnToQuiz"||tg.closest("#btnToQuiz")){ state.phase="quiz"; setIdx(0); state.quizFeedback=""; state.quizDir=Math.random()<.5?"cn2sv":"sv2cn"; renderVocab(); return; }
    if(tg.id==="btnRedraw"||tg.closest("#btnRedraw")){
      if(isReviewPractice()){
        state.reviewBatch=buildReviewBatch();
        state.reviewIndex=0;
        if(!state.reviewBatch.length){ alert(t("reviewEmpty")); state.phase="review"; state.practiceSource="main"; renderVocab(); return; }
      } else if(isWbPractice()){
        const wb=[...state.wordbook].map(id=>VOCAB.find(w=>w.id===id)).filter(w=>w&&!isMastered(w.id));
        state.wbBatch=shuffle(wb).slice(0, Math.min(state.count, wb.length));
        state.wbIndex=0;
      } else {
        state.batch=buildBatch(); state.index=0;
      }
      state.phase="list"; renderVocab(); return;
    }
    if(tg.id==="btnGoWB2"||tg.closest("#btnGoWB2")){ state.phase="wordbook"; renderVocab(); return; }
    if(tg.id==="btnPracticeWB"){
      const wb=[...state.wordbook].map(id=>VOCAB.find(w=>w.id===id)).filter(w=>w&&!isMastered(w.id));
      if(!wb.length){ alert(t("noWBPractice")); return; }
      state.wbBatch=shuffle(wb).slice(0, Math.min(state.count, wb.length));
      state.wbIndex=0;
      state.practiceSource="wordbook";
      state.phase="list";
      state.flipped=false; state.spellFeedback=""; state.quizFeedback="";
      renderVocab(); return;
    }
    if(tg.id==="btnBackMain"||tg.closest("#btnBackMain")){
      if(isReviewPractice()){
        state.practiceSource="main";
        state.phase="review";
      } else {
        state.practiceSource="main";
        state.phase=state.batch.length?"list":"setup";
      }
      state.flipped=false; state.spellFeedback=""; state.quizFeedback="";
      renderVocab(); return;
    }
    if(tg.id==="btnClearWB"){ if(confirm(t("clearWBConfirm"))){ state.wordbook.clear(); saveSet(LS_WORDBOOK,state.wordbook); renderVocab(); } return; }

    const mode=tg.closest("[data-mode]");
    if(mode){ state.flashMode=mode.dataset.mode; state.flipped=false; state.spellFeedback=""; renderVocabBody(); return; }
    if(tg.id==="flashCard"||tg.closest("#flashCard")){ state.flipped=!state.flipped; renderVocabBody(); return; }
    if(tg.id==="btnReveal"){ state.flipped=true; renderVocabBody(); return; }
    if(tg.id==="btnCheckSpell"){
      const w=cur(); const input=document.getElementById("spellInput"); if(!w||!input) return;
      const ok=norm(input.value)===norm(w.swedish);
      state.spellFeedback=ok?t("correct"):t("incorrectAns")+w.swedish;
      renderVocabBody();
      const again=document.getElementById("spellInput"); if(again) again.value=input.value;
      return;
    }
    if(tg.id==="btnMastered"){
      const w=cur(); if(w){ state.mastered.add(w.id); saveSet(LS_MASTERED,state.mastered); markLearned(w.id); state.wordbook.delete(w.id); saveSet(LS_WORDBOOK,state.wordbook); }
      setIdx(getIdx()+1); state.flipped=false; state.spellFeedback=""; renderVocab(); return;
    }
    if(tg.id==="btnAddWB"){
      const w=cur();
      if(w){
        state.wordbook.add(w.id);
        saveSet(LS_WORDBOOK,state.wordbook);
        recordWordbookDate(w.id);
        alert(t("addedWB")+w.swedish);
      }
      renderVocab(); return;
    }
    if(tg.id==="btnNext"){ setIdx(getIdx()+1); state.flipped=false; state.spellFeedback=""; renderVocabBody(); return; }

    if(tg.id==="btnCheckQuiz"){
      const w=cur(); const input=document.getElementById("quizInput"); if(!w||!input) return;
      const expect = state.quizDir==="cn2sv" ? w.swedish : meaningOf(w);
      const ok=norm(input.value)===norm(expect);
      state.quizFeedback=ok?t("correct"):t("incorrect");
      renderVocabBody();
      const again=document.getElementById("quizInput"); if(again) again.value=input.value;
      return;
    }
    if(tg.id==="btnShowAns"){
      const w=cur(); if(!w) return;
      const expect = state.quizDir==="cn2sv" ? w.swedish : meaningOf(w);
      state.quizFeedback=t("correctIs")+expect;
      renderVocabBody(); return;
    }
    if(tg.id==="btnNextQuiz"){
      setIdx(getIdx()+1); state.quizFeedback="";
      state.quizDir=Math.random()<.5?"cn2sv":"sv2cn";
      renderVocabBody(); return;
    }
  });
  body?.addEventListener("change",e=>{
    const tg=e.target;
    if(tg && tg.name==="reviewScope"){
      state.reviewScope = tg.value;
      renderVocabBody();
      return;
    }
    if(tg && tg.name==="reviewCount"){
      state.reviewCount = tg.value === "all" ? "all" : (+tg.value || 10);
    }
  });
  body?.addEventListener("keydown",e=>{
    if(e.target.id==="spellInput" && e.key==="Enter"){ e.preventDefault(); document.getElementById("btnCheckSpell")?.click(); }
    if(e.target.id==="quizInput" && e.key==="Enter"){ e.preventDefault(); document.getElementById("btnCheckQuiz")?.click(); }
    if(e.target.id==="flashCard" && (e.key==="Enter"||e.key===" ")){ e.preventDefault(); state.flipped=!state.flipped; renderVocabBody(); }
  });
}
