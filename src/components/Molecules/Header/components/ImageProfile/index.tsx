import Image from "next/image";
import { ImageProfileStyle, BoxPurple, BoxWhite } from "./style";

export default function ImageProfile() {
   return (
    <ImageProfileStyle>
      <BoxPurple></BoxPurple>
       <BoxWhite>
         <Image width={200} height={250} src="/img/Profile.png" alt="" />
      </BoxWhite>
    </ImageProfileStyle>
   )
}