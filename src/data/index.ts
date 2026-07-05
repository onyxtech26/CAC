import { Asset, Service } from '../types';

export const SERVICES: Service[] = [
  {
    id: 'valuation-appraisal',
    iconName: 'Scale',
    title: 'Property Valuation & Appraisal',
    description: 'Independent market valuation of residential and land assets, benchmarked against verified comparables and transaction evidence.',
    detailedDescription: 'We establish defensible, evidence-led market value for residential and land assets across Johor and Kedah. Every appraisal is benchmarked against verified comparables and real transaction evidence, giving owners, investors and financiers an objective basis for decision-making.',
    checklist: [
      'Independent market valuation of residential and land assets',
      'Benchmarking against verified comparables & transaction evidence',
      'Defensible valuation basis for acquisition and financing',
      'Physical and desktop appraisal methodologies',
      'Clear, documented valuation rationale'
    ]
  },
  {
    id: 'forensic-consultation',
    iconName: 'SearchCode',
    title: 'Property Forensic Consultation',
    description: 'Deep-dive investigation of title, encumbrances, valuation integrity and dispute exposure — uncovering risk and hidden value before capital is committed.',
    detailedDescription: 'Our core discipline. We conduct deep-dive forensic investigation of title, encumbrances, valuation integrity and dispute exposure — uncovering risk and hidden value before capital is committed to any asset.',
    checklist: [
      'Title and chain-of-ownership investigation',
      'Encumbrance, caveat and easement analysis',
      'Valuation integrity and comparables verification',
      'Dispute and litigation exposure assessment',
      'Risk and hidden-value findings before capital is committed'
    ]
  },
  {
    id: 'subsale-flips',
    iconName: 'Building2',
    title: 'Subsale Acquisition & Flips',
    description: 'Sourcing and securing below-market subsale homes, refurbishing where needed, and resolving to a profitable resale within months.',
    detailedDescription: 'We source and secure below-market subsale homes, refurbish where needed, and resolve them to a profitable resale within a short, defined window — typically two to three months per project.',
    checklist: [
      'Sourcing of below-market subsale opportunities',
      'Acquisition negotiation and securing of the asset',
      'Targeted refurbishment where value can be added',
      'Fast, profitable resale within a defined window',
      'Milestone reporting through to resale completion'
    ]
  },
  {
    id: 'land-banking',
    iconName: 'Compass',
    title: 'Land Banking & Development',
    description: 'Acquisition of agricultural and development land at acquisition discounts, held and repositioned for conversion or onward sale.',
    detailedDescription: 'We acquire agricultural and development land at meaningful acquisition discounts, then hold and reposition it for conversion or onward sale — including higher-upside plays such as our anchor land parcel in Paloh, Johor.',
    checklist: [
      'Acquisition of agricultural and development land at a discount',
      'Highest and Best Use and conversion assessment',
      'Repositioning for conversion or onward sale',
      'Holding strategy aligned to the facility window',
      'Exit routing to development partners or buyers'
    ]
  },
  {
    id: 'due-diligence',
    iconName: 'FileSignature',
    title: 'Due Diligence & Title Verification',
    description: 'Clean-title confirmation and risk screening on every asset before acquisition.',
    detailedDescription: 'Before any capital is committed, every asset is independently valued and title-verified. We confirm clean title, screen for risk, and ensure each acquisition is held under first legal charge — compressing downside for our partners.',
    checklist: [
      'Clean-title confirmation on every asset',
      'Independent valuation prior to acquisition',
      'Risk screening for encumbrances and disputes',
      'First legal charge over acquired assets',
      'Documentation ready for financing partners'
    ]
  },
  {
    id: 'investment-advisory',
    iconName: 'Briefcase',
    title: 'Market & Investment Advisory',
    description: 'Exit strategy, pricing and timing guidance for partners across the property pipeline.',
    detailedDescription: 'We provide exit strategy, pricing and timing guidance for our partners — translating forensic appraisal and market evidence into disciplined decisions on when and how to realise value across the pipeline.',
    checklist: [
      'Exit strategy design for each asset',
      'Pricing guidance based on verified evidence',
      'Timing and market-window analysis',
      'Portfolio-level capital allocation guidance',
      'Realised-return tracking against projections'
    ]
  }
];

