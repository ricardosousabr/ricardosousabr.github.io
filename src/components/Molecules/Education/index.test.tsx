import renderer from "react-test-renderer";
import Education from "./index";

test("Link renders correctly", () => {
  const tree = renderer.create(<Education />).toJSON();
  expect(tree).toMatchSnapshot();
});
