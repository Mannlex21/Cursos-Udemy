/*
    ===== Código de TypeScript =====
*/

// T es para decir que es generico
function queTipoSoy<T>(argumento: T) {
    return argumento;
}

let soyString = queTipoSoy('Hola Mundo!');
let soyNumber = queTipoSoy(123);
let soyArray = queTipoSoy([1, 2, 3, 4, 5]);
let soyExplicito = queTipoSoy<number>(100);

console.log(soyString, soyNumber, soyArray, soyExplicito);