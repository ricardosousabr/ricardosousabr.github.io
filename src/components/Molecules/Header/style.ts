import styled from "styled-components";
import screens from "../../../tokens/screen";

export const HeaderStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 750px;
  background: #030712;

  @media (min-width: ${screens.small}) {
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 700px;
  }

  @media (min-width: ${screens.large}) {
    flex-direction: row-reverse;
    justify-content: space-around;
    height: 400px;

  }

`

export const BoxInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 300px;
  padding: 0 16px;

  @media (min-width: ${screens.small}) {
    width: 500px;

  }

  @media (min-width: ${screens.large}) {

  }
`

export const BoxText = styled.div`
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;

  @media (min-width: ${screens.small}) {
    width: 500px;

  }

`

export const BoxLocation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const BoxSocial = styled.div`
  display: flex;
  flex-direction: row;
`
