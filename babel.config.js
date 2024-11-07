const path = require('path')

module.exports = function (api) {
  api.cache(true)

  process.env.EXPO_ROUTER_APP_ROOT = path.resolve(__dirname, './src/app')

  return {
    presets: ['babel-preset-expo'],
    env: {
      production: {
        plugins: ['react-native-paper/babel'],
      },
    },
  }
}
