import { ButtonProps } from "./types";
import { ButtonStyle } from "./style";

export default function Button({ children, type, onClick, href, background, padding, borderRadius, color, border, fontSize, textDecoration }: ButtonProps) {
  const buttonType = {
    type: type,
    onClick: onClick,
  };
  const anchorType = {
    as: "a",
    href: href,
    textDecoration: textDecoration,
  };

  return (
    <ButtonStyle {...(href ? anchorType : buttonType)} background={background} padding={padding} borderRadius={borderRadius} color={color} border={border} textDecoration={textDecoration} fontSize={fontSize} >{children}</ButtonStyle>
  );
}
