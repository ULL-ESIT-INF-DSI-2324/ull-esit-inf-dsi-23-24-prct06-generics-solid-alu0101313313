

# Practica 6: Clases e Interfaces Genéricas. Principios SOLID
<sup>José Javier Ramos Carballo, [alu0101313313@ull.edu.es](https://github.com/alu0101313313)

[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct06-generics-solid-alu0101313313/badge.svg?branch=main)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct06-generics-solid-alu0101313313?branch=main)

## Introducción

En esta práctica, seguiremos profundizando con mas elementos que nos ofrece el lenguaje **Typescript**, asi como son las clases e interfaces genéricas.  
Además implementaremos unas herramientas llamadas **Instanbul-Coveralls** que nos indicará de una forma detallada los resultados de nuestras pruebas, asi como diferentes detalles relativas al código analizado.
También aplicaremos unos conceptos teoricos, llamados **Principios SOLID** que nos ayudarán a realizar "un mejor código" en cuestiones de escalabilidad y eficiencia entre muchos otros aspectos.  

## Tareas Previas

- [x] Estudiar sobre los **Principios SOLID**
- [x] Instalar y configurar las diferentes opciones para aplicar **Instanbul-Coveralls** en nuestro proyecto

Las 2 tareas previas han sido realizadas en la [práctica anterior](https://github.com/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct05-objects-classes-interfaces-alu0101313313/blob/main/README.md). En ella podra obtener todos los detalles relativos a ambas tareas previas.  

## Ejercicios a realizar

### Ejercicio 01

> Este ejercicio me ha hecho perder la cabeza en numerosas ocasiones por lo confuso de la implementación, dado a que era practicamente incapaz de ubicar como estructuras los diferentes elementos sobre las clases e interfaces genericas que se nos requerían. Mas tarde y con mucha paciencia ubiqué una solución util.

El esquema a seguir fue algo parecido al indicado en [este enlace](https://jamboard.google.com/d/15INxdYlLbGyjepxiwHp2Gi8U003_WeyNmvJsADQ3P28/edit?usp=sharing).  

Empecé por ubicar como implementar las cajas y los enseres, por ello trate de implementar los enseres en una interfaz, definiendo sus atributos ahi para que todas las clases que implementasen dicha interfaz obligasen a tener dichos atributos. Luego traté de ubicar las cajas como una colección generica de enseres, para que cubrir parte del enunciado que señalaba algo asi como **_las diferntes cajas deben ser capaces de almacenas diferentes tipos de objetos_**.  
Ademas a petición del enunciado, recreé una serie de metodos que nos dejaban manipular los objetos contenidos en las cajas, asi como añadir enseres, buscar enseres, listar enseres...  
Luego de esto, implementé _relocations_ como una clase generica de tipo _itemsProperties_ permitiendo que en el gestor de mudanzas, tambien se mantuviese que las cajas puedan almacenar diferentes tipos de objetos, ademas de que implementé las operaciones definidas en la clase de las cajas _Box_ con manejo mínimo de errores.
Finalmente tengo un main donde genero diferentes enseres, cajas y un gestor con los cuales pruebo las diferentes funciones implementadas comprobando su correcto funcionamiento.

### Ejercicio 02

> Este ejercicio se me aclaro bastante tras el bloqueo que tuye con el ejercicio 1. Mucho mas simple de implementar, la idea era similar de separar las interfaces y las clases en ficheros distintos, mientras que los relacionaba entre ellos con las implementaciones de las interfaces.  

El esquema a seguir fue algo parecido al indicado en [este enlace](https://jamboard.google.com/d/1mIg_Dza2ZNFz6HULCcHCoCOOZtKBRMsqyeZUhdTfG-Q/edit?usp=sharing).  

En principio la idea era generar en una interfaz con los atributos de _factura_, mientras que la separé de la otra implementación _formatearFactura_, dado a que a la hora de implementar _facturaPDF_ y _facturaHTML_, me resultaba mas sencillo solo implementar la funcion dado a que no requiero crear objetos _facturaPDF_ ni _facturaHTML_, sino que obtengo un objeto de la interfaz _factura_ y lo manipulo con la función de la interfaz _formatearFactura_. Ademas implementé _gestorFacturas_ que nos permitía almacenas las facturas independientemente del formato que tenga, ademas de poder acceder al formateo de facturas que queremos realizar e insertarlo en un array de estas, permitiendo que diferentes tipos de formatos de facturas coexistan en el mismo contenedor de datos.

El codigo como esta implementado, respect sobre todo el **_Open/Close Principle_** dado a que nuestra implementación nos permite que si por ejemplo, añadiesemos un nuevo tipo de formato de facturas, su implementación ocurriría sin que las demas clases e interfaces se viesen afectadas de modificaciones.  

### Ejercicio 03

> A partir de este ejercicio, creo que la práctica se alivio mas dado a que detectar estos casos sobre los principios SOLID fueron mas asequibles que construir todo el sistema sin que todo de muchos y muchos errores.

En el diseño alternativo de este ejercicio la idea era fue separar todas las funciones en clases separadas, aportando sentido al primer principio **SOLID**: **_Single Responsibility Principle_**, donde separamos las diferentes funciones en clases con solo su unica funcionalidad, es decir:

 - Una clase donde abrimos el fichero de lectura: _OpenReader_
 - Una clase donde abrimos el fichero de escritura: _OpenWriter_
 - Una clase donde leemos el fichero abierto: _FileReader_
 - Una clase donde escribimos en el fichero abierto: _FileWriter_

Ademas de, un gestor que se encargase de aplicar los metodos definidos en las clases mencionadas, y tratar de estructurarlo en diferentes archivos, donde cada interfaz y cada clase tuviese su propio fichero.ts.

### Ejercicio 04

Al igual que en el ejercicio anterior, separar el codigo en diferentes ficheros es relevante para tener un codigo mejor organizado. En el transcurso de este, entendí que principio no se cumplía que es el **_Interface Segregation Principle_**, el caso es relativamente evidente, dado a que se estaban implementado 3 tipos de objetos:

 1. **Printer**: el cual podía imprimir pero no escanear
 2. **Scaner**: el cual no podía imprimir pero si escanear
 3. **PrinterScanner**: el cual podia imprimir y escanear

El principio I de SOLID se inflingía dado a que la implementación de la interfaz que afectaba a las tres, obligaba a tener las dos funciones, pese a que dos de sus objetos no podían implementarlas. Precisamente el objeto **PrinterScanner** podía reemplazar a los otros dos objetos dado a que no tenía incompatibilidad a la hora de realizar alguna funcion.  

No obstante, se puede apuntar a una mejor solución es que separar la interfaz principal en 2, donde cada una contiene una función, tal que una interfaz otorgase la función de imprimir, y la otra la función de escanear, evitando así que las clases que implementan estas interfaces se van obligadas a definir funciones incompatibles.

### Ejercicio 05

Al igual que en el ejercicio anterior, separar el codigo en diferentes ficheros es relevante para tener un código mejor organizado. No obstante, no supe diferenciar que principio SOLID se estaba incumpliendo.

> Mas tarde al terminar de repasar este codigo entendí que principio se estaba incumpliendo que es el **_Dependency Inversion Principle_**, dado a que _notifier_ dependia de las 2 clases _emailService_ y _ShortMessageService_ para su funcionamiento. Su posible solución debería implementar una interfaz que abarque todos los tipos de medios por los que mandar la notificación, y que leugo en la clase _notifier_ se escogiese segun como que quisiese implementar.

> Mi implementación es erronea porque puese a que intuí que la solución pasaba por tener una interfaz, no la apliqué de la forma correcta.


## Ejercicios sobre la modificación

### Ejercicio 1

Similar al [ejercicio 2 de la practica anterior](https://github.com/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct04-arrays-tuples-enums-alu0101313313/blob/main/src/ejercicio-02.ts) debiamos recoger un numero y señalar una serie de alergias que una persona poseia segun ciertas equivalencias entre una alegria y su correspondiente valor.

Este ejercicio de primeras no supuso un problema dado a que la implementación era relativamente sencilla, no obstante, ocurría el problema de que no era muy escalable, debido a que este diseño prescindia de una estructrua de datos, relativa a la que se nos comentaba en la práctica, es decir, que no utilizé enumeradoso tuplas que suponían una posible solución a este problema.

En las horas en la que debía realizar este cambio fui completamente incapaz de solucionar este problema dado a que no supe como iterar dentro de un enumerado, y que la implementación sobre tuplas que almacenasen los valores junto a sus respectivas etiquetas de alergias no la super ubicar dentro del problema.

> Respecto al ejercicio 2 de la modificación, no vi claro como plantearla y en su momento ví mucho mas viable intentar el ejercicio anterior, es por ello que de este ejercicio no entregé nada.

> Ademas, tengo que comentar que a la hora de tratar con el coveralls, por no modificar lo hecho en las pe, me daba problemas utilizar **typedoc** y **coveralls**, por ello aislé la carpeta de la modificación para que a la hora de realizas las pruebas del resto de la práctica no me diese problemas un codigo que no pueda modificar despues de la sesión pe.

## Conclusiones

Otra semana mas en la que el rendimiento no es el esperado dado a que aunque aplique todo el tiempo en entender los conceptos, el poco reposo de estos conocimientos y la falta de tiempo para gestionar correctamente los horarios de pŕacticas y el seguimiento exahustivo de esta asignatura con el resto, me hacen creer que nunca llego a tener tiempo las práctica de la manera en la que a mi mas me gustaría entregar.

## Bibliografía

Para este ultimo punto, he recopilado algunas de las paginas que me han sido utiles para los ejercicos de la _práctica_:

1. **Metodo Array.prototipe.splice():** [https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/splice](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
2. **Metodo Array.prototipe.pop():** [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)
3. **Chat GPT** [httops://chat.openai.com/](https://chat.openai.com/)