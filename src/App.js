import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Slider from './components/Slider/Slider';
import Pizza from './components/Pizza/Pizza';

function App() {
  return (
    <div className='mainContainer'>
      <Header />
      <Navigation />
      <Slider />
      <Pizza />
    </div>
  );
}

export default App;
