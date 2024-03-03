import { FileManager } from './FileManager'
7
const fileManager = new FileManager('./src/ejercicio_03/ejemplo.txt');

const contenidoActual = fileManager.readFile();
console.log('Contenido Actual: ', contenidoActual);

const contenidoAEscribir = 'Este es un nuevo contenido que sera escrito en el archivo';
fileManager.writeFile(contenidoAEscribir);

const contenidoActualizado = fileManager.readFile();
console.log('Contenido Actualizado: ', contenidoActualizado);