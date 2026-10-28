/* localStorage 读写（已掌握、生词本、学习记录等） */
const LS_MASTERED = "sv-learn-mastered-v2";
const LS_WORDBOOK = "sv-learn-wordbook-v2";
const LS_LEARNED = "sv-learn-learned-v2";
const LS_LEARN_DATES = "sv-learn-dates-v1";
const LS_WORDBOOK_DATES = "sv-learn-wordbook-dates-v1";
const LS_GRAMMAR = "sv-learn-grammar-v1";
function loadSet(key){
  try{ const a=JSON.parse(localStorage.getItem(key)||"[]"); return new Set(a); }catch{ return new Set(); }
}
function saveSet(key, set){ localStorage.setItem(key, JSON.stringify([...set])); }
function loadDateMap(key){
  try{
    const raw = JSON.parse(localStorage.getItem(key)||"{}") || {};
    const out = {};
    Object.keys(raw).forEach(k=>{
      if(Array.isArray(raw[k])) out[k] = raw[k].filter(Boolean);
    });
    return out;
  }catch{ return {}; }
}
function saveDateMap(key, map){ localStorage.setItem(key, JSON.stringify(map)); }
function todayKey(d=new Date()){
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
}
function pushDateId(map, dateStr, id){
  if(!id) return false;
  if(!map[dateStr]) map[dateStr] = [];
  if(map[dateStr].includes(id)) return false;
  map[dateStr].push(id);
  return true;
}
function recordLearnDate(id, dateStr=todayKey()){
  if(pushDateId(state.learnDates, dateStr, id)) saveDateMap(LS_LEARN_DATES, state.learnDates);
}
function recordWordbookDate(id, dateStr=todayKey()){
  if(pushDateId(state.wbDates, dateStr, id)) saveDateMap(LS_WORDBOOK_DATES, state.wbDates);
}
function isMastered(id){ return state.mastered.has(id); }
function inWordbook(id){ return state.wordbook.has(id); }
function markLearned(id){
  if(!id) return;
  if(!state.learned.has(id)){
    state.learned.add(id);
    saveSet(LS_LEARNED, state.learned);
  }
  recordLearnDate(id);
}
function learnedCount(){ return state.learned.size; }
function loadGrammarResults(){
  try{ return JSON.parse(localStorage.getItem(LS_GRAMMAR)||"{}") || {}; }
  catch{ return {}; }
}
function saveGrammarResults(map){
  localStorage.setItem(LS_GRAMMAR, JSON.stringify(map));
}
