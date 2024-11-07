import { MD3LightTheme as DefaultTheme } from 'react-native-paper'
import { MD2Colors, MD3Colors, MD3Type, MD3TypescaleKey, ThemeProp } from 'react-native-paper/lib/typescript/types'

import tenantConfig from '@/config'

type CustomColors = {
  accent?: string
  backgroundPrimary?: string
  backgroundSecondary?: string
  onAccent?: string
  onBackgroundPrimary?: string
  onBackgroundSecondary?: string
  onPrimaryDark?: string
  onTertiaryLight?: string
  primaryDark?: string
  tertiaryLight?: string
}

export enum CustomFontKeys {
  headerFont = 'headerFont',
}

type CustomFontAttributes = {
  textTransform?: 'uppercase' | 'none' | 'capitalize' | 'lowercase'
}

export type ThemeColors = Partial<MD2Colors & MD3Colors & CustomColors>

export type ThemeFont = Partial<MD3Type | CustomFontAttributes>

export type ThemeFonts = Record<MD3TypescaleKey | CustomFontKeys, ThemeFont>

export type AppTheme = ThemeProp & {
  colors: ThemeColors
  fonts: ThemeFonts
  spacing: number
}

const paperTheme = {
  ...DefaultTheme,
  ...tenantConfig.theme,
  colors: {
    ...DefaultTheme.colors,
    ...tenantConfig.theme.colors,
  },
}

export { paperTheme }
