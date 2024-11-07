import { ThemeColors, ThemeFont, ThemeFonts } from './'

const bold: ThemeFont = {
  fontFamily: 'SofiaPro-Bold',
  fontWeight: 'bold',
}

const regular: ThemeFont = {
  fontFamily: 'SofiaPro',
}

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
    fontFamily: 'anton-regular',
    fontWeight: 'normal',
    textTransform: 'uppercase',
  },
}

const colors: ThemeColors = {
  accent: '#F39200',
  background: '#F5F1E6',
  backgroundPrimary: '#482600',
  backgroundSecondary: '#AB9681',
  onAccent: '#fff',
  onBackgroundPrimary: '#fff',
  onBackgroundSecondary: '#fff',
  onPrimaryContainer: '#fff',
  onPrimaryDark: '#fff',
  onSecondary: '#fff',
  onSurface: '#222',
  onTertiary: '#fff',
  onTertiaryLight: '#000',
  primary: '#596831',
  primaryContainer: '#8B966F',
  primaryDark: '#3E4822',
  secondary: '#E84D0E',
  surface: '#F1EAD9',
  surfaceVariant: '#EAE1C8',
  tertiary: '#F39200',
  tertiaryLight: '#FDDD82',
}

const theme = {
  colors,
  fonts: fontConfig,
  roundness: 5,
  spacing: 4,
}

export default theme
