/* 初始化、页面/板块切换、共享状态 */
/* ========== STATE ========== */
const state = {
  uiLang: localStorage.getItem(LS_UI_LANG) || "zh",
  theme: getSavedTheme(),
  tab: "vocab",
  count: 10,
  phase: "setup", // setup | list | flash | quiz | wordbook | review
  grammarTopic: "nouns",
  grammarAnswers: {},
  grammarChecked: {},
  grammarOrder: {},
  speakingScenario: "greetings",
  flashMode: "cn2sv", // cn2sv | sv2cn | spell  (cn2sv means meaning→SV)
  practiceSource: "main", // main | wordbook | review
  batch: [],
  index: 0,
  wbBatch: [],
  wbIndex: 0,
  reviewScope: "dayAll", // dayAll | dayWordbook | dayUnmastered
  reviewDay: null, // YYYY-MM-DD or null
  reviewCount: 10, // number or "all"
  reviewBatch: [],
  reviewIndex: 0,
  reviewLabel: "",
  calYear: new Date().getFullYear(),
  calMonth: new Date().getMonth(), // 0-11
  searchQuery: "",
  searchExpandedId: null,
  flipped: false,
  spellFeedback: "",
  quizFeedback: "",
  quizDir: "cn2sv",
  mastered: loadSet(LS_MASTERED),
  wordbook: loadSet(LS_WORDBOOK),
  learned: loadSet(LS_LEARNED),
  learnDates: loadDateMap(LS_LEARN_DATES),
  wbDates: loadDateMap(LS_WORDBOOK_DATES),
};
for (const id of state.mastered) state.learned.add(id);
saveSet(LS_LEARNED, state.learned);
/* ========== NAV / I18N APPLY ========== */
function showView(id){
  document.querySelectorAll(".view").forEach(v=>v.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}
function applyHomeI18n(){
  document.getElementById("langLabel").textContent = t("langLabel");
  document.getElementById("btnStart").textContent = t("start");
  document.getElementById("homeSubtitle").textContent = t("homeSub");
  document.getElementById("homeBrand").textContent = t("brandLearn");
  document.documentElement.lang = state.uiLang==="en" ? "en" : "zh-CN";
  applyTheme(state.theme || getSavedTheme());
}
function applyLearnChrome(){
  document.getElementById("btnHome").textContent = t("homeBtn");
  document.getElementById("learnBrand").textContent = t("brandLearn");
  document.getElementById("tabBtnVocab").textContent = t("tabVocab");
  document.getElementById("tabBtnGrammar").textContent = t("tabGrammar");
  document.getElementById("tabBtnSpeaking").textContent = t("tabSpeaking");
  document.getElementById("tabBtnProgress").textContent = t("tabProgress");
  updateLearnPageHead();
}
function updateLearnPageHead(){
  if(state.tab==="grammar"){
    document.getElementById("learnTitle").textContent = t("grammarTitle");
    document.getElementById("learnSub").textContent = t("grammarSub");
  } else if(state.tab==="speaking"){
    document.getElementById("learnTitle").textContent = t("speakingTitle");
    document.getElementById("learnSub").textContent = t("speakingSub");
  } else if(state.tab==="progress"){
    document.getElementById("learnTitle").textContent = t("progressTitle");
    document.getElementById("learnSub").textContent = t("progressSub");
  } else {
    document.getElementById("learnTitle").textContent = t("learnTitle");
    document.getElementById("learnSub").textContent = t("learnSub");
  }
}
function goLearn(){
  localStorage.setItem(LS_UI_LANG, state.uiLang);
  applyLearnChrome();
  showView("view-learn");
  state.tab="vocab";
  syncLearnTabs();
  renderVocab();
}
function syncLearnTabs(){
  document.querySelectorAll("#learnTabs .tab").forEach(t=>t.classList.toggle("active", t.dataset.tab===state.tab));
  document.querySelectorAll("#view-learn .panel").forEach(p=>p.classList.remove("active"));
  document.getElementById("tab-"+state.tab).classList.add("active");
}
/* ========== INIT ========== */
applyTheme(getSavedTheme());
document.getElementById("langSelect").value = state.uiLang === "en" ? "en" : "zh";
applyHomeI18n();
document.getElementById("langSelect").addEventListener("change", e=>{
  state.uiLang = e.target.value === "en" ? "en" : "zh";
  localStorage.setItem(LS_UI_LANG, state.uiLang);
  applyHomeI18n();
});
document.getElementById("btnStart").addEventListener("click", ()=>{
  state.uiLang = document.getElementById("langSelect").value === "en" ? "en" : "zh";
  localStorage.setItem(LS_UI_LANG, state.uiLang);
  goLearn();
});
document.getElementById("btnHome").addEventListener("click", ()=>{
  applyHomeI18n();
  showView("view-home");
});
document.getElementById("btnThemeHome")?.addEventListener("click", ()=>{
  toggleTheme(); state.theme = getSavedTheme();
});
document.getElementById("btnThemeLearn")?.addEventListener("click", ()=>{
  toggleTheme(); state.theme = getSavedTheme();
});
document.getElementById("learnTabs").addEventListener("click",e=>{
  const tb=e.target.closest("[data-tab]"); if(!tb) return;
  state.tab=tb.dataset.tab; syncLearnTabs();
  updateLearnPageHead();
  if(state.tab==="vocab") renderVocab();
  if(state.tab==="grammar") renderGrammar();
  if(state.tab==="speaking") renderSpeaking();
  if(state.tab==="progress") renderProgress();
});
document.body.addEventListener("click",e=>{
  const b=e.target.closest("[data-speak]"); if(b){ e.preventDefault(); speak(b.dataset.speak); }
});
