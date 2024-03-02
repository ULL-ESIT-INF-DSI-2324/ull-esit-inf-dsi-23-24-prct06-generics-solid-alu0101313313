import { Factura } from "./factura";
import { generacionFactura } from "./interfaces";

/**
 * @class FacturaHTML implementa una factura en formato HTML
 * @brief generarFactura señala que la factura se va a exportar a HTML
 */
export class FacturaHTML implements generacionFactura {
  generarFactura(factura: Factura): string {
    return `Exportar la factura con id: ${factura.id} a formato HTML`;
  }
}