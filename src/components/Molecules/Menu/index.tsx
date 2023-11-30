import { useState } from "react"
import List from "./components/List"
import Button from "../../Atoms/Button";
import { MenuStyle, BoxMenu, MenuMobile, MenuDesktop } from "./style"

export default function Menu() {
  const menuItens = ["About", "Skils", "Education", "Contact"];
  const [valueButton, setValueButton] = useState<boolean>(false)

  function displayMenu() {
    return setValueButton(!valueButton)
  }

  return (
    <>
      <MenuStyle>
        <BoxMenu>
          <Button onClick={() => displayMenu()} background="transparent" padding="10px" borderRadius="10px" color="black" border="none">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 12H20" stroke="#D1D5DB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M4 6H20" stroke="#D1D5DB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M4 18H20" stroke="#D1D5DB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </Button>
        </BoxMenu>
        {
          valueButton ? <MenuMobile><List menuItens={menuItens} /></MenuMobile> : ""
        }
        <MenuDesktop><List menuItens={menuItens} /></MenuDesktop>
      </MenuStyle>
    </>
  )
}
