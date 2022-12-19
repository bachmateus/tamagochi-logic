import { Apple, Food } from "../../consumable";
import { Character } from "../character";

export class Dino extends Character {
  protected type: string = 'Dino';
  protected hungryBarValue: number = 5;
  
  protected isHungry(): boolean {
    return (this.hungryness < this.hungryBarValue / 3);
  }

  protected getFoodAvailable(): Food[] {
    return [
      new Apple(),
    ]
  }
}