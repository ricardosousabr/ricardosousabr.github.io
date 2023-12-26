import renderer from "react-test-renderer";
import ImageProfile from "./index";

test("Link renders correctly", () => {
  const tree = renderer.create(<ImageProfile />).toJSON();
  expect(tree).toMatchSnapshot();
});
