import styled from "styled-components";
import screens from "../../../tokens/screen";

export const Wrapper = styled.div`
  background: #282C33;
  padding: 50px 0;

`

export const HeaderStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  `
export const BoxInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 112px;

  @media (min-width: ${screens.large}) {
    flex-direction: row-reverse;
  }

`

export const BoxTitle = styled.div`
  padding-bottom: 32px;
`

export const BoxProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

export const BoxText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 32px;
  text-align: flex-start;

  @media (min-width: ${screens.small}) {
    padding: 0 60px 24px 0px;

  }

`

export const BoxButton = styled.div`
`

export const BoxMessage = styled.div`
  border: 1px solid #ABB2BF;
  padding: 32px;

  @media (min-width: ${screens.small}) {
  }

`
