import dierenbosNl from '@/assets/locales/nl/dierenbos.json'
import dierenbosEn from '@/assets/locales/en/dierenbos.json'
import theme from '@/theme/dierenbos'

const IMAGES = {
  gifSplash: require('../assets/dierenbos/images/splash.gif'),
  logo: require('../assets/dierenbos/images/logo.png'),
  logoWhite: require('../assets/dierenbos/images/logo_white.png'),
  monogram: require('../assets/dierenbos/images/monogram.png'),
}

const FONT_PATHS = {
  bodyRegular: require('../assets/dierenbos/fonts/FiraSans.ttf'),
  bodyBold: require('../assets/dierenbos/fonts/FiraSans-bold.ttf'),
  heading: require('../assets/dierenbos/fonts/DiboCaps.ttf'),
}

const config = {
  assets: {
    fontPaths: FONT_PATHS,
    images: IMAGES,
  },
  // deepLinkingSchemes: [Config.DEEP_LINKING_SCHEME],
  displayName: 'Dierenbos',
  fallbackLng: 'nl',
  i18nResources: {
    en: dierenbosEn,
    nl: dierenbosNl,
  },
  supportedLanguages: ['en', 'nl'],
  theme,
  initialConfig: {
    user_link_activity_order_enabled: false,
  },
}

export default config
