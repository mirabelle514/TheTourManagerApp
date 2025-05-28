# Tour Manager Mobile App

A comprehensive React Native mobile application for managing band tours, replacing traditional tour managers with digital coordination, communication, and administrative tools.

## Features

### 🎯 Core Functionality
- **Day Sheet Management** - Central hub for daily tour operations
- **Financial Tracking** - Expense management, settlement tracking, profit/loss reporting
- **Merchandise Management** - Inventory tracking, sales reporting, auto-reorder alerts
- **Schedule Management** - Load-in times, soundcheck, show schedules with timezone support
- **Team Communication** - Group chat, direct messaging, file sharing
- **Role-Based Permissions** - Secure access control for different team members

### 🚀 Advanced Features
- **Real-time Sync** - Firebase integration for live updates
- **Offline Support** - SQLite local storage for poor connectivity areas
- **Location Services** - GPS integration for venue distances and navigation
- **Push Notifications** - Schedule updates and important alerts
- **Document Management** - Contract storage, rider management, photo uploads
- **Weather Integration** - Location-based weather for outdoor venues

## Tech Stack

- **Framework**: React Native 0.72+
- **Language**: TypeScript
- **State Management**: Redux Toolkit with Redux Persist
- **Navigation**: React Navigation 6
- **UI Components**: React Native Paper
- **Local Storage**: SQLite + AsyncStorage
- **Real-time Sync**: Firebase (Firestore, Auth, Storage)
- **Maps & Location**: React Native Geolocation
- **Push Notifications**: Firebase Cloud Messaging
- **Icons**: React Native Vector Icons

## Project Structure

```
TourManagerMobileApp/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── common/         # Generic components
│   │   ├── setup/          # Onboarding flow
│   │   ├── daysheet/       # Day sheet components
│   │   ├── financial/      # Financial tracking
│   │   ├── merchandise/    # Merchandise management
│   │   └── navigation/     # Navigation components
│   ├── screens/            # Screen components
│   ├── services/           # API and external services
│   ├── store/              # Redux store and slices
│   ├── styles/             # Theme and styling
│   │   └── theme/         # Centralized theme system
│   ├── utils/              # Helper functions and hooks
│   └── types/              # TypeScript type definitions
├── android/                # Android-specific files
├── ios/                    # iOS-specific files
└── __tests__/              # Test files
```

## Installation

### Prerequisites
- Node.js 16+
- React Native CLI
- Xcode (for iOS development)
- Android Studio (for Android development)

### Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd TourManagerMobileApp
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **iOS Setup**
   ```bash
   cd ios && pod install && cd ..
   ```

4. **Firebase Configuration**
   - Create a new Firebase project
   - Add iOS and Android apps to your project
   - Download `GoogleService-Info.plist` (iOS) and `google-services.json` (Android)
   - Place `GoogleService-Info.plist` in `ios/TourManagerMobileApp/`
   - Place `google-services.json` in `android/app/`

5. **Environment Configuration**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

### Running the App

#### iOS
```bash
npm run ios
# or
npx react-native run-ios
```

#### Android
```bash
npm run android
# or
npx react-native run-android
```

## User Roles & Permissions

### Super Admin
- Full system access
- User management
- Financial oversight
- Contract management
- System configuration

### Tour Manager
- Schedule management
- Crew coordination
- Venue communication
- Expense approval
- Guest list management

### Band Leader
- Setlist approval
- Creative decisions
- Basic financial overview
- Personnel coordination

### Band Members
- Personal schedules
- Communication access
- Basic venue info
- Merchandise tracking

### Crew Chiefs
- Department-specific access
- Equipment management
- Local hire coordination
- Technical specifications

### General Crew
- Personal schedules
- Basic venue information
- Communication tools
- Emergency contacts

## Key Features Deep Dive

### The Day Sheet
The central hub of daily operations displayed as the main card on the homepage:

- **Venue Information**: Name, address, capacity, contact details, distance from current location
- **Show Schedule**: Load-in, soundcheck, doors, set times with countdown timers
- **Technical Details**: Backline, WiFi credentials, power requirements, stage specs
- **Logistics**: Parking, entrance info, security protocols, backstage access
- **Hospitality**: Catering arrangements, accommodation details, local recommendations
- **Travel Information**: Distance to next venue, recommended departure times
- **Settlement**: Payment handler, contact info, expected settlement time

