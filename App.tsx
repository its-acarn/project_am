import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'Inter-Black': require('./assets/fonts/Inter-Black.otf'),
    'Inter-Bold': require('./assets/fonts/Inter-Bold.otf'),
    'Inter-ExtraBold': require('./assets/fonts/Inter-ExtraBold.otf'),
    'Inter-ExtraLight': require('./assets/fonts/Inter-ExtraLight.otf'),
    'Inter-Light': require('./assets/fonts/Inter-Light.otf'),
    'Inter-Medium': require('./assets/fonts/Inter-Medium.otf'),
    'Inter-Regular': require('./assets/fonts/Inter-Regular.otf'),
    'Inter-SemiBold': require('./assets/fonts/Inter-SemiBold.otf'),
    'Inter-Thin': require('./assets/fonts/Inter-Thin.otf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <View style={styles.container}>
        <Text style={{ fontFamily: 'Inter-Black', fontSize: 40 }}>AM</Text>
        <Text style={{ fontFamily: 'Inter-ExtraBold', fontSize: 38 }}>AM</Text>
        <Text style={{ fontFamily: 'Inter-Bold', fontSize: 36 }}>AM</Text>
        <Text style={{ fontFamily: 'Inter-Medium', fontSize: 34 }}>AM</Text>
        <Text style={{ fontFamily: 'Inter-Regular', fontSize: 32 }}>AM</Text>
        <Text style={{ fontFamily: 'Inter-Light', fontSize: 30 }}>AM</Text>
        <Text style={{ fontFamily: 'Inter-ExtraLight', fontSize: 28 }}>AM</Text>
        <Text style={{ fontFamily: 'Inter-Thin', fontSize: 26 }}>AM</Text>
        <StatusBar style="auto" />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
