import { Anchor } from "antd";
import { NavItems } from "../../consts";
import {
   NavigationWrapper,
   Logo,
   ButtonCard,
   RightNavigation
} from './style';

const Navigation = () => {
   return (
      <NavigationWrapper>
         <RightNavigation>
            <Logo>
               
            </Logo>
            <Anchor
               affix={false}
               direction="horizontal"
               items={NavItems}
               className="linkNavigation"
            />
         </RightNavigation>
         <ButtonCard>Корзина</ButtonCard>
      </NavigationWrapper>
   )
}
export default Navigation