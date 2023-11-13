import styled from "styled-components";
import screens from "../../../tokens/screen";


export const MenuStyle = styled.div`
display: flex;
flex-direction: column;
`;

export const BoxMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 16px;
  padding-top: 16px;

  @media (min-width: ${screens.small}) {
    display: none;
  }
`
export const MenuMobile = styled.div`

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
