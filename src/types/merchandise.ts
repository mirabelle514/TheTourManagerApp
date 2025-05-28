export interface MerchandiseItem {
  id: string;
  name: string;
  category: MerchandiseCategory;
  description: string;
  price: number;
  cost: number;
  inventory: number;
  sold: number;
  reorderThreshold: number;
  supplier: string;
  supplierId?: string;
  supplierContact?: string;
  imageUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export interface MerchandiseStock {
  itemId: string;
  location: string;
  quantity: number;
  lastUpdated: string;
  notes?: string;
}

export interface MerchandiseSale {
  id: string;
  itemId: string;
  quantity: number;
  price: number;
  venueId: string;
  venueName: string;
  date: string;
  soldBy: string;
  paymentMethod: PaymentMethod;
  receiptUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ReorderRequest {
  id: string;
  itemId: string;
  quantity: number;
  requestedBy: string;
  status: ReorderStatus;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Supplier {
  id: string;
  name: string;
  contactName: string;
  email: string;
  phone: string;
  address: string;
  leadTime: number;
  minimumOrder: number;
  paymentTerms: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface MerchandiseReport {
  totalRevenue: number;
  totalCost: number;
  totalProfit: number;
  itemsSold: number;
  averagePrice: number;
  averageCost: number;
  profitMargin: number;
  lowStockItems: MerchandiseItem[];
  topSellingItems: MerchandiseItem[];
  revenueByVenue: VenueRevenue[];
}

export interface VenueRevenue {
  venueId: string;
  venueName: string;
  totalRevenue: number;
  totalSales: number;
  averageSale: number;
}

export type MerchandiseCategory =
  | 'tshirt'
  | 'vinyl'
  | 'cd'
  | 'poster'
  | 'hat'
  | 'hoodie'
  | 'accessory'
  | 'other';

export type PaymentMethod =
  | 'cash'
  | 'credit_card'
  | 'debit_card'
  | 'paypal'
  | 'venmo'
  | 'zelle'
  | 'other';

export type ReorderStatus =
  | 'pending'
  | 'approved'
  | 'rejected'
  | 'ordered'
  | 'received'
  | 'cancelled';
