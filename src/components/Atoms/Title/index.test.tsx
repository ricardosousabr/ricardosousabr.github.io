import renderer from "react-test-renderer";
import Title from "./index";

test("Link renders correctly", () => {
  const tree = renderer.create(<Title>Click</Title>).toJSON();
  expect(tree).toMatchSnapshot();
});
