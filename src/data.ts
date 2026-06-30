import { Asset, Service } from './types';

export const SERVICES: Service[] = [
  {
    id: 'buy-sell',
    iconName: 'Building2',
    title: 'Buy & Sell',
    description: 'Expert facilitation of premium property transactions with rigorous due diligence and valuation accuracy.',
    detailedDescription: 'Our specialized brokerage division handles high-value real estate assets with complete transaction forensics. We verify every chain of title, identify hidden encumbrances, and establish exact fair-market value using comprehensive physical and digital appraisal methodologies.',
    checklist: [
      'Comprehensive title deed audit & chain of custody analysis',
      'Structural and zoning verification with municipal databases',
      'Encumbrance and easement sweep in land registries',
      'Independent structural, technical, and environmental appraisal',
      'Secure, escrow-managed contract execution & title transfer'
    ]
  },
  {
    id: 'legal-consultation',
    iconName: 'Scale',
    title: 'Legal Consultation',
    description: 'Support for court matters requiring expert testimony and technical appraisal evidence in property disputes.',
    detailedDescription: 'We provide court-admissible forensic appraisals, specialized expert witness testimony, and comprehensive case investigation files for high-stakes property, boundary, and valuation disputes across Malaysian courts.',
    checklist: [
      'Development of court-admissible forensic appraisal reports',
      'Expert witness testimony under standard legal proceedings',
      'Boundary line verification via high-precision surveyor audits',
      'Contractual breach analysis for land development agreements',
      'Appraisal dispute resolution counsel for institutional portfolios'
    ]
  },
  {
    id: 'development-advisory',
    iconName: 'Compass',
    title: 'Sub Division and Land Survey',
    description: 'Strategic planning and feasibility studies for small to large scale land development projects across Malaysia.',
    detailedDescription: 'Maximize raw land or re-development asset yields. We conduct advanced forensic feasibility investigations, combining macroeconomic trends with meticulous local planning guidelines (Rancangan Tempatan) and zoning restrictions to design highly lucrative development proposals.',
    checklist: [
      'Zoning and local council (Pihak Berkuasa Tempatan) guideline audit',
      'Highest and Best Use (HBU) financial modeling & yield simulation',
      'Infrastructure capacity and soil/terrain suitability forensics',
      'Capital allocation and cashflow forecasting for phased development',
      'Joint-venture structuring and institutional funding compliance'
    ]
  },
  {
    id: 'estate-probate',
    iconName: 'Briefcase',
    title: 'Big & Small Estate',
    description: 'Seamless management of inheritance matters, asset liquidation, and estate distribution valuations.',
    detailedDescription: 'Resolving inheritance property matters requires extreme precision and legal sensitivity. We work alongside executors, trustees, and legal representatives to perform forensic asset inventories, determine date-of-death valuations, and oversee equitable asset distributions.',
    checklist: [
      'Date-of-Death fair market valuation for estate duty filings',
      'Asset mapping & physical verification of deceased estates',
      'Equitable fractional property valuation for multi-heir distribution',
      'Probate court filing support with verified valuation certificates',
      'Unclaimed property discovery and legal tracking services'
    ]
  },
  {
    id: 'forensic-investigation',
    iconName: 'SearchCode',
    title: 'Forensic Land',
    description: 'In-depth asset tracking, title verification, and investigation of complex property histories.',
    detailedDescription: 'The core of our capability. We conduct deep-dive property lineage investigations, tracing title ownership, encumbrances, fraudulent filings, and land status alterations across several decades to secure clear property ownership structures.',
    checklist: [
      'Deep title lineage search spanning up to 60+ years of land records',
      'Authentication of signatures, power of attorney, and filings',
      'Historical survey comparison and overlapping claims investigation',
      'Investigative audit of physical versus registered land boundaries',
      'Fraud detection and recovery consultation for affected owners'
    ]
  },
  {
    id: 'will-writing',
    iconName: 'FileSignature',
    title: 'Court Matters',
    description: 'Professional preparation of wills and legacy documents to ensure absolute legal clarity for future generations.',
    detailedDescription: 'Safeguard your real estate holdings and liquid wealth with ironclad legacy planning. We draft customized wills, establish testamentary trusts, and construct legacy directives that preemptively resolve estate disputes and minimize taxes.',
    checklist: [
      'Testamentary capacity assessment and witness protocol',
      'Comprehensive asset listing and precise assignment directives',
      'Creation of Testamentary Trusts for minor or vulnerable heirs',
      'Appointment of verified corporate executors and asset guardians',
      'Will registration, safe custody storage, and periodic auditing'
    ]
  }
];

