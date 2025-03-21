import React, { useState, ReactNode } from "react"
import { Context } from "./Context"



export function ContextProvider({ children }: { children: ReactNode }) {

  const [state, setState] = useState<{
    time: string;
    dayNightDialBg: string;
    kindergartenDialBg: string;
    motherDialBg: string;
  }>({
    time: "00:00",
    dayNightDialBg: "night",
    kindergartenDialBg: "doubleDoorClosed",
    motherDialBg: "sleepingKoala"
  })


  function setTime(time: string): void {
    setState((prevState) => ({ ...prevState, time }))
  }

  function setDayNightDialBg(dayNightDialBg: string): void {
    setState((prevState) => ({ ...prevState, dayNightDialBg }))
  }

  function setKindergartenDialBg(kindergartenDialBg: string): void {
    setState((prevState) => ({ ...prevState, kindergartenDialBg }))
  }

  function setMotherDialBg(motherDialBg: string): void {
    setState((prevState) => ({ ...prevState, motherDialBg }))
  }


  return (
    <Context.Provider value={{ ...state, setTime, setDayNightDialBg, setKindergartenDialBg, setMotherDialBg }}>
      {children}
    </Context.Provider>
  )
}
