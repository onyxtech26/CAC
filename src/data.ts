// Central content database for CAC — all copy, figures and records are verbatim per brief.

export const CONTACT = {
  company: "Conglomerate Appraisal Consultancy",
  short: "CAC",
  sub: "PROPERTY FORENSIC CONSULTATION",
  address: "85-01, Jalan Wira 2, Taman Tan Sri Yaacob, 81300 Skudai, Johor, Malaysia",
  email: "conglomerateac@gmail.com",
  phoneDisplay: "+6018-377 7716",
  phoneRaw: "60183777716",
  site: "www.cac.com.my",
  consultant: "Mohaan",
  consultantRole: "Senior Forensic Consultant",
  techPartner: "Onyxx Tech",
  techPartnerUrl: "https://onyxx-tech.vercel.app/",
  waText:
    "Hello%20CAC%2C%20I%20would%20like%20to%20schedule%20a%20forensic%20consultation%20regarding%20property%20matters%20%2F%20legal%20%2F%20court%20matters%20%2F%20LA%2F%20PROBET%2F%20JKPTG",
};

export const waLink = (extra?: string) =>
  `https://wa.me/${CONTACT.phoneRaw}${extra ? `?text=${encodeURIComponent(extra)}` : `?text=${CONTACT.waText}`}`;

// Consultant roster shown on /contact. `blurb` renders under the name.
// Leave `phoneDisplay`/`phoneRaw`/`email` off a member to fall back to the firm's
// main channels in CONTACT above.
export type TeamMember = {
  name: string;
  role: string;
  img: string;
  blurb: string;
  phoneDisplay?: string;
  phoneRaw?: string;
  email?: string;
};

export const TEAM: TeamMember[] = [
  {
    name: "Mohaan",
    role: "Senior Forensic Consultant",
    img: "/assets/mohaan-profile.png",
    blurb:
      "Lead investigator across property forensic, estate recovery and fraud-exposure engagements. Personally briefs every new case and remains the point of contact through to resolution.",
  },
  {
    // TODO: replace name + role with the real details.
    name: "Consultant Two",
    role: "Forensic Consultant",
    img: "/assets/team-02.png",
    blurb:
      "Handles registry chain reconstruction and title tracing — from colonial grant books through to present-day land-office folios.",
  },
  {
    // TODO: replace name + role with the real details.
    name: "Consultant Three",
    role: "Estate & Probate Consultant",
    img: "/assets/team-03.png",
    blurb:
      "Leads family estate investigations, beneficiary tracing and probate coordination, working alongside counsel through to distribution.",
  },
];

export const TAGLINES = [
  "Uncover The Truth. Protect Your Legacy.",
  "Turning Intelligence Into Evidence",
  "Uncovering Truth. Protecting Legacies. Creating Value.",
  "Discovering the Past • Protecting the Present • Securing the Future",
];

export const HERO_STATS = [
  { label: "Years Established", value: 17, suffix: "+", note: "Since 2009", glyph: "clock" },
  { label: "Cases Completed", value: 227, suffix: "+", note: "Closed & delivered", glyph: "doc-seal" },
];

export const TRACK_RECORD = [
  { code: "LA", label: "Letter of Administration", count: 27, suffix: "+",
    desc: "Letters of Administration secured and executed for estates without a will." },
  { code: "PRB", label: "Probate", count: 30, suffix: "+",
    desc: "Grants of Probate obtained and carried through the High Court." },
  { code: "SUB", label: "Subsale (House & Land)", count: 50, suffix: "+",
    desc: "Subsale house and land transactions resolved end-to-end." },
  { code: "ABN", label: "Abandoned Properties", count: 40, suffix: "+",
    desc: "Abandoned and forgotten properties traced, verified, and revived." },
  { code: "FOR", label: "Forensic Investigations", count: 50, suffix: "+",
    desc: "Deep-dive title, ownership, and fraud investigations closed with findings." },
  { code: "STC", label: "State / Bumi Consent", count: 35, suffix: "+",
    desc: "State-authority consent applications approved and registered." },
];

export const PRINCIPLES_HOME = [
  { k: "Documentary Truth", d: "Every conclusion anchored to registry records, colonial grants and court archives — never assumption." },
  { k: "Legacy Protection", d: "We safeguard family estates, heir entitlements and pioneer ownership against erosion and fraud." },
  { k: "Legal Utility", d: "Findings compiled as court-ready evidence portfolios that travel cleanly into litigation and arbitration." },
];

