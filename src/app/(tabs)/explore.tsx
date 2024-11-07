import { StyleSheet, View, Text } from 'react-native';

export default function TabTwoScreen() {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.titleText}>Explore</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 60,
  },
  titleText: {
    fontFamily: 'bodyBold',
    fontWeight: 'bold',
  }
});
