import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Pruebas en <FirstApp></FirstApp>", () => {
	test("debe de hacer match con el snapshot", () => {
		const title = "Hola soy mannlex!";
		const { container } = render(<FirstApp title={title}></FirstApp>);

		expect(container).toMatchSnapshot();
	});

	test("debe de mostrar el titulo en un h1", () => {
		const title = "Hola soy mannlex!";
		const { container, getByText, getByTestId } = render(
			<FirstApp title={title}></FirstApp>
		);

		expect(getByText(title)).toBeTruthy();
		expect(getByTestId("test-title").innerHTML).toContain(title);
	});

	test("debe de mostrar el subtitulo enviado por props", () => {
		const title = "Hola soy mannlex!";
		const subtitle = "Soy un subtituto";
		const { getAllByText } = render(
			<FirstApp title={title} subTitle={subtitle}></FirstApp>
		);

		expect(getAllByText(subtitle).length).toBe(2);
	});
});
