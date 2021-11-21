import logo from './logo.svg';
import './App.css';
const object = {
  first_name: 'Bob',
  last_name: 'Dylan'
};
function App() {
  return (
    <>
    <h1>My name is {object.first_name}</h1>
    <h1>My last name is {object.last_name}</h1>
    </>
  );
}

export default App;


