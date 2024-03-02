import { Factura } from './factura';
import { FacturaPDF } from './facturaPDF';
import { FacturaHTML } from './facturaHTML';

const factura_1 = new Factura(121, "23-12-2001", 5);
const factura_2 = new FacturaPDF;
const factura_3 = new FacturaHTML;

const FacturaFormatoPDF: string = factura_2.generarFactura(factura_1);
const FacturaFormatoHTML: string = factura_3.generarFactura(factura_1);

console.log(FacturaFormatoPDF);
console.log(FacturaFormatoHTML);