import renderer from "react-test-renderer";
import Project from "./index";

test("Link renders correctly", () => {
  const tree = renderer.create(<Project />).toJSON();
  expect(tree).toMatchSnapshot();
});
