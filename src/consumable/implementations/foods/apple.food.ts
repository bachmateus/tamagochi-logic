import { Consumable } from "../../consumable";

export class Apple implements Consumable {
  id: number = 1;
  name: string = 'Apple';
  feedAmount: number = 2;
  fatAmount: number = 0.5;
}