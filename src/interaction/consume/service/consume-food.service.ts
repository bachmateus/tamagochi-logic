import { Consumable } from "../../../consumable";
import { ConsumeResponse } from "../types/consume-response";
import { ConsumeInteractionService } from "./consume-interaction.service";

export class ConsumeFoodService extends ConsumeInteractionService {
  public consume(food: Consumable): ConsumeResponse {
    const canEat = this.canConsume(food);
    if (canEat.status){
      this.character.setHungryness(food.feedAmount);
      this.character.setFatness(food.fatAmount);
    }
    return canEat;
  }

  public canConsume(food: Consumable): ConsumeResponse {
    console.log(food)
    const { hungryness } = this.character.getCharacterStatus();
    const isConsumableAvailable = this.character.getFoodsAvailable().some(foodItem => foodItem.id === food.id);
    const doesItFitTheBelly = food.feedAmount + hungryness.value <= hungryness.maxValue;
    const status = isConsumableAvailable && doesItFitTheBelly;
    return {
      status,
      isConsumableAvailable,
      doesItFitTheBelly
    }
  }
}