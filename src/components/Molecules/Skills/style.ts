import styled from "styled-components";
import screens from "../../../tokens/screen";

export const SkillStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 700px;

  @media (min-width: ${screens.large}) {
    height: 400px;
  }

`;

export const BoxText = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 100px;

`
export const BoxSkillSItems = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  height: 800px;
  width: 300px;
  justify-content: space-between;

  @media (min-width: ${screens.large}) {
    width: 700px;
    height: 300px;

  }
`

export const BoxSkill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 78px;
  height: 96px;

  @media (min-width: ${screens.large}) {

  }
`
