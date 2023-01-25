import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Pruebas en <FirstApp></FirstApp>", () => {
	test("debe de hacer match con el snapshot", () => {
		const title = "Hola soy mannlex!";
		const { container } = render(<FirstApp title={title}></FirstApp>);

		expect(container).toMatchInlineSnapshot(`
<div>
  <h1
    data-testid="test-title"
  >
    Hola soy mannlex!
  </h1>
  <p>
    1
  </p>
  <p>
    Mannlex
  </p>
</div>
`);
	});

	test("debe de mostrar el titulo en un h1", () => {
		const title = "Hola soy mannlex!";
		const { container, getByText, getByTestId } = render(
			<FirstApp title={title}></FirstApp>
		);

		expect(getByText(title)).toBeTruthy();
		expect(getByTestId("test-title").innerHTML).toContain(title);
	});
});
