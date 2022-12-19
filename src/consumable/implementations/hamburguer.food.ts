import { Food } from "../food";

export class Hamburguer implements Food {
  id: number = 2;
  name: string = 'Hamburguer';
  feedAmount: number = 24;
  fatAmount: number = 1.5;
}