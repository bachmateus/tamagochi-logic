import { Consumable } from "../../../consumable";
import { ConsumeResponse } from "../types/consume-response";
import { ConsumeInteractionService } from "./consume-interaction.service";

export class ConsumeDrinkService extends ConsumeInteractionService {
  public consume(drink: Consumable): ConsumeResponse {
    throw new Error("Method not implemented.");
  }

  public canConsume(drink: Consumable): ConsumeResponse {
    throw new Error("Method not implemented.");
  }
}