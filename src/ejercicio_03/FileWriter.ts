import { OpenWriter } from "./OpenWriter";
import * as fs from 'fs';

/**
 * @class FileWriter es una clase que implementa
 * la escritura de archivos
 */
export class FileWriter implements OpenWriter {
  public writeFile(filePath: string, data: string): void {
    try {
      fs.writeFileSync(filePath, data, 'utf-8');
      console.log('Archivo escrito exitosamente.');
    } catch (error) {
      console.error('Error al escribir en el archivo:', error.message);
    }
  }
}