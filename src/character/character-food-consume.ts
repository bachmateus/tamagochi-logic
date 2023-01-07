import { Food } from "../consumable";
import { Character } from "./character";
import { EatResponse } from "./types/character.types";

export class CharacterFoodConsume {
  constructor(
    private readonly character: Character,
  ) {}

  public eat(food: Food): EatResponse {
    const canEat = this.canEat(food);
    if (canEat.status){
      this.character.setHungryness(food.feedAmount);
      this.character.setFatness(food.fatAmount);
    }
    return canEat;
  }

  private canEat(food: Food): EatResponse {
    const { hungryness } = this.character.getCharacterStatus();
    const isFoodAvailable = this.character.getFoodsAvailable().some(foodItem => foodItem.id === food.id);
    const doesItFitTheBelly = food.feedAmount + hungryness.value <= hungryness.maxValue;
    const status = isFoodAvailable && doesItFitTheBelly;
    return {
      status,
      isFoodAvailable,
      doesItFitTheBelly
    }
  }
}