import renderer from "react-test-renderer";
import Container from "./index";

test("Link renders correctly", () => {
  const tree = renderer.create(<Container>Click</Container>).toJSON();
  expect(tree).toMatchSnapshot();
});
