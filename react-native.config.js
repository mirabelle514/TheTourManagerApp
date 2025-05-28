module.exports = {
  project: {
    ios: {
      sourceDir: './ios'
    },
    android: {
      sourceDir: './android'
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
