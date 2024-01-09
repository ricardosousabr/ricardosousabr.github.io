import renderer from "react-test-renderer";
import Facts from "./index";
import locale from "../../../locales";

test("Link renders correctly", () => {
  const { facts } = locale['pt-br'];
  const tree = renderer.create(<Facts {...facts} />).toJSON();
  expect(tree).toMatchSnapshot();
});
