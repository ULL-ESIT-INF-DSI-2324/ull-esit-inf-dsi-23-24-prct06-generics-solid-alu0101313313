import { SearchableCollection } from "./searchableCollection";

/**
 * @class StringSearchableCollection is a derivated class from SearchableCollection class
 * that define his type in string, to add items, get items, and other functions in a string array
 */
export class StringSearchableCollection extends SearchableCollection<string>{
  constructor(private items: string[]){
    super(items);
  }

  /**
   * addition a new string to the array
   * @param newItem the new string to insert
   */ 
  addItem(newItem: string): void {
    this.items.push(newItem);
  }

  /**
   * a function that returns a string
   * @param index the index of the string we're searching
   * @returns the item we're looking for 
   */
  getItem(index: number): string {
    return this.items[index];
  }

  /**
   * a function that return the size of the array
   * @returns the size of the array
   */
  getstringOfItems(): number {
    return this.items.length;
  }

  /**
   * a function that remove a certain item of the array
   * @param index the index of the element to extract
   */
  removeItem(index: number): void {
    this.items.pop();
  }

  /**
   * a function that search how much ocurrences has a string in the array
   * @param item the string to search
   * @returns an array that contains the 
   */
  search(item: string): string[] {
    let result: string[] = [];
    for(let i = 0; i < this.items.length; i++){
      if(this.items[i] === item){
        result.push(this.items[i]);
      }
    }
    return result;
  }
}