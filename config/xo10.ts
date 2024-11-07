const xo10ExpoConfig = {
  appName: 'XO10',
  appSlug: 'xo10',
  appIcon: './src/assets/xo10/images/icon.png',
  splashScreenImage: './src/assets/xo10/images/logo.png',
  splashScreenBackgroundColor: '#000',
  iosBundleIdentifier: 'io.xo10.xmp.staging',
  androidPackage: 'io.xo10.xmp.staging',
  easProjectId: '899d2658-df05-467f-848d-7bac57ea7598',
}

const xo10ExpoConfigDevelopment = {
  ...xo10ExpoConfig,
  appName: 'XO10 - Test',
  appSlug: 'xo10-test',
  iosBundleIdentifier: 'io.xo10.xmp.staging',
  androidPackage: 'io.xo10.xmp.staging',
  easProjectId: '',
}

const getXo10ExpoConfig = () => {
  const env = process.env.APP_ENV

  if (env === 'development') return xo10ExpoConfigDevelopment

  return xo10ExpoConfig
}

module.exports = getXo10ExpoConfig
