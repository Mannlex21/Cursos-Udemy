/*
    ===== Código de TypeScript =====
*/
//Los decoradores se usan para dar mas funcionalidad a las clases
function classDecorator<T extends { new(...args: any[]): {} }>(
    constructor: T
) {
    return class extends constructor {
        newProperty = "http://www...";
        hello = "asdasd";
    };
}

@classDecorator
class MiSuperClase {
    type = "report";
    public miPropiedad: string = "asdasda";

    imprimir() {
        console.log('Hola');
    }
}



const miClase = new MiSuperClase();

console.log(miClase.miPropiedad);