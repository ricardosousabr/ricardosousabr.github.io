import { CardProps } from "./types";
import Image from "next/image";
import Text from "../Text";
import { Project, BoxImage, BoxImageMobile, BoxImageDesktop, BoxText, BoxTechnologies, BoxTechnologie } from "./styles";

export default function Card({ link, srcImageMobile, srcImageDesktop, title, texts }: CardProps) {
  return (
    <Project href={link}>
      <BoxImage>
        <BoxImageMobile>
          <Image width={250} height={300} src={srcImageMobile} alt="" />
        </BoxImageMobile>
        <BoxImageDesktop>
          <Image width={350} height={250} src={srcImageDesktop} alt="" />
        </BoxImageDesktop>
      </BoxImage>
      <BoxTechnologies>
        {
          texts.map((text, index) => {

            return (
              <BoxTechnologie key={index}>
                <Text color="#ABB2BF" fontSize="16px">{text.nameTechnologie}</Text>
              </BoxTechnologie>
            )
          })
        }
      </BoxTechnologies>
      <BoxText>
        <Text color="white" fontSize="16px">{title}</Text>
      </BoxText>
    </Project>
  )
}