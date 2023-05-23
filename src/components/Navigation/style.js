import { Button } from "antd"
import styled from "styled-components"

export const NavigationWrapper = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding-top: 1rem;

   width: 100%;
   position: sticky;
   top: 0px;
   // background-color: white;
   z-index: 10;
   backdrop-filter: blur(20px);

   &::before {
      content: "";
      position: absolute;
      left: 0px;
      top: 0px;
      width: 100%;
      height: 100%;
      // box-shadow: rgba(6, 5, 50, 0.1) 0px 0px 30px;
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