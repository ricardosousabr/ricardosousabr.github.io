import styled from "styled-components";
import { TextProps } from "./types";

export const TextStyle = styled.p<TextProps>`
  color: ${(p) => p.color};
  font-size: ${(p) => p.fontSize};
`