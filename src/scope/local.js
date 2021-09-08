const helloWorld = () => {
    const hello = 'Hello World';
    console.log(hello);
};
helloWorld();
console.log(hello);
//No hay una variable global la cual contenga un valor dentro de hello
//Como puedo acceder a una variable dentro de un bloque o función

var scope = 'I am global';
const functionScope = () => {
    var scope = 'I am just a local';
    const func = () => {
        return scope
    }
    console.log(func());
}

functionScope();
console.log(scope);
//MI función tienee acceso a esa varaible (a la del interior) y es sobre ella sobre la cual va a estar trabajando. al momento de hacer return no estoy trabajando sobre la variable global sino que toma la del interior y no la re asigna.
//Scope representa un valor local y no está tomando ni reasignando a la variable global. 