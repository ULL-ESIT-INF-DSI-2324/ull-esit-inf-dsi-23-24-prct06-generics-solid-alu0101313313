
/**
 * @interface OpenWriter interfaz utilizada 
 * para la operación de escritura de archivos
 */
export interface OpenWriter {
  writeFile(filePath: string, data: string): void;
}