import { OpenReader } from "./OpenReader";
import { OpenWriter } from "./OpenWriter";
import { FileReader } from "./FileReader";
import { FileWriter } from "./FileWriter";


// Cliente de las operaciones de lectura y escritura
export class FileManager {
  private fileReader: OpenReader;
  private fileWriter: OpenWriter;

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