import 'mocha';
import { expect } from 'chai';
import { Factura } from '../src/ejercicio_02/factura';
import { FacturaPDF } from '../src/ejercicio_02/facturaPDF';
import { FacturaHTML } from '../src/ejercicio_02/facturaHTML';
import { GestorFacturas } from '../src/ejercicio_02/gestorFacturas'

describe('FacturaHTML', () => {
  it('genera factura en formato HTML', () => {
    const facturaHTML = new FacturaHTML();
    const factura = { id_: 1, date_: "2024-03-03", amount_: 100 };
    const resultado = facturaHTML.generarFactura(factura);
    expect(resultado).to.equal('Exportar la factura con id: 1 a formato HTML');
  });
});

describe('FacturaPDF', () => {
  it('genera factura en formato PDF', () => {
    const facturaPDF = new FacturaPDF();
    const factura = { id_: 2, date_: "2024-03-03", amount_: 200 };
    const resultado = facturaPDF.generarFactura(factura);
    expect(resultado).to.equal('Exportar la factura con id: 2 a formato PDF');
  });
});

describe('GestorFacturas', () => {
  it('genera factura en formato HTML y PDF', () => {
    const facturaHTML = new FacturaHTML();
    const facturaPDF = new FacturaPDF();
    const gestorFacturas = new GestorFacturas([facturaHTML, facturaPDF]);
    const factura = { id_: 3, date_: "2024-03-03", amount_: 300 };
    const resultados = gestorFacturas.generarFactura(factura);
    expect(resultados).to.have.lengthOf(2);
    expect(resultados[0]).to.equal('Exportar la factura con id: 3 a formato HTML');
    expect(resultados[1]).to.equal('Exportar la factura con id: 3 a formato PDF');
  });
});
