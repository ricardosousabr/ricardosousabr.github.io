import { ContainerProps } from "./types";
import { ContainerStyle } from "./styles";

export default function Container({children}: ContainerProps) {
  return (
    <ContainerStyle>{children}</ContainerStyle>
  )
}