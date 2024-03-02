import { Box } from "./box"
import { Toys } from "./toys";
import { Office } from "./office";
import { Toolkit } from "./toolkit";
import { Relocations } from "./relocation"
import { itemsProperties } from "./interfaces";

/**
 * declaration of a relocation object.
 * it allows us to manage the items and the boxes
 */
const location = new Relocations<itemsProperties>();

/**
 * the differents boxes to save objects in it
 */
const cajaOficina = new Box<Office>("Caja de oficina");
const cajaJueguetes = new Box<Toys>("Caja de Juguetes");
const cajaHerramientas = new Box<Toolkit>("Caja de herramientas");

/**
 * the differents objects to sort in the boxes
 */
const auriculares = new Office(1, "auriculares", 1, "una mochila vacía", "nuevo");
const balones = new Toys(2, "balon baloncesto", 2, "un balon desinflado", "usado");
const destronilladores = new Toolkit(3, "destornillador", 3, "tres destornilladores", "roto");
const boligrafos = new Office(4, "boligrafos", 4, "un puñado de boligrafos medio gastados", "usado");
const guantes = new Toys(5, "guantes de baseball", 2, "un par de guantes desgastados", "usado"); 

/**
 * the differents methods to manage boxes and items:
 * - addItemBox():        add an item in a box
 * - searchItemToBox():   search an item in a box
 * - listItemsInBox():    list the items inside a box
 * - removeItemFromBox(): remove an item inside a box 
 */
location.addItemToBox(auriculares, cajaOficina);
location.addItemToBox(boligrafos, cajaOficina);
location.addItemToBox(balones, cajaJueguetes);
location.addItemToBox(destronilladores, cajaHerramientas);
location.addItemToBox(guantes, cajaHerramientas);

location.searchInBox(2,cajaHerramientas);

location.listItemsInBox(cajaOficina);

location.removeItemFromBox(1, cajaOficina);









