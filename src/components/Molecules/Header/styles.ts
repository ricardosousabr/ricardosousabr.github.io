import styled from "styled-components";
import screensYoga from "../../../tokens/screen";

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

  @media (min-width: ${screensYoga.breakpointLg}) {
    padding: 0 50px 100px 50px;
    flex-direction: row-reverse;
  }
`

export const BoxImage = styled.div`
  padding: 0 32px 32px 32px;
  flex-wrap: wrap;
  max-width: 300px;

  @media (min-width: ${screensYoga.breakpointMD}) {
    width: 400px;
    height: 500px;
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

  @media (min-width: ${screensYoga.breakpointSm}) {
    padding: 0 60px 24px 0px;
  }
`

export const BoxButton = styled.div`
`

export const BoxMessage = styled.div`
  border: 1px solid #ABB2BF;
  padding: 32px;
`

export const BoxSwitch = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`

export const Switch = styled.div<{enabled: boolean}>`
  background: white;
  width: 80px;
  height: 40px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;

  `
export const SwitchSpan = styled.span<{enabled: boolean}>`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: transparent;
  margin: 5px;
  transition-duration: 0.4s;
  /* translate: ${props => props.enabled ? "0px" : "40px"}; */
`