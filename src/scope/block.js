// Dentro de una función, hay bloques que son elementos que se encuentran dentro de las llaves {}
// Por ejemplo las llaves para una función o para un if.
const fruits = () => {
    if (true) {
        var fruits1 = 'Apple';
        let fruits2 = 'Banana';
        const fruits3 = 'Kiwi';
        var fruits4 = 'Watermelon';
    }
    console.log(fruits1);
    console.log(fruits2);
    console.log(fruits3);
}

fruits();
// Desde la función se puede acceder a variables que están dentro de un bloque de una función siempre y cuando hayan sido declaradas con var.
// Si estas variables son declaradas con let o const, 
// var es una asignación del scope local dentro de una función, pero con let y const no podremos hacer esto aunque estén al interior de la función
//  Porque se establecen dentro del bloque por ende solo se puede acceder dentro del bloque, en caso de que queramos llamarlas, dicho llamado debe hacerse al interior del bloque.


var x = 1;
{
    var x = 2;
    console.log(x);
}
console.log(x);
// 


const anotherFunction = () => {
    for (let i=0; i<10; i++){
            console.log(i)
    }
}
anotherFunction();