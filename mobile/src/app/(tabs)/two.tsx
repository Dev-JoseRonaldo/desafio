import { Stack } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { ScreenContent } from '~/src/components/ScreenContent';

export default function Home() {
  return (
    <>
      <View style={styles.container}>
        {/* <ScreenContent path="app/(tabs)/two.tsx" title="Search" /> */}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
  },
});
