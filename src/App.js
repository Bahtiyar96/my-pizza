import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Slider from './components/Slider/Slider';

function App() {
  return (
    <div className='mainContainer'>
      <Header />
      <Navigation />
      <Slider />
    </div>
  );
}

export default App;
