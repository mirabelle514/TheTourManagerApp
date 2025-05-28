module.exports = {
  project: {
    ios: {
      sourceDir: './ios',
      configuration: 'Release',
      scheme: 'TourManagerMobileApp'
    },
    android: {
      sourceDir: './android',
      gradleFile: './android/app/build.gradle'
    }
  },
  assets: ['./src/assets'],
  dependencies: {
    '@react-native-firebase/app': {
      platforms: {
        ios: null,
      },
    },
    '@react-native-firebase/auth': {
      platforms: {
        ios: null,
      },
    },
    '@react-native-firebase/firestore': {
      platforms: {
        ios: null,
      },
    },
  },
};