### Financial Management ("Settle Up" Style)
- Daily profit/loss tracking with visual indicators
- Category-based expense tracking with tax implications
- Receipt photo uploads with OCR
- Settlement tracking with payment status
- Multi-currency support for international tours
- Integration with QuickBooks/Xero
- Budget monitoring vs actual expenses

### Merchandise Tracking (Roadie Function)
- T-shirt sales by size, design, venue
- Record/vinyl sales tracking
- Digital merchandise and download codes
- Real-time inventory with low-stock alerts
- Re-ordering recommendations based on tour data
- Sales performance analytics by region

### Communication System
- Group chat with file sharing
- Emergency broadcast with priority levels
- Direct messaging between team members
- Voice message support for hands-free use
- Translation features for international crews
- Integration with SMS for non-app users

## Development

### Code Style
This project uses ESLint and Prettier for code formatting. Run:
```bash
npm run lint
npm run format
```

### Testing
```bash
npm test
```

### Building for Production

#### iOS
```bash
cd ios
xcodebuild -workspace TourManagerMobileApp.xcworkspace -scheme TourManagerMobileApp -configuration Release -destination generic/platform=iOS archive -archivePath TourManagerMobileApp.xcarchive
```

#### Android
```bash
cd android
./gradlew assembleRelease
```

## Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
# Firebase Configuration
FIREBASE_API_KEY=your_api_key
FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_STORAGE_BUCKET=your_project.appspot.com

# API Configuration
API_BASE_URL=https://your-api.com
API_TIMEOUT=10000

# Feature Flags
ENABLE_PUSH_NOTIFICATIONS=true
ENABLE_ANALYTICS=true
ENABLE_CRASH_REPORTING=true

# App Configuration
APP_VERSION=1.0.0
MINIMUM_OS_VERSION_IOS=12.0
MINIMUM_OS_VERSION_ANDROID=21
```

## Deployment

### App Store (iOS)
1. Archive the app in Xcode
2. Upload to App Store Connect
3. Submit for review

### Google Play Store (Android)
1. Generate signed APK/AAB
2. Upload to Google Play Console
3. Submit for review

## Troubleshooting

### Common Issues

#### Metro bundler issues
```bash
npx react-native start --reset-cache
```

#### iOS build issues
```bash
cd ios
rm -rf Pods Podfile.lock
pod install
```

#### Android build issues
```bash
cd android
./gradlew clean
cd ..
npx react-native run-android
```

#### Permission issues on Android
Ensure all required permissions are added to `AndroidManifest.xml`

#### Firebase connection issues
- Verify configuration files are in correct locations
- Check Firebase project settings match app bundle IDs

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Use meaningful component and variable names
- Write tests for new features
- Update documentation for new features
- Follow the established project structure

## Performance Optimization

### React Native Best Practices
- Use FlatList for large lists
- Implement proper image caching
- Optimize bundle size with Metro
- Use native modules for heavy operations
- Implement proper memory management

### Offline Support
- Critical data stored in SQLite
- Smart sync when connection restored
- Graceful degradation of features
- User feedback for offline status

## Security

### Data Protection
- Encrypted storage for sensitive data
- JWT token management
- Secure API communication (HTTPS)
- Role-based access control
- Audit trails for financial data

### Privacy Compliance
- GDPR compliance for international touring
- User consent management
- Data retention policies
- Right to data deletion

## Roadmap

### Version 1.1
- [ ] Advanced analytics dashboard
- [ ] Integration with Spotify for Artists
- [ ] Automated settlement calculations
- [ ] Voice-to-text for quick notes

### Version 1.2
- [ ] AI-powered route optimization
- [ ] Predictive analytics for merchandise
- [ ] Advanced reporting and insights
- [ ] Integration with accounting software

### Version 2.0
- [ ] Web dashboard for managers
- [ ] Fan engagement features
- [ ] Advanced crew scheduling
- [ ] Integration with streaming platforms

## Support

For support and questions:
- 📧 Email: support@tourmanagerapp.com
- 📖 Documentation: [docs.tourmanagerapp.com](https://docs.tourmanagerapp.com)
- 🐛 Bug Reports: Create an issue in this repository

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- React Native community for excellent documentation
- Firebase team for reliable backend services
- All touring musicians and crew who provided valuable feedback

---

**Built with ❤️ for [The Wednesday Project](https://thewednesdayproject.org/)**