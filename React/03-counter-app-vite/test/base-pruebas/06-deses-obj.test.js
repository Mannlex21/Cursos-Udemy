import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe("Se esta trabajando en 06-deses-obj", () => {
	test("usContext debe retornar un objeto ", () => {
		const obj = {
			nombreClave: "10",
			anios: 10,
			latlng: {
				lat: 14.1232,
				lng: -12.3232,
			},
		};
		const response = usContext({
			clave: "10",
			nombre: "",
			edad: 10,
			rango: "",
		});
		expect(response).toEqual(obj);
	});
});
