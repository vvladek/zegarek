import { Context } from "@/context/Context"
import { useContext, useEffect } from "react"



export default function useDialsUpdateTimer() {

  const { setTime, setDayNightDialBg, setKindergartenDialBg, setMotherDialBg } = useContext(Context)

  function normalizeTime(time: number): string {
    return `${time < 10 ? "0" : ""}${time}`
  }

  useEffect(() => {

    function updateTimeAndBackgrounds(): void {
      const date: Date = new Date()
      const hours: number = date.getHours()
      const minutes: number = date.getMinutes()
      const day: number = date.getDay()
      setTime(`${normalizeTime(hours)}:${normalizeTime(minutes)}`)
      if ((hours === 18 && minutes > 29) || hours > 18 || hours < 6) {
        setDayNightDialBg("night")
        setKindergartenDialBg("doubleDoorClosed")
        setMotherDialBg("sleepingKoala")
      }
      else {
        setDayNightDialBg("sun")
        setMotherDialBg((day && day < 6 && hours > 8 && hours < 17) ? "workingCat" : "playingCat")
        setKindergartenDialBg((day && day < 6 && hours > 6 && hours < 17) ? "doubleDoorOpen" : "doubleDoorClosed")
      }
    }

    updateTimeAndBackgrounds()
    const timer: NodeJS.Timeout = setInterval(updateTimeAndBackgrounds, 15000)
    return () => clearInterval(timer)
  }, [])


  
}