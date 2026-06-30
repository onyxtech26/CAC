export interface Asset {
  id: string;
  location: string;
  type: string;
  marketValue: number;
  acquisition: 'Verified' | 'Secure' | 'Disputed' | 'Pending';
  projectedNetProfit: number;
  coordinates: string;
  details: string;
  forensicStatus: string;
  yearBuilt: number;
  lotSizeSqFt: number;
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
