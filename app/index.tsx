import { ImageBackground, StyleSheet, View, Dimensions } from "react-native";
import { StatusBar } from 'expo-status-bar';


const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");


export default function HomeScreen() {
  return (
    <ImageBackground
      source={require("@/assets/images/sleeping.webp")}
      style={styles.imageBackground}
    >
      <StatusBar translucent={true} />
      <View style={styles.container}></View>

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
    // width: "100%",
    // height: "100%",
    // flex: 1,
  },
});
