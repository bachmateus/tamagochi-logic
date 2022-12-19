import { Food } from "../consumable";
import { EatResponse, SetValuesRequest } from "./types/character.types";

export abstract class Character {
  protected abstract type: string;

  protected hungryness: number = 0;
  protected abstract hungryBarValue: number;
  protected abstract isHungry(): boolean;
  
  protected fatness: number = 0;
  public foodAvailable: Food[];
  protected abstract getFoodAvailable(): Food[];
  
  constructor(public name: string) {
    this.foodAvailable = this.getFoodAvailable();
  }

  private setHungryness(amount: number) {
    this.hungryness += amount;
  }

  private setFatness(amount: number) {
    this.fatness += amount;
  }

  public setValues(values: SetValuesRequest) {
    if ('hungryness' in values) this.setHungryness(values.hungryness!);
  }

  public eat(food: Food): EatResponse {
    const canEat = this.canEat(food);
    if (canEat.status){
      this.setHungryness(food.feedAmount);
      this.setFatness(food.fatAmount);
    }
    return canEat;
  }

  private canEat(food: Food): EatResponse {
    const isFoodAvailable = this.foodAvailable.some(foodItem => foodItem.id === food.id);
    const doesItFitTheBelly = food.feedAmount + this.hungryness <= this.hungryBarValue;
    const status = isFoodAvailable && doesItFitTheBelly;
    return {
      status,
      isFoodAvailable,
      doesItFitTheBelly
    }
  }

  public getCharacterStatus() {
    return {
      hungryness: {
        value: this.hungryness,
        maxValue: this.hungryBarValue
      },

      fatness: this.fatness,
      isHungry: this.isHungry(),
    }
  }
}