import logo from './logo.svg';
import './App.css';
let ul = ['apples', 'bananas', 'cherries'];
function App() {
  return (
    <>
    <h1>I am a header</h1>
    <h1>I am a header too</h1>
    <ul>
    {
      ul.map(item => (
        <li>{item}</li>
      ))
    }
    </ul>
    </>
  );
}

export default App;
