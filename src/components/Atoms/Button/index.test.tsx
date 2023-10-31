import renderer from "react-test-renderer";
import Button from "./index";

test("Link renders correctly", () => {
  const tree = renderer.create(<Button padding="8px 35px" background="white" borderRadius="8px" color="black" border="none" type="button">Click</Button>).toJSON();
  expect(tree).toMatchSnapshot();
});
