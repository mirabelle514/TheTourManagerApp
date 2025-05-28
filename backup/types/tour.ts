export interface TourSetupData {
    tourName: string;
    bandName: string;
    tourDates: {
      start: string;
      end: string;
    };
    adminUser: AdminUser;
    merchandiseSettings: MerchandiseSettings;
    branding: BrandingSettings;
  }
  
  export interface AdminUser {
    name: string;
    email: string;
    phone: string;
  }
  
  export interface MerchandiseSettings {
    trackTShirts: boolean;
    trackRecords: boolean;
    trackDigital: boolean;
    autoReorderThreshold: number;
  }
  
  export interface BrandingSettings {
    primaryColor: string;
    secondaryColor: string;
    logoUrl: string;
  }
  
  export interface Tour {
    id: string;
    name: string;
    bandName: string;
    startDate: string;
    endDate: string;
    status: 'planned' | 'active' | 'completed' | 'cancelled';
    createdAt: string;
    updatedAt: string;
    settings: TourSettings;
    venues: Venue[];
    team: TeamMember[];
  }
  
  export interface TourSettings {
    merchandise: MerchandiseSettings;
    branding: BrandingSettings;
    permissions: PermissionSettings;
    notifications: NotificationSettings;
  }
  
  export interface PermissionSettings {
    allowGuestListEditing: boolean;
    allowExpenseSubmission: boolean;
    allowScheduleViewing: boolean;
    allowFinancialViewing: boolean;
  }
  
  export interface NotificationSettings {
    scheduleUpdates: boolean;
    financialAlerts: boolean;
    merchandiseAlerts: boolean;
    emergencyNotifications: boolean;
  }
  
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
    venueShare: number; // Percentage of ticket sales
    amenities: VenueAmenities;
    technicalSpecs: TechnicalSpecs;
  }
  
  export interface VenueAmenities {
    parking: boolean;
    loadingDock: boolean;
    greenRoom: boolean;
    catering: boolean;
    wifi: boolean;
    backline: string[];
  }
  
  export interface TechnicalSpecs {
    stageSize: string;
    powerRequirements: string;
    soundSystem: string;
    lightingRig: string;
    wifiNetwork?: string;
    wifiPassword?: string;
  }
  
  export interface TeamMember {
    id: string;
    name: string;
    email: string;
    phone: string;
    role: UserRole;
    department?: string;
    permissions: Permission[];
    joinedAt: string;
    isActive: boolean;
  }
  
  export type UserRole = 
    | 'super_admin'
    | 'tour_manager'
    | 'band_leader'
    | 'band_member'
    | 'crew_chief'
    | 'general_crew'
    | 'roadie'
    | 'sound_engineer'
    | 'lighting_tech'
    | 'local_hire';
  
  export type Permission = 
    | 'full_access'
    | 'schedule_management'
    | 'crew_coordination'
    | 'venue_communication'
    | 'expense_approval'
    | 'guest_list_management'
    | 'setlist_approval'
    | 'creative_decisions'
    | 'financial_overview'
    | 'personnel_coordination'
    | 'personal_schedules'
    | 'communication_access'
    | 'venue_info'
    | 'merchandise_tracking'
    | 'equipment_management'
    | 'local_hire_coordination'
    | 'technical_specifications'
    | 'emergency_contacts';
  
  export interface DaySheet {
    id: string;
    tourId: string;
    date: string;
    venue: Venue;
    schedule: ShowSchedule;
    logistics: Logistics;
    technical: TechnicalDetails;
    hospitality: Hospitality;
    travel: TravelInfo;
    settlement: SettlementInfo;
    guestList: GuestListSummary;
    weather: WeatherInfo;
    notes: string;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface ShowSchedule {
    loadIn: string;
    soundcheck: string[];
    doors: string;
    showStart: string;
    setTimes: SetTime[];
    curfew: string;
  }
  
  export interface SetTime {
    artist: string;
    startTime: string;
    duration: number;
    isHeadliner: boolean;
  }
  
  export interface Logistics {
    loadInLocation: string;
    parkingInstructions: string;
    entranceInfo: string;
    securityProtocols: string[];
    backstageAccess: string;
  }
  
  export interface TechnicalDetails {
    backline: string[];
    wifiInfo: {
      network: string;
      password: string;
    };
    greenRoom: string;
    powerRequirements: string;
    stageSpecs: string;
  }
  
  export interface Hospitality {
    catering: {
      provided: boolean;
      buyoutAmount?: number;
      details?: string;
    };
    accommodation: {
      provided: boolean;
      details?: string;
    };
    localRecommendations: string[];
  }
  
  export interface TravelInfo {
    distanceToNext: number;
    estimatedDriveTime: string;
    recommendedDeparture: string;
    nextVenueLoadIn: string;
    routeNotes: string[];
  }
  
  export interface SettlementInfo {
    handler: string;
    contactInfo: string;
    expectedTime: string;
    paymentMethod: 'check' | 'wire' | 'cash' | 'ach';
    amount?: number;
  }
  
  export interface GuestListSummary {
    totalAllowed: number;
    currentCount: number;
    vipCount: number;
    industryCount: number;
    friendsFamilyCount: number;
  }
  
  export interface WeatherInfo {
    temperature: number;
    condition: string;
    humidity: number;
    windSpeed: number;
    precipitation: number;
    isOutdoorVenue: boolean;
  }
  
  export interface TourDate {
    id: string;
    tourId: string;
    date: string;
    venue: Venue;
    daySheet?: DaySheet;
    status: 'scheduled' | 'confirmed' | 'completed' | 'cancelled';
    ticketsSold: number;
    revenue: number;
    expenses: number;
    profit: number;
  }
  
  export interface TourStats {
    totalShows: number;
    completedShows: number;
    totalRevenue: number;
    totalExpenses: number;
    totalProfit: number;
    averageAttendance: number;
    topMarkets: Market[];
    merchandiseStats: MerchandiseStats;
  }
  
  export interface Market {
    city: string;
    state: string;
    country: string;
    shows: number;
    totalAttendance: number;
    totalRevenue: number;
    averageTicketPrice: number;
  }
  
  export interface MerchandiseStats {
    totalSales: number;
    topSellingItems: MerchandiseItem[];
    salesByVenue: VenueMerchandiseSale[];
  }
  
  export interface MerchandiseItem {
    id: string;
    name: string;
    category: 'tshirt' | 'vinyl' | 'cd' | 'poster' | 'other';
    price: number;
    cost: number;
    inventory: number;
    sold: number;
    revenue: number;
  }
  
  export interface VenueMerchandiseSale {
    venueId: string;
    venueName: string;
    date: string;
    totalSales: number;
    itemsSold: {
      itemId: string;
      quantity: number;
      revenue: number;
    }[];
  }