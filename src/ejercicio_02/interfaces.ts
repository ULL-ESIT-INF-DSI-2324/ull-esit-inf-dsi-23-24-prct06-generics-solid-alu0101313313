import { Factura } from "./factura";

/**
 * @interface formatearFactura es una interfaz 
 * que añade a las clases `FacturaPDF` y `FacturaHTML` 
 * un metodo que permite exportar las facturas a dicho formato 
 */
export interface formatearFactura {
  generarFactura(factura: Factura): string;
}