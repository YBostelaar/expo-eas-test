import theme from '@/theme/beeksebergen'

import beekseBergenDe from '@/assets/locales/de/beeksebergen.json'
import beekseBergenEn from '@/assets/locales/en/beeksebergen.json'
import beekseBergenFr from '@/assets/locales/fr/beeksebergen.json'
import beekseBergenNl from '@/assets/locales/nl/beeksebergen.json'

const FONT_PATHS = {
  bodyRegular: require('../assets/beeksebergen/fonts/SofiaPro.ttf'),
  bodyBold: require('../assets/beeksebergen/fonts/SofiaPro-bold.ttf'),
  heading: require('../assets/beeksebergen/fonts/Anton.ttf'),
}

const IMAGES = {
  logo: require('../assets/beeksebergen/images/logo.png'),
  logoWhite: require('../assets/beeksebergen/images/logo.png'),
  monogram: require('../assets/beeksebergen/images/monogram.png'),
}

const PAGE_BACKGROUND = {
  bottomLeft: require('../assets/beeksebergen/images/page-background-bottom-left.png'),
  bottomRight: require('../assets/beeksebergen/images/page-background-bottom-right.png'),
  topLeft: require('../assets/beeksebergen/images/page-background-top-left.png'),
  topRight: require('../assets/beeksebergen/images/page-background-top-right.png'),
}

const config = {
  assets: {
    fontPaths: FONT_PATHS,
    images: IMAGES,
    pageBackground: PAGE_BACKGROUND,
  },
  // deepLinkingSchemes: [
  //   Config.DEEP_LINKING_SCHEME,
  //   ...(Config.DEPRECATED_DEEP_LINKING_SCHEME ? [Config.DEPRECATED_DEEP_LINKING_SCHEME] : []),
  // ],
  displayName: 'Beekse Bergen',
  fallbackLng: 'en',
  i18nResources: {
    de: beekseBergenDe,
    en: beekseBergenEn,
    fr: beekseBergenFr,
    nl: beekseBergenNl,
  },
  supportedLanguages: ['de', 'en', 'fr', 'nl'],
  theme,
  initialConfig: {
    user_link_activity_order_enabled: false,
  },
}

export default config
