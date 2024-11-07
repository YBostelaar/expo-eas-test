const path = require('path')

const getTenantExpoConfig = () => {
  const tenantId = process.env.TENANT_ID

  let expoConfig
  if (tenantId === 'beeksebergen') {
    expoConfig = require(path.resolve(__dirname, './beeksebergen.ts'))
  } else if (tenantId === 'dierenbos') {
    expoConfig = require(path.resolve(__dirname, './dierenbos.ts'))
  } else if (tenantId === 'xo10') {
    expoConfig = require(path.resolve(__dirname, './xo10.ts'))
  } else {
    throw new Error(`Geen configuratie gevonden voor tenantId: ${tenantId}`)
  }

  return expoConfig
}

module.exports = getTenantExpoConfig
