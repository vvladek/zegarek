import { ImageBackground, StyleSheet, View, Dimensions, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { BlurView } from "expo-blur";
import { useEffect, useState } from "react";
import { backgrounds } from "@/constants/backgrounds";


const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");


export default function HomeScreen() {

  const [time, setTime] = useState<string>("10:10");
  const [bgImg, setBgImg] = useState(backgrounds.sleeping);

  function normalizeTime(time: number) {
    return `${time < 10 ? "0" : ""}${time}`
  }


  useEffect(() => {

    const timer = setInterval(() => {
      const date = new Date();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      setTime(`${normalizeTime(hours)}:${normalizeTime(minutes)}`);
      if (hours > 18 && hours < 6) setBgImg(backgrounds.sleeping);
      else if (hours >= 6 && hours < 7) setBgImg(backgrounds.closedDoors);
      else if (hours >= 7 && hours < 9) setBgImg(backgrounds.openDoors);
      else setBgImg(backgrounds.playing);
    }, 1000);

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
    fontSize: SCREEN_WIDTH / 8,
    fontWeight: "bold",
    color: "#ffffff",
    textShadowColor: "#000000",
    textShadowRadius: 25,
    paddingVertical: 25,
    paddingHorizontal: 75,
  },
});
