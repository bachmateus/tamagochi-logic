import { Food } from "../consumable";
import { SetValuesRequest } from "./types/character.types";

export abstract class Character {
  protected abstract type: string;

  protected hungryness: number = 0;
  protected abstract hungryBarValue: number;
  protected abstract isHungry(): boolean;
  
  protected fatness: number = 0;
  protected foodsAvailable: Food[];
  protected abstract createFoods(): Food[];
  
  constructor(public name: string) {}

  public setHungryness(amount: number) {
    this.hungryness += amount;
  }

  public setFatness(amount: number) {
    this.fatness += amount;
  }

  public setValues(values: SetValuesRequest) {
    if ('hungryness' in values) this.setHungryness(values.hungryness!);
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

  public getFoodsAvailable(): Food[] {
    if (!this.foodsAvailable) this.foodsAvailable = this.createFoods();
    return this.foodsAvailable; 
  };
}