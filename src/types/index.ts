export interface Asset {
  id: string;
  name: string;
  location: string;
  type: 'Subsale' | 'Land';
  acquisition: number;        // Acquisition price (RM)
  projectedResale: number;   // Projected resale value (RM)
  projectedNetProfit: number; // Projected net profit (RM)
  exitMonths: number;         // Target exit window (months)
  landSize?: string;          // e.g. "965 acres" (land assets)
  anchor?: boolean;           // Anchor asset flag
  status: string;             // e.g. "Title-Verified"
  details: string;
  investigatorNotes: string;
}

export interface Service {
  id: string;
  iconName: string; // Lucide icon name
  title: string;
  description: string;
  detailedDescription: string;
  checklist: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  author: string;
  date: string;       // display date, e.g. "5 July 2026"
  category: string;
  excerpt: string;
  content: string;    // body text; blank lines separate paragraphs
  readTime?: string;  // e.g. "4 min read"
}

export interface Inquiry {
  id: string;
  fullName: string;
  email: string;
  phoneNumber?: string;
  serviceRequired: string;
  briefInquiry: string;
  timestamp: string;
  status: 'received' | 'securing_connection' | 'reviewing_deeds' | 'assigned' | 'analyzing_data';
  trackingCode: string;
  lastUpdated: string;
}
