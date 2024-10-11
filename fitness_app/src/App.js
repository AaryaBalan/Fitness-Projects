import './App.css';
import { Navbar } from './Components/Navbar';
import About from './Components/About';
import Service from './Components/Service';
import Gallery from './Components/Gallery';
import BMICalculator from './Components/BMICalculator';

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Service />
      <Gallery />
      <BMICalculator />
    </>
  );
}

export default App;
