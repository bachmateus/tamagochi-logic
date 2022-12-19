import { Food } from "../../../src/consumable";

export class TestFood implements Food {
  id: number = 0;
  name: string = 'Test Food';
  feedAmount: number = 2;
  fatAmount: number = 1;
}