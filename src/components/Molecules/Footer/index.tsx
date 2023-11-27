import Text from "../../Atoms/Text"
import { FooterStyle, BoxText, BoxContac, BoxItem } from "./style"

export default function Footer() {
  return (
    <FooterStyle>
      <BoxText>
        <Text color="white" fontSize="20px">Get in touch</Text>
        <Text color="white" fontSize="16px">What’s next? Feel free to reach out to me if you re looking for a developer, have a query, or simply want to connect.</Text>
      </BoxText>
      <BoxContac>
        <BoxItem>
          <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.5 4H4.5C3.39543 4 2.5 4.89543 2.5 6V18C2.5 19.1046 3.39543 20 4.5 20H20.5C21.6046 20 22.5 19.1046 22.5 18V6C22.5 4.89543 21.6046 4 20.5 4Z" stroke="#D1D5DB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M22.5 7L13.53 12.7C13.2213 12.8934 12.8643 12.996 12.5 12.996C12.1357 12.996 11.7787 12.8934 11.47 12.7L2.5 7" stroke="#D1D5DB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <Text color="white" fontSize="16px">ricardo.br.pi@gmail.com</Text>
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.5 8H10.5C9.39543 8 8.5 8.89543 8.5 10V20C8.5 21.1046 9.39543 22 10.5 22H20.5C21.6046 22 22.5 21.1046 22.5 20V10C22.5 8.89543 21.6046 8 20.5 8Z" stroke="#D1D5DB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M4.5 16C3.4 16 2.5 15.1 2.5 14V4C2.5 2.9 3.4 2 4.5 2H14.5C15.6 2 16.5 2.9 16.5 4" stroke="#D1D5DB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </BoxItem>
        <BoxItem>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.0004 16.9201V19.9201C22.0016 20.1986 21.9445 20.4743 21.8329 20.7294C21.7214 20.9846 21.5577 21.2137 21.3525 21.402C21.1473 21.5902 20.905 21.7336 20.6412 21.8228C20.3773 21.912 20.0978 21.9452 19.8204 21.9201C16.7433 21.5857 13.7874 20.5342 11.1904 18.8501C8.77425 17.3148 6.72576 15.2663 5.19042 12.8501C3.5004 10.2413 2.44866 7.27109 2.12042 4.1801C2.09543 3.90356 2.1283 3.62486 2.21692 3.36172C2.30555 3.09859 2.44799 2.85679 2.63519 2.65172C2.82238 2.44665 3.05023 2.28281 3.30421 2.17062C3.5582 2.05843 3.83276 2.00036 4.11042 2.0001H7.11042C7.59573 1.99532 8.06621 2.16718 8.43418 2.48363C8.80215 2.80008 9.0425 3.23954 9.11042 3.7201C9.23704 4.68016 9.47187 5.62282 9.81042 6.5301C9.94497 6.88802 9.97408 7.27701 9.89433 7.65098C9.81457 8.02494 9.62928 8.36821 9.36042 8.6401L8.09042 9.9101C9.51398 12.4136 11.5869 14.4865 14.0904 15.9101L15.3604 14.6401C15.6323 14.3712 15.9756 14.1859 16.3495 14.1062C16.7235 14.0264 17.1125 14.0556 17.4704 14.1901C18.3777 14.5286 19.3204 14.7635 20.2804 14.8901C20.7662 14.9586 21.2098 15.2033 21.527 15.5776C21.8441 15.9519 22.0126 16.4297 22.0004 16.9201Z" stroke="#D1D5DB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <Text color="white" fontSize="16px">+55 86988278942</Text>
          <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.5 8H10.5C9.39543 8 8.5 8.89543 8.5 10V20C8.5 21.1046 9.39543 22 10.5 22H20.5C21.6046 22 22.5 21.1046 22.5 20V10C22.5 8.89543 21.6046 8 20.5 8Z" stroke="#D1D5DB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M4.5 16C3.4 16 2.5 15.1 2.5 14V4C2.5 2.9 3.4 2 4.5 2H14.5C15.6 2 16.5 2.9 16.5 4" stroke="#D1D5DB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </BoxItem>
      </BoxContac>
    </FooterStyle>
  )
}