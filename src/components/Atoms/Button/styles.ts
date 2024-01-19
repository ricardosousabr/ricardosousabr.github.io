import styled from "styled-components";
import { ButtonProps } from "./types";

export const ButtonStyle = styled.button<ButtonProps>`
  background: transparent;
  padding: 8px 16px;
  color: white;
  border: 1px solid #bb74ce;
  font-size: 16px;
  font-family: 'Fira Code', monospace;
  text-decoration: none ;

  &:hover {
    cursor: pointer;
  }
`;
