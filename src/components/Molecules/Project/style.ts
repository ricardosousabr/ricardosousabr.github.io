import styled from "styled-components";
import screens from "../../../tokens/screen";

export const ProjectStyle = styled.div`
  background: #111827;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 0 20px;
  height: 1000px;
  justify-content: space-between;
  padding-top: 100px;

  @media (min-width: ${screens.extraLarge}) {
    height: 600px;

  }

`

export const BoxText = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  justify-content: space-between;
  flex-direction: column;

`


export const BoxProject = styled.div`
  background-image: url("./img/Project-Login-Page.png") no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 900px;
  padding-bottom: 50px;

  @media (min-width: ${screens.extraLarge}) {
    flex-direction: row;
    justify-content: space-between;
    height: 600px;

  }

`
export const BoxImageMobile = styled.div`

    @media (min-width: ${screens.small}) {
    display: none;

  }

`

export const BoxImageDesktop = styled.div`
    display: none;

    @media (min-width: ${screens.small}) {
    display: block;

    }

`
