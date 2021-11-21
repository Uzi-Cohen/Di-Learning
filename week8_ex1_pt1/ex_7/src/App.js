import logo from './logo.svg';
import './App.css';
const animals = ['Horse','Turtle','Elephant','Monkey'];
const animals1 = [{label: 'Horse'},{label: 'Turtle'},{label: 'Elephant'},{label: 'Monkey'}];

function App() {
  return (
    <>
    <ul>
      {animals.map((item) => <li>{item}</li>)}
    </ul>
    <ul>
      {animals1.map((item) => <li>{item.label}</li>)}
    </ul>
    </>
  );
}

export default App;
