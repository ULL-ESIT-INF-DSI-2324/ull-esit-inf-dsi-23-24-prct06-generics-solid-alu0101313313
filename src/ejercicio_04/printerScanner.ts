import { PrintableScannable } from './printableScannable';

/**
 * @class Printer es una clase impresora
 * que nos permite imprimir y escanear
 */
export class PrinterScanner implements PrintableScannable {
  print(): void {
    console.log('Printing...');
  }

  scan(): void {
    console.log('Scanning...');
  }
}
