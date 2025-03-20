import { View } from "react-native"
import { DayNightDial, KindergartenDial, MotherDial, TimeDial } from "@/components"
import useDialsUpdateTimer from "@/hooks/useDialsUpdateTimer"



export default function HomeScreen(): JSX.Element {

  useDialsUpdateTimer()


  return (
    <View style={{
      flex: 1,
      flexDirection: "row",
      flexWrap: "wrap"
    }}>
      <DayNightDial />
      <KindergartenDial />
      <MotherDial />
      <TimeDial />
    </View>
  )
}
