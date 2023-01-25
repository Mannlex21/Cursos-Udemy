import { fireEvent, render, screen } from "@testing-library/react";
import CounterApp from "../../src/components/CounterApp";

describe("Pruebas en <CounterApp></CounterApp>", () => {
	const valorInicial = 10;
	test("debe de hacer match con el snapshot", () => {
		const { container } = render(<CounterApp value={0}></CounterApp>);

		expect(container).toMatchSnapshot();
	});

	test("debe mostrar el valor inicial de 10", () => {
		const { getAllByText } = render(
			<CounterApp value={valorInicial}></CounterApp>
		);

		expect(getAllByText(valorInicial).length).toBe(1);
		expect(screen.getByText(valorInicial)).toBeTruthy();
		expect(screen.getByRole("heading", { level: 2 }).innerHTML).toContain(
			`${valorInicial}`
		);
	});

	test("debe de incrementar con el boton +1", () => {
		render(<CounterApp value={valorInicial}></CounterApp>);
		fireEvent.click(screen.getByText("+1"));
		expect(screen.getByText("11")).toBeTruthy();
	});

	test("debe de decrementar con el boton -1", () => {
		render(<CounterApp value={valorInicial}></CounterApp>);
		fireEvent.click(screen.getByText("-1"));
		expect(screen.getByText("9")).toBeTruthy();
	});

	test("debe de reiniciar con el boton reset", () => {
		render(<CounterApp value={valorInicial}></CounterApp>);
		fireEvent.click(screen.getByText("+1"));
		fireEvent.click(screen.getByText("+1"));
		fireEvent.click(screen.getByText("+1"));
		fireEvent.click(screen.getByRole("button", { name: "btn-reset" }));
		expect(screen.getByText(`${valorInicial}`)).toBeTruthy();
	});
});
