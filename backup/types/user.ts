export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  permissions: Permission[];
  createdAt: string;
  updatedAt: string;
  lastLogin: string;
  isActive: boolean;
}

export interface UserProfile {
  id: string;
  userId: string;
  firstName: string;
  lastName: string;
  phone: string;
  avatarUrl?: string;
  bio?: string;
  preferredName?: string;
  pronouns?: string;
  emergencyContact?: EmergencyContact;
}

export interface EmergencyContact {
  name: string;
  relationship: string;
  phone: string;
  email?: string;
}

export interface UserPreferences {
  language: string;
  timezone: string;
  theme: 'light' | 'dark' | 'system';
  notifications: {
    email: boolean;
    push: boolean;
    sms: boolean;
  };
  layout: {
    grid: boolean;
    compact: boolean;
  };
}

export interface UserSession {
  token: string;
  refreshToken: string;
  expiresAt: string;
  userId: string;
  permissions: Permission[];
}

export interface UserStats {
  totalShows: number;
  totalHours: number;
  lastActive: string;
  completedTasks: number;
  pendingTasks: number;
  assignedVenues: number;
}