export const WHY_PRINCIPLES = [
  { k: "Evidence First", d: "We lead with documents, not narratives. Each claim is traceable to a registry folio, a probate file or a surveyor cadastral." },
  { k: "Independent & Objective", d: "CAC acts for the truth of the record. No vested interest in the outcome — only in the integrity of the evidence." },
  { k: "Confidential & Professional", d: "Estate matters are intimate. Engagements run under strict confidentiality with disciplined, counsel-grade handling." },
  { k: "End-to-End Support", d: "From the first briefing to the final land-office registration, we remain on the file until the matter is closed." },
];

export const VISION =
  "To be Malaysia's most trusted property intelligence authority — the firm courts, counsel and families call first when ownership must be proven, not merely asserted.";

export const MISSION =
  "To convert historical land records, colonial grants, cadastral maps and probate archives into court-ready documentary evidence — restoring rightful ownership, recovering lost assets and protecting family legacies with forensic precision and uncompromising confidentiality.";

export type Service = {
  id: string;
  no: string;
  title: string;
  short: string;
  scope: string;
  deliverables: string[];
  glyph: string;
  img: string;
  accent: string;
};

export const SERVICES: Service[] = [
  {
    id: "property-forensic", no: "01", title: "Property Forensic Investigation",
    glyph: "magnifier-house", img: "/assets/service-ill-forensic.jpg", accent: "CORE DISCIPLINE",
    short: "Systematic analysis of land titles, deeds, and historical records to establish true, pioneer ownership and trace succession lines.",
    scope: "We conduct independent property forensic audits by researching historical registry books, colonial grants, surveyor cadastrals, and local archives. Our findings map succession chains, clarify heir validity, and compile evidence packages designed to stand up in judicial and state arbitration processes.",
    deliverables: [
      "Colonial land grant & pioneer title tracing",
      "Registry chain-of-ownership reconstruction",
      "Deed authenticity & conveyance audits",
      "High-court archive & probate record searches",
      "Compilation of verified forensic evidence portfolios",
    ],
  },
  {
    id: "family-estate", no: "02", title: "Family Estate Investigation",
    glyph: "family", img: "/assets/service-family-estate.jpg", accent: "ESTATE RECOVERY",
    short: "Resolving complex estate disputes among heirs by tracing hidden assets, verifying beneficiaries, and clarifying distribution paths.",
    scope: "When family estates are contested or lack clear administration, our agents step in. We research family genealogies, identify all lawful beneficiaries (including missing or unnotified heirs), uncover undisclosed or hidden inherited assets, and provide administration support for probate filings.",
    deliverables: [
      "Beneficiary tracing & lawful heir identification",
      "Hidden estate asset discovery & mapping",
      "Genealogy & family tree lineage verification",
      "Intestate distribution path clarification",
      "Probate court document compilation",
    ],
  },
  {
    id: "property-intelligence", no: "03", title: "Property Intelligence Centre",
    glyph: "map-pin-grid", img: "/assets/icon-forensic.jpg", accent: "GIS · SATELLITE",
    short: "Advanced property due diligence utilizing GIS maps, satellite imagery, survey plans, and historical ownership chronologies.",
    scope: "Our intelligence services compile geospatial data, registry entries, and historical zoning maps. We construct a comprehensive dashboard of a property's physical and legal boundary history, protecting buyers and developers from costly encroachment or land classification errors.",
    deliverables: [
      "Geospatial boundary audits & GIS surveying analysis",
      "Historical zoning & land use chronology mapping",
      "Encroachment & easement risk assessment",
      "Zoning restriction & developmental constraint review",
      "High-resolution satellite ownership mapping",
    ],
  },
  {
    id: "missing-property", no: "04", title: "Missing Property Recovery",
    glyph: "compass-pin", img: "/assets/case-tower-B50q7XNj.jpg", accent: "LOST PARCELS",
    short: "Locating properties lost due to township developments, compulsory government acquisition, or historical zoning changes.",
    scope: "Valuable ancestral land often gets lost in government acquisitions, highway constructions, or township consolidation projects. We trace lost coordinates, audit replacement land allocations, and determine if outstanding compensation funds remain unclaimed by the rightful heirs.",
    deliverables: [
      "Historical coordinates & boundary recovery",
      "Compulsory government acquisition audit",
      "Highway, rail, & infrastructure project mapping",
      "Unclaimed compensation fund tracing",
      "Zoning layout & master plan reconciliation",
    ],
  },
  {
    id: "asset-tracing", no: "05", title: "Asset Tracing & Recovery",
    glyph: "coins-stack", img: "/assets/illustration-estate.jpg", accent: "PORTFOLIO MAPPING",
    short: "Identifying and mapping residential, commercial, agricultural, corporate, and vehicle assets held under small or large estates.",
    scope: "We trace assets from single residential homes to sprawling agricultural plantations, corporate shareholdings, bank funds, and international holdings. Our investigations map out current assets, identify unauthorized transfers, and verify hidden ownership structures.",
    deliverables: [
      "Residential & commercial portfolio mapping",
      "Agricultural & plantation asset tracking",
      "Corporate shareholdings & trust structure investigation",
      "Unauthorized asset transfer audit",
      "Vehicle, equipment, & luxury asset location",
    ],
  },
  {
    id: "title-investigation", no: "06", title: "Title & Document Investigation",
    glyph: "doc-seal", img: "/assets/icon-legal.jpg", accent: "RECORD RETRIEVAL",
    short: "Locating and verifying missing land titles, Deeds of Gift, wills, court orders, and land registry records.",
    scope: "When original documents are lost, misplaced, or withheld, we retrieve certified copies, explore registry files, search court probate records, and locate legal agreements (SPAs, Wills, Deeds of Gift) to establish formal chains of custody and legal security.",
    deliverables: [
      "Registry file searches for lost or damaged titles",
      "Deed of Gift & Will document validation",
      "Probate files & High Court order retrieval",
      "Certified copy procurement from land offices",
      "Historical transaction ledger verification",
    ],
  },
  {
    id: "fraud-investigation", no: "07", title: "Fraud & Dispute Investigation",
    glyph: "shield-alert", img: "/assets/illustration-forensic.jpg", accent: "FORGERY DETECTION",
    short: "Exposing forged signatures, fake deeds, invalid powers of attorney, and fraudulent claims to family properties.",
    scope: "We conduct forensic analyses of questionable property transfers. Our team investigates fraudulent signatures, unauthorized powers of attorney, fake registry entries, and illegal sales, delivering an independent factual report for legal action.",
    deliverables: [
      "Signature & document forgery detection",
      "Power of Attorney validity investigation",
      "Registry transaction audit for irregularities",
      "Unauthorised sale & asset concealment analysis",
      "Fact-finding report compilation for legal counsel",
    ],
  },
  {
    id: "legal-coordination", no: "08", title: "Legal & Authority Coordination",
    glyph: "scales", img: "/assets/case-gavel-bRvLoHQ5.jpg", accent: "COUNSEL LIAISON",
    short: "Preparing evidence portfolios, coordinating with land offices, and referring clients to expert probate and land attorneys.",
    scope: "We translate our investigation findings into legal evidence files. We refer clients to elite, experienced attorneys specializing in land law, probate, and inheritance, coordinating with government agencies and survey offices through to case resolution.",
    deliverables: [
      "Evidence portfolio compilation for court cases",
      "Referrals to specialist property & probate attorneys",
      "Liaising with land offices & survey departments",
      "Strategic advisory on case evidence structure",
      "Post-investigation case progress tracking",
    ],
  },
  {
    id: "property-sale", no: "09", title: "Property Sale Coordination",
    glyph: "handshake", img: "/assets/icon-estate.jpg", accent: "TRANSACTION DESK",
    short: "Facilitating valuation, marketing, and subsale transaction coordination for recovered or inherited real estate assets.",
    scope: "Once property ownership disputes are resolved, we help clients unlock the financial value of their assets. Working alongside licensed real estate professionals, we assist with property valuations, marketing campaigns, and subsale transaction compliance.",
    deliverables: [
      "Property valuation & market appraisal support",
      "Marketing campaigns targeting qualified networks",
      "Transaction compliance & documentation check",
      "Liaison with buyers, brokers, and bank valuers",
      "Negotiation advisory for maximum asset value",
    ],
  },
  {
    id: "buyer-matching", no: "10", title: "Investor & Buyer Matching",
    glyph: "network", img: "/assets/case-mansion-DTsvvO41.jpg", accent: "PRIVATE NETWORK",
    short: "Connecting property owners with a vetted network of real estate investors, cash buyers, and developers.",
    scope: "For clients seeking quick liquidations or partnership deals on newly resolved tracts of land and commercial blocks, we coordinate directly with our private investor network, matchmaking sellers with qualified cash buyers and developers.",
    deliverables: [
      "Matchmaking with vetted property developers",
      "Direct coordination with private cash buyers",
      "Structuring Joint Venture (JV) property proposals",
      "Facilitating off-market transaction bids",
      "Targeted pitches to real estate investment syndicates",
    ],
  },
  {
    id: "investment-consultancy", no: "11", title: "Investment Consultancy",
    glyph: "chart-up", img: "/assets/hero-forensic-CZAanpR-.jpg", accent: "DUE DILIGENCE",
    short: "Advising on property due diligence, acquisition feasibility, development potential, and risk mitigation strategies.",
    scope: "We guide real estate buyers, developers, and funds through acquisition due diligence. Our consultancy reviews ownership histories, restrictive covenants, zoning limits, and development risks to ensure every investment is sound and legally protected.",
    deliverables: [
      "Acquisition due diligence & title risk auditing",
      "Development potential & zoning compliance check",
      "Joint Venture feasibility & structure analysis",
      "Property risk profiles & liability assessments",
      "Long-term asset appreciation and exit planning",
    ],
  },
  {
    id: "renovation-consultancy", no: "12", title: "Renovation & ROI Consultancy",
    glyph: "building-uplift", img: "/assets/cac-building-logo.jpg", accent: "VALUE UPLIFT",
    short: "Evaluating property upgrades, coordinating contractors, and structuring renovations to maximize resale market value.",
    scope: "We help clients maximize the market value of recovered or inherited properties before sale. We coordinate structural and cosmetic upgrades, establish contractor budgets, and conduct ROI analyses to ensure renovations yield optimal capital gains.",
    deliverables: [
      "Before-and-after value uplift assessments",
      "Detailed renovation scope & contractor budgeting",
      "Coordination of exterior and interior upgrades",
      "Project milestone monitoring and quality control",
      "Market positioning & rental yield maximization analysis",
    ],
  },
];

