import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { Stack } from "expo-router";


SplashScreen.preventAutoHideAsync();


export default function RootLayout() {

  const [loaded] = useFonts({
    MontserratBold: require("@/assets/fonts/Montserrat-Bold.ttf"),
  });


  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }


  return (
    <Stack screenOptions={{ headerShown: false }} />
  );
}
