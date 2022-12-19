import { Character, Dino } from "../../src/character";
import { Food } from "../../src/consumable";
import { TestFood } from "../helper/character/test.food";

describe('CHARACTER', () => {
  let character: Character
  let testFood: Food
  
  beforeAll(() => {
    testFood = new TestFood();
  });

  beforeEach(() => {
    character = new Dino('TEST CHARACTER')
  });

  it("should fail to eat food if it doesn't fit the belly", () => {
    const { hungryness } = character.getCharacterStatus();
    character.setValues({hungryness: hungryness.maxValue})
    const response = character.eat(character.foodAvailable[0]) 
    expect(response.status).toEqual(false);
    expect(response.doesItFitTheBelly).toEqual(false);
  });
  
  it("should fail to eat food if it doesn't available to the character", () => {
    const response = character.eat(testFood); 
    expect(response.status).toEqual(false);
    expect(response.isFoodAvailable).toEqual(false);
  });

  it("should success to eat a food that is available to the character", () => {
    const characterFoods = character.foodAvailable;
    expect(characterFoods.length).toBeGreaterThan(0); 
    expect(character.eat(characterFoods[0]).status).toEqual(true);
  });

  it("should success to update fatness and hungryness after eat a food", () => {
    const characterFoods = character.foodAvailable;
    const { hungryness, fatness } = character.getCharacterStatus();
    character.eat(characterFoods[0]);
    expect(character.getCharacterStatus().hungryness.value).toBeGreaterThan(hungryness.value);
    expect(character.getCharacterStatus().fatness).toBeGreaterThan(fatness);
  });

});