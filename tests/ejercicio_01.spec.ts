import 'mocha'
import { expect } from 'chai'
import { Box } from '../src/ejercicio_01/box'
import { Toys } from '../src/ejercicio_01/toys'
import { Office } from '../src/ejercicio_01/office'
import { Toolkit } from '../src/ejercicio_01/toolkit'
import { Relocations } from '../src/ejercicio_01/relocation'
import { itemsProperties } from '../src/ejercicio_01/interfaces'

describe(`Ejercicio 1 tests`, () => {

  it('proves a box is a box<itemsProperties>', () => {
    let blueBox = new Box<Toys>("Caja azul de jueguetes");
    expect(blueBox).to.be.instanceOf(Box<itemsProperties>);
  });

  it('returns the name of a box', () => {
    let pinkBox = new Box<Toys>("Caja azul de juguetes");
    expect(pinkBox.getName()).to.be.equal("Caja azul de juguetes");
  });

  it('adds many different types of items in a box', () => {
    let redBox = new Box<Office>("Caja roja de objetos de oficina");
    let folios = new Office(2, "folios", 500, "un paquete de folios A4", "nuevo");
    redBox.addItem(folios);
    let muñeca = new Toys(3, "muñeca", 1, "una muñeca personalizable", "roto");
    redBox.addItem(muñeca);
    expect(redBox.searchItem(2)).contain(folios);
    expect(redBox.searchItem(3)).contain(muñeca);
  });

  it('correct search an item from a box', () => {
    let greenBox = new Box<Toolkit>("Caja verde de herramientas");
    let destornillador = new Toolkit(1, "destornillador", 3, "destornilladores de estrella y planos", "usado");
    let guantes = new Toolkit(2, "guantes", 1, "par de guantes rotos", "roto");
    let tornillos = new Toolkit(4, "tornillos", 30, "tornillos de diferentes tamaños", "usado");
    greenBox.addItem(destornillador);
    greenBox.addItem(tornillos);
    expect(greenBox.searchItem(1)).to.be.equal(destornillador);
    expect(greenBox.searchItem(2)).to.be.undefined;
  });

  it('remove an item from a box', () => {
    let yellowBox = new Box<Toolkit>("Caja verde de herramientas");
    let destornillador = new Toolkit(1, "destornillador", 3, "destornilladores de estrella y planos", "usado");
    let guantes = new Toolkit(2, "guantes", 1, "par de guantes rotos", "roto");
    let tijeras = new Office(4, "tijeras", 1, "tijeras de punta redonda", "nuevo");
    yellowBox.addItem(destornillador);
    yellowBox.addItem(tijeras);
    yellowBox.removeItem(4);
    expect(yellowBox).not.include(tijeras);
  });

  it('good calls to the Box methods from Relocations objects', () => {
    let relocationTests = new Relocations();
    let whiteBox = new Box<Office>("Caja blanca de objetos de oficina");
    let blackBox = new Box<Toolkit>("Caja negra de herramientas");
    let guantes = new Toolkit(1, "guantes", 1, "par de guantes rotos", "roto");
    let comba = new Toys(2, "comba", 1, "cuerda para saltar a la comba", "usado");
    let calendario = new Office(3, "calendario", 1, "calendario para anotar por dias", "nuevo");
    
    relocationTests.addItemToBox(calendario,whiteBox)
    expect(whiteBox.searchItem(3)).to.eql(calendario);

    relocationTests.removeItemFromBox(3, whiteBox);
    expect(whiteBox).not.include(calendario);


    relocationTests.addItemToBox(guantes, blackBox);
    const resultSearchGood = relocationTests.searchInBox(1, blackBox);
    expect(resultSearchGood).to.eql(guantes);
    const resultSearchBad = relocationTests.searchInBox(2,blackBox);
    expect(resultSearchBad).to.be.undefined;
  });

});
