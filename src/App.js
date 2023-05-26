import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Slider from './components/Slider/Slider';
import Pizza from './components/Pizza/Pizza';
import Snacks from './components/Snacks/Snacks';

function App() {
  return (
    <div className='mainContainer'>
      <Header />
      <Navigation />
      <Slider />
      <Pizza />
      <Snacks />
    </div>
  );
}

export default App;
