import { Context } from "@/context/Context"
import { useContext } from "react"
import { StyleSheet, View, Text, Dimensions } from "react-native"



const { width: SCREEN_WIDTH } = Dimensions.get("window")



export default function TimeDial(): JSX.Element {

  const { time } = useContext(Context)

  
  return (
    <View style={styles.container}>
      <Text style={styles.time}>{time}</Text>
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    width: "50%",
    height: "50%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0B8494",
  },
  time: {
    width: "100%",
    textAlign: "center",
    fontFamily: "MontserratBold",
    fontSize: SCREEN_WIDTH * 0.1,
    color: "#FFFFFF",
  }
})