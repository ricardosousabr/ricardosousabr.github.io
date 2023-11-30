import Button from "../../../../Atoms/Button"
import { menuProps } from "./types"
import { BoxList } from "./style"

export default function List({ menuItens }: menuProps) {

  return (
    <BoxList>
      {
        menuItens.map((itens, index) => {
          return <li key={index}><Button fontSize="16px" padding="8px 12px" background="transparent" borderRadius="8px" color="white" border="none" type="button">{itens}</Button></li>
        })
      }
    </BoxList>
  )
}
