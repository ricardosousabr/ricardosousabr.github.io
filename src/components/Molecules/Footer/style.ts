import styled from "styled-components";
import screens from "../../../tokens/screen";



export const FooterStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  height: 200px;
  background: #030712;
  padding-top: 100px;

`
export const BoxText = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 300px;
  height: 80px;

  @media (min-width: ${screens.small}) {
    width: 400px;

  }
`

export const BoxContac = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  width: 340px;
  height: 60px;
  padding-bottom: 30px;

`

export const BoxItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-content: space-between;
  width: 230px;
`
