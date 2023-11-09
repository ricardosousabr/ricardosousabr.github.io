import renderer from "react-test-renderer";
import List from "./index";

test("Link renders correctly", () => {
  const menuItens = ["About", "Skils", "Experience", "Education", "Contact", "Switch Theme", "Download CV"]
  const tree = renderer.create(<List menuItens={menuItens} />).toJSON();
  expect(tree).toMatchSnapshot();
});