// Live acquisition pipeline — six projects targeted for resolution within the
// six-month facility window. Figures are indicative, subject to final valuation
// and due diligence. (Source: CAC Investment Portfolio, 2026 edition.)
export const ASSETS: Asset[] = [
  {
    id: 'ast-kota-tinggi',
    name: 'Kota Tinggi House',
    location: 'Kota Tinggi, Johor',
    type: 'Subsale',
    acquisition: 500000,
    projectedResale: 625000,
    projectedNetProfit: 125000,
    exitMonths: 2,
    status: 'Title-Verified',
    details: 'A below-market subsale home targeted for a fast refurbish-and-resale cycle. As the quickest-exit asset in the pipeline, it is prioritised first for deployment.',
    investigatorNotes: 'Independently valued and title-verified before acquisition. Figures indicative, subject to final valuation and due diligence.'
  },
  {
    id: 'ast-sri-skudai',
    name: 'Sri Skudai House',
    location: 'Skudai, Johor',
    type: 'Subsale',
    acquisition: 400000,
    projectedResale: 515000,
    projectedNetProfit: 115000,
    exitMonths: 3,
    status: 'Title-Verified',
    details: 'A below-market subsale home in the established Skudai corridor, secured for light refurbishment and a profitable resale within a three-month window.',
    investigatorNotes: 'Independently valued and title-verified before acquisition. Figures indicative, subject to final valuation and due diligence.'
  },
  {
    id: 'ast-pontian',
    name: 'Pontian Land',
    location: 'Pontian, Johor',
    type: 'Land',
    acquisition: 550000,
    projectedResale: 930000,
    projectedNetProfit: 380000,
    exitMonths: 5,
    landSize: '68 acres',
    status: 'Title-Verified',
    details: 'A 68-acre land parcel acquired at a discount and repositioned for conversion or onward sale — a higher-upside land play within the pipeline.',
    investigatorNotes: 'Independently valued and title-verified before acquisition. Figures indicative, subject to final valuation and due diligence.'
  },
  {
    id: 'ast-paloh',
    name: 'Paloh Land',
    location: 'Paloh, Johor',
    type: 'Land',
    acquisition: 1000000,
    projectedResale: 1650000,
    projectedNetProfit: 650000,
    exitMonths: 6,
    landSize: '965 acres',
    anchor: true,
    status: 'Title-Verified',
    details: 'The anchor asset of the portfolio: a 965-acre land parcel acquired at a significant discount, held and repositioned for conversion or onward sale within the six-month facility window.',
    investigatorNotes: 'Independently valued and title-verified before acquisition. Anchor land holding. Figures indicative, subject to final valuation and due diligence.'
  },
  {
    id: 'ast-skudai-land',
    name: 'Skudai Land',
    location: 'Skudai, Johor',
    type: 'Land',
    acquisition: 330000,
    projectedResale: 470000,
    projectedNetProfit: 140000,
    exitMonths: 4,
    status: 'Title-Verified',
    details: 'A compact land parcel in Skudai acquired below market and repositioned for onward sale within a four-month horizon.',
    investigatorNotes: 'Independently valued and title-verified before acquisition. Figures indicative, subject to final valuation and due diligence.'
  },
  {
    id: 'ast-kedah',
    name: 'Kedah House',
    location: 'Kedah',
    type: 'Subsale',
    acquisition: 380000,
    projectedResale: 470000,
    projectedNetProfit: 90000,
    exitMonths: 3,
    status: 'Title-Verified',
    details: 'A subsale home extending the pipeline into the northern Kedah market, secured for a disciplined resale within three months.',
    investigatorNotes: 'Independently valued and title-verified before acquisition. Figures indicative, subject to final valuation and due diligence.'
  }
];
