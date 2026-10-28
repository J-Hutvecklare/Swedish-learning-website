/* 进度统计、日历、按日期复习 */
const REVIEW_COUNTS = [5,10,15,20,"all"];
function formatReviewDayLabel(dateStr){
  if(!dateStr) return "";
  const [y,m,d] = dateStr.split("-").map(Number);
  if(state.uiLang==="en"){
    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    return `${months[(m||1)-1]} ${d}`;
  }
  return `${m}月${d}日`;
}
function reviewScopeLabel(scope=state.reviewScope){
  if(scope==="dayWordbook") return t("reviewScopeDayWordbook");
  if(scope==="dayUnmastered") return t("reviewScopeDayUnmastered");
  return t("reviewScopeDayAll");
}
function reviewSourceLabel(){
  const day = state.reviewDay ? formatReviewDayLabel(state.reviewDay) : "";
  return day ? `${day} - ${reviewScopeLabel()}` : reviewScopeLabel();
}
function dayHasLearningRecord(dateStr){
  return (state.learnDates[dateStr]||[]).length > 0;
}
function dayReviewCounts(dateStr){
  const learnedIds = state.learnDates[dateStr] || [];
  const wbIds = state.wbDates[dateStr] || [];
  const unmastered = learnedIds.filter(id => !isMastered(id));
  return {
    dayAll: learnedIds.length,
    dayWordbook: wbIds.length,
    dayUnmastered: unmastered.length,
    total: learnedIds.length
  };
}
function reviewPool(){
  if(!state.reviewDay) return [];
  let ids;
  if(state.reviewScope==="dayWordbook"){
    ids = state.wbDates[state.reviewDay] || [];
  } else if(state.reviewScope==="dayUnmastered"){
    ids = (state.learnDates[state.reviewDay] || []).filter(id => !isMastered(id));
  } else {
    ids = state.learnDates[state.reviewDay] || [];
  }
  return ids.map(id=>VOCAB.find(w=>w.id===id)).filter(Boolean);
}
function buildReviewBatch(){
  const pool = reviewPool();
  if(!pool.length) return [];
  if(state.reviewCount === "all") return shuffle(pool);
  const n = +state.reviewCount || 10;
  return shuffle(pool).slice(0, Math.min(n, pool.length));
}
function grammarPracticedCount(){
  try{
    const map = JSON.parse(localStorage.getItem("sv-learn-grammar-v1")||"{}") || {};
    return Object.keys(map).filter(k => map[k] && (map[k].total > 0 || typeof map[k].score === "number")).length;
  }catch{ return 0; }
}
function calMonthLabel(y, m){
  if(state.uiLang==="en"){
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    return `${months[m]} ${y}`;
  }
  return `${y}年${m+1}月`;
}
function renderReviewCalendarHtml(){
  const y = state.calYear;
  const m = state.calMonth;
  const first = new Date(y, m, 1);
  const startPad = first.getDay();
  const daysInMonth = new Date(y, m+1, 0).getDate();
  const today = todayKey();
  const weekdays = t("reviewWeekdays").split(",");
  let cells = "";
  for(let i=0;i<startPad;i++) cells += `<span class="cal-day muted"></span>`;
  for(let d=1; d<=daysInMonth; d++){
    const key = `${y}-${String(m+1).padStart(2,"0")}-${String(d).padStart(2,"0")}`;
    const has = dayHasLearningRecord(key);
    const cls = ["cal-day"];
    if(has) cls.push("has-learn");
    if(state.reviewDay === key) cls.push("selected");
    if(key === today) cls.push("today");
    const n = (state.learnDates[key]||[]).length;
    cells += `<button type="button" class="${cls.join(" ")}" data-cal-day="${key}" ${has?"":"disabled"} title="${has?n:""}">${d}</button>`;
  }
  return `<div class="cal-wrap">
    <div class="cal-head">
      <button type="button" class="btn btn-ghost" id="btnCalPrev" aria-label="prev">‹</button>
      <h4>${esc(calMonthLabel(y,m))}</h4>
      <button type="button" class="btn btn-ghost" id="btnCalNext" aria-label="next">›</button>
    </div>
    <div class="cal-weekdays">${weekdays.map(w=>`<span>${esc(w.trim())}</span>`).join("")}</div>
    <div class="cal-grid">${cells}</div>
  </div>`;
}
function renderReviewDayPanelHtml(){
  if(!state.reviewDay){
    return `<p class="empty" style="padding:.75rem 0">${t("reviewCalPickFirst")}</p>`;
  }
  if(!dayHasLearningRecord(state.reviewDay)){
    return `<p class="empty" style="padding:.75rem 0">${t("reviewCalEmpty")}</p>
      <button type="button" class="btn btn-ghost" id="btnClearReviewDay">${t("reviewCalClear")}</button>`;
  }
  const counts = dayReviewCounts(state.reviewDay);
  const scopes = [
    ["dayAll", "reviewScopeDayAll", counts.dayAll],
    ["dayWordbook", "reviewScopeDayWordbook", counts.dayWordbook],
    ["dayUnmastered", "reviewScopeDayUnmastered", counts.dayUnmastered]
  ];
  if(!scopes.some(([k])=>k===state.reviewScope)) state.reviewScope = "dayAll";
  const scopeRadios = scopes.map(([val, key, n])=>
    `<label><input type="radio" name="reviewScope" value="${val}"${state.reviewScope===val?" checked":""} ${n?"":"disabled"}/> ${t(key)} (${n})</label>`
  ).join("");
  const countOpts = REVIEW_COUNTS.map(n=>{
    const val = n === "all" ? "all" : String(n);
    const label = n === "all" ? t("reviewCountAll") : String(n);
    const checked = state.reviewCount === n || String(state.reviewCount) === val;
    return `<label><input type="radio" name="reviewCount" value="${val}"${checked?" checked":""}/> ${label}</label>`;
  }).join("");
  const selectedScopeCount = counts[state.reviewScope] || 0;
  return `
    <div class="cal-selected">${t("reviewCalSelected")}: ${esc(formatReviewDayLabel(state.reviewDay))} · ${t("reviewDayStats")}: ${counts.total}</div>
    <button type="button" class="btn btn-ghost" id="btnClearReviewDay" style="margin:.45rem 0 .75rem">${t("reviewCalClear")}</button>
    <fieldset>
      <legend>${t("reviewScope")}</legend>
      <div class="opt-row" style="flex-direction:column;align-items:stretch;gap:.45rem">${scopeRadios}</div>
    </fieldset>
    <fieldset style="margin-top:.85rem">
      <legend>${t("reviewCount")}</legend>
      <div class="opt-row">${countOpts}</div>
    </fieldset>
    <div class="actions" style="justify-content:flex-start;margin-top:1rem">
      <button type="button" class="btn btn-primary" id="btnStartReview" ${selectedScopeCount?"":"disabled"}>${t("reviewStart")}</button>
    </div>`;
}
/* ========== PROGRESS ========== */
function renderProgress(){
  const el = document.getElementById("tab-progress");
  if(!el) return;
  const learned = learnedCount();
  const mastered = state.mastered.size;
  const wb = state.wordbook.size;
  const gDone = grammarPracticedCount();
  el.innerHTML = `
    <div class="card">
      <h3>${t("progressTitle")}</h3>
      <div class="wb-stats cols-4">
        <div class="stat"><b>${learned}</b><span>${t("progressLearned")}</span></div>
        <div class="stat"><b>${mastered}</b><span>${t("progressMastered")}</span></div>
        <div class="stat"><b>${wb}</b><span>${t("progressWordbook")}</span></div>
        <div class="stat"><b>${gDone}</b><span>${t("progressGrammar")}</span></div>
      </div>
    </div>`;
}
