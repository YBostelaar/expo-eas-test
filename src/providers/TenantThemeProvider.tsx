import React, { createContext, useContext } from 'react'
import { PaperProvider } from 'react-native-paper'
import { ThemeProp } from 'react-native-paper/lib/typescript/types'
import Constants from 'expo-constants'

import config from '@/config'
import { ImageSourcePropType } from 'react-native'

type TenantThemeProviderProps = {
  children: React.ReactNode
}

type TenantContextType = {
  id: number
  logo: ImageSourcePropType
  theme: ThemeProp
}

export const TenantContext = createContext<TenantContextType | null>(null)

export const useTenantContext = () => {
  const context = useContext(TenantContext)
  if (!context) {
    throw new Error('useTenantContext must be used within a TenantThemeProvider')
  }
  return context
}

const TenantThemeProvider = ({ children }: TenantThemeProviderProps) => {
  const { theme } = config

  return (
    <TenantContext.Provider
      value={{
        id: Constants.expoConfig?.extra?.tenantId,
        logo: config.assets.images.logo,
        theme,
      }}>
      <PaperProvider theme={theme}>{children}</PaperProvider>
    </TenantContext.Provider>
  )
}

export default TenantThemeProvider
