import styled from "styled-components";
import screensYoga from "../../../tokens/screen";

export const BoxProjects = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  padding-bottom: 40px;

  @media (min-width: ${screensYoga.breakpointXl}) {
    justify-content: space-between;
  }

`
export const Project = styled.a`
    border: 1px solid #ABB2BF;
    margin: 20px;
    text-decoration: none;
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
  height: 72px;
  align-content: flex-start;

  @media (min-width: ${screensYoga.breakpointMD}) {
    max-width: 350px;
    margin-bottom: 30px;
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
