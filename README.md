# Tour Manager Mobile App

A comprehensive mobile application for managing tours, built with React Native.

## Features

- Tour setup and management
- Team member management
- Merchandise tracking
- Financial management
- Venue management
- Customizable tour settings
- Data import/export capabilities

## Prerequisites

- Node.js >= 16
- npm or yarn
- Xcode (for iOS development)
- Android Studio (for Android development)
- CocoaPods (for iOS dependencies)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/mirabelle514/TheTourManagerApp.git
cd TheTourManagerApp
```

2. Install dependencies:
```bash
npm install
```

3. Install iOS dependencies:
```bash
cd ios && pod install && cd ..
```

## Running the App

### iOS
```bash
npm run ios
```

### Android
```bash
npm run android
```

## Development

### Project Structure
```
src/
├── components/     # Reusable components
├── screens/        # Screen components
├── store/         # Redux store and slices
├── styles/        # Theme and styling
└── types/         # TypeScript type definitions
```

### Available Scripts

- `npm start` - Start the Metro bundler
- `npm run ios` - Run on iOS simulator
- `npm run android` - Run on Android emulator
- `npm test` - Run tests
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Submit a pull request

### Branch Naming Convention
- feature/feature-name
- bugfix/bug-description
- hotfix/issue-description

## CI/CD

This project uses GitHub Actions for continuous integration and deployment. The workflow includes:
- Linting
- Type checking
- Unit tests
- Build verification

## License

This project is proprietary and confidential. Unauthorized copying, distribution, or use is strictly prohibited.

**Built with ❤️ for [The Wednesday Project](https://thewednesdayproject.org/)**