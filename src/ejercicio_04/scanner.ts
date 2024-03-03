import { PrintableScannable } from './printableScannable';

/**
 * @class Printer es una clase impresora
 * que nos permite escanear y se queja de imprimir
 */
export class Scanner implements PrintableScannable {
  print(): void {
    console.log('Cannot print. Scanner only.');
  }

  scan(): void {
    console.log('Scanning...');
  }
}