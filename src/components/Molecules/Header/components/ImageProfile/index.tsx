import Image from "next/image";
import { ImageProfileStyle } from "./styles";

export default function ImageProfile() {
   return (
    <ImageProfileStyle>
         <Image width={400} height={500} src="/img/Profile.png" alt="" />
    </ImageProfileStyle>
   )
}