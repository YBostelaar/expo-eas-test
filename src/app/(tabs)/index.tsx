import { View, Text } from 'react-native';

export default function HomeScreen() {
  return (
      <View>
        <Text>
          {process.env.EXPO_PUBLIC_APP_NAME}
        </Text>
      </View>
  );
}
