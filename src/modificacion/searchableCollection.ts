import { Collectable, Searchable } from "./interfaces";

/**
 * @class SearchableCollection is an abstract generic class that implements the 
 */
export abstract class SearchableCollection<T> implements Collectable<T>, Searchable<T>{
  constructor(private items: T[]){}

  /**
   * addition a new T object to the array
   * @param newItem the new T object to insert
   */ 
  addItem(newItem: T): void {
    this.items.push(newItem);
  }

    /**
   * a function that returns a T object
   * @param index the index of the T object we're searching
   * @returns the item we're looking for 
   */
  removeItem(index: number): void {
    let remove: T = this.getItem(index);
    this.items.pop();
  }

  /**
   * a function that returns a number
   * @param index the index of the number we're searching
   * @returns the item we're looking for 
   */
  getItem(index: number): T {
    return this.items[index];  
  }

  /**
   * a function that return the size of the array
   * @returns the size of the array
   */
  getNumberOfItems(): number {
    return this.items.length;
  }

  abstract search(item: T): T[];
};