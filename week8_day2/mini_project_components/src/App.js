import logo from './logo.svg';
import './App.css';
import Car from './components/Car';
import Phone from './components/Phone';

function App() {
  return (
    <>
    <Car info={{company: "Ford", model: "Mustang"}}/>
    <Phone/>
    </>
  );
}

export default App;
