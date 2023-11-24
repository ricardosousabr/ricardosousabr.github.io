import renderer from "react-test-renderer";
import Skills from "./index";

test("Link renders correctly", () => {
  const tree = renderer.create(<Skills />).toJSON();
  expect(tree).toMatchSnapshot();
});
