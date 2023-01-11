import { Character } from '../../../character';
import { Consumable } from '../../../consumable';
import { ConsumeResponse } from '../types/consume-response';

export abstract class ConsumeInteractionService {
  constructor(protected character: Character){}
  public abstract consume(consumable: Consumable): ConsumeResponse
  public abstract canConsume(consumable: Consumable): ConsumeResponse
}