import { ThemeColors, ThemeFont, ThemeFonts } from './'

const bold: ThemeFont = {
  fontFamily: 'FiraSans-Bold',
  fontWeight: 'bold',
}

const regular: ThemeFont = {
  fontFamily: 'FiraSans-Regular',
} as const

const fontConfig: ThemeFonts = {
  displayLarge: {
    ...bold,
    fontSize: 48,
  },
  displayMedium: {
    ...bold,
    fontSize: 44,
  },
  displaySmall: {
    ...bold,
    fontSize: 40,
  },
  headlineLarge: {
    ...bold,
    fontSize: 36,
  },
  headlineMedium: {
    ...bold,
    fontSize: 32,
  },
  headlineSmall: {
    ...bold,
    fontSize: 28,
  },
  titleLarge: {
    ...bold,
    fontSize: 28,

    lineHeight: 32,
  },
  titleMedium: {
    ...bold,
    fontSize: 24,
  },
  titleSmall: {
    ...bold,
    fontSize: 18,
  },
  labelLarge: {
    ...regular,
  },
  labelMedium: {
    ...regular,
  },
  labelSmall: {
    ...regular,
  },
  bodyLarge: {
    ...regular,
    fontSize: 16,
    lineHeight: 22,
  },
  bodyMedium: {
    ...regular,
    fontSize: 15,
    lineHeight: 22,
  },
  bodySmall: {
    ...regular,
    fontSize: 14,
    lineHeight: 22,
  },
  headerFont: {
    fontFamily: 'DiboCaps',
    fontWeight: 'normal',
    textTransform: 'uppercase',
  },
}

const colors: ThemeColors = {
  accent: '#F7A600',
  background: '#fff',
  backgroundPrimary: '#768F2A',
  backgroundSecondary: '#F5F0E3',
  onAccent: '#fff',
  onBackgroundPrimary: '#fff',
  onBackgroundSecondary: '#222',
  onPrimary: '#fff',
  onPrimaryContainer: '#000',
  onPrimaryDark: '#fff',
  onSecondary: '#070707',
  onSurface: '#222',
  onTertiary: '#070707',
  onTertiaryLight: '#222222',
  primary: '#768F2A',
  primaryContainer: '#9FAF75',
  primaryDark: '#52641D',
  secondary: '#F7A600',
  surface: '#F5F2E8',
  surfaceVariant: '#F5F0E3',
  tertiary: '#ADCED4',
  tertiaryLight: '#F5F0E3',
}

const theme = {
  colors,
  fonts: fontConfig,
  roundness: 5,
  spacing: 4,
}

export default theme
