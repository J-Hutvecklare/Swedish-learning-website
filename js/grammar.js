/* 语法板块与练习 */
/* ========== GRAMMAR ========== */
const GRAMMAR_TOPICS = [
  {
    id: "nouns",
    title: { zh: "名词（en/ett）", en: "Nouns (en/ett)" },
    summary: {
      zh: {
        intro: "瑞典语名词分两种词性：通性（en）和中性（ett）。",
        sections: [
          {
            heading: "1. 两种词性",
            rules: [
              "通性（en）：en bil（一辆车）",
              "中性（ett）：ett hus（一座房子）"
            ],
            note: "词性会影响冠词和形容词词尾。"
          },
          {
            heading: "2. 四种形式",
            rules: [
              "不定单数：en/ett + 原形（en bil、ett hus）",
              "有定单数：多数加 -en / -et（bilen、huset）",
              "不定复数：常见词尾 -or / -ar / -er / -n，或不变（bilar、flickor、äpplen、barn）",
              "有定复数：复数后再加 -na / -en（bilarna、husen、barnen）"
            ]
          },
          {
            heading: "3. 有定单数补充",
            rules: [
              "以元音结尾时常加 -n / -t：flicka → flickan，äpple → äpplet"
            ]
          },
          {
            heading: "4. 常见不规则（需整词记忆）",
            rules: [
              "man → män / männen",
              "bok → böcker / böckerna",
              "öga → ögon / ögonen",
              "gås → gäss / gässen"
            ]
          }
        ],
        tip: "学习建议：记名词时尽量连同 en/ett 和复数形式一起记，而不是只记原形。",
        tables: [
          {
            caption: "通性与中性四式对照",
            headers: ["词性", "不定单数", "有定单数", "不定复数", "有定复数"],
            rows: [
              ["en（通性）", "en bil", "bilen", "bilar", "bilarna"],
              ["en（通性）", "en flicka", "flickan", "flickor", "flickorna"],
              ["ett（中性）", "ett hus", "huset", "hus", "husen"],
              ["ett（中性）", "ett äpple", "äpplet", "äpplen", "äpplena"],
              ["ett（零复数）", "ett barn", "barnet", "barn", "barnen"]
            ]
          },
          {
            caption: "常见不规则名词",
            headers: ["不定单数", "有定单数", "不定复数", "有定复数"],
            rows: [
              ["en man", "mannen", "män", "männen"],
              ["en bok", "boken", "böcker", "böckerna"],
              ["ett öga", "ögat", "ögon", "ögonen"],
              ["en gås", "gåsen", "gäss", "gässen"]
            ]
          }
        ],
        examples: [
          { sv: "Det är en bil.", zh: "这是一辆车。", en: "This is a car." },
          { sv: "Bilen är röd.", zh: "那辆车是红色的。", en: "The car is red." },
          { sv: "Barnen leker ute.", zh: "孩子们在外面玩。", en: "The children are playing outside." }
        ]
      },
      en: {
        intro: "Swedish nouns have two genders: common (en) and neuter (ett).",
        sections: [
          {
            heading: "1. Two genders",
            rules: [
              "Common (en): en bil (a car)",
              "Neuter (ett): ett hus (a house)"
            ],
            note: "Gender affects articles and adjective endings."
          },
          {
            heading: "2. Four forms",
            rules: [
              "Indefinite singular: en/ett + base form (en bil, ett hus)",
              "Definite singular: usually add -en / -et (bilen, huset)",
              "Indefinite plural: common endings -or / -ar / -er / -n, or unchanged (bilar, flickor, äpplen, barn)",
              "Definite plural: after the plural, often add -na / -en (bilarna, husen, barnen)"
            ]
          },
          {
            heading: "3. Definite singular notes",
            rules: [
              "After a vowel, often add -n / -t: flicka → flickan, äpple → äpplet"
            ]
          },
          {
            heading: "4. Common irregulars (learn as wholes)",
            rules: [
              "man → män / männen",
              "bok → böcker / böckerna",
              "öga → ögon / ögonen",
              "gås → gäss / gässen"
            ]
          }
        ],
        tip: "Study tip: learn each noun with its en/ett article and plural, not just the base form.",
        tables: [
          {
            caption: "Common vs neuter four-form chart",
            headers: ["Gender", "Indef. sg.", "Def. sg.", "Indef. pl.", "Def. pl."],
            rows: [
              ["en (common)", "en bil", "bilen", "bilar", "bilarna"],
              ["en (common)", "en flicka", "flickan", "flickor", "flickorna"],
              ["ett (neuter)", "ett hus", "huset", "hus", "husen"],
              ["ett (neuter)", "ett äpple", "äpplet", "äpplen", "äpplena"],
              ["ett (zero pl.)", "ett barn", "barnet", "barn", "barnen"]
            ]
          },
          {
            caption: "Common irregular nouns",
            headers: ["Indef. sg.", "Def. sg.", "Indef. pl.", "Def. pl."],
            rows: [
              ["en man", "mannen", "män", "männen"],
              ["en bok", "boken", "böcker", "böckerna"],
              ["ett öga", "ögat", "ögon", "ögonen"],
              ["en gås", "gåsen", "gäss", "gässen"]
            ]
          }
        ],
        examples: [
          { sv: "Det är en bil.", zh: "这是一辆车。", en: "This is a car." },
          { sv: "Bilen är röd.", zh: "那辆车是红色的。", en: "The car is red." },
          { sv: "Barnen leker ute.", zh: "孩子们在外面玩。", en: "The children are playing outside." }
        ]
      }
    },
        exercises: [
      { pre:"Det är ", post:".", lemma:"bil", gloss:{zh:"这是一辆车。", en:"This is a car."}, answer:["en bil"], explain:{zh:"通性不定单数：en + bil。", en:"Common indefinite singular: en + bil."} },
      { pre:"Det är ", post:".", lemma:"hus", gloss:{zh:"这是一座房子。", en:"This is a house."}, answer:["ett hus"], explain:{zh:"中性不定单数：ett + hus。", en:"Neuter indefinite singular: ett + hus."} },
      { pre:"", post:" är röd.", lemma:"bil", gloss:{zh:"那辆车是红色的。", en:"The car is red."}, answer:["Bilen","bilen"], explain:{zh:"有定单数 bil + en → bilen。", en:"Definite singular: bil + en → bilen."} },
      { pre:"", post:" är stort.", lemma:"hus", gloss:{zh:"那座房子很大。", en:"The house is big."}, answer:["Huset","huset"], explain:{zh:"有定单数 hus + et → huset。", en:"Definite singular: hus + et → huset."} },
      { pre:"Jag har två ", post:".", lemma:"bil", gloss:{zh:"我有两辆车。", en:"I have two cars."}, answer:["bilar"], explain:{zh:"不定复数 bil → bilar。", en:"Indefinite plural: bil → bilar."} },
      { pre:"", post:" är dyra.", lemma:"bil", gloss:{zh:"那些车很贵。", en:"The cars are expensive."}, answer:["Bilarna","bilarna"], explain:{zh:"有定复数 bilar + na → bilarna。", en:"Definite plural: bilar + na → bilarna."} },
      { pre:"Det står tre ", post:" där.", lemma:"man", gloss:{zh:"那里站着三个男人。", en:"Three men are standing there."}, answer:["män"], explain:{zh:"不规则：man → män。", en:"Irregular: man → män."} },
      { pre:"De har två ", post:".", lemma:"barn", gloss:{zh:"他们有两个孩子。", en:"They have two children."}, answer:["barn"], explain:{zh:"barn 单复数同形。", en:"barn has the same singular and plural form."} }
    ]
  },
  {
    id: "verb-present",
    title: { zh: "动词 — 现在时", en: "Verbs — present" },
    summary: {
      zh: {
        intro: "现在时（presens）表示现在、习惯或一般事实。绝大多数现在时形式以 -r 结尾。",
        sections: [
          {
            heading: "1. 规则变化",
            rules: [
              "-ar 动词：不定式以 -a 结尾，直接加 -r：tala → talar，arbeta → arbetar",
              "-er 动词：去掉 -a 再加 -er：köpa → köper，läsa → läser",
              "短动词：bo → bor，må → mår，sy → syr"
            ]
          },
          {
            heading: "2. 不规则现在时（需单独记忆）",
            rules: [
              "vara → är",
              "ha → har",
              "göra → gör",
              "kunna → kan",
              "vilja → vill",
              "ska → ska"
            ]
          },
          {
            heading: "3. 人称",
            rules: [
              "所有人称使用相同形式：jag / du / han / vi / ni / de talar"
            ]
          }
        ],
        tip: "学习建议：先掌握规则变化，再重点记忆常用不规则动词。",
        tables: [
          {
            caption: "规则现在时",
            headers: ["类型", "不定式", "现在时", "例句"],
            rows: [
              ["-ar", "tala", "talar", "Jag talar svenska."],
              ["-ar", "arbeta", "arbetar", "Vi arbetar idag."],
              ["-er", "köpa", "köper", "Vi köper mjölk."],
              ["-er", "läsa", "läser", "Du läser en bok."],
              ["短动词", "bo", "bor", "De bor i Sverige."]
            ]
          },
          {
            caption: "不规则现在时",
            headers: ["不定式", "现在时", "例句"],
            rows: [
              ["vara", "är", "Jag är trött."],
              ["ha", "har", "Hon har en bil."],
              ["göra", "gör", "Vad gör du?"],
              ["kunna", "kan", "Jag kan simma."],
              ["vilja", "vill", "Jag vill lära mig svenska."],
              ["ska", "ska", "Vi ska åka hem."]
            ]
          }
        ],
        examples: [
          { sv: "Jag talar svenska varje dag.", zh: "我每天说瑞典语。", en: "I speak Swedish every day." },
          { sv: "Hon köper bröd.", zh: "她买面包。", en: "She buys bread." },
          { sv: "Vi är hemma.", zh: "我们在家。", en: "We are at home." }
        ]
      },
      en: {
        intro: "The present tense (presens) covers now, habits, and general facts. Most present forms end in -r.",
        sections: [
          {
            heading: "1. Regular patterns",
            rules: [
              "-ar verbs: infinitive ends in -a; add -r: tala → talar, arbeta → arbetar",
              "-er verbs: drop -a and add -er: köpa → köper, läsa → läser",
              "Short verbs: bo → bor, må → mår, sy → syr"
            ]
          },
          {
            heading: "2. Irregular present (learn separately)",
            rules: [
              "vara → är",
              "ha → har",
              "göra → gör",
              "kunna → kan",
              "vilja → vill",
              "ska → ska"
            ]
          },
          {
            heading: "3. Person",
            rules: [
              "All persons use the same form: jag / du / han / vi / ni / de talar"
            ]
          }
        ],
        tip: "Study tip: master the regular patterns first, then focus on common irregular verbs.",
        tables: [
          {
            caption: "Regular present",
            headers: ["Type", "Infinitive", "Present", "Example"],
            rows: [
              ["-ar", "tala", "talar", "Jag talar svenska."],
              ["-ar", "arbeta", "arbetar", "Vi arbetar idag."],
              ["-er", "köpa", "köper", "Vi köper mjölk."],
              ["-er", "läsa", "läser", "Du läser en bok."],
              ["short", "bo", "bor", "De bor i Sverige."]
            ]
          },
          {
            caption: "Irregular present",
            headers: ["Infinitive", "Present", "Example"],
            rows: [
              ["vara", "är", "Jag är trött."],
              ["ha", "har", "Hon har en bil."],
              ["göra", "gör", "Vad gör du?"],
              ["kunna", "kan", "Jag kan simma."],
              ["vilja", "vill", "Jag vill lära mig svenska."],
              ["ska", "ska", "Vi ska åka hem."]
            ]
          }
        ],
        examples: [
          { sv: "Jag talar svenska varje dag.", zh: "我每天说瑞典语。", en: "I speak Swedish every day." },
          { sv: "Hon köper bröd.", zh: "她买面包。", en: "She buys bread." },
          { sv: "Vi är hemma.", zh: "我们在家。", en: "We are at home." }
        ]
      }
    },
        exercises: [
      { pre:"Jag ", post:" frukost varje dag.", lemma:"äta", gloss:{zh:"我每天吃早餐。", en:"I eat breakfast every day."}, answer:["äter"], explain:{zh:"现在时：äta → äter。", en:"Present: äta → äter."} },
      { pre:"Hon ", post:" svenska.", lemma:"tala", gloss:{zh:"她说瑞典语。", en:"She speaks Swedish."}, answer:["talar"], explain:{zh:"-ar 动词：tala → talar。", en:"-ar verb: tala → talar."} },
      { pre:"Vi ", post:" mjölk.", lemma:"köpa", gloss:{zh:"我们买牛奶。", en:"We buy milk."}, answer:["köper"], explain:{zh:"-er 动词：köpa → köper。", en:"-er verb: köpa → köper."} },
      { pre:"De ", post:" i Stockholm.", lemma:"bo", gloss:{zh:"他们住在斯德哥尔摩。", en:"They live in Stockholm."}, answer:["bor"], explain:{zh:"短动词：bo → bor。", en:"Short verb: bo → bor."} },
      { pre:"Du ", post:" en bok.", lemma:"läsa", gloss:{zh:"你在读一本书。", en:"You are reading a book."}, answer:["läser"], explain:{zh:"läsa → läser。", en:"läsa → läser."} },
      { pre:"Jag ", post:" trött.", lemma:"vara", gloss:{zh:"我累了。", en:"I am tired."}, answer:["är"], explain:{zh:"不规则：vara → är。", en:"Irregular: vara → är."} },
      { pre:"Han ", post:" till skolan.", lemma:"gå", gloss:{zh:"他走着去学校。", en:"He walks to school."}, answer:["går"], explain:{zh:"gå → går。", en:"gå → går."} },
      { pre:"Jag ", post:" simma.", lemma:"kunna", gloss:{zh:"我会游泳。", en:"I can swim."}, answer:["kan"], explain:{zh:"情态动词：kunna → kan。", en:"Modal: kunna → kan."} }
    ]
  },
  {
    id: "verb-past",
    title: { zh: "动词 — 过去时", en: "Verbs — past" },
    summary: {
      zh: {
        intro: "过去时（preteritum）表示过去发生的动作或状态。",
        sections: [
          {
            heading: "1. 规则变化",
            rules: [
              "-ar 动词：词干 + -de：tala → talade，arbeta → arbetade",
              "-er 动词：词干 + -de / -te：köpa → köpte，läsa → läste",
              "短动词：多数加 -dde：bo → bodde，må → mådde"
            ]
          },
          {
            heading: "2. 不规则过去时（需单独记忆）",
            rules: [
              "vara → var",
              "ha → hade",
              "göra → gjorde",
              "gå → gick",
              "komma → kom",
              "få → fick",
              "ta → tog",
              "se → såg",
              "äta → åt",
              "dricka → drack"
            ]
          },
          {
            heading: "3. 人称",
            rules: [
              "所有人称使用相同形式：jag / du / han / vi / ni / de talade"
            ]
          }
        ],
        tip: "学习建议：规则动词按词尾变化记忆，常用不规则动词需单独背诵。",
        tables: [
          {
            caption: "规则过去时",
            headers: ["类型", "不定式", "过去时", "例句"],
            rows: [
              ["-ar / -de", "tala", "talade", "Jag talade svenska igår."],
              ["-ar / -de", "arbeta", "arbetade", "De arbetade sent."],
              ["-er / -te", "köpa", "köpte", "Vi köpte mjölk."],
              ["-er / -te", "läsa", "läste", "Han läste boken."],
              ["短动词 / -dde", "bo", "bodde", "Hon bodde i Sverige."]
            ]
          },
          {
            caption: "不规则过去时",
            headers: ["不定式", "过去时", "例句"],
            rows: [
              ["vara", "var", "Det var kallt."],
              ["ha", "hade", "Hon hade tid."],
              ["göra", "gjorde", "Vad gjorde du?"],
              ["gå", "gick", "Jag gick hem."],
              ["komma", "kom", "Han kom sent."],
              ["få", "fick", "Vi fick ett brev."],
              ["ta", "tog", "Hon tog bussen."],
              ["se", "såg", "Jag såg filmen."],
              ["äta", "åt", "Vi åt pizza."],
              ["dricka", "drack", "Hon drack vatten."]
            ]
          }
        ],
        examples: [
          { sv: "Jag talade med läraren igår.", zh: "我昨天和老师谈了话。", en: "I spoke with the teacher yesterday." },
          { sv: "Hon köpte bröd i morse.", zh: "她今天早上买了面包。", en: "She bought bread this morning." },
          { sv: "Vi gick till skolan.", zh: "我们走着去了学校。", en: "We walked to school." }
        ]
      },
      en: {
        intro: "The past tense (preteritum) marks actions or states in the past.",
        sections: [
          {
            heading: "1. Regular patterns",
            rules: [
              "-ar verbs: stem + -de: tala → talade, arbeta → arbetade",
              "-er verbs: stem + -de / -te: köpa → köpte, läsa → läste",
              "Short verbs: usually add -dde: bo → bodde, må → mådde"
            ]
          },
          {
            heading: "2. Irregular past (learn separately)",
            rules: [
              "vara → var",
              "ha → hade",
              "göra → gjorde",
              "gå → gick",
              "komma → kom",
              "få → fick",
              "ta → tog",
              "se → såg",
              "äta → åt",
              "dricka → drack"
            ]
          },
          {
            heading: "3. Person",
            rules: [
              "All persons use the same form: jag / du / han / vi / ni / de talade"
            ]
          }
        ],
        tip: "Study tip: learn regular verbs by their endings; memorize common irregulars separately.",
        tables: [
          {
            caption: "Regular past",
            headers: ["Type", "Infinitive", "Past", "Example"],
            rows: [
              ["-ar / -de", "tala", "talade", "Jag talade svenska igår."],
              ["-ar / -de", "arbeta", "arbetade", "De arbetade sent."],
              ["-er / -te", "köpa", "köpte", "Vi köpte mjölk."],
              ["-er / -te", "läsa", "läste", "Han läste boken."],
              ["short / -dde", "bo", "bodde", "Hon bodde i Sverige."]
            ]
          },
          {
            caption: "Irregular past",
            headers: ["Infinitive", "Past", "Example"],
            rows: [
              ["vara", "var", "Det var kallt."],
              ["ha", "hade", "Hon hade tid."],
              ["göra", "gjorde", "Vad gjorde du?"],
              ["gå", "gick", "Jag gick hem."],
              ["komma", "kom", "Han kom sent."],
              ["få", "fick", "Vi fick ett brev."],
              ["ta", "tog", "Hon tog bussen."],
              ["se", "såg", "Jag såg filmen."],
              ["äta", "åt", "Vi åt pizza."],
              ["dricka", "drack", "Hon drack vatten."]
            ]
          }
        ],
        examples: [
          { sv: "Jag talade med läraren igår.", zh: "我昨天和老师谈了话。", en: "I spoke with the teacher yesterday." },
          { sv: "Hon köpte bröd i morse.", zh: "她今天早上买了面包。", en: "She bought bread this morning." },
          { sv: "Vi gick till skolan.", zh: "我们走着去了学校。", en: "We walked to school." }
        ]
      }
    },
        exercises: [
      { pre:"Jag ", post:" svenska igår.", lemma:"tala", gloss:{zh:"我昨天说了瑞典语。", en:"I spoke Swedish yesterday."}, answer:["talade"], explain:{zh:"规则过去时 -de：tala → talade。", en:"Regular past -de: tala → talade."} },
      { pre:"Hon ", post:" mjölk i morse.", lemma:"köpa", gloss:{zh:"她今天早上买了牛奶。", en:"She bought milk this morning."}, answer:["köpte"], explain:{zh:"规则过去时 -te：köpa → köpte。", en:"Regular past -te: köpa → köpte."} },
      { pre:"Han ", post:" boken.", lemma:"läsa", gloss:{zh:"他读了那本书。", en:"He read the book."}, answer:["läste"], explain:{zh:"läsa → läste。", en:"läsa → läste."} },
      { pre:"Vi ", post:" pizza igår.", lemma:"äta", gloss:{zh:"我们昨天吃了披萨。", en:"We ate pizza yesterday."}, answer:["åt"], explain:{zh:"不规则：äta → åt。", en:"Irregular: äta → åt."} },
      { pre:"Jag ", post:" hem.", lemma:"gå", gloss:{zh:"我回家了。", en:"I went home."}, answer:["gick"], explain:{zh:"不规则：gå → gick。", en:"Irregular: gå → gick."} },
      { pre:"Det ", post:" kallt.", lemma:"vara", gloss:{zh:"天很冷。", en:"It was cold."}, answer:["var"], explain:{zh:"vara → var。", en:"vara → var."} },
      { pre:"Vad ", post:" du igår?", lemma:"göra", gloss:{zh:"你昨天做了什么？", en:"What did you do yesterday?"}, answer:["gjorde"], explain:{zh:"göra → gjorde。", en:"göra → gjorde."} },
      { pre:"Hon ", post:" vatten.", lemma:"dricka", gloss:{zh:"她喝了水。", en:"She drank water."}, answer:["drack"], explain:{zh:"dricka → drack。", en:"dricka → drack."} }
    ]
  },
  {
    id: "verb-perfect",
    title: { zh: "动词 — 完成时", en: "Verbs — perfect" },
    summary: {
      zh: {
        intro: "完成时由 har + supinum（过去分词）构成，表示已经完成、与现在有关的动作。",
        sections: [
          {
            heading: "1. 规则变化",
            rules: [
              "-ar 动词：词干 + -t：tala → talat，arbeta → arbetat",
              "-er 动词：词干 + -t：köpa → köpt，läsa → läst",
              "短动词：多数加 -tt：bo → bott，må → mått"
            ]
          },
          {
            heading: "2. 不规则 supinum（需单独记忆）",
            rules: [
              "vara → varit",
              "ha → haft",
              "göra → gjort",
              "gå → gått",
              "komma → kommit",
              "få → fått",
              "ta → tagit",
              "se → sett",
              "äta → ätit",
              "dricka → druckit"
            ]
          },
          {
            heading: "3. 构成",
            rules: [
              "肯定：jag har talat",
              "否定：jag har inte talat",
              "疑问：Har du talat?"
            ]
          }
        ],
        tip: "学习建议：完成时重点记忆 supinum 形式，尤其是常用不规则动词。",
        tables: [
          {
            caption: "规则完成时",
            headers: ["类型", "不定式", "supinum", "完成时"],
            rows: [
              ["-ar / -t", "tala", "talat", "har talat"],
              ["-ar / -t", "arbeta", "arbetat", "har arbetat"],
              ["-er / -t", "köpa", "köpt", "har köpt"],
              ["-er / -t", "läsa", "läst", "har läst"],
              ["短动词 / -tt", "bo", "bott", "har bott"]
            ]
          },
          {
            caption: "不规则完成时",
            headers: ["不定式", "supinum", "完成时", "例句"],
            rows: [
              ["vara", "varit", "har varit", "Vi har varit i Sverige."],
              ["ha", "haft", "har haft", "Hon har haft tid."],
              ["göra", "gjort", "har gjort", "Vad har du gjort?"],
              ["gå", "gått", "har gått", "Han har gått hem."],
              ["komma", "kommit", "har kommit", "Tåget har kommit."],
              ["få", "fått", "har fått", "Vi har fått ett brev."],
              ["ta", "tagit", "har tagit", "Hon har tagit bussen."],
              ["se", "sett", "har sett", "Jag har sett filmen."],
              ["äta", "ätit", "har ätit", "Jag har ätit frukost."],
              ["dricka", "druckit", "har druckit", "Hon har druckit kaffe."]
            ]
          }
        ],
        examples: [
          { sv: "Jag har talat med läraren.", zh: "我和老师谈过了。", en: "I have spoken with the teacher." },
          { sv: "Hon har köpt bröd.", zh: "她已经买了面包。", en: "She has bought bread." },
          { sv: "Vi har ätit middag.", zh: "我们已经吃过晚饭。", en: "We have eaten dinner." }
        ]
      },
      en: {
        intro: "The perfect tense is formed with har + the supine (past participle) and marks a completed action linked to the present.",
        sections: [
          {
            heading: "1. Regular patterns",
            rules: [
              "-ar verbs: stem + -t: tala → talat, arbeta → arbetat",
              "-er verbs: stem + -t: köpa → köpt, läsa → läst",
              "Short verbs: usually add -tt: bo → bott, må → mått"
            ]
          },
          {
            heading: "2. Irregular supine (learn separately)",
            rules: [
              "vara → varit",
              "ha → haft",
              "göra → gjort",
              "gå → gått",
              "komma → kommit",
              "få → fått",
              "ta → tagit",
              "se → sett",
              "äta → ätit",
              "dricka → druckit"
            ]
          },
          {
            heading: "3. Formation",
            rules: [
              "Affirmative: jag har talat",
              "Negative: jag har inte talat",
              "Question: Har du talat?"
            ]
          }
        ],
        tip: "Study tip: focus on supine forms for the perfect, especially common irregular verbs.",
        tables: [
          {
            caption: "Regular perfect",
            headers: ["Type", "Infinitive", "Supine", "Perfect"],
            rows: [
              ["-ar / -t", "tala", "talat", "har talat"],
              ["-ar / -t", "arbeta", "arbetat", "har arbetat"],
              ["-er / -t", "köpa", "köpt", "har köpt"],
              ["-er / -t", "läsa", "läst", "har läst"],
              ["short / -tt", "bo", "bott", "har bott"]
            ]
          },
          {
            caption: "Irregular perfect",
            headers: ["Infinitive", "Supine", "Perfect", "Example"],
            rows: [
              ["vara", "varit", "har varit", "Vi har varit i Sverige."],
              ["ha", "haft", "har haft", "Hon har haft tid."],
              ["göra", "gjort", "har gjort", "Vad har du gjort?"],
              ["gå", "gått", "har gått", "Han har gått hem."],
              ["komma", "kommit", "har kommit", "Tåget har kommit."],
              ["få", "fått", "har fått", "Vi har fått ett brev."],
              ["ta", "tagit", "har tagit", "Hon har tagit bussen."],
              ["se", "sett", "har sett", "Jag har sett filmen."],
              ["äta", "ätit", "har ätit", "Jag har ätit frukost."],
              ["dricka", "druckit", "har druckit", "Hon har druckit kaffe."]
            ]
          }
        ],
        examples: [
          { sv: "Jag har talat med läraren.", zh: "我和老师谈过了。", en: "I have spoken with the teacher." },
          { sv: "Hon har köpt bröd.", zh: "她已经买了面包。", en: "She has bought bread." },
          { sv: "Vi har ätit middag.", zh: "我们已经吃过晚饭。", en: "We have eaten dinner." }
        ]
      }
    },
        exercises: [
      { pre:"Jag har ", post:" med henne.", lemma:"tala", gloss:{zh:"我和她谈过了。", en:"I have spoken with her."}, answer:["talat"], explain:{zh:"规则仰卧：tala → talat。", en:"Regular supine: tala → talat."} },
      { pre:"Hon har ", post:" mjölk.", lemma:"köpa", gloss:{zh:"她已经买了牛奶。", en:"She has bought milk."}, answer:["köpt"], explain:{zh:"köpa → köpt。", en:"köpa → köpt."} },
      { pre:"Han har ", post:" boken.", lemma:"läsa", gloss:{zh:"他已经读过那本书。", en:"He has read the book."}, answer:["läst"], explain:{zh:"läsa → läst。", en:"läsa → läst."} },
      { pre:"Vi har ", post:" frukost.", lemma:"äta", gloss:{zh:"我们已经吃过早餐。", en:"We have eaten breakfast."}, answer:["ätit"], explain:{zh:"不规则：äta → ätit。", en:"Irregular: äta → ätit."} },
      { pre:"Han har ", post:" hem.", lemma:"gå", gloss:{zh:"他已经回家了。", en:"He has gone home."}, answer:["gått"], explain:{zh:"gå → gått。", en:"gå → gått."} },
      { pre:"De har ", post:" kaffe.", lemma:"dricka", gloss:{zh:"他们已经喝过咖啡。", en:"They have drunk coffee."}, answer:["druckit"], explain:{zh:"dricka → druckit。", en:"dricka → druckit."} },
      { pre:"Jag har ", post:" i Sverige.", lemma:"vara", gloss:{zh:"我去过瑞典。", en:"I have been in Sweden."}, answer:["varit"], explain:{zh:"vara → varit。", en:"vara → varit."} },
      { pre:"Vad har du ", post:"?", lemma:"göra", gloss:{zh:"你做了什么？", en:"What have you done?"}, answer:["gjort"], explain:{zh:"göra → gjort。", en:"göra → gjort."} }
    ]
  },
  {
    id: "adjectives",
    title: { zh: "形容词", en: "Adjectives" },
    summary: {
      zh: {
        intro: "形容词需与所修饰名词的性和数保持一致，并掌握比较级变化。",
        sections: [
          {
            heading: "1. 与名词一致",
            rules: [
              "en-ord 单数：原形：en stor bil",
              "ett-ord 单数：加 -t：ett stort hus",
              "复数：加 -a：stora bilar / stora hus"
            ]
          },
          {
            heading: "2. 比较级与最高级",
            rules: [
              "多数形容词：比较级加 -are，最高级加 -ast：billig → billigare → billigast",
              "部分形容词用 mer / mest：intressant → mer intressant → mest intressant",
              "常见不规则：stor → större → störst；bra → bättre → bäst；dålig → sämre → sämst；liten → mindre → minst"
            ]
          },
          {
            heading: "3. 示例",
            rules: [
              "en fin bil / ett fint hus / fina bilar",
              "Den här bilen är större.",
              "Det här huset är störst."
            ]
          }
        ],
        tip: "学习建议：先掌握与名词的性数一致，再记忆比较级，尤其是不规则形式。",
        tables: [
          {
            caption: "与名词一致（原级）",
            headers: ["en 单数", "ett 单数", "复数", "例句"],
            rows: [
              ["stor", "stort", "stora", "en stor bil / ett stort hus / stora bilar"],
              ["fin", "fint", "fina", "en fin bil / ett fint hus / fina bilar"],
              ["billig", "billigt", "billiga", "billiga äpplen"],
              ["ny", "nytt", "nya", "en ny bil / ett nytt hus"]
            ]
          },
          {
            caption: "比较级与最高级",
            headers: ["原级", "比较级", "最高级", "备注"],
            rows: [
              ["billig", "billigare", "billigast", "规则 -are / -ast"],
              ["intressant", "mer intressant", "mest intressant", "用 mer / mest"],
              ["stor", "större", "störst", "不规则"],
              ["bra", "bättre", "bäst", "不规则"],
              ["dålig", "sämre", "sämst", "不规则"],
              ["liten", "mindre", "minst", "不规则"]
            ]
          }
        ],
        examples: [
          { sv: "en fin bil / ett fint hus / fina bilar", zh: "一辆漂亮的车 / 一座漂亮的房子 / 几辆漂亮的车", en: "a nice car / a nice house / nice cars" },
          { sv: "Den här bilen är större.", zh: "这辆车更大。", en: "This car is bigger." },
          { sv: "Det här huset är störst.", zh: "这座房子最大。", en: "This house is the biggest." }
        ]
      },
      en: {
        intro: "Adjectives must agree with the gender and number of the noun they modify, and you also need the comparative forms.",
        sections: [
          {
            heading: "1. Agreement with nouns",
            rules: [
              "en-word singular: base form: en stor bil",
              "ett-word singular: add -t: ett stort hus",
              "Plural: add -a: stora bilar / stora hus"
            ]
          },
          {
            heading: "2. Comparative and superlative",
            rules: [
              "Most adjectives: comparative -are, superlative -ast: billig → billigare → billigast",
              "Some adjectives use mer / mest: intressant → mer intressant → mest intressant",
              "Common irregulars: stor → större → störst; bra → bättre → bäst; dålig → sämre → sämst; liten → mindre → minst"
            ]
          },
          {
            heading: "3. Examples",
            rules: [
              "en fin bil / ett fint hus / fina bilar",
              "Den här bilen är större.",
              "Det här huset är störst."
            ]
          }
        ],
        tip: "Study tip: master gender/number agreement first, then learn comparatives — especially the irregular ones.",
        tables: [
          {
            caption: "Agreement (positive degree)",
            headers: ["en sg.", "ett sg.", "Plural", "Examples"],
            rows: [
              ["stor", "stort", "stora", "en stor bil / ett stort hus / stora bilar"],
              ["fin", "fint", "fina", "en fin bil / ett fint hus / fina bilar"],
              ["billig", "billigt", "billiga", "billiga äpplen"],
              ["ny", "nytt", "nya", "en ny bil / ett nytt hus"]
            ]
          },
          {
            caption: "Comparative and superlative",
            headers: ["Base", "Comparative", "Superlative", "Note"],
            rows: [
              ["billig", "billigare", "billigast", "regular -are / -ast"],
              ["intressant", "mer intressant", "mest intressant", "uses mer / mest"],
              ["stor", "större", "störst", "irregular"],
              ["bra", "bättre", "bäst", "irregular"],
              ["dålig", "sämre", "sämst", "irregular"],
              ["liten", "mindre", "minst", "irregular"]
            ]
          }
        ],
        examples: [
          { sv: "en fin bil / ett fint hus / fina bilar", zh: "一辆漂亮的车 / 一座漂亮的房子 / 几辆漂亮的车", en: "a nice car / a nice house / nice cars" },
          { sv: "Den här bilen är större.", zh: "这辆车更大。", en: "This car is bigger." },
          { sv: "Det här huset är störst.", zh: "这座房子最大。", en: "This house is the biggest." }
        ]
      }
    },
        exercises: [
      { pre:"Det är en ", post:" bil.", lemma:"stor", gloss:{zh:"这是一辆大汽车。", en:"This is a big car."}, answer:["stor"], explain:{zh:"en-ord 用原形 stor。", en:"en-words use the base form stor."} },
      { pre:"Det är ett ", post:" hus.", lemma:"stor", gloss:{zh:"这是一座大房子。", en:"This is a big house."}, answer:["stort"], explain:{zh:"ett-ord 加 -t → stort。", en:"ett-words add -t → stort."} },
      { pre:"De har ", post:" bilar.", lemma:"stor", gloss:{zh:"他们有几辆大汽车。", en:"They have big cars."}, answer:["stora"], explain:{zh:"复数加 -a → stora。", en:"Plural adds -a → stora."} },
      { pre:"Det är ett ", post:" hus.", lemma:"ny", gloss:{zh:"这是一座新房子。", en:"This is a new house."}, answer:["nytt"], explain:{zh:"元音后中性常加 -tt → nytt。", en:"After a vowel, neuter often takes -tt → nytt."} },
      { pre:"Den här boken är ", post:".", lemma:"billig", gloss:{zh:"这本书更便宜。", en:"This book is cheaper."}, answer:["billigare"], explain:{zh:"规则比较级加 -are。", en:"Regular comparative adds -are."} },
      { pre:"Det är det ", post:" huset.", lemma:"stor", gloss:{zh:"那是最大的房子。", en:"That is the biggest house."}, answer:["största","störst"], explain:{zh:"不规则最高级；有定结构常用 största。", en:"Irregular superlative; definite often uses största."} },
      { pre:"Filmen är ", post:" än boken.", lemma:"intressant", gloss:{zh:"这部电影比那本书更有趣。", en:"The film is more interesting than the book."}, answer:["mer intressant"], explain:{zh:"较长形容词用 mer + 原级：mer intressant。", en:"Longer adjectives use mer + base form: mer intressant."} },
      { pre:"Min idé är ", post:" än din.", lemma:"bra", gloss:{zh:"我的主意比你的更好。", en:"My idea is better than yours."}, answer:["bättre"], explain:{zh:"不规则：bra → bättre。", en:"Irregular: bra → bättre."} }
    ]
  },
  {
    id: "pronouns",
    title: { zh: "代词", en: "Pronouns" },
    summary: {
      zh: {
        intro: "瑞典语代词主要包括人称代词和物主代词，需注意主格与宾格的区别。",
        sections: [
          {
            heading: "1. 人称代词",
            rules: [
              "主格作主语，宾格作宾语",
              "jag / mig（我）",
              "du / dig（你）",
              "han / honom（他）",
              "hon / henne（她）",
              "den / det（它）",
              "vi / oss（我们）",
              "ni / er（你们）",
              "de / dem（他们）"
            ]
          },
          {
            heading: "2. 物主代词",
            rules: [
              "min / mitt / mina（我的）",
              "din / ditt / dina（你的）",
              "sin / sitt / sina（他/她自己的）",
              "vår / vårt / våra（我们的）",
              "er / ert / era（你们的）",
              "deras（他们的）",
              "hans / hennes（他的 / 她的，指别人的所属）"
            ],
            note: "注意：sin/sitt/sina 指主语自身的所属，hans/hennes 指别人的。"
          }
        ],
        tip: "学习建议：先分清主格与宾格，再记物主代词随名词性数变化；sin 与 hans/hennes 要结合主语判断。",
        tables: [
          {
            caption: "人称代词（主格 / 宾格）",
            headers: ["意义", "主格", "宾格"],
            rows: [
              ["我", "jag", "mig"],
              ["你", "du", "dig"],
              ["他", "han", "honom"],
              ["她", "hon", "henne"],
              ["它", "den / det", "den / det"],
              ["我们", "vi", "oss"],
              ["你们", "ni", "er"],
              ["他们", "de", "dem"]
            ]
          },
          {
            caption: "物主代词",
            headers: ["意义", "en 单数", "ett 单数", "复数"],
            rows: [
              ["我的", "min", "mitt", "mina"],
              ["你的", "din", "ditt", "dina"],
              ["自己的", "sin", "sitt", "sina"],
              ["我们的", "vår", "vårt", "våra"],
              ["你们的", "er", "ert", "era"],
              ["他们的", "deras", "deras", "deras"],
              ["他的 / 她的", "hans / hennes", "hans / hennes", "hans / hennes"]
            ]
          }
        ],
        examples: [
          { sv: "Jag är trött.", zh: "我累了。", en: "I am tired." },
          { sv: "Han ser mig.", zh: "他看见我。", en: "He sees me." },
          { sv: "Hon tar sin väska.", zh: "她拿自己的包。", en: "She takes her (own) bag." }
        ]
      },
      en: {
        intro: "Swedish pronouns mainly include personal and possessive forms. Watch the difference between subject and object case.",
        sections: [
          {
            heading: "1. Personal pronouns",
            rules: [
              "Subject form as subject; object form as object",
              "jag / mig (I / me)",
              "du / dig (you)",
              "han / honom (he / him)",
              "hon / henne (she / her)",
              "den / det (it)",
              "vi / oss (we / us)",
              "ni / er (you plural)",
              "de / dem (they / them)"
            ]
          },
          {
            heading: "2. Possessive pronouns",
            rules: [
              "min / mitt / mina (my)",
              "din / ditt / dina (your)",
              "sin / sitt / sina (his/her own)",
              "vår / vårt / våra (our)",
              "er / ert / era (your plural)",
              "deras (their)",
              "hans / hennes (his / her — someone else’s)"
            ],
            note: "Note: sin/sitt/sina refer to the subject’s own possession; hans/hennes refer to someone else’s."
          }
        ],
        tip: "Study tip: master subject vs object first, then possessive agreement with gender/number; choose sin vs hans/hennes from the subject.",
        tables: [
          {
            caption: "Personal pronouns (subject / object)",
            headers: ["Meaning", "Subject", "Object"],
            rows: [
              ["I / me", "jag", "mig"],
              ["you", "du", "dig"],
              ["he / him", "han", "honom"],
              ["she / her", "hon", "henne"],
              ["it", "den / det", "den / det"],
              ["we / us", "vi", "oss"],
              ["you (pl.)", "ni", "er"],
              ["they / them", "de", "dem"]
            ]
          },
          {
            caption: "Possessive pronouns",
            headers: ["Meaning", "en sg.", "ett sg.", "Plural"],
            rows: [
              ["my", "min", "mitt", "mina"],
              ["your", "din", "ditt", "dina"],
              ["one’s own", "sin", "sitt", "sina"],
              ["our", "vår", "vårt", "våra"],
              ["your (pl.)", "er", "ert", "era"],
              ["their", "deras", "deras", "deras"],
              ["his / her", "hans / hennes", "hans / hennes", "hans / hennes"]
            ]
          }
        ],
        examples: [
          { sv: "Jag är trött.", zh: "我累了。", en: "I am tired." },
          { sv: "Han ser mig.", zh: "他看见我。", en: "He sees me." },
          { sv: "Hon tar sin väska.", zh: "她拿自己的包。", en: "She takes her (own) bag." }
        ]
      }
    },
    exercises: [
      { pre:"", post:" är trött.", lemma:"jag", gloss:{zh:"我累了。", en:"I am tired."}, answer:["Jag","jag"], explain:{zh:"主格作主语：jag。", en:"Subject form: jag."} },
      { pre:"Han ser ", post:".", lemma:"jag", gloss:{zh:"他看见我。", en:"He sees me."}, answer:["mig"], explain:{zh:"宾格作宾语：mig。", en:"Object form: mig."} },
      { pre:"Det här är ", post:" bil.", lemma:"jag", gloss:{zh:"这是我的车。", en:"This is my car."}, answer:["min"], explain:{zh:"物主代词 + en-ord：min bil。", en:"Possessive with en-word: min bil."} },
      { pre:"Det här är ", post:" hus.", lemma:"jag", gloss:{zh:"这是我的房子。", en:"This is my house."}, answer:["mitt"], explain:{zh:"物主代词 + ett-ord：mitt hus。", en:"Possessive with ett-word: mitt hus."} },
      { pre:"Hon tar ", post:" väska.", lemma:"sin", gloss:{zh:"她拿自己的包。", en:"She takes her own bag."}, answer:["sin"], explain:{zh:"sin 指主语自身的所属。", en:"sin refers to the subject’s own possession."} },
      { pre:"Det är ", post:" bok.", lemma:"han", gloss:{zh:"那是他的书（别人的）。", en:"That is his book (someone else’s)."}, answer:["hans"], explain:{zh:"hans 指别人的所属，不是主语自己的。", en:"hans marks someone else’s possession, not the subject’s own."} },
      { pre:"De hjälper ", post:".", lemma:"vi", gloss:{zh:"他们帮助我们。", en:"They help us."}, answer:["oss"], explain:{zh:"宾格：vi → oss。", en:"Object form: vi → oss."} },
      { pre:"", post:" bor i Sverige.", lemma:"de", gloss:{zh:"他们住在瑞典。", en:"They live in Sweden."}, answer:["De","de"], explain:{zh:"主格复数：de。", en:"Subject plural: de."} }
    ]
  },
  {
    id: "prepositions",
    title: { zh: "介词", en: "Prepositions" },
    summary: {
      zh: {
        intro: "瑞典语介词用量大，许多需要整体记忆。以下是最常用的几个：",
        sections: [
          {
            heading: "1. 常用介词",
            rules: [
              "i：在……里（i huset）",
              "på：在……上（på bordet）",
              "till：到；向（till skolan）",
              "från：从（från Sverige）",
              "med：和；用（med vänner）",
              "av：由；的",
              "för：为了（för dig）",
              "om：关于；如果（om vädret）",
              "efter：在……之后（efter jobbet）",
              "före：在……之前（före middagen）",
              "under：在……下面（under bordet）",
              "över：在……上方",
              "utan：没有（utan mjölk）",
              "mellan：在……之间"
            ]
          }
        ],
        tip: "学习建议：介词常与动词或名词固定搭配，建议结合例句整体记忆。",
        tables: [
          {
            caption: "常用介词对照",
            headers: ["介词", "常见含义", "例句"],
            rows: [
              ["i", "在……里", "i huset"],
              ["på", "在……上", "på bordet"],
              ["till", "到；向", "till skolan"],
              ["från", "从", "från Sverige"],
              ["med", "和；用", "med vänner"],
              ["för", "为了", "för dig"],
              ["efter", "在……之后", "efter jobbet"],
              ["före", "在……之前", "före middagen"],
              ["under", "在……下面", "under bordet"],
              ["utan", "没有", "utan mjölk"]
            ]
          }
        ],
        examples: [
          { sv: "Jag bor i huset.", zh: "我住在房子里。", en: "I live in the house." },
          { sv: "Boken ligger på bordet.", zh: "书在桌子上。", en: "The book is on the table." },
          { sv: "Hon går till skolan.", zh: "她去学校。", en: "She goes to school." }
        ]
      },
      en: {
        intro: "Swedish uses prepositions heavily, and many are best learned as fixed chunks. Here are some of the most common:",
        sections: [
          {
            heading: "1. Common prepositions",
            rules: [
              "i: in (i huset)",
              "på: on (på bordet)",
              "till: to / toward (till skolan)",
              "från: from (från Sverige)",
              "med: with / by means of (med vänner)",
              "av: by / of",
              "för: for (för dig)",
              "om: about / if (om vädret)",
              "efter: after (efter jobbet)",
              "före: before (före middagen)",
              "under: under (under bordet)",
              "över: over / above",
              "utan: without (utan mjölk)",
              "mellan: between"
            ]
          }
        ],
        tip: "Study tip: prepositions often form fixed collocations with verbs or nouns — learn them with whole example phrases.",
        tables: [
          {
            caption: "Common prepositions",
            headers: ["Prep.", "Common meaning", "Example"],
            rows: [
              ["i", "in", "i huset"],
              ["på", "on", "på bordet"],
              ["till", "to / toward", "till skolan"],
              ["från", "from", "från Sverige"],
              ["med", "with", "med vänner"],
              ["för", "for", "för dig"],
              ["efter", "after", "efter jobbet"],
              ["före", "before", "före middagen"],
              ["under", "under", "under bordet"],
              ["utan", "without", "utan mjölk"]
            ]
          }
        ],
        examples: [
          { sv: "Jag bor i huset.", zh: "我住在房子里。", en: "I live in the house." },
          { sv: "Boken ligger på bordet.", zh: "书在桌子上。", en: "The book is on the table." },
          { sv: "Hon går till skolan.", zh: "她去学校。", en: "She goes to school." }
        ]
      }
    },
    exercises: [
      { pre:"Jag bor ", post:" huset.", lemma:"i", gloss:{zh:"我住在房子里。", en:"I live in the house."}, answer:["i"], explain:{zh:"i 表示“在……里”。", en:"i means “in”."} },
      { pre:"Boken ligger ", post:" bordet.", lemma:"på", gloss:{zh:"书在桌子上。", en:"The book is on the table."}, answer:["på"], explain:{zh:"på 表示“在……上”。", en:"på means “on”."} },
      { pre:"Hon går ", post:" skolan.", lemma:"till", gloss:{zh:"她去学校。", en:"She goes to school."}, answer:["till"], explain:{zh:"till 表示“到；向”。", en:"till means “to / toward”."} },
      { pre:"Han kommer ", post:" Sverige.", lemma:"från", gloss:{zh:"他来自瑞典。", en:"He comes from Sweden."}, answer:["från"], explain:{zh:"från 表示“从”。", en:"från means “from”."} },
      { pre:"Jag pratar ", post:" vänner.", lemma:"med", gloss:{zh:"我和朋友们聊天。", en:"I talk with friends."}, answer:["med"], explain:{zh:"med 表示“和”。", en:"med means “with”."} },
      { pre:"Det är en present ", post:" dig.", lemma:"för", gloss:{zh:"这是给你的礼物。", en:"This is a present for you."}, answer:["för"], explain:{zh:"för 表示“为了；给”。", en:"för means “for”."} },
      { pre:"Vi äter ", post:" jobbet.", lemma:"efter", gloss:{zh:"我们下班后吃饭。", en:"We eat after work."}, answer:["efter"], explain:{zh:"efter 表示“在……之后”。", en:"efter means “after”."} },
      { pre:"Katten sitter ", post:" bordet.", lemma:"under", gloss:{zh:"猫坐在桌子下面。", en:"The cat is sitting under the table."}, answer:["under"], explain:{zh:"under 表示“在……下面”。", en:"under means “under”."} }
    ]
  },
  {
    id: "word-order",
    title: { zh: "语序（V2 规则）", en: "Word order (V2)" },
    summary: {
      zh: {
        intro: "瑞典语主句中，动词永远位于第二位。",
        sections: [
          {
            heading: "1. 正常语序",
            rules: [
              "主语在前时：主语 + 动词 + 其他：Jag äter frukost."
            ]
          },
          {
            heading: "2. 其他成分提前",
            rules: [
              "时间、地点等提到句首时，动词仍在第二位，主语退到动词后",
              "Idag äter jag frukost.",
              "På morgonen dricker jag kaffe."
            ],
            note: "注意：动词不能放到第三位。错误示例：Idag jag äter frukost."
          }
        ],
        tip: "学习建议：先找定式动词，确认它占第二位；句首换了成分，主语常跟在动词后面。",
        tables: [
          {
            caption: "V2 语序对照",
            headers: ["类型", "语序", "例句"],
            rows: [
              ["正常", "主语 + 动词 + …", "Jag äter frukost."],
              ["时间提前", "时间 + 动词 + 主语 + …", "Idag äter jag frukost."],
              ["地点/时段提前", "状语 + 动词 + 主语 + …", "På morgonen dricker jag kaffe."]
            ]
          }
        ],
        examples: [
          { sv: "Jag äter frukost.", zh: "我吃早餐。", en: "I eat breakfast." },
          { sv: "Idag äter jag frukost.", zh: "今天我吃早餐。", en: "Today I eat breakfast." },
          { sv: "På morgonen dricker jag kaffe.", zh: "早上我喝咖啡。", en: "In the morning I drink coffee." }
        ]
      },
      en: {
        intro: "In Swedish main clauses, the finite verb always comes in second position (V2).",
        sections: [
          {
            heading: "1. Neutral order",
            rules: [
              "With the subject first: subject + verb + rest: Jag äter frukost."
            ]
          },
          {
            heading: "2. Fronting other elements",
            rules: [
              "When time, place, etc. move to the front, the verb stays in second place and the subject follows the verb",
              "Idag äter jag frukost.",
              "På morgonen dricker jag kaffe."
            ],
            note: "Note: the verb cannot sit in third position. Wrong: Idag jag äter frukost."
          }
        ],
        tip: "Study tip: find the finite verb and keep it in slot two; if something else fronts, the subject usually follows the verb.",
        tables: [
          {
            caption: "V2 patterns",
            headers: ["Type", "Order", "Example"],
            rows: [
              ["Neutral", "subject + verb + …", "Jag äter frukost."],
              ["Time fronted", "time + verb + subject + …", "Idag äter jag frukost."],
              ["Adverbial fronted", "adverbial + verb + subject + …", "På morgonen dricker jag kaffe."]
            ]
          }
        ],
        examples: [
          { sv: "Jag äter frukost.", zh: "我吃早餐。", en: "I eat breakfast." },
          { sv: "Idag äter jag frukost.", zh: "今天我吃早餐。", en: "Today I eat breakfast." },
          { sv: "På morgonen dricker jag kaffe.", zh: "早上我喝咖啡。", en: "In the morning I drink coffee." }
        ]
      }
    },
    exercises: [
      { type:"order", gloss:{zh:"我今天吃早餐。", en:"I eat breakfast today."}, words:["frukost", "idag", "jag", "äter"], answer:"Idag äter jag frukost.", explain:{zh:"时间状语提前时，动词仍在第二位：Idag äter jag…", en:"When a fronted adverbial comes first, the verb stays in second position: Idag äter jag…"} },
      { type:"order", gloss:{zh:"早上我喝咖啡。", en:"In the morning I drink coffee."}, words:["kaffe", "på", "jag", "morgonen", "dricker"], answer:"På morgonen dricker jag kaffe.", explain:{zh:"介词短语提前后，动词仍第二位：På morgonen dricker jag…", en:"After a fronted prepositional phrase, the verb is still second: På morgonen dricker jag…"} },
      { type:"order", gloss:{zh:"他昨天来了。", en:"He came yesterday."}, words:["igår", "kom", "han"], answer:"Igår kom han.", explain:{zh:"igår 提前，动词 kom 在第二位，主语后移。", en:"With igår first, the verb kom is second and the subject follows."} },
      { type:"order", gloss:{zh:"我们在公园散步。", en:"We walk in the park."}, words:["i", "vi", "parken", "går"], answer:"I parken går vi.", explain:{zh:"地点提前时仍是 V2：I parken går vi。", en:"Fronted place still keeps V2: I parken går vi."} },
      { type:"order", gloss:{zh:"她现在很忙。", en:"She is busy now."}, words:["upptagen", "är", "nu", "hon"], answer:"Nu är hon upptagen.", explain:{zh:"nu 提前，系动词 är 在第二位。", en:"With nu first, the verb är is second."} }
    ]
  },
  {
    id: "questions",
    title: { zh: "疑问句", en: "Questions" },
    summary: {
      zh: {
        intro: "瑞典语疑问句分是非问句和特殊疑问句两类。",
        sections: [
          {
            heading: "1. 是非问句",
            rules: [
              "动词直接提前：动词 + 主语 + …",
              "Äter du frukost?",
              "Kan du simma?"
            ]
          },
          {
            heading: "2. 特殊疑问句",
            rules: [
              "疑问词 + 动词 + 主语 + …",
              "Vad äter du?",
              "Var bor du?",
              "När kommer han?"
            ]
          }
        ],
        tip: "学习建议：是非问把定式动词提到句首；特殊疑问先放疑问词，再跟动词和主语。",
        tables: [
          {
            caption: "疑问句结构",
            headers: ["类型", "结构", "例句"],
            rows: [
              ["是非问", "动词 + 主语 + …", "Äter du frukost?"],
              ["是非问（情态）", "情态动词 + 主语 + …", "Kan du simma?"],
              ["特殊疑问", "疑问词 + 动词 + 主语", "Vad äter du? / Var bor du?"]
            ]
          }
        ],
        examples: [
          { sv: "Äter du frukost?", zh: "你吃早餐吗？", en: "Do you eat breakfast?" },
          { sv: "Vad äter du?", zh: "你吃什么？", en: "What are you eating?" },
          { sv: "Var bor du?", zh: "你住在哪里？", en: "Where do you live?" }
        ]
      },
      en: {
        intro: "Swedish questions are either yes/no questions or wh-questions.",
        sections: [
          {
            heading: "1. Yes/no questions",
            rules: [
              "Put the verb first: verb + subject + …",
              "Äter du frukost?",
              "Kan du simma?"
            ]
          },
          {
            heading: "2. Wh-questions",
            rules: [
              "Question word + verb + subject + …",
              "Vad äter du?",
              "Var bor du?",
              "När kommer han?"
            ]
          }
        ],
        tip: "Study tip: for yes/no questions, front the finite verb; for wh-questions, start with the question word, then verb and subject.",
        tables: [
          {
            caption: "Question patterns",
            headers: ["Type", "Structure", "Example"],
            rows: [
              ["Yes/no", "verb + subject + …", "Äter du frukost?"],
              ["Yes/no (modal)", "modal + subject + …", "Kan du simma?"],
              ["Wh-question", "wh-word + verb + subject", "Vad äter du? / Var bor du?"]
            ]
          }
        ],
        examples: [
          { sv: "Äter du frukost?", zh: "你吃早餐吗？", en: "Do you eat breakfast?" },
          { sv: "Vad äter du?", zh: "你吃什么？", en: "What are you eating?" },
          { sv: "Var bor du?", zh: "你住在哪里？", en: "Where do you live?" }
        ]
      }
    },
    exercises: [
      { type:"order", gloss:{zh:"你吃早餐吗？", en:"Do you eat breakfast?"}, words:["du", "frukost", "äter"], answer:"Äter du frukost?", explain:{zh:"是非问句：动词直接提前。", en:"Yes/no question: the verb comes first."} },
      { type:"order", gloss:{zh:"你会游泳吗？", en:"Can you swim?"}, words:["simma", "du", "kan"], answer:"Kan du simma?", explain:{zh:"情态动词提前构成疑问。", en:"The modal verb moves to the front for the question."} },
      { type:"order", gloss:{zh:"你吃什么？", en:"What do you eat?"}, words:["du", "vad", "äter"], answer:"Vad äter du?", explain:{zh:"特殊疑问句：疑问词 + 动词 + 主语。", en:"Wh-question: question word + verb + subject."} },
      { type:"order", gloss:{zh:"你住在哪里？", en:"Where do you live?"}, words:["bor", "var", "du"], answer:"Var bor du?", explain:{zh:"Var + 动词 + 主语。", en:"Var + verb + subject."} },
      { type:"order", gloss:{zh:"他什么时候来？", en:"When is he coming?"}, words:["kommer", "när", "han"], answer:"När kommer han?", explain:{zh:"När + 动词 + 主语。", en:"När + verb + subject."} }
    ]
  },
  {
    id: "negation",
    title: { zh: "否定句", en: "Negation" },
    summary: {
      zh: {
        intro: "主句否定常用 inte，位置通常在定式动词之后。",
        sections: [
          {
            heading: "1. 主句中的 inte",
            rules: [
              "inte 通常放在动词之后",
              "Jag äter inte kött.",
              "Hon kan inte komma.",
              "Jag har inte ätit."
            ]
          }
        ],
        tip: "学习建议：在主句里先放定式动词，再放 inte；完成时则是 har inte + 仰卧。",
        tables: [
          {
            caption: "否定位置",
            headers: ["类型", "结构", "例句"],
            rows: [
              ["一般现在/过去", "主语 + 动词 + inte + …", "Jag äter inte kött."],
              ["情态动词", "主语 + 情态动词 + inte + …", "Hon kan inte komma."],
              ["完成时", "主语 + har + inte + 仰卧", "Jag har inte ätit."]
            ]
          }
        ],
        examples: [
          { sv: "Jag äter inte kött.", zh: "我不吃肉。", en: "I do not eat meat." },
          { sv: "Hon kan inte komma.", zh: "她不能来。", en: "She cannot come." },
          { sv: "Jag har inte ätit.", zh: "我还没吃。", en: "I have not eaten." }
        ]
      },
      en: {
        intro: "Main-clause negation usually uses inte, placed after the finite verb.",
        sections: [
          {
            heading: "1. inte in main clauses",
            rules: [
              "inte normally comes after the verb",
              "Jag äter inte kött.",
              "Hon kan inte komma.",
              "Jag har inte ätit."
            ]
          }
        ],
        tip: "Study tip: in main clauses put the finite verb first, then inte; in the perfect use har inte + supine.",
        tables: [
          {
            caption: "Negation placement",
            headers: ["Type", "Structure", "Example"],
            rows: [
              ["Present/past", "subject + verb + inte + …", "Jag äter inte kött."],
              ["Modal", "subject + modal + inte + …", "Hon kan inte komma."],
              ["Perfect", "subject + har + inte + supine", "Jag har inte ätit."]
            ]
          }
        ],
        examples: [
          { sv: "Jag äter inte kött.", zh: "我不吃肉。", en: "I do not eat meat." },
          { sv: "Hon kan inte komma.", zh: "她不能来。", en: "She cannot come." },
          { sv: "Jag har inte ätit.", zh: "我还没吃。", en: "I have not eaten." }
        ]
      }
    },
    exercises: [
      { type:"order", gloss:{zh:"我不吃肉。", en:"I don't eat meat."}, words:["kött", "inte", "äter", "jag"], answer:"Jag äter inte kött.", explain:{zh:"主句中 inte 放在动词之后。", en:"In a main clause, inte comes after the verb."} },
      { type:"order", gloss:{zh:"她不能来。", en:"She can't come."}, words:["komma", "inte", "kan", "hon"], answer:"Hon kan inte komma.", explain:{zh:"inte 在情态动词后、不定式前。", en:"inte follows the modal and precedes the infinitive."} },
      { type:"order", gloss:{zh:"我还没吃。", en:"I haven't eaten."}, words:["ätit", "inte", "har", "jag"], answer:"Jag har inte ätit.", explain:{zh:"完成时：har + inte + supinum。", en:"Perfect: har + inte + supine."} },
      { type:"order", gloss:{zh:"他不住在这里。", en:"He doesn't live here."}, words:["här", "inte", "bor", "han"], answer:"Han bor inte här.", explain:{zh:"inte 紧跟动词。", en:"inte comes right after the verb."} },
      { type:"order", gloss:{zh:"我们今天不工作。", en:"We don't work today."}, words:["idag", "inte", "jobbar", "vi"], answer:"Vi jobbar inte idag.", explain:{zh:"主语 + 动词 + inte + 其他成分。", en:"Subject + verb + inte + the rest."} }
    ]
  },
  {
    id: "complex-sentences",
    title: { zh: "复合句", en: "Complex sentences" },
    summary: {
      zh: {
        intro: "复合句包括并列句和从句；从句语序与主句不同，否定词位置也会变化。",
        sections: [
          {
            heading: "1. 并列句",
            rules: [
              "用 och、men、eller 连接",
              "Jag är trött, men jag ska gå."
            ]
          },
          {
            heading: "2. 从句语序",
            rules: [
              "由 att、eftersom、om、när 等引导，语序为主语 + 动词",
              "Jag vet att han kommer.",
              "Jag stannar hemma eftersom det regnar."
            ]
          },
          {
            heading: "3. 从句中的 inte",
            rules: [
              "从句里 inte 通常在动词前",
              "Hon säger att hon inte kan komma.",
              "Jag vet att han inte har ätit."
            ]
          },
          {
            heading: "4. 间接疑问与条件从句",
            rules: [
              "间接疑问用从句形式，动词不提前：Jag vet inte var han bor.",
              "Kan du säga vad du vill?",
              "条件从句前置时，主句仍遵守 V2：Om det regnar, stannar jag hemma."
            ]
          }
        ],
        tip: "学习建议：主句看 V2；从句记“主语 + 动词”，并把 inte 放到动词前面。",
        tables: [
          {
            caption: "复合句要点",
            headers: ["类型", "要点", "例句"],
            rows: [
              ["并列", "och / men / eller", "Jag är trött, men jag ska gå."],
              ["从句", "连词 + 主语 + 动词", "Jag vet att han kommer."],
              ["从句否定", "inte 在动词前", "… att hon inte kan komma."],
              ["条件前置", "从句在前，主句仍 V2", "Om det regnar, stannar jag hemma."]
            ]
          }
        ],
        examples: [
          { sv: "Jag är trött, men jag ska gå.", zh: "我累了，但我还是要走。", en: "I am tired, but I will go." },
          { sv: "Jag vet att han kommer.", zh: "我知道他会来。", en: "I know that he is coming." },
          { sv: "Om det regnar, stannar jag hemma.", zh: "如果下雨，我就待在家里。", en: "If it rains, I stay at home." }
        ]
      },
      en: {
        intro: "Complex sentences include coordination and subordination; subordinate clauses change word order and negation placement.",
        sections: [
          {
            heading: "1. Coordination",
            rules: [
              "Link with och, men, eller",
              "Jag är trött, men jag ska gå."
            ]
          },
          {
            heading: "2. Subordinate word order",
            rules: [
              "Introduced by att, eftersom, om, när, etc., with subject + verb order",
              "Jag vet att han kommer.",
              "Jag stannar hemma eftersom det regnar."
            ]
          },
          {
            heading: "3. inte in subordinate clauses",
            rules: [
              "In subordinate clauses, inte usually comes before the verb",
              "Hon säger att hon inte kan komma.",
              "Jag vet att han inte har ätit."
            ]
          },
          {
            heading: "4. Indirect questions and conditionals",
            rules: [
              "Indirect questions keep clause order (no verb fronting): Jag vet inte var han bor.",
              "Kan du säga vad du vill?",
              "If a conditional clause is fronted, the main clause still follows V2: Om det regnar, stannar jag hemma."
            ]
          }
        ],
        tip: "Study tip: keep V2 in main clauses; in subordinates use subject + verb and place inte before the verb.",
        tables: [
          {
            caption: "Complex-sentence patterns",
            headers: ["Type", "Key point", "Example"],
            rows: [
              ["Coordination", "och / men / eller", "Jag är trött, men jag ska gå."],
              ["Subordinate", "conjunction + subject + verb", "Jag vet att han kommer."],
              ["Sub. negation", "inte before the verb", "… att hon inte kan komma."],
              ["Fronted conditional", "main clause still V2", "Om det regnar, stannar jag hemma."]
            ]
          }
        ],
        examples: [
          { sv: "Jag är trött, men jag ska gå.", zh: "我累了，但我还是要走。", en: "I am tired, but I will go." },
          { sv: "Jag vet att han kommer.", zh: "我知道他会来。", en: "I know that he is coming." },
          { sv: "Om det regnar, stannar jag hemma.", zh: "如果下雨，我就待在家里。", en: "If it rains, I stay at home." }
        ]
      }
    },
    exercises: [
      { type:"order", gloss:{zh:"我知道他会来。", en:"I know that he is coming."}, words:["kommer", "att", "han", "jag", "vet"], answer:"Jag vet att han kommer.", explain:{zh:"从句 att + 主语 + 动词（动词不提前）。", en:"Subordinate clause: att + subject + verb (no verb-first)."} },
      { type:"order", gloss:{zh:"因为下雨，我待在家里。", en:"I stay home because it is raining."}, words:["regnar", "det", "eftersom", "hemma", "stannar", "jag"], answer:"Jag stannar hemma eftersom det regnar.", explain:{zh:"eftersom 引导从句，从句内是主语 + 动词。", en:"eftersom introduces a clause with subject + verb order."} },
      { type:"order", gloss:{zh:"她说她不能来。", en:"She says that she can't come."}, words:["kan", "inte", "hon", "att", "säger", "hon", "komma"], answer:"Hon säger att hon inte kan komma.", explain:{zh:"从句中 inte 在动词前：hon inte kan…", en:"In a subordinate clause, inte comes before the verb: hon inte kan…"} },
      { type:"order", gloss:{zh:"我不知道他住在哪里。", en:"I don't know where he lives."}, words:["bor", "han", "var", "inte", "vet", "jag"], answer:"Jag vet inte var han bor.", explain:{zh:"间接疑问句用从句语序，动词不提前。", en:"Indirect questions use subordinate order; the verb does not front."} },
      { type:"order", gloss:{zh:"如果下雨，我就待在家里。", en:"If it rains, I stay home."}, words:["regnar", "det", "om", "hemma", "stannar", "jag"], answer:"Om det regnar, stannar jag hemma.", explain:{zh:"条件从句前置时，主句仍遵守 V2：stannar jag…", en:"With a fronted conditional clause, the main clause still keeps V2: stannar jag…"} }
    ]
  },
  {
    id: "modals",
    title: { zh: "情态动词", en: "Modal verbs" },
    summary: {
      zh: {
        intro: "情态动词表达能力、意愿、义务、许可等，后面直接接动词不定式，不加 att。",
        sections: [
          {
            heading: "1. 常见情态动词",
            rules: [
              "kunna（kan / kunde）：能够；会。Jag kan simma.",
              "vilja（vill / ville）：想要。Jag vill ha kaffe.",
              "måste（måste）：必须。Jag måste gå nu.",
              "få（får / fick）：可以；被允许。Du får röka här.",
              "ska（ska / skulle）：将要；应该。Jag ska åka imorgon.",
              "bör（bör / borde）：应该。Du bör sova tidigare."
            ]
          },
          {
            heading: "2. 用法要点",
            rules: [
              "否定：inte 放在情态动词后。Jag kan inte komma.",
              "疑问：情态动词提前。Kan du hjälpa mig?",
              "完成时：har + kunnat / velat 等。Jag har kunnat simma sedan jag var liten."
            ],
            note: "注意：måste 的过去时和完成时较特殊，口语中常用 var tvungen att 代替。"
          }
        ],
        tip: "学习建议：记情态动词的现在/过去形式，并养成“情态 + 不定式（无 att）”的搭配习惯。",
        tables: [
          {
            caption: "情态动词形式",
            headers: ["不定式", "现在时", "过去时", "含义"],
            rows: [
              ["kunna", "kan", "kunde", "能够；会"],
              ["vilja", "vill", "ville", "想要"],
              ["måste", "måste", "måste / var tvungen", "必须"],
              ["få", "får", "fick", "可以；被允许"],
              ["ska", "ska", "skulle", "将要；应该"],
              ["bör", "bör", "borde", "应该"]
            ]
          }
        ],
        examples: [
          { sv: "Jag kan simma.", zh: "我会游泳。", en: "I can swim." },
          { sv: "Jag vill ha kaffe.", zh: "我想要咖啡。", en: "I want coffee." },
          { sv: "Kan du hjälpa mig?", zh: "你能帮我吗？", en: "Can you help me?" }
        ]
      },
      en: {
        intro: "Modal verbs express ability, desire, obligation, permission, and similar meanings. They take a bare infinitive — no att.",
        sections: [
          {
            heading: "1. Common modals",
            rules: [
              "kunna (kan / kunde): can / be able to. Jag kan simma.",
              "vilja (vill / ville): want. Jag vill ha kaffe.",
              "måste (måste): must / have to. Jag måste gå nu.",
              "få (får / fick): may / be allowed to. Du får röka här.",
              "ska (ska / skulle): will / shall / should. Jag ska åka imorgon.",
              "bör (bör / borde): ought to / should. Du bör sova tidigare."
            ]
          },
          {
            heading: "2. Usage notes",
            rules: [
              "Negation: inte after the modal. Jag kan inte komma.",
              "Questions: front the modal. Kan du hjälpa mig?",
              "Perfect: har + kunnat / velat, etc. Jag har kunnat simma sedan jag var liten."
            ],
            note: "Note: the past/perfect of måste is awkward; spoken Swedish often uses var tvungen att instead."
          }
        ],
        tip: "Study tip: learn each modal’s present/past forms and practice modal + bare infinitive (no att).",
        tables: [
          {
            caption: "Modal forms",
            headers: ["Infinitive", "Present", "Past", "Meaning"],
            rows: [
              ["kunna", "kan", "kunde", "can / be able to"],
              ["vilja", "vill", "ville", "want"],
              ["måste", "måste", "måste / var tvungen", "must / have to"],
              ["få", "får", "fick", "may / be allowed"],
              ["ska", "ska", "skulle", "will / should"],
              ["bör", "bör", "borde", "ought to"]
            ]
          }
        ],
        examples: [
          { sv: "Jag kan simma.", zh: "我会游泳。", en: "I can swim." },
          { sv: "Jag vill ha kaffe.", zh: "我想要咖啡。", en: "I want coffee." },
          { sv: "Kan du hjälpa mig?", zh: "你能帮我吗？", en: "Can you help me?" }
        ]
      }
    },
    exercises: [
      { pre:"Jag ", post:" simma.", lemma:"kunna", gloss:{zh:"我会游泳。", en:"I can swim."}, answer:["kan"], explain:{zh:"kunna → kan；后接不定式，不加 att。", en:"kunna → kan; take a bare infinitive, no att."} },
      { pre:"Jag ", post:" ha kaffe.", lemma:"vilja", gloss:{zh:"我想要咖啡。", en:"I want coffee."}, answer:["vill"], explain:{zh:"vilja → vill。", en:"vilja → vill."} },
      { pre:"Jag ", post:" gå nu.", lemma:"måste", gloss:{zh:"我现在必须走。", en:"I must go now."}, answer:["måste"], explain:{zh:"måste 表示必须。", en:"måste means must / have to."} },
      { pre:"Du ", post:" röka här.", lemma:"få", gloss:{zh:"你可以在这里抽烟。", en:"You may smoke here."}, answer:["får"], explain:{zh:"få → får 表示许可。", en:"få → får marks permission."} },
      { pre:"Jag ", post:" åka imorgon.", lemma:"ska", gloss:{zh:"我明天要出发。", en:"I will leave tomorrow."}, answer:["ska"], explain:{zh:"ska 表示将要/打算。", en:"ska marks future intention."} },
      { pre:"Jag kan ", post:" komma.", lemma:"inte", gloss:{zh:"我不能来。", en:"I cannot come."}, answer:["inte"], explain:{zh:"否定：inte 在情态动词后。", en:"Negation: inte after the modal."} },
      { pre:"", post:" du hjälpa mig?", lemma:"kunna", gloss:{zh:"你能帮我吗？", en:"Can you help me?"}, answer:["Kan","kan"], explain:{zh:"疑问：情态动词提前。", en:"Questions: front the modal."} }
    ]
  },
  {
    id: "participles",
    title: { zh: "分词", en: "Participles" },
    summary: {
      zh: {
        intro: "分词可作形容词使用，分为现在分词和过去分词。",
        sections: [
          {
            heading: "1. 现在分词（-ande / -ende）",
            rules: [
              "表示主动或正在进行",
              "läsa → läsande，bo → boende",
              "示例：en läsande flicka（一个正在读书的女孩）"
            ]
          },
          {
            heading: "2. 过去分词",
            rules: [
              "表示被动或已完成的状态",
              "作形容词时需与名词性数一致：en stängd dörr / ett stängt fönster / stängda dörrar",
              "常见不规则：skriva → skriven，göra → gjord"
            ]
          },
          {
            heading: "3. 对比",
            rules: [
              "现在分词：主动/进行 → en sjungande fågel",
              "过去分词：被动/完成 → en stängd dörr"
            ]
          }
        ],
        tip: "学习建议：现在分词看“正在做”，过去分词看“被做成/已完成”，并记得过去分词要随名词变词尾。",
        tables: [
          {
            caption: "分词形式对照",
            headers: ["类型", "构成/变化", "例句"],
            rows: [
              ["现在分词", "-ande / -ende", "en läsande flicka"],
              ["过去分词 en", "常加 -d / -en", "en stängd dörr"],
              ["过去分词 ett", "常加 -t", "ett stängt fönster"],
              ["过去分词复数", "常加 -a", "stängda dörrar"],
              ["不规则", "skriven / gjord", "en skriven text / en gjord sak"]
            ]
          }
        ],
        examples: [
          { sv: "en läsande flicka", zh: "一个正在读书的女孩", en: "a reading girl" },
          { sv: "en sjungande fågel", zh: "一只正在唱歌的鸟", en: "a singing bird" },
          { sv: "en stängd dörr", zh: "一扇关着的门", en: "a closed door" }
        ]
      },
      en: {
        intro: "Participles can be used as adjectives. Swedish has present and past participles.",
        sections: [
          {
            heading: "1. Present participle (-ande / -ende)",
            rules: [
              "Marks active or ongoing action",
              "läsa → läsande, bo → boende",
              "Example: en läsande flicka (a girl who is reading)"
            ]
          },
          {
            heading: "2. Past participle",
            rules: [
              "Marks passive or completed state",
              "As an adjective it agrees in gender/number: en stängd dörr / ett stängt fönster / stängda dörrar",
              "Common irregulars: skriva → skriven, göra → gjord"
            ]
          },
          {
            heading: "3. Contrast",
            rules: [
              "Present participle: active/ongoing → en sjungande fågel",
              "Past participle: passive/completed → en stängd dörr"
            ]
          }
        ],
        tip: "Study tip: present participle = “doing”; past participle = “done/closed”; past participles also take agreement endings.",
        tables: [
          {
            caption: "Participle patterns",
            headers: ["Type", "Form", "Example"],
            rows: [
              ["Present", "-ande / -ende", "en läsande flicka"],
              ["Past en", "often -d / -en", "en stängd dörr"],
              ["Past ett", "often -t", "ett stängt fönster"],
              ["Past plural", "often -a", "stängda dörrar"],
              ["Irregular", "skriven / gjord", "en skriven text / en gjord sak"]
            ]
          }
        ],
        examples: [
          { sv: "en läsande flicka", zh: "一个正在读书的女孩", en: "a reading girl" },
          { sv: "en sjungande fågel", zh: "一只正在唱歌的鸟", en: "a singing bird" },
          { sv: "en stängd dörr", zh: "一扇关着的门", en: "a closed door" }
        ]
      }
    },
    exercises: [
      { pre:"Det är en ", post:" flicka.", lemma:"läsa", gloss:{zh:"那是一个正在读书的女孩。", en:"That is a girl who is reading."}, answer:["läsande"], explain:{zh:"现在分词：läsa → läsande。", en:"Present participle: läsa → läsande."} },
      { pre:"Det är en ", post:" fågel.", lemma:"sjunga", gloss:{zh:"那是一只正在唱歌的鸟。", en:"That is a singing bird."}, answer:["sjungande"], explain:{zh:"现在分词表示主动/进行。", en:"Present participle marks active/ongoing action."} },
      { pre:"Det är en ", post:" dörr.", lemma:"stänga", gloss:{zh:"那是一扇关着的门。", en:"That is a closed door."}, answer:["stängd"], explain:{zh:"过去分词 + en-ord：stängd。", en:"Past participle with en-word: stängd."} },
      { pre:"Det är ett ", post:" fönster.", lemma:"stänga", gloss:{zh:"那是一扇关着的窗户。", en:"That is a closed window."}, answer:["stängt"], explain:{zh:"过去分词 + ett-ord：stängt。", en:"Past participle with ett-word: stängt."} },
      { pre:"Det står ", post:" dörrar där.", lemma:"stänga", gloss:{zh:"那里有几扇关着的门。", en:"There are closed doors there."}, answer:["stängda"], explain:{zh:"过去分词复数加 -a：stängda。", en:"Past participle plural adds -a: stängda."} },
      { pre:"Det är en ", post:" text.", lemma:"skriva", gloss:{zh:"那是一篇写好的文本。", en:"That is a written text."}, answer:["skriven"], explain:{zh:"不规则过去分词：skriva → skriven。", en:"Irregular past participle: skriva → skriven."} }
    ]
  },
  {
    id: "reflexives",
    title: { zh: "反身代词", en: "Reflexive pronouns" },
    summary: {
      zh: {
        intro: "反身代词表示动作的承受者就是主语自身，常与反身动词一起使用。",
        sections: [
          {
            heading: "1. 形式",
            rules: [
              "jag → mig",
              "du → dig",
              "han/hon → sig",
              "vi → oss",
              "ni → er",
              "de → sig"
            ]
          },
          {
            heading: "2. 常见反身动词",
            rules: [
              "tvätta sig（洗脸）",
              "klä på sig（穿衣服）",
              "sätta sig（坐下）",
              "känna sig（感觉）",
              "lära sig（学会）"
            ]
          },
          {
            heading: "3. 物主反身代词 sin / sitt / sina",
            rules: [
              "指主语自己的东西",
              "Han tar sin väska.（他拿自己的包。）",
              "Han tar hans väska.（他拿别人的包。）"
            ],
            note: "sin/sitt/sina 只能指主语，不能指别人。"
          }
        ],
        tip: "学习建议：反身动词要连同 sig 一起记；物主反身用 sin，别人的所属用 hans/hennes。",
        tables: [
          {
            caption: "反身代词",
            headers: ["主语", "反身代词", "例句"],
            rows: [
              ["jag", "mig", "Jag tvättar mig."],
              ["du", "dig", "Du klär på dig."],
              ["han / hon", "sig", "Hon sätter sig."],
              ["vi", "oss", "Vi lär oss svenska."],
              ["ni", "er", "Ni känner er bra."],
              ["de", "sig", "De tvättar sig."]
            ]
          }
        ],
        examples: [
          { sv: "Jag tvättar mig.", zh: "我洗脸。", en: "I wash myself / wash my face." },
          { sv: "Hon sätter sig.", zh: "她坐下。", en: "She sits down." },
          { sv: "Han tar sin väska.", zh: "他拿自己的包。", en: "He takes his own bag." }
        ]
      },
      en: {
        intro: "Reflexive pronouns mark that the action falls on the subject itself and often pair with reflexive verbs.",
        sections: [
          {
            heading: "1. Forms",
            rules: [
              "jag → mig",
              "du → dig",
              "han/hon → sig",
              "vi → oss",
              "ni → er",
              "de → sig"
            ]
          },
          {
            heading: "2. Common reflexive verbs",
            rules: [
              "tvätta sig (wash oneself)",
              "klä på sig (get dressed)",
              "sätta sig (sit down)",
              "känna sig (feel)",
              "lära sig (learn)"
            ]
          },
          {
            heading: "3. Possessive reflexives sin / sitt / sina",
            rules: [
              "Refer to the subject’s own possession",
              "Han tar sin väska. (He takes his own bag.)",
              "Han tar hans väska. (He takes someone else’s bag.)"
            ],
            note: "sin/sitt/sina can only refer to the subject, not to someone else."
          }
        ],
        tip: "Study tip: learn reflexive verbs together with sig; use sin for the subject’s own thing, hans/hennes for someone else’s.",
        tables: [
          {
            caption: "Reflexive pronouns",
            headers: ["Subject", "Reflexive", "Example"],
            rows: [
              ["jag", "mig", "Jag tvättar mig."],
              ["du", "dig", "Du klär på dig."],
              ["han / hon", "sig", "Hon sätter sig."],
              ["vi", "oss", "Vi lär oss svenska."],
              ["ni", "er", "Ni känner er bra."],
              ["de", "sig", "De tvättar sig."]
            ]
          }
        ],
        examples: [
          { sv: "Jag tvättar mig.", zh: "我洗脸。", en: "I wash myself / wash my face." },
          { sv: "Hon sätter sig.", zh: "她坐下。", en: "She sits down." },
          { sv: "Han tar sin väska.", zh: "他拿自己的包。", en: "He takes his own bag." }
        ]
      }
    },
    exercises: [
      { pre:"Jag tvättar ", post:".", lemma:"mig", gloss:{zh:"我洗脸。", en:"I wash myself."}, answer:["mig"], explain:{zh:"主语 jag 对应反身 mig。", en:"Subject jag takes reflexive mig."} },
      { pre:"Hon sätter ", post:".", lemma:"sig", gloss:{zh:"她坐下。", en:"She sits down."}, answer:["sig"], explain:{zh:"han/hon 的反身形式是 sig。", en:"han/hon use reflexive sig."} },
      { pre:"Vi lär ", post:" svenska.", lemma:"oss", gloss:{zh:"我们学瑞典语。", en:"We are learning Swedish."}, answer:["oss"], explain:{zh:"主语 vi 对应 oss。", en:"Subject vi takes oss."} },
      { pre:"Du klär på ", post:".", lemma:"dig", gloss:{zh:"你穿衣服。", en:"You get dressed."}, answer:["dig"], explain:{zh:"du → dig。", en:"du → dig."} },
      { pre:"Han tar ", post:" väska.", lemma:"sin", gloss:{zh:"他拿自己的包。", en:"He takes his own bag."}, answer:["sin"], explain:{zh:"sin 指主语自己的所属。", en:"sin marks the subject’s own possession."} },
      { pre:"Han tar ", post:" väska.", lemma:"han", gloss:{zh:"他拿别人的包。", en:"He takes someone else’s bag."}, answer:["hans"], explain:{zh:"hans 指别人的所属，不是主语自己的。", en:"hans marks someone else’s possession, not the subject’s own."} },
      { pre:"De känner ", post:" bra.", lemma:"sig", gloss:{zh:"他们感觉不错。", en:"They feel fine."}, answer:["sig"], explain:{zh:"de 的反身形式也是 sig。", en:"de also takes reflexive sig."} }
    ]
  },
  {
    id: "comparatives",
    title: { zh: "比较结构", en: "Comparative structures" },
    summary: {
      zh: {
        intro: "比较结构包括比较级、同级比较、最高级，以及数量比较和“越……越……”句式。",
        sections: [
          {
            heading: "1. 比较级（比……更……）",
            rules: [
              "形容词比较级 + än",
              "Den här bilen är större än den där.",
              "不规则：bra → bättre än，dålig → sämre än，liten → mindre än"
            ]
          },
          {
            heading: "2. 同级比较（和……一样）",
            rules: [
              "lika + 形容词 + som",
              "Hon är lika lång som jag.",
              "否定：inte lika … som"
            ]
          },
          {
            heading: "3. 最高级",
            rules: [
              "Det här huset är störst.",
              "Hon är den bästa studenten.",
              "较长形容词用 mer / mest：mer intressant，mest intressant"
            ]
          },
          {
            heading: "4. 数量比较与 ju … desto …",
            rules: [
              "fler / mer（更多）；flest / mest（最多）",
              "越……越……：ju … desto …",
              "Ju mer du övar, desto bättre blir du."
            ]
          }
        ],
        tip: "学习建议：比较级记 -are/-ast 与不规则；同级用 lika … som；“越……越……”固定用 ju … desto …。",
        tables: [
          {
            caption: "比较结构对照",
            headers: ["类型", "结构", "例句"],
            rows: [
              ["比较级", "比较级 + än", "större än den där"],
              ["同级", "lika + 原级 + som", "lika lång som jag"],
              ["最高级", "最高级 / den bästa …", "störst / den bästa studenten"],
              ["mer/mest", "mer / mest + 原级", "mer intressant"],
              ["越……越……", "ju … desto …", "Ju mer du övar, desto bättre blir du."]
            ]
          }
        ],
        examples: [
          { sv: "Den här bilen är större än den där.", zh: "这辆车比那辆更大。", en: "This car is bigger than that one." },
          { sv: "Hon är lika lång som jag.", zh: "她和我一样高。", en: "She is as tall as I am." },
          { sv: "Ju mer du övar, desto bättre blir du.", zh: "你练得越多，就变得越好。", en: "The more you practice, the better you become." }
        ]
      },
      en: {
        intro: "Comparative structures cover comparatives, equality, superlatives, quantity comparison, and “the … the …” patterns.",
        sections: [
          {
            heading: "1. Comparative (“more … than”)",
            rules: [
              "Adjective comparative + än",
              "Den här bilen är större än den där.",
              "Irregular: bra → bättre än, dålig → sämre än, liten → mindre än"
            ]
          },
          {
            heading: "2. Equality (“as … as”)",
            rules: [
              "lika + adjective + som",
              "Hon är lika lång som jag.",
              "Negative: inte lika … som"
            ]
          },
          {
            heading: "3. Superlative",
            rules: [
              "Det här huset är störst.",
              "Hon är den bästa studenten.",
              "Longer adjectives use mer / mest: mer intressant, mest intressant"
            ]
          },
          {
            heading: "4. Quantity and ju … desto …",
            rules: [
              "fler / mer (more); flest / mest (most)",
              "“the … the …”: ju … desto …",
              "Ju mer du övar, desto bättre blir du."
            ]
          }
        ],
        tip: "Study tip: learn -are/-ast and irregulars; use lika … som for equality; fix ju … desto … for “the more … the …”.",
        tables: [
          {
            caption: "Comparative patterns",
            headers: ["Type", "Structure", "Example"],
            rows: [
              ["Comparative", "comparative + än", "större än den där"],
              ["Equality", "lika + base + som", "lika lång som jag"],
              ["Superlative", "superlative / den bästa …", "störst / den bästa studenten"],
              ["mer/mest", "mer / mest + base", "mer intressant"],
              ["the…the…", "ju … desto …", "Ju mer du övar, desto bättre blir du."]
            ]
          }
        ],
        examples: [
          { sv: "Den här bilen är större än den där.", zh: "这辆车比那辆更大。", en: "This car is bigger than that one." },
          { sv: "Hon är lika lång som jag.", zh: "她和我一样高。", en: "She is as tall as I am." },
          { sv: "Ju mer du övar, desto bättre blir du.", zh: "你练得越多，就变得越好。", en: "The more you practice, the better you become." }
        ]
      }
    },
    exercises: [
      { pre:"Den här bilen är ", post:" än den där.", lemma:"stor", gloss:{zh:"这辆车比那辆更大。", en:"This car is bigger than that one."}, answer:["större"], explain:{zh:"不规则比较级：stor → större + än。", en:"Irregular comparative: stor → större + än."} },
      { pre:"Hon är lika ", post:" som jag.", lemma:"lång", gloss:{zh:"她和我一样高。", en:"She is as tall as I am."}, answer:["lång"], explain:{zh:"同级比较：lika + 原级 + som。", en:"Equality: lika + base form + som."} },
      { pre:"Det här huset är ", post:".", lemma:"stor", gloss:{zh:"这座房子最大。", en:"This house is the biggest."}, answer:["störst"], explain:{zh:"不规则最高级：stor → störst。", en:"Irregular superlative: stor → störst."} },
      { pre:"Min idé är ", post:" än din.", lemma:"bra", gloss:{zh:"我的主意比你的更好。", en:"My idea is better than yours."}, answer:["bättre"], explain:{zh:"不规则：bra → bättre。", en:"Irregular: bra → bättre."} },
      { pre:"Filmen är ", post:" än boken.", lemma:"intressant", gloss:{zh:"这部电影比那本书更有趣。", en:"The film is more interesting than the book."}, answer:["mer intressant"], explain:{zh:"较长形容词用 mer + 原级。", en:"Longer adjectives use mer + base form."} },
      { pre:"Ju mer du övar, ", post:" bättre blir du.", lemma:"desto", gloss:{zh:"你练得越多，就变得越好。", en:"The more you practice, the better you become."}, answer:["desto"], explain:{zh:"固定结构：ju … desto …。", en:"Fixed pattern: ju … desto …."} },
      { pre:"Hon är inte lika ", post:" som han.", lemma:"lång", gloss:{zh:"她没有他高。", en:"She is not as tall as he is."}, answer:["lång"], explain:{zh:"否定同级：inte lika … som。", en:"Negative equality: inte lika … som."} }
    ]
  }
];
function gLang(){ return state.uiLang === "en" ? "en" : "zh"; }
function gText(obj){
  if(obj == null) return "";
  if(typeof obj === "string") return obj;
  return obj[gLang()] || obj.zh || obj.en || "";
}
function normalizeAns(s){
  return String(s||"").trim().replace(/\s+/g," ").toLowerCase();
}
function answersMatch(user, accepted){
  const u = normalizeAns(user);
  const list = Array.isArray(accepted) ? accepted : [accepted];
  return list.some(a => normalizeAns(a) === u);
}
function isOrderEx(ex){
  return !!(ex && ex.type === "order" && Array.isArray(ex.words));
}
function shuffleIdx(n){
  const a = Array.from({length:n}, (_,i)=>i);
  for(let i=a.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    const tmp = a[i]; a[i] = a[j]; a[j] = tmp;
  }
  return a;
}
function normalizeOrderSentence(s){
  return String(s||"")
    .trim()
    .toLowerCase()
    .replace(/[.,!?;:，。？！]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}
function orderAnswersMatch(placedWords, answer){
  return normalizeOrderSentence(placedWords.join(" ")) === normalizeOrderSentence(answer);
}
function ensureOrderState(topic){
  if(!state.grammarOrder) state.grammarOrder = {};
  const cur = state.grammarOrder[topic.id];
  if(!cur || cur.length !== topic.exercises.length){
    state.grammarOrder[topic.id] = topic.exercises.map(ex=>({
      placed: [],
      pool: shuffleIdx(ex.words.length),
      checked: false,
      ok: false
    }));
  }
  return state.grammarOrder[topic.id];
}
function resetOrderState(topic){
  if(!state.grammarOrder) state.grammarOrder = {};
  state.grammarOrder[topic.id] = topic.exercises.map(ex=>({
    placed: [],
    pool: shuffleIdx(ex.words.length),
    checked: false,
    ok: false
  }));
}
function saveOrderTopicScore(topic){
  const st = state.grammarOrder[topic.id] || [];
  if(!st.length || !st.every(x=>x.checked)) return;
  let okc = 0;
  st.forEach(x=>{ if(x.ok) okc++; });
  const results = loadGrammarResults();
  results[topic.id] = { score: okc, total: topic.exercises.length, at: Date.now() };
  saveGrammarResults(results);
  state.grammarChecked[topic.id] = true;
}

function renderGrammar(){
  const el = document.getElementById("tab-grammar");
  if(!el) return;
  if(!state.grammarTopic) state.grammarTopic = GRAMMAR_TOPICS[0].id;
  if(!state.grammarAnswers) state.grammarAnswers = {};
  if(!state.grammarChecked) state.grammarChecked = {};
  if(!state.grammarOrder) state.grammarOrder = {};
  const results = loadGrammarResults();
  const topic = GRAMMAR_TOPICS.find(x=>x.id===state.grammarTopic) || GRAMMAR_TOPICS[0];
  const sum = topic.summary[gLang()] || topic.summary.zh;
  const orderMode = topic.exercises.every(isOrderEx);
  const checked = !!state.grammarChecked[topic.id];
  const orderState = orderMode ? ensureOrderState(topic) : null;

  const nav = GRAMMAR_TOPICS.map(tp=>{
    const done = results[tp.id] ? `<span class="g-done">✓</span>` : "";
    return `<button type="button" class="g-topic${tp.id===topic.id?" active":""}" data-gtopic="${tp.id}">${esc(gText(tp.title))}${done}</button>`;
  }).join("");

  const rulesBlock = (sum.sections && sum.sections.length)
    ? sum.sections.map(sec=>`
        <div class="g-section">
          <h4 class="g-section-h">${esc(sec.heading||"")}</h4>
          <ul class="g-rules">${(sec.rules||[]).map(r=>`<li>${esc(r)}</li>`).join("")}</ul>
          ${sec.note ? `<p class="g-section-note">${esc(sec.note)}</p>` : ""}
        </div>`).join("")
    : `<ul class="g-rules">${(sum.rules||[]).map(r=>`<li>${esc(r)}</li>`).join("")}</ul>`;
  const tipBlock = sum.tip ? `<p class="g-tip">${esc(sum.tip)}</p>` : "";

  const tables = (sum.tables||[]).map(tb=>`
    <div class="g-table-wrap"><table class="g-table">
      <caption>${esc(tb.caption||"")}</caption>
      <thead><tr>${tb.headers.map(h=>`<th>${esc(h)}</th>`).join("")}</tr></thead>
      <tbody>${tb.rows.map(r=>`<tr>${r.map(c=>`<td>${esc(c)}</td>`).join("")}</tr>`).join("")}</tbody>
    </table></div>`).join("");

  const examples = `<ul class="g-examples">${(sum.examples||[]).map(ex=>`
    <li><span class="sv">${esc(ex.sv)}</span>
      <span class="tr">${esc(gLang()==="en" ? (ex.en||ex.zh||"") : (ex.zh||ex.en||""))}</span>
    </li>`).join("")}</ul>`;

  const answers = state.grammarAnswers[topic.id] || {};
  let exHtml = "";
  if(orderMode){
    exHtml = topic.exercises.map((ex,i)=>{
      const st = orderState[i];
      const gloss = gLang()==="en" ? (ex.gloss?.en || ex.gloss?.zh || "") : (ex.gloss?.zh || ex.gloss?.en || "");
      const slots = [];
      for(let s=0;s<ex.words.length;s++){
        if(st.placed[s] != null){
          const wi = st.placed[s];
          slots.push(`<button type="button" class="g-slot filled" data-ex="${i}" data-slot="${s}" ${st.checked?"disabled":""}>${esc(ex.words[wi])}</button>`);
        } else {
          slots.push(`<span class="g-slot empty" aria-hidden="true">·</span>`);
        }
      }
      const bank = st.pool.map(wi=>
        `<button type="button" class="g-chip" data-ex="${i}" data-wi="${wi}" ${st.checked?"disabled":""}>${esc(ex.words[wi])}</button>`
      ).join("");
      let fb = "";
      let slotClass = "g-order-slots";
      if(st.checked){
        slotClass += st.ok ? " is-ok" : " is-bad";
        fb = st.ok
          ? `<div class="g-fb ok">${t("grammarCorrect")} · ${esc(ex.answer)}</div><div class="g-explain">${esc(gText(ex.explain))}</div>`
          : `<div class="g-fb bad">${t("grammarWrong")} · ${t("grammarAnswer")}${esc(ex.answer)}</div><div class="g-explain">${esc(gText(ex.explain))}</div>`;
      }
      return `<div class="g-ex g-order" data-ex="${i}">
        <div class="g-prompt">${esc(gloss)}</div>
        <div class="${slotClass}" data-slots="${i}">${slots.join("")}</div>
        <div class="g-order-bank" data-bank="${i}">${bank}</div>
        <div class="g-order-actions">
          <button type="button" class="btn btn-ghost" data-order-clear="${i}">${t("grammarClear")}</button>
        </div>
        ${fb}
      </div>`;
    }).join("");
  } else {
    exHtml = topic.exercises.map((ex,i)=>{
      const val = answers[i] != null ? answers[i] : "";
      const gloss = gLang()==="en" ? (ex.gloss?.en || ex.gloss?.zh || "") : (ex.gloss?.zh || ex.gloss?.en || "");
      let fb = "";
      if(checked){
        const ok = answersMatch(val, ex.answer);
        const show = Array.isArray(ex.answer) ? ex.answer[0] : ex.answer;
        fb = ok
          ? `<div class="g-fb ok">${t("grammarCorrect")} · ${esc(show)}</div><div class="g-explain">${esc(gText(ex.explain))}</div>`
          : `<div class="g-fb bad">${t("grammarAnswer")}${esc(show)}</div><div class="g-explain">${esc(gText(ex.explain))}</div>`;
      }
      const lemma = ex.lemma ? `<span class="g-lemma">( ${esc(ex.lemma)} )</span>` : "";
      return `<div class="g-ex" data-ex="${i}">
        <div class="g-ex-line">
          <span class="g-sv">${esc(ex.pre || "")}</span>
          <input type="text" class="g-input g-blank" data-ex="${i}" value="${esc(val)}" ${checked?"disabled":""} autocomplete="off" aria-label="${esc(ex.lemma || "answer")}" />
          ${lemma ? " " + lemma : ""}
          <span class="g-sv">${esc(ex.post || "")}</span>
        </div>
        ${gloss?`<div class="g-gloss">${esc(gloss)}</div>`:""}
        ${fb}
      </div>`;
    }).join("");
  }

  let scoreBox = "";
  if(orderMode){
    if(orderState.every(x=>x.checked)){
      const okc = orderState.filter(x=>x.ok).length;
      scoreBox = `<div class="g-score">${t("grammarScore")}: ${okc} / ${topic.exercises.length}</div>`;
    }
  } else if(checked){
    let okc = 0;
    topic.exercises.forEach((ex,i)=>{ if(answersMatch(answers[i], ex.answer)) okc++; });
    scoreBox = `<div class="g-score">${t("grammarScore")}: ${okc} / ${topic.exercises.length}</div>`;
  }

  const hint = orderMode ? t("grammarOrderHint") : t("grammarFillHint");
  let actions = "";
  if(orderMode){
    if(orderState.every(x=>x.checked)){
      actions = `<button type="button" class="btn btn-accent" id="btnGrammarRetry">${t("grammarRetry")}</button>`;
    }
  } else {
    actions = checked
      ? `<button type="button" class="btn btn-accent" id="btnGrammarRetry">${t("grammarRetry")}</button>`
      : `<button type="button" class="btn btn-primary" id="btnGrammarSubmit">${t("grammarSubmit")}</button>`;
  }

  el.innerHTML = `<div class="grammar-layout">
    <aside class="grammar-nav">
      <div class="grammar-nav-title">${t("grammarTopics")}</div>
      ${nav}
    </aside>
    <div class="grammar-main">
      <div class="card">
        <h3>${t("grammarSummary")} · ${esc(gText(topic.title))}</h3>
        <p>${esc(sum.intro||"")}</p>
        ${rulesBlock}
        ${tipBlock}
        ${tables}
        ${examples}
      </div>
      <div class="card">
        <h3>${t("grammarPractice")}</h3>
        <p class="progress">${esc(hint)}</p>
        <div id="grammarExList">${exHtml}</div>
        ${scoreBox}
        <div class="actions" style="margin-top:1rem;justify-content:flex-start">
          ${actions}
        </div>
      </div>
    </div>
  </div>`;

  el.querySelectorAll("[data-gtopic]").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      state.grammarTopic = btn.dataset.gtopic;
      renderGrammar();
    });
  });

  if(orderMode){
    el.querySelectorAll(".g-chip").forEach(btn=>{
      btn.addEventListener("click", ()=>{
        const i = +btn.dataset.ex;
        const wi = +btn.dataset.wi;
        const st = state.grammarOrder[topic.id][i];
        if(st.checked) return;
        const p = st.pool.indexOf(wi);
        if(p < 0) return;
        st.pool.splice(p, 1);
        st.placed.push(wi);
        if(st.placed.length === topic.exercises[i].words.length){
          const placedWords = st.placed.map(idx => topic.exercises[i].words[idx]);
          st.ok = orderAnswersMatch(placedWords, topic.exercises[i].answer);
          st.checked = true;
          saveOrderTopicScore(topic);
        }
        renderGrammar();
      });
    });
    el.querySelectorAll(".g-slot.filled").forEach(btn=>{
      btn.addEventListener("click", ()=>{
        const i = +btn.dataset.ex;
        const slot = +btn.dataset.slot;
        const st = state.grammarOrder[topic.id][i];
        if(st.checked) return;
        const wi = st.placed[slot];
        if(wi == null) return;
        st.placed.splice(slot, 1);
        const poolCopy = st.pool.concat([wi]);
        st.pool = shuffleIdx(poolCopy.length).map(k => poolCopy[k]);
        renderGrammar();
      });
    });
    el.querySelectorAll("[data-order-clear]").forEach(btn=>{
      btn.addEventListener("click", ()=>{
        const i = +btn.dataset.orderClear;
        const ex = topic.exercises[i];
        state.grammarOrder[topic.id][i] = {
          placed: [],
          pool: shuffleIdx(ex.words.length),
          checked: false,
          ok: false
        };
        state.grammarChecked[topic.id] = false;
        renderGrammar();
      });
    });
    el.querySelector("#btnGrammarRetry")?.addEventListener("click", ()=>{
      resetOrderState(topic);
      state.grammarChecked[topic.id] = false;
      renderGrammar();
    });
  } else {
    el.querySelectorAll(".g-input").forEach(inp=>{
      inp.addEventListener("input", ()=>{
        if(!state.grammarAnswers[topic.id]) state.grammarAnswers[topic.id] = {};
        state.grammarAnswers[topic.id][+inp.dataset.ex] = inp.value;
      });
    });
    el.querySelector("#btnGrammarSubmit")?.addEventListener("click", ()=>{
      const map = {};
      el.querySelectorAll(".g-input").forEach(inp=>{ map[+inp.dataset.ex] = inp.value; });
      state.grammarAnswers[topic.id] = map;
      let okc = 0;
      topic.exercises.forEach((ex,i)=>{ if(answersMatch(map[i], ex.answer)) okc++; });
      const results2 = loadGrammarResults();
      results2[topic.id] = { score: okc, total: topic.exercises.length, at: Date.now() };
      saveGrammarResults(results2);
      state.grammarChecked[topic.id] = true;
      renderGrammar();
    });
    el.querySelector("#btnGrammarRetry")?.addEventListener("click", ()=>{
      state.grammarChecked[topic.id] = false;
      state.grammarAnswers[topic.id] = {};
      renderGrammar();
    });
  }
}
