import React, { useEffect, useState } from 'react'
import { StatusBar } from 'react-native'

// import { useStay } from '../../api/stays';
// import useAppUpdate from '../../hooks/useAppUpdate';
// import { useAuth } from '../../providers/AuthProvider';
// import AppVersionUpdate from '../AppVersionUpdate';
import SplashCenter from './SplashCenter'
import SplashContainer from './SplashContainer'
import { states } from './constants'

export const WithSplashScreen = ({ children }: { children: React.ReactNode }) => {
  // TODO: Add all endpoints to load the app
  // const { isLoading: isLoadingAuth, refreshSession } = useAuth()
  // const { isLoading: isLoadingStay } = useStay() // we use this to prefetch the stay data used in the MessageBoard component
  // const { isLoading: isLoadingAppUpdate, showModal, currentAppUpdate, onClose } = useAppUpdate()

  // const isLoading = isLoadingAuth || isLoadingStay || isLoadingAppUpdate
  // const isAppReady = !isLoading && !showModal
  const isAppReady = true

  // useEffect(() => {
  //   // Refresh session on start
  //   refreshSession()
  // }, [refreshSession])

  return (
    <>
      {isAppReady && children}
      {/* <AppVersionUpdate appVersion={currentAppUpdate} onClose={onClose} visible={showModal} /> */}
      <Splash isAppReady={isAppReady} />
    </>
  )
}

const Splash = ({ isAppReady }: { isAppReady: boolean }) => {
  const [state, setState] = useState(states.WAIT_FOR_APP_TO_BE_READY)

  useEffect(() => {
    if (state === states.WAIT_FOR_APP_TO_BE_READY && isAppReady) {
      setState(states.WAIT_FOR_SPLASH_ANIMATION_TO_FINISH)
    }
  }, [isAppReady, state])

  if (state === states.HIDDEN) {
    return null
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <SplashContainer state={state} setState={setState}>
        <SplashCenter state={state} setState={setState} />
      </SplashContainer>
    </>
  )
}
