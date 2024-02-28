import { itemsProperties } from './interfaces'

export class Box<T extends itemsProperties> {
  private items_: T[] = [];
  public id_: number;
  
  constructor(id: number){
    this.id_ = id;
  }

  addItem(newItem: T): void {
    this.items_.push(newItem);
  }

  getItem(): T[] {
    return this.items_
  }

  removeItem(index: number): void {
    if (index >= 0 && index < this.items_.length) {
      this.items_.splice(index, 1);
    } else {
      console.log("No se ha encontrado el objeto a quitar de la caja.");
    }
  }

  findItem(itemName: string): T | undefined {
    return this.items_.find(item => item.name_ === itemName);
  }
}