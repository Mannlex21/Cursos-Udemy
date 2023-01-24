import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";
describe("Se esta trabajando en 05-funciones", () => {
	test("getUser debe retornar un objeto", () => {
		const testUser = {
			uid: "ABC123",
			username: "El_Papi1502",
		};
		const response = getUser();

		//cuando son objetos se usa toStrictEqual o toEqual, cuando son primitivos se usa toBe
		expect(response).toEqual(testUser);
	});

	test("getUsuarioActivo debe retornar un objeto", () => {
		const nombre = "Manuel";
		const testUser = {
			uid: "ABC567",
			username: nombre,
		};
		const response = getUsuarioActivo(nombre);
		expect(testUser).toEqual(response);
	});
});
