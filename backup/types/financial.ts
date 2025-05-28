export interface FinancialSummary {
  totalRevenue: number;
  totalExpenses: number;
  netProfit: number;
  averageDailyRevenue: number;
  averageDailyExpense: number;
  grossMargin: number;
}

export interface Expense {
  id: string;
  category: ExpenseCategory;
  amount: number;
  date: string;
  description: string;
  vendor: string;
  receiptUrl?: string;
  status: 'pending' | 'approved' | 'rejected';
  approvedBy?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Revenue {
  id: string;
  source: RevenueSource;
  amount: number;
  date: string;
  description: string;
  venueId: string;
  venueName: string;
  showDate: string;
  ticketCount: number;
  createdAt: string;
  updatedAt: string;
}

export interface Budget {
  id: string;
  name: string;
  amount: number;
  startDate: string;
  endDate: string;
  remaining: number;
  spent: number;
  category: ExpenseCategory;
  status: 'active' | 'completed' | 'over' | 'under';
  createdAt: string;
  updatedAt: string;
}

export interface Payment {
  id: string;
  amount: number;
  date: string;
  method: PaymentMethod;
  status: PaymentStatus;
  reference: string;
  vendor: string;
  description: string;
  receiptUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Settlement {
  id: string;
  venueId: string;
  venueName: string;
  showDate: string;
  grossRevenue: number;
  expenses: number;
  netRevenue: number;
  status: SettlementStatus;
  settledAt: string;
  settledBy: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export type ExpenseCategory =
  | 'travel'
  | 'accommodation'
  | 'food'
  | 'transport'
  | 'equipment'
  | 'marketing'
  | 'miscellaneous'
  | 'production'
  | 'insurance'
  | 'legal';

export type RevenueSource =
  | 'ticket_sales'
  | 'merchandise'
  | 'sponsorship'
  | 'streaming'
  | 'other';

export type PaymentMethod =
  | 'cash'
  | 'credit_card'
  | 'bank_transfer'
  | 'check'
  | 'paypal'
  | 'venmo'
  | 'zelle';

export type PaymentStatus =
  | 'pending'
  | 'completed'
  | 'failed'
  | 'refunded'
  | 'disputed';

export type SettlementStatus =
  | 'pending'
  | 'settled'
  | 'disputed'
  | 'cancelled';
