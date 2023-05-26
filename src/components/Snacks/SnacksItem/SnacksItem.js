import {
   SnacksWrapper,
   ImgBlock,
   NameBlock,
   DescBlock,
   FooterBlock,
   Price,
   CartButton
} from './styled.js'

const SnacksItem = ({snacks}) => {
  return (
    <SnacksWrapper>
      <ImgBlock src={snacks.img} />
      <NameBlock>
            {snacks.name}
         </NameBlock>
         <DescBlock>
            {snacks.desc}
         </DescBlock>
         <FooterBlock>
            <Price>
               от {snacks.price} ₽
            </Price>
            <CartButton>
               В корзину
            </CartButton>
         </FooterBlock>
    </SnacksWrapper>
  )
}

export default SnacksItem