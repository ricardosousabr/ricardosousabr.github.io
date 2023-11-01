import { TextProps } from "./types"
import { TextStyle } from "./style"

export default function Text({ children, color, fontSize }: TextProps) {
  return <TextStyle color={color} fontSize={fontSize}>{children}</TextStyle>
}
