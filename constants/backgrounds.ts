import { ImageSourcePropType } from "react-native"



export type BackgroundKey = 
  | "sun"
  | "night"
  | "doubleDoorClosed"
  | "doubleDoorOpen"
  | "playingCat"
  | "workingCat"
  | "sleepingKoala"



export const backgrounds: Record<BackgroundKey, ImageSourcePropType> = {
  sun: require("@/assets/images/sun.webp"),
  night: require("@/assets/images/night.webp"),
  doubleDoorClosed: require("@/assets/images/double-door-closed.webp"),
  doubleDoorOpen: require("@/assets/images/double-door-open.webp"),
  playingCat: require("@/assets/images/playing-cat.webp"),
  workingCat: require("@/assets/images/working-cat.webp"),
  sleepingKoala: require("@/assets/images/sleeping-koala.webp"),
}