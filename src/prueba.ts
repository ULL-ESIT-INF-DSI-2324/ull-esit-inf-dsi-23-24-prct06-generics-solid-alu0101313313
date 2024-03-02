
/**
 * add two numbers
 * @param num1 number 1
 * @param num2 number 2
 * @returns the addition
 */
export function add(num1: number, num2: number): number {
  return num1 + num2;
}


/*

interface Enser {
  nombre: string;
}

class Caja<T extends Enser> {
  private enseres: T[];

  constructor() {
      this.enseres = [];
  }

  agregarEnser(enser: T): void {
      this.enseres.push(enser);
  }

  eliminarEnser(nombre: string): void {
      this.enseres = this.enseres.filter(item => item.nombre !== nombre);
  }

  listarEnseres(): void {
      console.log("Enseres en la caja:");
      this.enseres.forEach(item => console.log(item.nombre));
  }

  buscarEnser(nombre: string): T | undefined {
      return this.enseres.find(item => item.nombre === nombre);
  }
}

class GestorMudanza<T extends Enser> {
  agregarEnserACaja(enser: T, caja: Caja<T>): void {
      caja.agregarEnser(enser);
  }

  eliminarEnserDeCaja(nombre: string, caja: Caja<T>): void {
      caja.eliminarEnser(nombre);
  }

  listarEnseresDeCaja(caja: Caja<T>): void {
      caja.listarEnseres();
  }

  buscarEnserEnCaja(nombre: string, caja: Caja<T>): T | undefined {
      return caja.buscarEnser(nombre);
  }
}

// Ejemplo de uso
class Objeto implements Enser {
    constructor(public nombre: string) {}
}

const cajaObjetos = new Caja<Objeto>();
const gestor = new GestorMudanza<Objeto>();

const objeto1 = new Objeto("Libro");
const objeto2 = new Objeto("Lámpara");

gestor.agregarEnserACaja(objeto1, cajaObjetos);
gestor.agregarEnserACaja(objeto2, cajaObjetos);
gestor.listarEnseresDeCaja(cajaObjetos); // Output: Libro, Lámpara
console.log(gestor.buscarEnserEnCaja("Libro", cajaObjetos)); // Output: Objeto { nombre: "Libro" }
gestor.eliminarEnserDeCaja("Libro", cajaObjetos);
gestor.listarEnseresDeCaja(cajaObjetos); // Output: Lámpara


*/