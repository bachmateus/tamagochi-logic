import { Dino } from "./character";
import { PromptUI } from "./example/ui";

const dino = new Dino('Din');
const promptUI = new PromptUI();

promptUI.showStatusBar(dino);
promptUI.showInteractionOptions();
promptUI.showFoodMenu(dino.foodAvailable);
dino.eat(dino.foodAvailable[0]);
promptUI.showStatusBar(dino);