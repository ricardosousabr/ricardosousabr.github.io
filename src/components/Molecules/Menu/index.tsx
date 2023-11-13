import { useState } from "react"
import List from "./components/List"
import Button from "../../Atoms/Button";
import { MenuStyle, BoxMenu, MenuMobile, MenuDesktop } from "./style"

export default function Menu() {
  const menuItens = ["About", "Skils", "Experience", "Education", "Contact", "Switch Theme", "Download CV"];
  const [valueButton, setValueButton] = useState<boolean>(true)

  function displayMenu() {
    return setValueButton(!valueButton)
  }

  return (
    <>
      <MenuStyle>
        <BoxMenu>
          <Button onClick={() => displayMenu()} background="" padding="10px 20px" borderRadius="10px" color="black" border="none">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="15" viewBox="0 0 50 50">
              <path d="M 3 9 A 1.0001 1.0001 0 1 0 3 11 L 47 11 A 1.0001 1.0001 0 1 0 47 9 L 3 9 z M 3 24 A 1.0001 1.0001 0 1 0 3 26 L 47 26 A 1.0001 1.0001 0 1 0 47 24 L 3 24 z M 3 39 A 1.0001 1.0001 0 1 0 3 41 L 47 41 A 1.0001 1.0001 0 1 0 47 39 L 3 39 z"></path>
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
