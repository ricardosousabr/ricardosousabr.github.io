import styled from "styled-components";
import screens from "../../../tokens/screen";

export const HeaderStyle = styled.div`
  display: flex;
  flex-direction: column;
  background: #030712;
  padding: 50px 50px;


  @media (min-width: ${screens.small}) {
    align-items: center;
  }

  @media (min-width: ${screens.large}) {
    flex-direction: row-reverse;
  }

`

export const BoxTitle = styled.div`
  padding-bottom: 20px;
`

export const BoxInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

`

export const BoxText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: ${screens.small}) {
    padding: 0 60px;

  }

`

export const BoxSocial = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding-top: 20px;

  @media (min-width: ${screens.small}) {
      padding: 20px 60px 0 60px;  }

`
