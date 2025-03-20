import * as SplashScreen from "expo-splash-screen"
import { useFonts } from "expo-font"
import { useEffect } from "react"
import { ContextProvider } from "@/context/ContextProvider"
import { StatusBar } from "expo-status-bar"
import { Stack } from "expo-router"



SplashScreen.preventAutoHideAsync();



export default function RootLayout(): JSX.Element | null {

  const [loaded]: [boolean, Error | null] = useFonts({
    MontserratBold: require("@/assets/fonts/Montserrat-Bold.ttf")
  })

  useEffect(() => {
    if (loaded) SplashScreen.hideAsync()
  }, [loaded])

  if (!loaded) return null


  return (
    <ContextProvider>
      <StatusBar hidden={true} />
      <Stack screenOptions={{ headerShown: false }} />
    </ContextProvider>
  )
}
