import renderer from "react-test-renderer";
import Text from "./index";

test("Link renders correctly", () => {
  const tree = renderer.create(<Text color="aqua" fontSize="16px">Click</Text>).toJSON();
  expect(tree).toMatchSnapshot();
});
