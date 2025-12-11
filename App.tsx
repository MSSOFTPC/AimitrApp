import { useColorScheme } from 'react-native'
import { TamaguiProvider } from 'tamagui'
import { config } from './src/config/tamagui.config'
import Navigation from './src/Navigation/Navigation'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import { Provider } from 'react-redux'
import Store from './src/Redux/Store'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function App() {
  const scheme = useColorScheme() // 'light' | 'dark' | null
  const theme = scheme === 'dark' ? 'dark' : 'light'

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={Store}>
        <SafeAreaProvider>
        <TamaguiProvider config={config} defaultTheme={theme}>
          <StatusBar style={scheme === 'dark' ? "light" : "dark"} />
          <Navigation />
        </TamaguiProvider>
        </SafeAreaProvider>
      </Provider>
    </GestureHandlerRootView>
  )
}
