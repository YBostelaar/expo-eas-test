import React, { useEffect, useRef } from 'react'
import { Animated, StyleSheet } from 'react-native'

import { useTheme } from '@/hooks/useTheme'
import { states } from './constants'

type Props = {
  state: number
  setState: (state: number) => void
  children: React.ReactNode
}

const SplashContainer: React.FC<Props> = ({ state, setState, children }) => {
  const { colors } = useTheme()
  const containerOpacity = useRef(new Animated.Value(1)).current

  useEffect(() => {
    if (state === states.FADE_OUT) {
      Animated.timing(containerOpacity, {
        toValue: 0,
        duration: 100,
        delay: 100,
        useNativeDriver: true,
      }).start(() => {
        setState(states.HIDDEN)
      })
    }
  }, [containerOpacity, state, setState])

  return (
    <Animated.View collapsable={false} style={[style.container, { backgroundColor: colors.background, opacity: containerOpacity }]}>
      {children}
    </Animated.View>
  )
}

const style = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default SplashContainer
