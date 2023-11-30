import styled from "styled-components";
import screens from "../../../tokens/screen";

export const MenuStyle = styled.div`
  display: flex;
  flex-direction: column;
  background: transparent;
  position: fixed;
  width: 100%;
`;

export const BoxMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  @media (min-width: ${screens.small}) {
    display: none;
  }
`

export const MenuMobile = styled.div`
  justify-content: flex-end;
  display: flex;
  text-align: right;

  @media (min-width: ${screens.small}) {
    display: none;
  }
`

export const MenuDesktop = styled.div`
  display: none;

  @media (min-width: ${screens.small}) {
    display: block;
  }
`
