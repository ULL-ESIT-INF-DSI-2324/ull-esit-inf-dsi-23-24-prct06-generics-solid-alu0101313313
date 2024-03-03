/**
 * @interface Factura, implementa un factura con sus atributos
 * implementados desde la interfaz `propiedadesFactura`
 * @param id_ señala el identificador de la factura
 * @param date_ señala la fecha de creación de la factura
 * @param amount_ señala de hojas de factura
 */
export interface Factura {
  id_: number;
  date_: string;
  amount_: number;
}