import renderer from "react-test-renderer";
import Menu from "./index";

test("Link renders correctly", () => {
  const menuItens = ["About", "Skils", "Experience", "Education", "Contact", "Switch Theme", "Download CV"]
  const tree = renderer.create(<Menu menuItens={menuItens} />).toJSON();
  expect(tree).toMatchSnapshot();
});
