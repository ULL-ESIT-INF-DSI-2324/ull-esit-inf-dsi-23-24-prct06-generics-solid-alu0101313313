import { itemsProperties } from './interfaces'

/**
 * @class Box, is a generic class that has type in itemsproperties
 *        and defines attributes and methods for each box that contains items
 */
export class Box<T extends itemsProperties> {
  private items_: T[] = [];
  private name_: string;
  
  /**
   * the constructor of the class
   * @param name defines the name of the class
   */
  constructor(name: string){
    this.items_ = [];
    this.name_ = name;
  }

  /**
   * is a getter for the name's box 
   * @returns the name of a box
   */
  getName(): string{
    return this.name_;
  }

  /**
   * add an item to a box
   * @param newItem 
   */
  addItem(newItem: T): void {
    this.items_.push(newItem);
  }

  /**
   * finds if an item is in the box 
   * @param id tthe identifier of the object to find
   * @returns the object if it's inside the box, undefined otherwise
   */
  searchItem(id: number): T | undefined {
    return this.items_.find(item => item.id_ === id);
  }

  /**
   * a function that remove an item inside of the box
   * @param index the index of the object position in the box
   */
  removeItem(index: number): void {
    if (index >= 0 && index < this.items_.length) {
      this.items_.splice(index, 1);
    } else {
      console.log("No se ha encontrado el objeto a quitar de la caja.");
    }
  }

  /**
   * it lists the items inside the box 
   * and their properties in a table output 
   */
  listItems(): void {
    console.table(this.items_);
  }
}
