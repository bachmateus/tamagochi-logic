import { Dino } from "./character";
import { CharacterCreator } from "./character/character.factory";
import { CharacterInstances } from "./character/types/create-character.types";
import { PromptUI } from "./example/ui";

const dino = CharacterCreator.createCharacter({
  characterName: 'Din',
  instanceName: CharacterInstances.DINO
});

console.log(Object.values(CharacterInstances));
// console.log(dino);

// const promptUI = new PromptUI();

// promptUI.showStatusBar(dino);
// promptUI.showInteractionOptions();
// promptUI.showFoodMenu(dino.foodAvailable);
// dino.eat(dino.foodAvailable[0]);
// promptUI.showStatusBar(dino);