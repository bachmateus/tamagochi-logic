import { Character } from "./character";
import { CustomizedCharacter } from "./implementations/customized.character";
import { Dino } from "./index";
import { CreateCharacterRequest } from "./types/create-character-request.type";
import { CharacterInstances } from "./types/create-character.types";

export class CharacterCreator {
  static createCharacter(request: CreateCharacterRequest): Character {
    switch (request.instanceName) {
      case CharacterInstances.DINO: return new Dino(request.characterName);
      case CharacterInstances.CUSTOM: return new CustomizedCharacter(request?.customData!);
    }
  }
}