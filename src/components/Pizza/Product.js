import { 
   PizzaData, 
   SnacksData, 
   DesertData 
} from '../../consts';
import ProductItem from './ProductItem/ProductItem';
import { PizzaContainer, Title, Container } from './style';

const Product = ({id, name}) => {
   
   return (
      <Container id={id}>
         <Title>
            {name}
         </Title>
         <PizzaContainer>
            {
               id === "pizzas" ?
               PizzaData.map((pizza, index)=>(
                  <ProductItem key={index} data={pizza}/>
               )) :
               id === "deserts" ?
               DesertData.map((pizza, index)=>(
                  <ProductItem key={index} data={pizza}/>
               )) :
               id === "snacks" ?
               SnacksData.map((pizza, index)=>(
                  <ProductItem key={index} data={pizza}/>
               )) : (
                  <div>
                     Ничего не найдено
                  </div>
               )
            }
         </PizzaContainer>
      </Container>
   )
}
export default Product