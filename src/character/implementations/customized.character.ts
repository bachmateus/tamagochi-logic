import { Food } from "../../consumable";
import { Character } from "../character";
import { CustomizedCharacterProps } from "../types/customized-character-props.type";

export class CustomizedCharacter extends Character {
  protected type: string;
  protected hungryBarValue: number;
  private hungryStartValue: number;

  constructor(props: CustomizedCharacterProps) {
    super(props.name);
    
    this.type = props.type;
    this.hungryStartValue = props.hungryStartValue;
    this.hungryBarValue = props.hungryBarValue;
    this.foodAvailable = props.foodAvailable;
  }

  protected isHungry(): boolean {
    return this.hungryness < this.hungryStartValue;
  }
  protected getFoodAvailable(): Food[] {
    return this.foodAvailable;
  }

}