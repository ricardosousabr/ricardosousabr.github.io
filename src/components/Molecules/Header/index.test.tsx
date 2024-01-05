import renderer from "react-test-renderer";
import Header from "./index";
import locale from "../../../locales";

test("Link renders correctly", () => {
  const { header } = locale['pt-br'];
  const tree = renderer.create(<Header {...header} />).toJSON();
  expect(tree).toMatchSnapshot();
});
