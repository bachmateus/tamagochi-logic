import { Food } from "../food";

export class Apple implements Food {
  id: number = 1;
  name: string = 'Apple';
  feedAmount: number = 2;
  fatAmount: number = 0.5;
}