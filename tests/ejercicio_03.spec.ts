import { expect } from 'chai';
import { FileReader } from '../src/ejercicio_03/FileReader';
import { FileWriter } from '../src/ejercicio_03/FileWriter';
import { FileManager } from '../src/ejercicio_03/FileManager';
import * as fs from 'fs';

describe('FileReader tests', () => {
  it('va a leer el fichero de entrada correctamente', () => {
    const fileReader = new FileReader();
    const contenido = fileReader.readFile('example.txt');
    expect(contenido).to.be.a('string');
  });

  it('retorna vacio si no se encuentra el archivo', () => {
    const fileReader = new FileReader();
    const contenido = fileReader.readFile('error.txt');
    expect(contenido).to.be.empty;
  });
});


describe('FileWriter tests', () => {
  it('va a escribir el fichero de entrada correctamente', () => {
    const fileWriter = new FileWriter();
    const filePath = 'testfile.txt';
    const data = 'Test data';
    fileWriter.writeFile(filePath, data);
    const filecontenido = fs.readFileSync(filePath, 'utf-8');
    expect(filecontenido).to.equal(data);
    fs.unlinkSync(filePath); 
  });
});


describe('FileManager test', () => {
  const filePath = 'testfile.txt';
  const testData = 'Test data';

  beforeEach(() => {
    fs.writeFileSync(filePath, testData, 'utf-8'); 
  });

  afterEach(() => {
    fs.unlinkSync(filePath); 
  });

  it('va a leer correctmente el fichero de entrada', () => {
    const fileManager = new FileManager(filePath);
    const contenido = fileManager.readFile();
    expect(contenido).to.equal(testData);
  });

  it('va a escribir correctmente el fichero de salida', () => {
    const fileManager = new FileManager(filePath);
    const newData = 'New test data';
    fileManager.writeFile(newData);
    const filecontenido = fs.readFileSync(filePath, 'utf-8');
    expect(filecontenido).to.equal(newData);
  });
});
