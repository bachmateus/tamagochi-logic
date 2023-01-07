import { CharacterCreator } from "./character";
import { CharacterFoodConsume } from "./character/character-food-consume";
import { CharacterInstances } from "./character/types/create-character.types";
import { PromptUI } from "./example/ui";

const dino = CharacterCreator.createCharacter({
  characterName: 'Din',
  instanceName: CharacterInstances.DINO
});

const characterFoodConsume = new CharacterFoodConsume(dino);

console.log(Object.values(CharacterInstances));
// console.log(dino);

const promptUI = new PromptUI();

promptUI.showStatusBar(dino);
// promptUI.showInteractionOptions();
// promptUI.showFoodMenu(dino.foodAvailable);
// dino.eat(dino.foodAvailable[0]);
const dinoFoods = dino.getFoodsAvailable();
characterFoodConsume.eat(dinoFoods[0]);
promptUI.showStatusBar(dino);
characterFoodConsume.eat(dinoFoods[1]);
promptUI.showStatusBar(dino);