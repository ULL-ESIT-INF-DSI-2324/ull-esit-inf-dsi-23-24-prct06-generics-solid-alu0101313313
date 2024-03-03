import { Printer } from './printer';
import { Scanner } from './scanner';
import { PrinterScanner } from './printerScanner';

const printer = new Printer();
printer.print();

const scanner = new Scanner();
scanner.scan();

const printerScanner = new PrinterScanner();
printerScanner.print();
printerScanner.scan();
