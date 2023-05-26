import { Button } from "antd";
import styled from "styled-components";

export const SnacksContainer = styled.div`

`

export const SnacksWrapper = styled.div`
   
`

export const ImgBlock = styled.img`
   width: 100%;
`

export const NameBlock = styled.div`
   font-size: 20px;
`

export const DescBlock = styled.div`
   color: grey;
   padding-top: 1rem;
   padding-bottom: 1rem;
`

export const FooterBlock = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
`
export const Price = styled.div`
   font-weight: bold;
`
export const CartButton = styled(Button)`
   color: white;
   background-color: gold;
   border-radius: 20px;

   &:hover {
      background-color: #DEE13B;
      border-color: #DEE13B!important;
   }
   &:hover span {
      color: white;
   }
`