export const ASSETS: Asset[] = [
  {
    id: 'ast-1',
    location: 'Kempas, JB',
    type: 'Subsale',
    marketValue: 950000,
    acquisition: 'Verified',
    projectedNetProfit: 285000,
    coordinates: '1°32\'45"N 103°43\'12"E',
    details: 'Luxury semi-detached residential asset under institutional holding. Title cleared of all historic easements. Chain of custody audited back to original state transfer. Structurally certified with zero municipal defects.',
    forensicStatus: '100% Audited & Title Cleared',
    yearBuilt: 2018,
    lotSizeSqFt: 4200,
    investigatorNotes: 'Comprehensive on-site inspection completed. Physical boundary precisely matches state survey records. No outstanding local council assessments.'
  },
  {
    id: 'ast-2',
    location: 'Taman Sri Skudai',
    type: 'Auction',
    marketValue: 480000,
    acquisition: 'Secure',
    projectedNetProfit: 168000,
    coordinates: '1°31\'10"N 103°39\'55"E',
    details: 'Distressed commercial shopoffice acquired via state foreclosure. Foreclosure procedures verified compliant with National Land Code Section 256. Primary charge liquidated, title successfully registered under asset holding company.',
    forensicStatus: 'Foreclosure Audit Approved',
    yearBuilt: 2012,
    lotSizeSqFt: 1540,
    investigatorNotes: 'Caveat searches cleared. Standard auction procedures completed without structural claims from adjacent parcels.'
  },
  {
    id: 'ast-3',
    location: 'Taman Nesa',
    type: 'Subsale',
    marketValue: 1200000,
    acquisition: 'Verified',
    projectedNetProfit: 420000,
    coordinates: '1°33\'02"N 103°41\'40"E',
    details: 'Double-story factory space in premium light industrial cluster. Full structural engineering analysis performed. Title verified and free of master-title developmental restrictions.',
    forensicStatus: 'Industrial Zoning Verified',
    yearBuilt: 2020,
    lotSizeSqFt: 6000,
    investigatorNotes: 'Environmental soil testing passed. Tenancy agreement reviewed and verified under legal escrow.'
  },
  {
    id: 'ast-4',
    location: 'Taman Abad',
    type: 'Investment',
    marketValue: 850000,
    acquisition: 'Verified',
    projectedNetProfit: 212500,
    coordinates: '1°29\'15"N 103°45\'30"E',
    details: 'Multi-unit luxury apartment in central downtown Johor Bahru. Sub-divided strata title issued and validated directly against master developer registry. Perfect rental yield record.',
    forensicStatus: 'Strata Title Confirmed',
    yearBuilt: 2021,
    lotSizeSqFt: 1100,
    investigatorNotes: 'Building maintenance audits indicate excellent sinking fund health. Sinking fund contributions fully verified up-to-date.'
  },
  {
    id: 'ast-5',
    location: 'Perling, JB',
    type: 'Subsale',
    marketValue: 720000,
    acquisition: 'Secure',
    projectedNetProfit: 180000,
    coordinates: '1°29\'50"N 103°40\'58"E',
    details: 'High-end single-family residential unit. Ownership transferred following resolution of ancestral inheritance dispute. Our forensic team successfully traced original heir certificates to clear the probate dispute.',
    forensicStatus: 'Heir Settlement Complete',
    yearBuilt: 2015,
    lotSizeSqFt: 3500,
    investigatorNotes: 'High Court distribution order verified. New title register issued under sole owner with zero encumbrances.'
  },
  {
    id: 'ast-6',
    location: 'Kedah (Strategic)',
    type: 'Development Land',
    marketValue: 1100000,
    acquisition: 'Verified',
    projectedNetProfit: 275000,
    coordinates: '5°40\'12"N 100°25\'33"E',
    details: 'Prime agricultural plot zoned for future residential development. Conversion premium estimates verified. Soil stability testing conducted and approved for medium-density construction.',
    forensicStatus: 'Agricultural-to-Residential Clearance',
    yearBuilt: 2024,
    lotSizeSqFt: 43560,
    investigatorNotes: 'Local municipal masterplan 2030 confirms future bypass highway route intersecting within 1km. Highly strategic asset value position.'
  },
  {
    id: 'ast-7',
    location: 'Kota Tinggi',
    type: 'Subsale',
    marketValue: 700000,
    acquisition: 'Secure',
    projectedNetProfit: 113250,
    coordinates: '1°43\'40"N 103°54\'05"E',
    details: 'Suburban double-story corner bungalow unit. Re-acquired via private sale with direct title clearing. Boundary wall easements resolved with adjacent state land holdings.',
    forensicStatus: 'Easement Dispute Resolved',
    yearBuilt: 2017,
    lotSizeSqFt: 5100,
    investigatorNotes: 'Survey department (JUPEM) boundary marks audited and found perfectly in place. Boundary walls are 100% compliant.'
  }
];
