import { Consumable } from "../../consumable";

export class Hamburguer implements Consumable {
  id: number = 2;
  name: string = 'Hamburguer';
  feedAmount: number = 4;
  fatAmount: number = 1.5;
}