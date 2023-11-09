import { useState } from "react"
import List from "./components/List"
import Button from "../../Atoms/Button";

export default function Menu() {
  const menuItens = ["About", "Skils", "Experience", "Education", "Contact", "Switch Theme", "Download CV"];
  const [valueButton, setValueButton] = useState<boolean>(true)

  function displayMenu() {
    return setValueButton(!valueButton)
  }

  return (
    <>
      <div>
        <Button onClick={() => displayMenu()} background="black" padding="20px" borderRadius="10px" color="black" border="none"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path></svg></Button>
      </div>
      <div>
        {
          valueButton ? <List menuItens={menuItens} /> : ""
        }
      </div>
    </>
  )
}
