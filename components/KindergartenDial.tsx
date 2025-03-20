import { BackgroundKey, backgrounds } from "@/constants/backgrounds"
import { StyleSheet, View } from "react-native"
import { Image } from "expo-image"
import { useContext } from "react"
import { Context } from "@/context/Context"



export default function KindergartenDial(): JSX.Element {

  const { kindergartenDialBg } = useContext(Context) as { kindergartenDialBg: BackgroundKey }


  return (
    <View style={styles.container}>
      <Image
        source={backgrounds[kindergartenDialBg]}
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
    backgroundColor: "#F05A7E",
  },
  image: {
    width: "100%",
    height: "100%",
  }
})