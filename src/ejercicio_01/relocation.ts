import { Box } from "./box";
import { itemsProperties } from "./interfaces";

/**
 * @class Relocations, it helps to the management 
 *        between boxes and items
 */
export class Relocations<T extends itemsProperties> {

  /**
   * add an item to a box from the manager
   * @param newItem_ the item to insert
   * @param case_ the box where the item is insert
   */
  addItemToBox(newItem_: T, case_: Box<T>): void {
    case_.addItem(newItem_);
    console.log(`${newItem_.name_} se ha añadido correctamente en la caja '${case_.getName()}'`);
  }

  /**
   * remove a item from a box if it was there first from the manager
   * @param id the identifier of the item to remove
   * @param case_ the box to find the item
   * @returns true if the extraccion was correct, false otherwise
   */
  removeItemFromBox(id: number, case_: Box<T>): boolean {
    if(case_.searchItem(id) != undefined){
      case_.removeItem(id);
      console.log(`El objeto con identificador ${id} se ha eliminado correctamente de '${case_.getName()}'`);
      return true;
    } else {
      console.log(`El objeto con identificdor ${id} no se ha encontrado en '${case_.getName()}'`);
      return false;
    }
  }

  /**
   * list the items inside a box from the manager
   * @param case_ the box to list items
   */
  listItemsInBox(case_: Box<T>): void {
    console.log("Objetos contenidos en la caja:");
    case_.listItems();
  }

  /**
   * finds an item inside a box from the manager
   * @param id the identifier of the item
   * @param case_ the box to find
   * @returns the object in case true, undefined otherwise
   */
  searchInBox(id: number, case_: Box<T>): T | undefined {
    if(case_.searchItem(id) != undefined){
      return case_.searchItem(id);
    } else {
      console.log(`No se ha encontrado el objeto con id: ${id} en '${case_.getName()}'`);
      return undefined;
    }
  }
}
