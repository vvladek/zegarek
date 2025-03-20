import { createContext } from "react"



export interface IContext {
  time: string;
  dayNightDialBg: string;
  kindergartenDialBg: string;
  motherDialBg: string;
  setTime: (time: string) => void;
  setDayNightDialBg: (bgImg: string) => void;
  setKindergartenDialBg: (bgImg: string) => void;
  setMotherDialBg: (bgImg: string) => void;
}

export const Context = createContext<IContext>({
  time: "00:00",
  dayNightDialBg: "night",
  kindergartenDialBg: "doubleDoorClosed",
  motherDialBg: "sleepingKoala",
  setTime: () => {},
  setDayNightDialBg: () => {},
  setKindergartenDialBg: () => {},
  setMotherDialBg: () => {},
})