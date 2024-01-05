import renderer from "react-test-renderer";
import Footer from "./index";
import locale from "../../../locales";

test("Link renders correctly", () => {
  const { footer } = locale['pt-br'];
  const tree = renderer.create(<Footer {...footer} />).toJSON();
  expect(tree).toMatchSnapshot();
});
