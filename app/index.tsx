import { ImageBackground, StyleSheet, View, Dimensions, Text, ImageSourcePropType } from "react-native";
import { StatusBar } from "expo-status-bar";
import { BlurView } from "expo-blur";
import { useEffect, useState } from "react";
import { backgrounds } from "@/constants/backgrounds";



const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");



export default function HomeScreen(): JSX.Element {

  const [time, setTime] = useState<string>("10:10");
  const [bgImg, setBgImg] = useState<ImageSourcePropType>(backgrounds.sleeping);

  function normalizeTime(time: number): string {
    return `${time < 10 ? "0" : ""}${time}`;
  }

  useEffect(() => {
    function updateTimeAndBackground(): void {
      const date: Date = new Date();
      const hours: number = date.getHours();
      const minutes: number = date.getMinutes();
      setTime(`${normalizeTime(hours)}:${normalizeTime(minutes)}`);
      if ((hours >= 18 && minutes > 30) || hours > 19 || hours < 6) setBgImg(backgrounds.sleeping);
      else if (hours > 5 && hours < 7) setBgImg(backgrounds.closedDoors);
      else if (hours > 6 && hours < 10) setBgImg(backgrounds.openDoors);
      else setBgImg(backgrounds.playing);
    }
    updateTimeAndBackground();
    const timer = setInterval(updateTimeAndBackground, 60000);
    return () => clearInterval(timer);
  }, []);


  return (
    <ImageBackground
      source={bgImg}
      style={styles.imageBackground}
    >
      <StatusBar translucent={true} style="auto" />
      <View style={styles.container}>
        <BlurView style={styles.timeContainer} intensity={35} >
          <Text style={styles.time}>{time}</Text>
        </BlurView>
      </View>
    </ImageBackground>
  );
}


const styles = StyleSheet.create({
  imageBackground: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    position: "absolute",
    top: 0,
  },
  container: {
    width: "100%",
    height: "100%",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    padding: 50,
  },
  timeContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  time: {
    fontFamily: "MontserratBold",
    fontSize: SCREEN_WIDTH / 10,
    fontWeight: "bold",
    color: "#ffffff",
    textShadowColor: "#000000",
    textShadowRadius: 25,
    paddingVertical: 25,
    paddingHorizontal: 75,
  },
});
