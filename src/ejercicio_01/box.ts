import { itemsProperties } from './interfaces'

export class Box<T extends itemsProperties> implements itemsProperties {
  private items_: T[] = [];
  public id_: number;
  
  constructor(id: number){
    this.id_ = id;
  }

  addItem(newItem: T): void{
    this.items_.push(newItem);
  }

  getItem(): T[] {
    return this.items_
  }

  
}