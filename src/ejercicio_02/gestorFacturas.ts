import { Factura } from "./factura";
import { formatearFactura } from "./interfaces";

/**
 * @class GestorFacturas es una clase que nos permite almacenar y generar facturas
 */
export class GestorFacturas {
  private gestor_: formatearFactura[];

  constructor(gestor: formatearFactura[]){
    this.gestor_ = gestor;
  }

  /**
   * una funcion que se encarga de generar facturas
   * @param factura la factura que vamos a generar segun su formato
   * @returns devuelve un conjunto de facturas formateadas
   */
  generarFactura(factura: Factura): string[] {
    return this.gestor_.map((gestion) => gestion.generarFactura(factura));
  }  
}