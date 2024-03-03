/**
 * @interface OpenReader interfaz utilizada 
 * para la operación de lectura de archivos
 */
export interface OpenReader {
  readFile(inputFile: string): string;
}

