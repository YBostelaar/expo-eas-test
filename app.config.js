const path = require('path')
const tenantId = process.env.TENANT_ID || 'beeksebergen'
const appEnv = process.env.APP_ENV || 'development'

require('dotenv').config({ path: path.resolve(__dirname, `.env.${tenantId}.${appEnv}`) })
const getTenantExpoConfig = require(path.resolve(__dirname, './config/index.ts'))()

export default ({ config }) => {
  const tenantExpoConfig = getTenantExpoConfig()

  return {
    ...config,
    expo: {
      owner: 'xo10',
      name: tenantExpoConfig.appName,
      slug: tenantExpoConfig.appSlug,
      version: '1.0.0',
      orientation: 'portrait',
      icon: tenantExpoConfig.appIcon,
      scheme: tenantExpoConfig.slug,
      userInterfaceStyle: 'automatic',
      ios: {
        supportsTablet: true,
        bundleIdentifier: tenantExpoConfig.iosBundleIdentifier,
      },
      android: {
        package: tenantExpoConfig.androidPackage,
      },
      web: {
        bundler: 'metro',
        output: 'static',
        favicon: tenantExpoConfig.favicon,
      },
      extra: { tenantId, eas: { projectId: tenantExpoConfig.easProjectId } },
      plugins: ['expo-router'],
    },
  }
}
