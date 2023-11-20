import styled from "styled-components";
import screens from "../../../tokens/screen";

export const SkillStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const BoxText = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 60px;

  @media (min-width: ${screens.small}) {
  }
`
