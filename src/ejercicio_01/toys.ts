import { itemsProperties } from "./interfaces";

/**
 * @class Toys, defines a speficic items
 * in this case, common toys
 */
export class Toys implements itemsProperties{
  id_: number;
  name_: string;
  amount_: number;
  description_: string;
  state_: "nuevo" | "usado" | "roto";
  
  /**
   * the constructor of the class, create an Office's object
   * @param id the identifier of the item
   * @param name the name of the object
   * @param amount it says how much items are
   * @param description it tells a few words about the item
   * @param state has 3 values and says his current state
   */
  constructor(
    id: number,
    name: string,
    amount: number,
    description: string,
    state: "nuevo" | "usado" | "roto"
  ){
    this.id_ = id;
    this.name_ = name;
    this.state_ = state
    this.amount_ = amount;
    this.description_ = description;
  }
}