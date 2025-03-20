import { backgrounds } from "@/constants/backgrounds";
import { useState } from "react";
import { ImageBackground, StyleSheet, View, Dimensions, Text, ImageSourcePropType } from "react-native";



export default function DayNightDial({ ...props }): JSX.Element {

  const [bgImg, setBgImg] = useState<ImageSourcePropType>(backgrounds.sleeping);
  
  return (
    <ImageBackground
      source={bgImg}
      style={{width: props.width, height: props.height, ...styles.imageBackground}}
      resizeMode="center"
    >

    </ImageBackground>
  )
};


const styles = StyleSheet.create({
  imageBackground: {
    backgroundColor: "#125B9A",
    justifyContent: "center",
    alignItems: "center",
  }
});