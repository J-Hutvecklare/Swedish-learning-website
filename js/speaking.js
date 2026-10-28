/* 口语板块 */
/* ========== SPEAKING ========== */
const SPEAKING_SCENARIOS = [
  {
    id: "greetings",
    title: { zh: "问候与介绍", en: "Greetings" },
    phrases: [
      { sv: "Hej! Hur mår du?", zh: "你好！你好吗？", en: "Hello! How are you?" },
      { sv: "Jag heter Johan.", zh: "我叫 Johan。", en: "My name is Johan." },
      { sv: "Trevligt att träffas.", zh: "很高兴认识你。", en: "Nice to meet you." },
      { sv: "Var kommer du ifrån?", zh: "你来自哪里？", en: "Where are you from?" },
      { sv: "Jag kommer från Kina.", zh: "我来自中国。", en: "I come from China." }
    ]
  },
  {
    id: "shopping",
    title: { zh: "购物", en: "Shopping" },
    phrases: [
      { sv: "Hur mycket kostar det?", zh: "这个多少钱？", en: "How much does it cost?" },
      { sv: "Jag tar den.", zh: "我要这个。", en: "I'll take it." },
      { sv: "Har ni den i en annan storlek?", zh: "有其他尺码吗？", en: "Do you have it in another size?" },
      { sv: "Kan jag få ett kvitto?", zh: "可以给我收据吗？", en: "Can I have a receipt?" },
      { sv: "Det är för dyrt.", zh: "太贵了。", en: "It's too expensive." }
    ]
  },
  {
    id: "food",
    title: { zh: "点餐", en: "Ordering" },
    phrases: [
      { sv: "Jag vill ha en kaffe.", zh: "我想要一杯咖啡。", en: "I would like a coffee." },
      { sv: "Vad rekommenderar du?", zh: "你推荐什么？", en: "What do you recommend?" },
      { sv: "Notan, tack.", zh: "买单。", en: "The bill, please." },
      { sv: "Kan jag få menyn?", zh: "可以给我菜单吗？", en: "Can I have the menu?" },
      { sv: "Det var gott.", zh: "很好吃。", en: "It was delicious." }
    ]
  },
  {
    id: "directions",
    title: { zh: "问路", en: "Directions" },
    phrases: [
      { sv: "Ursäkta, var ligger stationen?", zh: "打扰一下，车站在哪里？", en: "Excuse me, where is the station?" },
      { sv: "Hur kommer jag till centrum?", zh: "我怎么去市中心？", en: "How do I get to the center?" },
      { sv: "Gå rakt fram.", zh: "直行。", en: "Go straight ahead." },
      { sv: "Sväng vänster.", zh: "向左转。", en: "Turn left." },
      { sv: "Det är nära.", zh: "很近。", en: "It's nearby." }
    ]
  },
  {
    id: "transport",
    title: { zh: "交通", en: "Transport" },
    phrases: [
      { sv: "En biljett till centrum, tack.", zh: "一张去市中心的票。", en: "A ticket to the center, please." },
      { sv: "När går nästa buss?", zh: "下一班公交什么时候？", en: "When does the next bus leave?" },
      { sv: "Var ska jag gå av?", zh: "我应该在哪里下车？", en: "Where should I get off?" },
      { sv: "Är det här rätt väg?", zh: "这是正确的路吗？", en: "Is this the right way?" },
      { sv: "Jag har missat bussen.", zh: "我错过了公交车。", en: "I missed the bus." }
    ]
  }
];

function speakingTitleOf(sc){ return state.uiLang==="en" ? (sc.title.en||sc.title.zh) : sc.title.zh; }
function speakingGlossOf(p){ return state.uiLang==="en" ? (p.en||p.zh) : p.zh; }

function renderSpeaking(){
  const el = document.getElementById("tab-speaking");
  if(!el) return;
  if(!SPEAKING_SCENARIOS.some(s=>s.id===state.speakingScenario)){
    state.speakingScenario = SPEAKING_SCENARIOS[0].id;
  }
  const sc = SPEAKING_SCENARIOS.find(s=>s.id===state.speakingScenario) || SPEAKING_SCENARIOS[0];

  const nav = SPEAKING_SCENARIOS.map(s=>
    `<button type="button" class="s-topic${s.id===sc.id?" active":""}" data-scenario="${esc(s.id)}">${esc(speakingTitleOf(s))}</button>`
  ).join("");

  const list = sc.phrases.map(p=>`<li class="speak-item">
      <div class="speak-sv-row">
        <span class="speak-sv">${esc(p.sv)}</span>
        <button type="button" class="btn-speak" data-speak="${esc(p.sv)}">${t("speak")}</button>
      </div>
      <div class="speak-tr">${esc(speakingGlossOf(p))}</div>
    </li>`).join("");

  el.innerHTML = `<div class="speaking-layout">
    <aside class="speaking-nav">
      <div class="speaking-nav-title">${t("speakingScenarios")}</div>
      ${nav}
    </aside>
    <div class="speaking-main">
      <div class="card">
        <h3>${esc(speakingTitleOf(sc))} · ${t("speakingPhrases")}</h3>
        <ul class="speak-list">${list}</ul>
      </div>
    </div>
  </div>`;

  el.querySelectorAll("[data-scenario]").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      state.speakingScenario = btn.dataset.scenario;
      renderSpeaking();
    });
  });
  // Explicit TTS wiring (stopPropagation so body handler does not double-speak)
  el.querySelectorAll("[data-speak]").forEach(btn=>{
    btn.addEventListener("click", e=>{
      e.preventDefault();
      e.stopPropagation();
      speak(btn.getAttribute("data-speak") || "");
    });
  });
}
