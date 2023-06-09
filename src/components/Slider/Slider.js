import { Carousel } from "antd";
import { SliderItemsData } from './../../consts';
import SliderItem from "./SliderItem/SliderItem";

const Slider = () => {
   return (
      <Carousel slidesPerRow={5}>
         {
            SliderItemsData.map((slider, index) => (
               <SliderItem key={index} src={slider.src} />
            ))
         }
      </Carousel>
   )
}
export default Slider