export type ProcessStep = {
  no: string; title: string; sub: string; details: string; outputs: string[]; glyph: string; img: string;
};

export const PROCESS: ProcessStep[] = [
  { no: "01", title: "Consultation", sub: "Case Briefing", glyph: "chat-user", img: "/assets/service-family-estate.jpg",
    details: "We begin by understanding your concerns, reviewing available family records, and establishing the exact scope of property, assets, and individuals under investigation.",
    outputs: [
      "Understanding of case history & objectives",
      "Preliminary timeline and scope definition",
      "Confidentiality & engagement agreements executed",
    ] },
  { no: "02", title: "Evidence Collection", sub: "Document Gathering", glyph: "clipboard-check", img: "/assets/icon-legal.jpg",
    details: "We gather all available property deeds, historical maps, wills, probate files, bank records, and land registry records from public and private archives.",
    outputs: [
      "Land office register searches & title extraction",
      "High Court probate & administration registry records",
      "Verification of historical surveyor maps and boundaries",
    ] },
  { no: "03", title: "Historical Research", sub: "Chain Reconstruction", glyph: "magnifier-fingerprint", img: "/assets/service-ill-forensic.jpg",
    details: "We reconstruct the complete ownership chronology, tracing back to pioneer owners and checking every transition (sales, inheritance, gifts) for validity.",
    outputs: [
      "Pioneer ownership records and original grants verified",
      "Complete chronology of ownership transfers compiled",
      "Reconstruction of subdivision or acquisition history",
    ] },
  { no: "04", title: "Intelligence Analysis", sub: "Forensic Review", glyph: "chart-doc", img: "/assets/illustration-forensic.jpg",
    details: "We analyze all collected data, identifying forged documents, unauthorized land sales, hidden beneficiaries, or irregularities in estate distribution.",
    outputs: [
      "Exposing signatures, wills, or deeds with indicators of forgery",
      "Auditing land transfer timelines for inconsistency",
      "Tracing missing or hidden assets within the estate",
    ] },
  { no: "05", title: "Forensic Reporting", sub: "Evidence Synthesis", glyph: "doc-pen", img: "/assets/service-forensic-title.jpg",
    details: "We prepare an independent Property Forensic Investigation Report with clear findings, verified chronologies, and evidence packages structured for legal use.",
    outputs: [
      "Professional Forensic Investigation Report delivered",
      "Evidence binder with certified copies of deeds & titles",
      "Formal declaration and recommendations for resolution",
    ] },
  { no: "06", title: "Legal Coordination", sub: "Expert Referrals", glyph: "scales-user", img: "/assets/case-gavel-bRvLoHQ5.jpg",
    details: "We coordinate with probate or property attorneys and prepare evidence files, ensuring our findings are effectively leveraged for legal success.",
    outputs: [
      "Referrals to elite, specialized estate and land lawyers",
      "Preparation of legal evidence files for counsel use",
      "Liaison with land offices and government surveyor teams",
    ] },
  { no: "07", title: "Resolution", sub: "Estate Recovery", glyph: "gavel", img: "/assets/illustration-estate.jpg",
    details: "We support the execution of distribution orders, registration of recovered assets, and resolution of beneficiary claims under legal guidance.",
    outputs: [
      "Registration of correct ownership titles at land office",
      "Settle inheritance distribution disputes among heirs",
      "Reclaim missing assets or unclaimed compensation funds",
    ] },
  { no: "08", title: "Property Sale", sub: "Asset Monetization", glyph: "key-house", img: "/assets/case-mansion-DTsvvO41.jpg",
    details: "Once assets are legally recovered, we assist with property valuations, ROI renovation consultancy, buyer-matching, and sale coordination.",
    outputs: [
      "Detailed property condition & appraisal valuation support",
      "Marketing targeting our private investor/developer networks",
      "Sale completion coordinating with licensed property professionals",
    ] },
];

