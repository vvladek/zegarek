import { BackgroundKey, backgrounds } from "@/constants/backgrounds"
import { StyleSheet, View } from "react-native"
import { Image } from "expo-image"
import { useContext } from "react"
import { Context } from "@/context/Context"



export default function MotherDial(): JSX.Element {

  const { motherDialBg } = useContext(Context) as { motherDialBg: BackgroundKey}


  return (
    <View style={styles.container}>
      <Image
        source={backgrounds[motherDialBg]}
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
    backgroundColor: "#FFBE98",
  },
  image: {
    width: "100%",
    height: "100%",
  }
})