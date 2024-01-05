import renderer from "react-test-renderer";
import Education from "./index";
import locale from "../../../locales";

test("Link renders correctly", () => {
  const { education } = locale['pt-br'];
  const tree = renderer.create(<Education {...education} />).toJSON();
  expect(tree).toMatchSnapshot();
});
