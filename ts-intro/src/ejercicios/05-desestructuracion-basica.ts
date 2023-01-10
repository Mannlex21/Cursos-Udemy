/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
    volumen: number,
    segundo: number,
    cancion: string,
    detalles: Detalles,
}

interface Detalles {
    autor: string,
    anio: number
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'casg',
    detalles: {
        anio: 2010,
        autor: 'ed asd'
    }
}

const { volumen, segundo, cancion, detalles: { autor: autorDetalle } } = reproductor;
// const { autor } = detalles;

// console.log('El voulmen actual es: ' + volumen);
// console.log('El segundo actual es: ' + segundo);
// console.log('La cancion actual es: ' + cancion);
// console.log('El autor es: ' + autorDetalle);

//Es por posicion, como en este caso solo quiero trunks, entonces pongo 2 comas que
// corresponden a las 2 primeras posiciones
const dbz: string[] = ['goku', 'vegeta', 'trunks'];

const [, , p3] = dbz

console.log(p3);