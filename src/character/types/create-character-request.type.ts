import { CharacterInstances } from "./create-character.types";
import { CustomizedCharacterProps } from "./customized-character-props.type";

export interface CreateCharacterRequest {
  instanceName: CharacterInstances,
  characterName: string,
  customData?: CustomizedCharacterProps
}