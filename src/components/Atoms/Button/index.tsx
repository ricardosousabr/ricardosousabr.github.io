import { ButtonProps } from "./types";
import { ButtonStyle } from "./styles";

export default function Button({ children, type, onClick, href }: ButtonProps) {
  const buttonType = {
    type: type,
    onClick: onClick,
  };
  const anchorType = {
    as: "a",
    href: href,
  };

  return (
    <ButtonStyle {...(href ? anchorType : buttonType)} >{children}</ButtonStyle>
  );
}
