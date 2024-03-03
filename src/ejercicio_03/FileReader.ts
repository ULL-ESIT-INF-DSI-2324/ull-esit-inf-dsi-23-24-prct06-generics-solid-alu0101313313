import {OpenReader} from './OpenReader'
import * as fs from 'fs';

/**
 * @class FileReader es una clase que implementa
 * la lectura de archivos
 */
export class FileReader implements OpenReader {
  public readFile(filePath: string): string {
    try {
      const content: string = fs.readFileSync(filePath, 'utf-8');
      return content;
    } catch (error) {
      console.error('Error al leer el archivo:', error.message);
      return '';
    }
  }
}