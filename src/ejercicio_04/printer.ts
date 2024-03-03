import { PrintableScannable } from './printableScannable';

/**
 * @class Printer es una clase impresora
 * que nos permite imprimir y se queja de escanear
 */
export class Printer implements PrintableScannable {
  print(): void {
    console.log('Printing...');
  }

  scan(): void {
    console.log('Cannot scan. Printer only.');
  }
}