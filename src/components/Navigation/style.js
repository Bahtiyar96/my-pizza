import { Button } from "antd"
import styled from "styled-components"

export const NavigationWrapper = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding-top: 5px;
   padding-bottom: 5px;

   width: 100%;
   position: sticky;
   top: 0px;
   z-index: 10;
   backdrop-filter: blur(20px);

   &::before {
      content: "";
      position: absolute;
      left: 0px;
      top: 0px;
      width: 100%;
      height: 100%;
      color: white;
   }
`

export const Logo = styled.div`
   font-size: 20px;
`

export const ButtonCard = styled(Button)`
   color: white;
   background-color: gold;

   &:hover {
      background-color: #DEE13B;
      border-color: #DEE13B!important;
   }
   &:hoverspan {
      color: white;
   }
`

export const RightNavigation = styled.div`
   display: flex;
   gap: 10px;
   align-items: center;
`