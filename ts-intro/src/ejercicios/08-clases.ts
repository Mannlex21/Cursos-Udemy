/*
    ===== Código de TypeScript =====
*/

//     private solo es visible dentro de esta clase
//     public  puede ser visible fuera de esta clase
//     static puede ser accedida desde una instancia


class PersonaNormal {
    constructor(
        public nombre: string,
        public direccion: string
    ) {

    }
}


// A diferencia de las interfaces, las clases si aparecen en el transpilado de javascript
// las clases si pueden contener funciones completas
class Heroe extends PersonaNormal {
    // con esto se inicializan las propiedades sin necesidad de setear
    // los valores manualmente, no se necesita lo de arriba
    constructor(
        public alterEgo: string,
        public edad: number,
        public nombreReal: string,
    ) {
        // cuando se extiende una clase, se usa Super para llamar al constructor
        // que la clase con el extends contiene
        super(nombreReal, 'new york');
    }
}

//Las interfaces son clases tontas, no se pueden contener funciones
// completas, solo se pueden definir
// interface Personaje2 {
//     alterEgo?: string;
//     edad?: number;
//     nombreReal?: number;

//     imprimirNombre?: () => string;
// }

const ironman = new Heroe('oculto', 2, 'asd');
console.log(ironman);