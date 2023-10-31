import styled from "styled-components";
import { ButtonProps } from "./types";

export const ButtonStyle = styled.button<ButtonProps>`
  background: ${(p) => p.background};
  padding: ${(p) => p.padding};
  border-radius: ${(p) => p.borderRadius};
  color: ${(p) => p.color};
  border: ${(p) => p.border};
`;
