var hello = 'Hello';
let world = 'Hello World';
const helloWorld = 'Hello World!';

const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}
//el scope es el alcance de las variables que estamos asignando.
// cuando una variable está en el SG podemos acceder a ella en cualqueir momento.

//Tipos de variables y modificación de las mimas:
// var: una vez hemos creado una variable y posteriormente le asignamos un valor diferente
// se sobreescribirá guardando el nuevo valor. Este comportamiento no ocurre con las variables
//let y const, que al intentarlo nos arrojarán un error.

//Buenas practicas al crear variables
// No es considerada una buena practica crear variables sin las palabras reservadas (var, let y const)
// Esto debido a que al asignar una variable dentro de una función sin las palabras, esta se
// convertira en una variable con scope global

