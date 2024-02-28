

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

### Ejercicios sobre la modificación

#### Ejercicio 1

Similar al [ejercicio 2 de la practica anterior](https://github.com/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct04-arrays-tuples-enums-alu0101313313/blob/main/src/ejercicio-02.ts) debiamos recoger un numero y señalar una serie de alergias que una persona poseia segun ciertas equivalencias entre una alegria y su correspondiente valor.

Este ejercicio de primeras no supuso un problema dado a que la implementación era relativamente sencilla, no obstante, ocurría el problema de que no era muy escalable, debido a que este diseño prescindia de una estructrua de datos, relativa a la que se nos comentaba en la práctica, es decir, que no utilizé enumeradoso tuplas que suponían una posible solución a este problema.

En las horas en la que debía realizar este cambio fui completamente incapaz de solucionar este problema dado a que no supe como iterar dentro de un enumerado, y que la implementación sobre tuplas que almacenasen los valores junto a sus respectivas etiquetas de alergias no la super ubicar dentro del problema.

> Respecto al ejercicio 2 de la modificación, no vi claro como plantearla y en su momento ví mucho mas viable intentar el ejercicio anterior, es por ello que de este ejercicio no entregé nada.

> Ademas, tengo que comentar que a la hora de tratar con el coveralls, por no modificar lo hecho en las pe, me daba problemas utilizar **typedoc** y **coveralls**, por ello aislé la carpeta de la modificación para que a la hora de realizas las pruebas del resto de la práctica no me diese problemas un codigo que no pueda modificar despues de la sesión pe.

### Ejercicio 01

Similar a como se realizó en el [ejercicio 9 de la practica anterior](https://github.com/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct03-types-functions-alu0101313313/blob/main/Ejercicios_Pr3/src/ejercicio-09.ts), desarrolle las diferentes funciones con la lógica utilizada anteriormente, no obstante, ideé generar un tipo `racional` que me permitiese trabajar con la dupla de números, y no tendiendo que separarlo y juntarlo en cada función.

### Ejercicio 02

Al igual que en el ejericio anterior, tomé como referencia un ejercicio que ya hicimos de [la práctica de la semana pasada](https://github.com/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct03-types-functions-alu0101313313/blob/main/Ejercicios_Pr3/src/ejercicio-03.ts) que funcionaba de manera similar, no obstante, mi aplicación esta vez consistía que con el número obtenido por parametro iba restando por las acciones que podia ejecutar mediante una estructura de if-else.Tambien realice un filtro de que el número introducido no fuese mayor a 256, tal que en ese caso, le restaría dicha cantidad, consiguiendo que como mucho el número fuese menor o igual a 255 (es decir, lo que equivale a todos las señales). 

## Conclusiones



## Bibliografía

Para este ultimo punto, he recopilado algunas de las paginas que me han sido utiles para los ejercicos de la _práctica_:

1. **Metodo Array.prototipe.splice():** [https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/splice](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
2. **Metodo Array.prototipe.pop():** []()
3. **Metodo Array.prototipe.in():** []()
4. **Apuntes de la asignatrua relativos a arrays:**[]()
5. **Metodo flat() en W3Schools**[]()
