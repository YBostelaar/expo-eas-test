import { useWindowDimensions as useDefaultWindowDimensions } from 'react-native'

export const useWindowDimensions = () => {
  const { height, width } = useDefaultWindowDimensions()

  return {
    windowHeight: height,
    windowWidth: width,
  }
}
