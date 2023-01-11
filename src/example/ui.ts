import { Character } from "../character"
import { Consumable } from "../consumable"

export interface UI {
  showStatusBar(character: Character): void
  showInteractionOptions(): void
  showFoodMenu(foods: Consumable[]): void
}

export class PromptUI implements UI {
  showStatusBar(character: Character): void {
    console.log(`${'name'.padEnd(10)} | ${'hungryness'.padEnd(10)} | ${'fatness'.padEnd(7)}`);
    console.log(`${character.name.padEnd(10)} | ${character.getCharacterStatus().hungryness.value.toString().padEnd(10)} | ${character.getCharacterStatus().fatness.toString().padEnd(7)}`);
    this.enterBar();
  }
  showInteractionOptions(): void {
    console.log('***** SELECT ONE OPTION ****');
    console.log('1 - Eat some food');
    this.enterBar();
  }
  showFoodMenu(foods: Consumable[]): void {
    console.log('***** FOOD MENU ****');
    foods.forEach( food => {
      console.log(`${food.id} - ${food.name} - ${food.feedAmount} - ${food.fatAmount}`)
    })
    this.enterBar();
  }
  enterBar() { 
    console.log('\n'); 
  };
}