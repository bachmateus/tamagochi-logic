import { ConsumeInteractionService } from "../service/consume-interaction.service";
import { ConsumeTypes } from "../types/consume-types";
import { ConsumeFoodService } from '../service/consume-food.service';
import { Character } from "../../../character";
import { ConsumeDrinkService } from "../service/consume-drink.service";

export class ConsumeFactory {
  public static createConsumeService(consumeType: ConsumeTypes, character: Character): ConsumeInteractionService {
    switch (consumeType) {
      case ConsumeTypes.Food: return new ConsumeFoodService(character);
      case ConsumeTypes.Drink: return new ConsumeDrinkService(character);
      default: throw new Error('Consume type not found');
    }
  } 
}