const beekseBergenExpoConfig = {
  appName: 'Beekse Bergen',
  appSlug: 'beeksebergen',
  appIcon: './src/assets/beeksebergen/images/icon.png',
  splashScreenImage: './src/assets/beeksebergen/images/logo.png',
  splashScreenBackgroundColor: '#000',
  iosBundleIdentifier: 'nl.beeksebergen.app',
  androidPackage: 'nl.beeksebergen.app',
  easProjectId: 'c54a3c6d-8a3f-4c18-9a19-bd34a3f7a517',
}

const beekseBergenExpoConfigDevelopment = {
  ...beekseBergenExpoConfig,
  appName: 'Beekse Bergen - Test',
  appSlug: 'beeksebergen-test',
  iosBundleIdentifier: 'nl.beeksebergen.test',
  androidPackage: 'nl.beeksebergen.test',
  easProjectId: '',
}

const getBeekseBergenExpoConfig = () => {
  const env = process.env.APP_ENV

  if (env === 'development') return beekseBergenExpoConfigDevelopment

  return beekseBergenExpoConfig
}

module.exports = getBeekseBergenExpoConfig
