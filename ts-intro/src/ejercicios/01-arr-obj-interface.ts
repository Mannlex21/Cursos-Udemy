/*
    ===== Código de TypeScript =====
*/

let habilidades: string[] = ['Bash', 'Counter'];

habilidades.push("prueba");

interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
}
const personaje: Personaje = {
    nombre: 'Strider',
    hp: 100,
    habilidades: ['Bash', 'Counter']
}

personaje.puebloNatal = "Prueblo paleta";

console.table(personaje);