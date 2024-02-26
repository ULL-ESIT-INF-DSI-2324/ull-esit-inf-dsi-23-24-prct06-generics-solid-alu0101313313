import { SearchableCollection } from "./searchableCollection";

/**
 * @class NumericSearchableCollection is a derivated class from SearchableCollection class
 * that define his type in number, to add items, get items, and other functions in a number array
 */
export class NumericSearchableCollection extends SearchableCollection<number>{
  constructor(private items: number[]){
    super(items);
  }

  /**
   * a function that search how much ocurrences has a number in the array
   * @param item the number to search
   * @returns an array that contains the 
   */
  search(item: number): number[] {
    let result: number[] = [];
    for(let i = 0; i < this.items.length; i++){
      if(this.items[i] === item){
        result.push(i);
      }
    }
    return result;
  }
}