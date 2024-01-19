import styled from "styled-components";
import screensYoga from "../../../tokens/screen";

export const Wrapper = styled.div`
  background: #282C33;
  padding: 50px 0;

`

export const ProjectStyle = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-between;
  text-align: center;

`

export const BoxTitle = styled.div`
  text-align: center;
  padding-bottom: 50px;

`

export const Title = styled.div`
  padding-bottom: 20px;

`

export const BoxProjects = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 40px;

  @media (min-width: ${screensYoga.breakpointXl}) {
    flex-direction: row;
    justify-content: space-between;
  }

`

export const BoxImage = styled.div`
  max-width: 350px;

`

export const BoxImageMobile = styled.div`
    border-bottom: 1px solid #ABB2BF;

  @media (min-width: ${screensYoga.breakpointSm}) {
    display: none;
  }

`

export const BoxImageDesktop = styled.div`
  display: none;
  border-bottom: 1px solid #ABB2BF;

  @media (min-width: ${screensYoga.breakpointSm}) {
    display: block;
  }

`

export const BoxTechnologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  max-width: 250px;

  @media (min-width: ${screensYoga.breakpointMD}) {
    max-width: 350px;
  }

`

export const BoxTechnologie = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px 0;
  margin: 0 8px;
`

export const BoxText = styled.div`
  border-top: 1px solid #ABB2BF;
  text-align: center;
  padding: 10px 0;
`

export const BoxButton = styled.div`
`
