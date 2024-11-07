import theme from '@/theme/xo10'

const FONT_PATHS = {
  bodyRegular: require('../assets/dierenbos/fonts/FiraSans.ttf'),
  bodyBold: require('../assets/dierenbos/fonts/FiraSans-bold.ttf'),
  heading: require('../assets/dierenbos/fonts/DiboCaps.ttf'),
}

const IMAGES = {
  logo: require('../assets/xo10/images/logo.png'),
  logoWhite: require('../assets/xo10/images/logo.png'),
  monogram: require('../assets/xo10/images/logo.png'),
}

const config = {
  assets: {
    fontPaths: FONT_PATHS,
    images: IMAGES,
  },
  // deepLinkingSchemes: [Config.DEEP_LINKING_SCHEME],
  displayName: 'Xo10',
  fallbackLng: 'nl',
  supportedLanguages: ['en', 'nl', 'de', 'fr'],
  theme,
  initialConfig: {
    user_link_activity_order_enabled: false,
  },
}

export default config
