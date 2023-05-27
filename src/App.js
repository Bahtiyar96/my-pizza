import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Slider from './components/Slider/Slider';
import Product from './components/Pizza/Product';

function App() {
  return (
    <div className='mainContainer'>
      <Header />
      <Navigation />
      <Slider />
      <Product id="pizzas" name="Пицца"/>
      <Product id="snacks" name="Закуски"/>
      <Product id="deserts" name="Десерты"/>
    </div>
  );
}

export default App;
