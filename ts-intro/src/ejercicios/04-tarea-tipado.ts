/*
    ===== Código de TypeScript =====
*/

interface Direccion {
    calle: String,
    pais: String,
    ciudad: String,
}

interface SuperHeroe {
    nombre: String,
    edad: number,
    direccion: Direccion,
    mostrarDireccion: () => String
}

const superHeroe: SuperHeroe = {
    nombre: 'spiderman',
    edad: 30,
    direccion: {
        calle: 'main st',
        pais: 'usa',
        ciudad: 'NY'
    },
    mostrarDireccion() {
        return this.nombre + ' ' + this.direccion.ciudad + ' ' + this.direccion.pais;
    }
}

const direccion = superHeroe.mostrarDireccion();
console.log(direccion);