import renderer from "react-test-renderer";
import Header from "./index";
import locale from "../../../locales";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  ...jest.requireActual("next/router"),
  useRouter: jest.fn(),
}));

useRouter.mockImplementation(() => ({
  route: "/",
  pathname: "/",
  query: "",
  asPath: "/",
}));

test("Link renders correctly", () => {
  const { header } = locale['pt-br'];
  const router = useRouter();
  const tree = renderer.create(<Header {...header} />).toJSON();
  expect(tree).toMatchSnapshot();
});
