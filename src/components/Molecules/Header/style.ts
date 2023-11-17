import styled from "styled-components";
import screens from "../../../tokens/screen";

export const HeaderStyle = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 270px;

  @media (min-width: ${screens.small}) {
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 270px;
  }

  @media (min-width: ${screens.large}) {
    flex-direction: row-reverse;
    justify-content: space-around;

  }

`

export const BoxText = styled.div`
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 500px;

`

export const BoxLocation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 500px;
`

export const BoxSocial = styled.div`
  display: flex;
  flex-direction: row;
  width: 500px;
`
