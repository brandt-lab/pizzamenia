import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Slider from './component/Slider';
import About from './component/About';
import PizzaTypes from './component/PizzaTypes';
import Footer from './component/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <About />
      <PizzaTypes />
      <Footer />
    </div>
  );
}

export default App;
