import renderer from "react-test-renderer";
import Project from "./index";
import locale from "../../../locales";

test("Link renders correctly", () => {
  const { project } = locale['pt-br'];
  const tree = renderer.create(<Project {...project} />).toJSON();
  expect(tree).toMatchSnapshot();
});
