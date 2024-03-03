import { Factura } from "./factura";
import { formatearFactura } from "./formatearFactura";

/**
 * @class FacturaHTML implementa una factura en formato HTML
 * @brief formatearFactura señala que la factura se va a exportar a HTML
 */
export class FacturaHTML implements formatearFactura {
  generarFactura(factura: Factura): string {
    return `Exportar la factura con id: ${factura.id_} a formato HTML`;
  }
}