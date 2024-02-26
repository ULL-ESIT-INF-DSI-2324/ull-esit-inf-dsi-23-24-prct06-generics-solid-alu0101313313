
/**
 * @interface Colecction is a generic interface that defines the properties 
 */
export interface Collectable<T> {
  addItem(newItem: T): void;
  removeItem(index: number): void;
  getItem(index: number): T;
  getNumberOfItems(): number;
}

/**
 * @interface Searchable is a generic interface that defines the properties 
 */
export interface Searchable<T> {
  search(item: T): T[];
}