import { ImageSourcePropType } from 'react-native'
import Constants from 'expo-constants'

import { AppTheme } from '@/theme'

import beekseBergenConfig from './beeksebergen'
import dierenbosConfig from './dierenbos'
import xo10Config from './xo10'

type PageBackgroundKey = 'center' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight'

export type TenantConfig = {
  assets: {
    fontPaths: {
      bodyRegular: string
      bodyBold: string
      heading: string
    }
    images: Record<string, ImageSourcePropType>
    pageBackground?: Partial<Record<PageBackgroundKey, ImageSourcePropType>>
  }
  // deepLinkingSchemes: string[]
  displayName: string
  fallbackLng: string
  i18nResources?: {
    de?: object
    en?: object
    fr?: object
    nl?: object
  }
  supportedLanguages: string[]
  theme: AppTheme
  initialConfig: Record<string, boolean | number | string | object>
}

const tenantConfigs: Record<string, TenantConfig> = {
  beeksebergen: beekseBergenConfig,
  dierenbos: dierenbosConfig,
  xo10: xo10Config,
}

const config = tenantConfigs[Constants.expoConfig?.extra?.tenantId as keyof typeof tenantConfigs]

export default config
