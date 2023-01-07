import { Consumable } from "../consumable";
import { ConsumableType } from "../types/consumable-type";

export interface ConsumableFactory {
  createConsumable(consumableName: ConsumableType): Consumable
  getConsumableNamesList(): ConsumableType[]
}