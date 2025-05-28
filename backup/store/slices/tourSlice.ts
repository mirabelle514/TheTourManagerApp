import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Tour, TourSetupData, DaySheet, TourDate } from '../../types/tour';

interface TourState {
  currentTour: Tour | null;
  setupComplete: boolean;
  setupData: TourSetupData | null;
  daySheets: DaySheet[];
  tourDates: TourDate[];
  isLoading: boolean;
  error: string | null;
  lastSyncAt: string | null;
}

const initialState: TourState = {
  currentTour: null,
  setupComplete: false,
  setupData: null,
  daySheets: [],
  tourDates: [],
  isLoading: false,
  error: null,
  lastSyncAt: null,
};

const tourSlice = createSlice({
  name: 'tour',
  initialState,
  reducers: {
    // Setup actions
    setSetupData: (state, action: PayloadAction<TourSetupData>) => {
      state.setupData = action.payload;
    },
    
    completeSetup: (state, action: PayloadAction<Tour>) => {
      state.currentTour = action.payload;
      state.setupComplete = true;
      state.setupData = null;
    },
    
    resetSetup: (state) => {
      state.setupComplete = false;
      state.setupData = null;
      state.currentTour = null;
    },

    // Tour management
    setCurrentTour: (state, action: PayloadAction<Tour>) => {
      state.currentTour = action.payload;
    },
    
    updateTour: (state, action: PayloadAction<Partial<Tour>>) => {
      if (state.currentTour) {
        state.currentTour = { ...state.currentTour, ...action.payload };
      }
    },

    // Day sheets
    setDaySheets: (state, action: PayloadAction<DaySheet[]>) => {
      state.daySheets = action.payload;
    },
    
    addDaySheet: (state, action: PayloadAction<DaySheet>) => {
      state.daySheets.push(action.payload);
    },
    
    updateDaySheet: (state, action: PayloadAction<{ id: string; updates: Partial<DaySheet> }>) => {
      const index = state.daySheets.findIndex(sheet => sheet.id === action.payload.id);
      if (index !== -1) {
        state.daySheets[index] = { 
          ...state.daySheets[index], 
          ...action.payload.updates,
          updatedAt: new Date().toISOString()
        };
      }
    },
    
    removeDaySheet: (state, action: PayloadAction<string>) => {
      state.daySheets = state.daySheets.filter(sheet => sheet.id !== action.payload);
    },

    // Tour dates
    setTourDates: (state, action: PayloadAction<TourDate[]>) => {
      state.tourDates = action.payload;
    },
    
    addTourDate: (state, action: PayloadAction<TourDate>) => {
      state.tourDates.push(action.payload);
      state.tourDates.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    },
    
    updateTourDate: (state, action: PayloadAction<{ id: string; updates: Partial<TourDate> }>) => {
      const index = state.tourDates.findIndex(date => date.id === action.payload.id);
      if (index !== -1) {
        state.tourDates[index] = { ...state.tourDates[index], ...action.payload.updates };
      }
    },
    
    removeTourDate: (state, action: PayloadAction<string>) => {
      state.tourDates = state.tourDates.filter(date => date.id !== action.payload);
    },

    // Loading and error states
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    
    clearError: (state) => {
      state.error = null;
    },

    // Sync
    setSyncTime: (state, action: PayloadAction<string>) => {
      state.lastSyncAt = action.payload;
    },
    
    // Reset all data
    resetTourData: (state) => {
      return initialState;
    },
  },
});

export const {
  setSetupData,
  completeSetup,
  resetSetup,
  setCurrentTour,
  updateTour,
  setDaySheets,
  addDaySheet,
  updateDaySheet,
  removeDaySheet,
  setTourDates,
  addTourDate,
  updateTourDate,
  removeTourDate,
  setLoading,
  setError,
  clearError,
  setSyncTime,
  resetTourData,
} = tourSlice.actions;

export default tourSlice.reducer;

// Selectors
export const selectCurrentTour = (state: { tour: TourState }) => state.tour.currentTour;
export const selectSetupComplete = (state: { tour: TourState }) => state.tour.setupComplete;
export const selectSetupData = (state: { tour: TourState }) => state.tour.setupData;
export const selectDaySheets = (state: { tour: TourState }) => state.tour.daySheets;
export const selectTourDates = (state: { tour: TourState }) => state.tour.tourDates;
export const selectTourLoading = (state: { tour: TourState }) => state.tour.isLoading;
export const selectTourError = (state: { tour: TourState }) => state.tour.error;
export const selectLastSyncAt = (state: { tour: TourState }) => state.tour.lastSyncAt;

// Computed selectors
export const selectUpcomingShows = (state: { tour: TourState }) => 
  state.tour.tourDates
    .filter(date => new Date(date.date) > new Date())
    .slice(0, 5);

export const selectTodaysDaySheet = (state: { tour: TourState }) => {
  const today = new Date().toISOString().split('T')[0];
  return state.tour.daySheets.find(sheet => sheet.date === today);
};

export const selectCurrentTourStats = (state: { tour: TourState }) => {
  const { tourDates } = state.tour;
  const completedShows = tourDates.filter(date => date.status === 'completed');
  
  return {
    totalShows: tourDates.length,
    completedShows: completedShows.length,
    totalRevenue: completedShows.reduce((sum, show) => sum + show.revenue, 0),
    totalExpenses: completedShows.reduce((sum, show) => sum + show.expenses, 0),
    totalProfit: completedShows.reduce((sum, show) => sum + show.profit, 0),
  };
};