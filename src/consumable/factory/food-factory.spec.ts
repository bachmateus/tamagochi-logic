import { Apple } from "../implementations/foods/apple.food";
import { FoodType } from "../types/consumable-type";
import { FoodFactory } from "./food-factory";

describe('FoodFactory', () => {
  let foodFactory: FoodFactory;

  beforeEach(()=> {
    foodFactory = new FoodFactory();
  });

  it('should fail to create a food which doesnt exists', () => {
    try {
      foodFactory.createConsumable('teste' as FoodType)
      expect(true).toBeFalsy();
    } catch(e) {
      expect(e).toBeInstanceOf(Error);
      expect(e.message).toEqual("Food not found");
    }
  });
  
  it('should return an Apple instance', () => {
    const food = foodFactory.createConsumable(FoodType.APPLE);
    expect(food).toBeInstanceOf(Apple)
  })

  it('should return a list of foods', () => {
    const foodsNames = foodFactory.getConsumableNamesList();
    console.log(foodsNames)
    expect(foodsNames).toEqual(Object.values(FoodType))
  });
})