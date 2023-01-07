import { Consumable } from "../consumable";
import { Apple } from "../implementations/foods/apple.food";
import { Hamburguer } from "../implementations/foods/hamburguer.food";
import { FoodType } from "../types/consumable-type";
import { ConsumableFactory } from "./consumable-factory";

export class FoodFactory implements ConsumableFactory {
  createConsumable(consumableName: FoodType): Consumable {
    switch (consumableName) {
      case FoodType.APPLE: return new Apple();
      case FoodType.HAMBURGER: return new Hamburguer();
      default: throw new Error("Food not found");
    }
  }

  getConsumableNamesList(): FoodType[] {
    return Object.values(FoodType);
  }
}