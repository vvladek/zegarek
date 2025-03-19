import { useFonts } from "expo-font";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { Stack } from "expo-router";


SplashScreen.preventAutoHideAsync();


export default function RootLayout(): JSX.Element | null {

  const [loaded]: [boolean, Error | null] = useFonts({
    MontserratBold: require("@/assets/fonts/Montserrat-Bold.ttf")
  });

  useEffect(() => {
    if (loaded) SplashScreen.hideAsync();
  }, [loaded]);

  if (!loaded) return null;


  return (
    <Stack screenOptions={{ headerShown: false }} />
  );
}