export const CASE_STUDIES = [
  { tag: "Inheritance Dispute", title: "Inheritance Dispute Resolved",
    body: "A complex family inheritance dispute resolved through comprehensive forensic investigation.", glyph: "scales", tone: "from-[#1b3a63] to-[#0b192e]",
    img: "/assets/case-gavel-bRvLoHQ5.jpg", meta: "Johor Bahru · 7 heirs · 14 months" },
  { tag: "Missing Land", title: "Missing Land Located",
    body: "We located a missing land which disappeared due to township development.", glyph: "compass-pin", tone: "from-[#3a2a12] to-[#0b192e]",
    img: "/assets/case-tower-B50q7XNj.jpg", meta: "Kulai · 4.2 acres · pioneer grant" },
  { tag: "Hidden Assets", title: "Hidden Asset Recovered",
    body: "Our investigation uncovered hidden assets worth millions in overseas accounts.", glyph: "coins-stack", tone: "from-[#2a2012] to-[#0b192e]",
    img: "/assets/illustration-estate.jpg", meta: "Cross-border · RM 8.4M traced" },
  { tag: "Abandoned Property", title: "Abandoned Property Revived",
    body: "We traced the owners, negotiated the deal and successfully revived the abandoned property.", glyph: "magnifier-house", tone: "from-[#14304f] to-[#0b192e]",
    img: "/assets/case-mansion-DTsvvO41.jpg", meta: "Batu Pahat · 38 years dormant" },
  { tag: "Fraud Exposure", title: "Forged Transfer Exposed",
    body: "A fraudulent power-of-attorney sale unravelled through signature and registry forensic audit.", glyph: "shield-alert", tone: "from-[#2a1420] to-[#0b192e]",
    img: "/assets/illustration-forensic.jpg", meta: "High Court · POA invalidated" },
];

export const TESTIMONIALS = [
  { quote: "CAC helped us uncover the truth in a very complex inheritance case. Their professionalism and detailed investigation were outstanding.", who: "Family Client", role: "Estate Beneficiary · Johor" },
  { quote: "Their forensic report stood up flawlessly in the High Court. Every claim was backed by registry evidence — counsel had everything needed.", who: "Legal Counsel", role: "Probate & Land Litigation" },
  { quote: "They traced an ancestral parcel lost to a highway acquisition and recovered unclaimed compensation we didn't know existed.", who: "Heir Group", role: "Multi-generational Estate" },
  { quote: "Discreet, methodical, and relentless on the documents. CAC turned a tangle of missing titles into a clean, registrable chain.", who: "Property Developer", role: "Acquisition Due Diligence" },
];

export const SERVICE_OPTIONS = [
  "Property Ownership Investigation",
  "Missing Property Investigation",
  "Title & Document Investigation",
  "Fraud & Dispute Investigation",
  "Asset Tracing & Recovery",
  "Legal & Advisory Support",
];

export const NAV = [
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Our Process", to: "/process" },
  { label: "Why CAC", to: "/why-cac" },
  { label: "Contact", to: "/contact" },
];
