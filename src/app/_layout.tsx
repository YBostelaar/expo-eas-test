import * as React from 'react'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'

import config from '@/config'
import TenantThemeProvider from '@/providers/TenantThemeProvider'
import WithSplashScreen from '@/components/Splash'

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [loaded] = useFonts({
    bodyRegular: config.assets.fontPaths.bodyRegular,
    bodyBold: config.assets.fontPaths.bodyBold,
    heading: config.assets.fontPaths.heading,
  })

  React.useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  return (
    <TenantThemeProvider>
      <WithSplashScreen>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      </WithSplashScreen>
    </TenantThemeProvider>
  )
}
