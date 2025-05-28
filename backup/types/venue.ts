export interface Venue {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
  capacity: number;
  contactPerson: string;
  contactPhone: string;
  contactEmail: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  venueShare: number;
  amenities: VenueAmenities;
  technicalSpecs: TechnicalSpecs;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface VenueAmenities {
  parking: boolean;
  loadingDock: boolean;
  greenRoom: boolean;
  catering: boolean;
  wifi: boolean;
  backline: string[];
  dressingRooms: number;
  soundCheckTime: string;
  loadInTime: string;
  loadOutTime: string;
}

export interface TechnicalSpecs {
  stageSize: string;
  powerRequirements: string;
  soundSystem: string;
  lightingRig: string;
  wifiNetwork?: string;
  wifiPassword?: string;
  backline: string;
  stagePlotUrl?: string;
  lightingPlotUrl?: string;
  soundPlotUrl?: string;
}

export interface VenueSchedule {
  venueId: string;
  date: string;
  loadIn: string;
  soundCheck: string;
  doors: string;
  showStart: string;
  curfew: string;
  status: VenueStatus;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface VenueContact {
  id: string;
  venueId: string;
  name: string;
  role: string;
  phone: string;
  email: string;
  preferredContact: string;
  createdAt: string;
  updatedAt: string;
}

export interface VenueStats {
  totalShows: number;
  averageAttendance: number;
  totalRevenue: number;
  averageRevenue: number;
  highestAttendance: number;
  lowestAttendance: number;
  bestRevenue: number;
  worstRevenue: number;
  averageLoadInTime: string;
  averageLoadOutTime: string;
}

export interface VenueNote {
  id: string;
  venueId: string;
  userId: string;
  userName: string;
  content: string;
  type: NoteType;
  createdAt: string;
  updatedAt: string;
}

export type VenueStatus =
  | 'available'
  | 'booked'
  | 'confirmed'
  | 'cancelled'
  | 'rescheduled';

export type NoteType =
  | 'general'
  | 'technical'
  | 'logistics'
  | 'contact'
  | 'payment'
  | 'other';
