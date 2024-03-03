import { Factura } from "./factura";
import { formatearFactura } from "./formatearFactura";

/**
 * @class FacturaPDF implementa una factura en formato PDF
 * @brief formatearFactura señala que la factura se va a exportar a PDF
 */
export class FacturaPDF implements formatearFactura {
  generarFactura(factura: Factura): string {
    return `Exportar la factura con id: ${factura.id_} a formato PDF`;
  }
}