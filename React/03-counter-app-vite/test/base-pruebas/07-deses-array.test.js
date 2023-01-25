import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe("Se esta trabajando en 07-deses-array", () => {
	test("retornaArreglo deberia regresar un string y un numero", () => {
		const [letters, numbers] = retornaArreglo();

		// expect(typeof letters).toBe("string");
		// expect(typeof numbers).toBe("number");

		expect(letters).toEqual(expect.any(String));
		expect(numbers).toEqual(expect.any(Number));
	});
});
