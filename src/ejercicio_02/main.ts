import { Factura } from './factura';
import { FacturaPDF } from './facturaPDF';
import { FacturaHTML } from './facturaHTML';
import { GestorFacturas } from './gestorFacturas';

const factura: Factura = {id_ :121, date_: "23-12-2001", amount_: 5};
const gestor = new GestorFacturas([new FacturaPDF, new FacturaHTML])

let printFacturas: string[] = gestor.generarFactura(factura);

printFacturas.forEach((factura_formateada) => console.log(factura_formateada));