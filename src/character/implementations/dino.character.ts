import { Apple, Food, Hamburguer } from "../../consumable";
import { Character } from "../character";

export class Dino extends Character {
  protected type: string = 'Dino';
  protected hungryBarValue: number = 15;
  
  protected isHungry(): boolean {
    return (this.hungryness < this.hungryBarValue / 3);
  }

  protected createFoods(): Food[] {
    return [
      new Apple(),
      new Hamburguer(),
    ]
  }
}