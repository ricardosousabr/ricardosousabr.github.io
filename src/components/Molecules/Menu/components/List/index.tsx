import Button from "../../../../Atoms/Button"
import { menuProps } from "./types"

export default function List({ menuItens }: menuProps) {

  return <ul>
    {
      menuItens.map((itens, index) => {
        return <li key={index}><Button padding="8px 35px" background="transparent" borderRadius="8px" color="white" border="none" type="button">{itens}</Button></li>
      })
    }
  </ul>
}
