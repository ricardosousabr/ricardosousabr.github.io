import styled from "styled-components";
import screens from "../../../tokens/screen";
import { SiteLinksSearchBoxJsonLd } from "next-seo";

export const Wrapper = styled.div`
  background: #111827;
  padding: 50px 0;

`

export const ProjectStyle = styled.div`
  background: #111827;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-between;
  text-align: center;

`

export const BoxProject = styled.div`
  padding-bottom: 30px;
`

export const BoxText = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  justify-content: space-between;
  flex-direction: column;
  padding-bottom: 50px;
`

export const BoxProjects = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (min-width: ${screens.extraLarge}) {
    flex-direction: row;
    justify-content: space-between;
  }

`

export const BoxImage = styled.div`
  padding-bottom: 10px;

  @media (min-width: ${screens.small}) {
    border-radius: 10px;

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
