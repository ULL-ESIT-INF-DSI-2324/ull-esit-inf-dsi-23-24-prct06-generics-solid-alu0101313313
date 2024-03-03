import * as fs from 'fs';

// Interfaz para la operación de lectura de archivos
interface IFileReader {
  readFile(filePath: string): string;
}

// Implementación de la operación de lectura de archivos
class FileReader implements IFileReader {
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

// Interfaz para la operación de escritura de archivos
interface IFileWriter {
  writeFile(filePath: string, data: string): void;
}

// Implementación de la operación de escritura de archivos
class FileWriter implements IFileWriter {
  public writeFile(filePath: string, data: string): void {
    try {
      fs.writeFileSync(filePath, data, 'utf-8');
      console.log('Archivo escrito exitosamente.');
    } catch (error) {
      console.error('Error al escribir en el archivo:', error.message);
    }
  }
}

// Cliente de las operaciones de lectura y escritura
class FileManager {
  private fileReader: IFileReader;
  private fileWriter: IFileWriter;

  constructor(private filePath: string) {
    this.fileReader = new FileReader();
    this.fileWriter = new FileWriter();
  }

  // Lee el archivo utilizando la implementación de IFileReader
  public readFile(): string {
    return this.fileReader.readFile(this.filePath);
  }

  // Escribe en el archivo utilizando la implementación de IFileWriter
  public writeFile(data: string): void {
    this.fileWriter.writeFile(this.filePath, data);
  }
}

// Cliente code
const fileManager = new FileManager('example.txt');

// Leyendo contenido
const currentContent = fileManager.readFile();
console.log('Contenido actual:', currentContent);

// Escribiendo contenido
const newData = 'Este es un nuevo contenido que será escrito en el archivo.';
fileManager.writeFile(newData);

// Actualizando contenido
const updatedContent = fileManager.readFile();
console.log('Contenido actualizado:', updatedContent);
