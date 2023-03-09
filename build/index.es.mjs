var medicalSynonyms = {
  1: ["one"],
  2: ["two"],
  3: ["three"],
  4: ["four"],
  5: ["five"],
  6: ["six"],
  7: ["seven"],
  8: ["eight"],
  9: ["nine"],
  10: ["ten"],
  11: ["eleven"],
  12: ["twelve"],
  13: ["thirteen"],
  14: ["fouteen"],
  15: ["fifteen"],
  16: ["sixteen"],
  17: ["seventeen"],
  18: ["eighteen"],
  19: ["nineteen"],
  20: ["twenty"],
  30: ["thirty"],
  40: ["fourty"],
  50: ["fifty"],
  60: ["sixty"],
  70: ["seventy"],
  80: ["eighty"],
  90: ["ninety"],
  100: ["one hundred", "hundred"],
  carity: ["clarity"],
  clarity: ["carity"],
  covid: [
    "covid-19",
    "corona virus",
    "covid 19",
    "covid dashboard",
    "covid dash",
    "covid department",
    "sars",
    "corona",
    "covid19",
    "the rona",
    "sars-cov-2",
    "coronavirus",
  ],
  "covid-19": [
    "covid",
    "corona virus",
    "covid 19",
    "covid dashboard",
    "covid dash",
    "covid department",
    "sars",
    "corona",
    "covid19",
    "the rona",
    "sars-cov-2",
    "coronavirus",
  ],
  "corona virus": [
    "covid",
    "covid-19",
    "covid 19",
    "covid dashboard",
    "covid dash",
    "covid department",
    "sars",
    "corona",
    "covid19",
    "the rona",
    "sars-cov-2",
    "coronavirus",
  ],
  "covid 19": [
    "covid",
    "covid-19",
    "corona virus",
    "covid dashboard",
    "covid dash",
    "covid department",
    "sars",
    "corona",
    "covid19",
    "the rona",
    "sars-cov-2",
    "coronavirus",
  ],
  "covid dashboard": [
    "covid",
    "covid-19",
    "corona virus",
    "covid 19",
    "covid dash",
    "covid department",
    "sars",
    "corona",
    "covid19",
    "the rona",
    "sars-cov-2",
    "coronavirus",
  ],
  "covid dash": [
    "covid",
    "covid-19",
    "corona virus",
    "covid 19",
    "covid dashboard",
    "covid department",
    "sars",
    "corona",
    "covid19",
    "the rona",
    "sars-cov-2",
    "coronavirus",
  ],
  "covid department": [
    "covid",
    "covid-19",
    "corona virus",
    "covid 19",
    "covid dashboard",
    "covid dash",
    "sars",
    "corona",
    "covid19",
    "the rona",
    "sars-cov-2",
    "coronavirus",
  ],
  sars: [
    "covid",
    "covid-19",
    "corona virus",
    "covid 19",
    "covid dashboard",
    "covid dash",
    "covid department",
    "corona",
    "covid19",
    "the rona",
    "sars-cov-2",
    "coronavirus",
  ],
  corona: [
    "covid",
    "covid-19",
    "corona virus",
    "covid 19",
    "covid dashboard",
    "covid dash",
    "covid department",
    "sars",
    "covid19",
    "the rona",
    "sars-cov-2",
    "coronavirus",
  ],
  covid19: [
    "covid",
    "covid-19",
    "corona virus",
    "covid 19",
    "covid dashboard",
    "covid dash",
    "covid department",
    "sars",
    "corona",
    "the rona",
    "sars-cov-2",
    "coronavirus",
  ],
  "the rona": [
    "covid",
    "covid-19",
    "corona virus",
    "covid 19",
    "covid dashboard",
    "covid dash",
    "covid department",
    "sars",
    "corona",
    "covid19",
    "sars-cov-2",
    "coronavirus",
  ],
  "sars-cov-2": [
    "covid",
    "covid-19",
    "corona virus",
    "covid 19",
    "covid dashboard",
    "covid dash",
    "covid department",
    "sars",
    "corona",
    "covid19",
    "the rona",
    "coronavirus",
  ],
  coronavirus: [
    "covid",
    "covid-19",
    "corona virus",
    "covid 19",
    "covid dashboard",
    "covid dash",
    "covid department",
    "sars",
    "corona",
    "covid19",
    "the rona",
    "sars-cov-2",
  ],
  vaccination: ["vax", "vaxx", "vaccinated", "booster", "boosted", "jabbed"],
  vax: ["vaccination", "vaxx", "vaccinated", "booster", "boosted", "jabbed"],
  vaxx: ["vaccination", "vax", "vaccinated", "booster", "boosted", "jabbed"],
  vaccinated: ["vaccination", "vax", "vaxx", "booster", "boosted", "jabbed"],
  booster: ["vaccination", "vax", "vaxx", "vaccinated", "boosted", "jabbed"],
  boosted: ["vaccination", "vax", "vaxx", "vaccinated", "booster", "jabbed"],
  jabbed: ["vaccination", "vax", "vaxx", "vaccinated", "booster", "boosted"],
  chemo: ["chemotherapty"],
  chemotherapty: ["chemo"],
  ip: ["inpatient"],
  inpatient: ["ip"],
  "w/": ["with"],
  with: ["w/"],
  "w/o": ["without"],
  without: ["w/o"],
  cbo: ["corporate billing office"],
  "corporate billing office": ["cbo"],
  ccc: ["coal city campus"],
  "coal city campus": ["ccc"],
  ed: ["er", "emergency department", "emergency room", "emergency"],
  er: ["ed", "emergency department", "emergency room", "emergency"],
  "emergency department": ["ed", "er", "emergency room", "emergency"],
  "emergency room": ["ed", "er", "emergency department", "emergency"],
  emergency: ["ed", "er", "emergency department", "emergency room"],
  "slicer dicer": ["slicerdicer", "slicer", "dicer"],
  slicerdicer: ["slicer dicer", "slicer", "dicer"],
  slicer: ["slicer dicer", "slicerdicer", "dicer"],
  dicer: ["slicer dicer", "slicerdicer", "slicer"],
  np: ["nurse practitioner"],
  "nurse practitioner": ["np"],
  slc: ["ltc", "sa40", "long term care"],
  ltc: ["slc", "sa40", "long term care"],
  sa40: ["slc", "ltc", "long term care"],
  "long term care": ["slc", "ltc", "sa40"],
  rmc: ["riverside medical center"],
  "riverside medical center": ["rmc"],
  "Bruce Wayne": ["Batman", "Daniel Ryan", "Blerg"],
  Batman: ["Bruce Wayne", "Daniel Ryan", "Blerg"],
  "Daniel Ryan": ["Bruce Wayne", "Batman", "Blerg"],
  Blerg: ["Bruce Wayne", "Batman", "Daniel Ryan"],
  physician: ["provider"],
  provider: ["physician"],
  adt: ["admission discharge transfer"],
  "admission discharge transfer": ["adt"],
  hb: ["hospital billing"],
  "hospital billing": ["hb"],
  tran: ["trans", "transfer", "transfers"],
  trans: ["tran", "transfer", "transfers"],
  transfer: ["tran", "trans", "transfers"],
  transfers: ["tran", "trans", "transfer"],
  los: ["length of stay"],
  "length of stay": ["los"],
  hh: ["home health", "rmc hh", "homehealth"],
  "home health": ["hh", "rmc hh", "homehealth"],
  "rmc hh": ["hh", "home health", "homehealth"],
  homehealth: ["hh", "home health", "rmc hh"],
  lt: ["longterm", "long term"],
  longterm: ["lt", "long term"],
  "long term": ["lt", "longterm"],
  bcma: ["barcoded medication administration"],
  "barcoded medication administration": ["bcma"],
  rx: ["prescription", "medication", "drugs", "perscription"],
  prescription: ["rx", "medication", "drugs", "perscription"],
  medication: ["rx", "prescription", "drugs", "perscription"],
  drugs: ["rx", "prescription", "medication", "perscription"],
  perscription: ["rx", "prescription", "medication", "drugs"],
  rvu: ["relative value unit"],
  "relative value unit": ["rvu"],
  obs: ["observation", "obv", "obervaton", "observatin"],
  observation: ["obs", "obv", "obervaton", "observatin"],
  obv: ["obs", "observation", "obervaton", "observatin"],
  obervaton: ["obs", "observation", "obv", "observatin"],
  observatin: ["obs", "observation", "obv", "obervaton"],
  dept: ["department"],
  department: ["dept"],
  mrsa: ["methicillin resistant staphyloccocus aureus"],
  "methicillin resistant staphyloccocus aureus": ["mrsa"],
  mh: ["mental health", "bh", "behavioral health", "psych"],
  "mental health": ["mh", "bh", "behavioral health", "psych"],
  bh: ["mh", "mental health", "behavioral health", "psych"],
  "behavioral health": ["mh", "mental health", "bh", "psych"],
  psych: ["mh", "mental health", "bh", "behavioral health"],
  raf: ["hcc", "hierarchical condition category"],
  hcc: ["raf", "hierarchical condition category"],
  "hierarchical condition category": ["raf", "hcc"],
  pacu: ["postanesthesia care unit"],
  "postanesthesia care unit": ["pacu"],
  rac: ["recovery audit contractor"],
  "recovery audit contractor": ["rac"],
  ascus: ["atypical squamous cells of unknown significance"],
  "atypical squamous cells of unknown significance": ["ascus"],
  losi: ["length of stay index"],
  "length of stay index": ["losi"],
  hf: ["heart failure"],
  "heart failure": ["hf"],
  mdro: ["multi drug resistant organisms"],
  "multi drug resistant organisms": ["mdro"],
  mssa: ["methicillin susceptible staphylococcus aureus"],
  "methicillin susceptible staphylococcus aureus": ["mssa"],
  ect: ["electroconvulsive therapy"],
  "electroconvulsive therapy": ["ect"],
  mg: ["milligram"],
  milligram: ["mg"],
  nhsn: ["national healthcare safety network"],
  "national healthcare safety network": ["nhsn"],
  qi: ["quality improvement", "quality initiative", "quality indicator"],
  "quality improvement": ["qi", "quality initiative", "quality indicator"],
  "quality initiative": ["qi", "quality improvement", "quality indicator"],
  "quality indicator": ["qi", "quality improvement", "quality initiative"],
  mst: ["malnutrition screening tool"],
  "malnutrition screening tool": ["mst"],
  ccl: ["cath lab"],
  "cath lab": ["ccl"],
  ar: ["accounts receivable", "accounts recievable", "atb"],
  "accounts receivable": ["ar", "accounts recievable", "atb"],
  "accounts recievable": ["ar", "accounts receivable", "atb"],
  atb: ["ar", "accounts receivable", "accounts recievable"],
  iru: ["interventional radiology unit"],
  "interventional radiology unit": ["iru"],
  gme: [
    "graduate medical education",
    "student doctors",
    "medical students",
    "resident",
  ],
  "graduate medical education": [
    "gme",
    "student doctors",
    "medical students",
    "resident",
  ],
  "student doctors": [
    "gme",
    "graduate medical education",
    "medical students",
    "resident",
  ],
  "medical students": [
    "gme",
    "graduate medical education",
    "student doctors",
    "resident",
  ],
  resident: [
    "gme",
    "graduate medical education",
    "student doctors",
    "medical students",
  ],
  aim: ["hospitalist"],
  hospitalist: ["aim"],
  cac: ["childrens asthma care"],
  "childrens asthma care": ["cac"],
  cms: ["medicare", "medicaid", "center for medicare and medicaid services"],
  medicare: ["cms", "medicaid", "center for medicare and medicaid services"],
  medicaid: ["cms", "medicare", "center for medicare and medicaid services"],
  "center for medicare and medicaid services": ["cms", "medicare", "medicaid"],
  vte: ["venous thromboembolism"],
  "venous thromboembolism": ["vte"],
  sbo: ["single billing office"],
  "single billing office": ["sbo"],
  cv: ["cardiovascular"],
  cardiovascular: ["cv"],
  ris: ["radiology information system"],
  "radiology information system": ["ris"],
  evs: ["environmental services"],
  "environmental services": ["evs"],
  pn: ["pneumonia"],
  pneumonia: ["pn"],
  ami: ["heart attack", "cardiac arrest", "infarction"],
  "heart attack": ["ami", "cardiac arrest", "infarction"],
  "cardiac arrest": ["ami", "heart attack", "infarction"],
  infarction: ["ami", "heart attack", "cardiac arrest"],
  pb: ["professional billing"],
  "professional billing": ["pb"],
  pcp: ["primary care provider"],
  "primary care provider": ["pcp"],
  hcpc: ["hcpcs", "cpt", "current procedural terminology"],
  hcpcs: ["hcpc", "cpt", "current procedural terminology"],
  cpt: ["hcpc", "hcpcs", "current procedural terminology"],
  "current procedural terminology": ["hcpc", "hcpcs", "cpt"],
  payer: ["payor"],
  payor: ["payer"],
  canceled: ["cancelled"],
  cancelled: ["canceled"],
  diagnosis: ["dx", "diag"],
  dx: ["diagnosis", "diag"],
  diag: ["diagnosis", "dx"],
  procedure: ["px", "proc"],
  px: ["procedure", "proc"],
  proc: ["procedure", "px"],
  hx: ["history"],
  history: ["hx"],
  har: ["hospital account"],
  "hospital account": ["har"],
  mrn: ["medical record", "mrun"],
  "medical record": ["mrn", "mrun"],
  mrun: ["mrn", "medical record"],
  narcan: ["naloxone"],
  naloxone: ["narcan"],
  patos: ["palos", "pre-service"],
  palos: ["patos", "pre-service"],
  "pre-service": ["patos", "palos"],
  authorization: ["pre-auth", "no-auth", "auth", "financial clearance"],
  "pre-auth": ["authorization", "no-auth", "auth", "financial clearance"],
  "no-auth": ["authorization", "pre-auth", "auth", "financial clearance"],
  auth: ["authorization", "pre-auth", "no-auth", "financial clearance"],
  "financial clearance": ["authorization", "pre-auth", "no-auth", "auth"],
  transaction: ["treatment"],
  treatment: ["transaction"],
  BPA: [
    "Best Practice Advisory",
    "Best Practice Advisories",
    "BestPractice Advisory",
    "BestPractice Advisories",
  ],
  " Best Practice Advisory": [
    "BPA",
    "Best Practice Advisories",
    "BestPractice Advisory",
    "BestPractice Advisories",
  ],
  " Best Practice Advisories": [
    "BPA",
    "Best Practice Advisory",
    "BestPractice Advisory",
    "BestPractice Advisories",
  ],
  "BestPractice Advisory": [
    "BPA",
    "Best Practice Advisory",
    "Best Practice Advisories",
    "BestPractice Advisories",
  ],
  "BestPractice Advisories": [
    "BPA",
    "Best Practice Advisory",
    "Best Practice Advisories",
    "BestPractice Advisory",
  ],
  one: ["1"],
  two: ["2"],
  three: ["3"],
  four: ["4"],
  five: ["5"],
  six: ["6"],
  seven: ["7"],
  eight: ["8"],
  nine: ["9"],
  ten: ["10"],
  eleven: ["11"],
  twelve: ["12"],
  thirteen: ["13"],
  fouteen: ["14"],
  fifteen: ["15"],
  sixteen: ["16"],
  seventeen: ["17"],
  eighteen: ["18"],
  nineteen: ["19"],
  twenty: ["20"],
  thirty: ["30"],
  fourty: ["40"],
  fifty: ["50"],
  sixty: ["60"],
  seventy: ["70"],
  eighty: ["80"],
  ninety: ["90"],
  "one hundred": ["100", "hundred"],
  hundred: ["100", "one hundred"],
};

export { medicalSynonyms };
//# sourceMappingURL=index.es.mjs.map
