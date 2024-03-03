import 'mocha';
import { expect } from 'chai';
import { Printer } from '../src/ejercicio_04/printer';
import { Scanner } from '../src/ejercicio_04/scanner';
import { PrinterScanner } from '../src/ejercicio_04/printerScanner';

describe('Printer tests', () => {
  it('debe realizar el metodo print y no tirar errores', () => {
    const printer = new Printer();
    expect(() => printer.print()).to.not.throw();
  });

  it('no debe realizar el metodo scan y no tirar errores', () => {
    const printer = new Printer();
    expect(() => printer.scan()).to.not.throw();
  });
});

describe('Scanner tests', () => {
  it('no debe realizar el metodo print y no tirar errores', () => {
    const scanner = new Scanner();
    expect(() => scanner.print()).to.not.throw();
  });

  it('debe realizar el metodo scan y no tirar errores', () => {
    const scanner = new Scanner();
    expect(() => scanner.scan()).to.not.throw();
  });
});


describe('PrinterScanner tests', () => {
  it('debe realizar el metodo print y no tirar errores', () => {
    const printerScanner = new PrinterScanner();
    expect(() => printerScanner.print()).to.not.throw();
  });

  it('debe realizar el metodo scan y no tirar errores', () => {
    const printerScanner = new PrinterScanner();
    expect(() => printerScanner.scan()).to.not.throw();
  });
});



