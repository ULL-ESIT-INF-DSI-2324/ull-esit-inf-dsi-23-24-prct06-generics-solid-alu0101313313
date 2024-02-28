import { itemsProperties } from "./interfaces";

export class Item implements itemsProperties{
  id_: number;
  name_: string;
  amount_: number;
  description_: string;
  constructor(
    id: number,
    name: string,
    amount: number,
    description: string,
  ){
    this.id_ = id;
    this.name_ = name;
    this.amount_ = amount;
    this.description_ = description;
  }
}

