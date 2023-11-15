import Text from "../../Atoms/Text";
import { BoxText } from "./style"

export default function Header() {
  return (
    <BoxText>
      <Text color="white" fontSize="30px">Hi, I’m Ricardo 👋</Text>
      <Text color="white" fontSize="20px">I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.</Text>
    </BoxText>
  )
}