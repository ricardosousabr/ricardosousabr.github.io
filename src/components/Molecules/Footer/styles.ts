import styled from "styled-components";

export const Wrapper = styled.div`
  background: #282C33;
  padding: 50px 0;
`

export const FooterStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  text-align: center;
`

export const BoxText = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 30px;
`

export const BoxInformation = styled.div`
  display: flex;
  justify-content: space-between;
`

export const BoxTitle = styled.div`
  padding-bottom: 30px;
`

export const BoxContac = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`

export const BoxItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0px;
  width: 350px;
`
export const LinkContact = styled.a`
  background: transparent;
  color: white;
  border: none;
  font-size: 16px;
  text-decoration: none;
`

export const ButtonCopy = styled.button`
  background: transparent;
  text-decoration: none;
  font-size: 16px;
  font-family: 'Fira Code', monospace;
  border: none
  ;

  &:hover {
    cursor: pointer;
  }
`