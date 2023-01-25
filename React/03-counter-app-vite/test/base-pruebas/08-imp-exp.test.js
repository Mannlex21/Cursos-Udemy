import {
	getHeroeById,
	getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe("Se esta trabajando en 08-imp-exp", () => {
	test("getHeroeById debe retornar un heroe por id ", () => {
		const id = 1;
		const hero = getHeroeById(id);
		expect(hero).not.toBeFalsy();
	});

	test("getHeroeById debe retornar undefined si no existe", () => {
		const id = 100;
		const hero = getHeroeById(id);
		expect(hero).toBeFalsy();
	});

	test("getHeroesByOwner debe retornar heroes filtrados por owner (Marvel) ", () => {
		const owner = "Marvel";
		const heroesFiltered = getHeroesByOwner(owner);
		expect(heroesFiltered.length).toBe(2);
		expect(heroesFiltered).toEqual([
			{
				id: 2,
				name: "Spiderman",
				owner: "Marvel",
			},
			{
				id: 5,
				name: "Wolverine",
				owner: "Marvel",
			},
		]);
		expect(heroesFiltered).toEqual(
			heroes.filter((heroe) => heroe.owner === owner)
		);
	});

	test("getHeroesByOwner debe retornar heroes filtrados por owner (DC) ", () => {
		const owner = "DC";
		const heroesFiltered = getHeroesByOwner(owner);
		expect(heroesFiltered.length).toBe(3);
		expect(heroesFiltered).toEqual([
			{
				id: 1,
				name: "Batman",
				owner: "DC",
			},
			{
				id: 3,
				name: "Superman",
				owner: "DC",
			},
			{
				id: 4,
				name: "Flash",
				owner: "DC",
			},
		]);
		expect(heroesFiltered).toEqual(
			heroes.filter((heroe) => heroe.owner === owner)
		);
	});
});
