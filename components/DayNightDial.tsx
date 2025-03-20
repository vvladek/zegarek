import { BackgroundKey, backgrounds } from "@/constants/backgrounds"
import { StyleSheet, View } from "react-native"
import { Image } from "expo-image"
import { useContext } from "react"
import { Context } from "@/context/Context"



export default function DayNightDial(): JSX.Element {

  const { dayNightDialBg } = useContext(Context) as { dayNightDialBg: BackgroundKey }


  return (
    <View style={styles.container}>
      <Image
        source={backgrounds[dayNightDialBg]}
        style={styles.image} 
        contentFit="contain"
      />
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    width: "50%",
    height: "50%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#125B9A",
  },
  image: {
    width: "100%",
    height: "100%",
  }
})