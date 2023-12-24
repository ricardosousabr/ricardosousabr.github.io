import styled from "styled-components";
import screens from "../../../tokens/screen";

export const Wrapper = styled.div`
  background: #111827;
  padding: 50px 0;

`

export const SkillStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;

`;

export const BoxText = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  padding-bottom: 30px;

`

export const BoxTitle = styled.div`
  padding-bottom: 30px;

`

export const BoxSkillSItems = styled.div`
  display: flex;
  padding: 0 50px;
  flex-wrap: wrap;
  justify-content: space-between;

    @media (min-width: ${screens.small}) {
      padding: 0 0px;

    }

`

export const BoxSkill = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 20px;
  align-items: center;
  width: 40px;
  height: 40px;


`
