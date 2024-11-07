const dierenbosExpoConfig = {
  appName: 'Dierenbos',
  appSlug: 'dierenbos',
  appIcon: './src/assets/dierenbos/images/icon.png',
  splashScreenImage: './src/assets/dierenbos/images/logo.png',
  splashScreenBackgroundColor: '#000',
  iosBundleIdentifier: 'nl.dierenbos.app',
  androidPackage: 'nl.dierenbos.app',
  easProjectId: '8b11f391-f87d-4d59-9133-0af5d096653e',
}

const dierenbosExpoConfigDevelopment = {
  ...dierenbosExpoConfig,
  appName: 'Dierenbos - Test',
  appSlug: 'dierenbos-test',
  iosBundleIdentifier: 'nl.dierenbos.test',
  androidPackage: 'nl.dierenbos.test',
  easProjectId: '',
}

const getDierenbosExpoConfig = () => {
  const env = process.env.APP_ENV

  if (env === 'development') return dierenbosExpoConfigDevelopment

  return dierenbosExpoConfig
}

module.exports = getDierenbosExpoConfig
