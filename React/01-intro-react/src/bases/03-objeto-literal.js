

const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 55321321,
        lat: 14.3232,
        lng: 34.9233321
    }
};

// console.table( persona );

//formas de clonar el objeto
const persona2 = { ...persona };
const persona3 = structuredClone(persona)
persona2.nombre = 'Peter';
persona3.nombre = 'Manuel';


console.log( persona );
console.log( persona2 )







