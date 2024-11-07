import React, { useEffect, useMemo, useRef } from 'react'
import { Animated, Easing, ImageSourcePropType, Platform, StatusBar, StyleSheet, View } from 'react-native'

import { useWindowDimensions } from '@/hooks/useWindowDimensions'
import { useTenantContext } from '@/providers/TenantThemeProvider'
import { useTheme } from '@/hooks/useTheme'
import config from '@/config'

import { states } from './constants'

type Props = {
  state: number
  setState: (state: number) => void
}

const SplashCenter: React.FC<Props> = ({ state, setState }) => {
  const { windowWidth, windowHeight } = useWindowDimensions()
  const { colors } = useTheme()
  const { logo } = useTenantContext()
  const { gifSplash } = config.assets.images

  const logoScale = useRef(new Animated.Value(1)).current
  const logoFade = useRef(new Animated.Value(1)).current
  const logoMovement = useRef(new Animated.Value(0)).current
  const logoBackgroundSize = useMemo(() => windowWidth - 48, [])

  const statusBarHeight = Platform.OS === 'ios' ? 44 : StatusBar.currentHeight || 44

  const logoSource = useMemo((): ImageSourcePropType => config.assets.images.logo || config.assets.images.logoWhite, [logo])

  const logoPosition = useMemo(() => {
    if (state < states.WAIT_FOR_SPLASH_ANIMATION_TO_FINISH) {
      return 0
    }
    return -windowHeight / 2 - logoBackgroundSize / 2 + statusBarHeight - 24
  }, [state, windowHeight, statusBarHeight, logoBackgroundSize])

  useEffect(() => {
    if (state === states.WAIT_FOR_SPLASH_ANIMATION_TO_FINISH) {
      Animated.timing(logoMovement, {
        toValue: logoPosition,
        duration: 2000,
        delay: 1000,
        easing: Easing.inOut(Easing.exp),
        useNativeDriver: true,
      }).start()
      Animated.timing(logoScale, {
        toValue: 1.5,
        duration: 1000,
        delay: 1500,
        useNativeDriver: true,
      }).start(() => {
        Animated.timing(logoFade, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true,
        }).start(() => setState(states.FADE_OUT))
      })
    }
  }, [state])

  return (
    <View style={styles.container}>
      {Boolean(gifSplash) ? (
        <Animated.Image source={gifSplash} style={[styles.background, { opacity: logoFade, width: windowWidth, height: windowHeight }]} />
      ) : (
        <View style={styles.content}>
          <Animated.View
            style={[
              styles.logoBackground,
              {
                width: logoBackgroundSize,
                height: logoBackgroundSize,
                backgroundColor: colors.tertiary,
                transform: [{ translateY: logoMovement }, { scale: logoScale }],
              },
            ]}>
            <Animated.Image
              source={logoSource}
              style={[styles.logo, { opacity: logoFade, width: logoBackgroundSize }, typeof logoSource === 'object' && { height: 100 }]}
            />
          </Animated.View>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  background: {
    flex: 1,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
  logoBackground: {
    borderRadius: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    resizeMode: 'contain',
  },
})

export default SplashCenter
