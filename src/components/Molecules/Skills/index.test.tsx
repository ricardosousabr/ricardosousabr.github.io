import renderer from "react-test-renderer";
import Skills from "./index";
import locale from "../../../locales";

test("Link renders correctly", () => {
  const { skills } = locale['pt-br'];
  const tree = renderer.create(<Skills {...skills} />).toJSON();
  expect(tree).toMatchSnapshot();
});
