import { TextStyle } from "./styles";
import { TitleProps } from "./types";

export default function Title({children}: TitleProps) {
  return <TextStyle>{ children }</TextStyle>
};
