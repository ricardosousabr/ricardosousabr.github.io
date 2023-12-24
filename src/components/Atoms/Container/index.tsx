import { ContainerProps } from "./types";
import { ContainerStyle } from "./style"

export default function Container({children}: ContainerProps) {
  return (
    <ContainerStyle>{children}</ContainerStyle>
  )
}