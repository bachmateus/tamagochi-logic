import { CharacterFactory, CharacterInstances } from "./character";
// import { CharacterFactory, CharacterInstances } from "./character";
import { PromptUI } from "./example/ui";
import { ConsumeFactory, ConsumeTypes } from "./interaction/consume";

const dino = CharacterFactory.createCharacter({
  characterName: 'Din',
  instanceName: CharacterInstances.DINO
});

// const characterFoodConsume = new CharacterFoodConsume(dino);
const consumeFoodService = ConsumeFactory.createConsumeService(ConsumeTypes.Food, dino);

console.log(Object.values(CharacterInstances));
// console.log(dino);

const promptUI = new PromptUI();

promptUI.showStatusBar(dino);
// promptUI.showInteractionOptions();
// promptUI.showFoodMenu(dino.foodAvailable);
// dino.eat(dino.foodAvailable[0]);
const dinoFoods = dino.getFoodsAvailable();
// console.log(dinoFoods)
consumeFoodService.consume(dinoFoods[0])
// characterFoodConsume.eat(dinoFoods[0]);
promptUI.showStatusBar(dino);
consumeFoodService.consume(dinoFoods[1]);
promptUI.showStatusBar(dino);