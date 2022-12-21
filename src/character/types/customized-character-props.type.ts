import { Food } from "../../consumable"

export interface CustomizedCharacterProps {
  name: string
  type: string
  hungryStartValue: number
  hungryBarValue: number
  foodAvailable: Food[]
}