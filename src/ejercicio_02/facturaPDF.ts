import { Factura } from "./factura";
import { generacionFactura } from "./interfaces";

/**
 * @class FacturaPDF implementa una factura en formato PDF
 * @brief generarFactura señala que la factura se va a exportar a PDF
 */
export class FacturaPDF implements generacionFactura {
  generarFactura(factura: Factura): string {
    return `Exportar la factura con id: ${factura.id} a formato PDF`;
  }
}