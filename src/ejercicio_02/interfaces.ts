import { Factura } from "./factura";

/**
 * @interface Factura, es una interfaz 
 * que define los atributos de las facturas
 */
export interface propiedadesFactura {
  id_: number;
  date_: string;
  amount_ : number;
}

/**
 * @interface generacionFactura es una interfaz 
 * que añade a las clases `FacturaPDF` y `FacturaHTML` 
 * un metodo que permite exportar las facturas a dicho formato 
 */
export interface generacionFactura {
  generarFactura(factura: Factura): string;
}