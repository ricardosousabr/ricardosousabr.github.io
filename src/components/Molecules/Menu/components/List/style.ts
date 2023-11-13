import styled from "styled-components";
import screens from "../../../../../tokens/screen";

export const BoxList = styled.ul`

  @media (min-width: ${screens.small}) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`
