import logo from './logo.svg';
import './App.css';
const myStyle = {
  color : 'white',
  backgroundColor : 'blue',
  padding : '10px',
  fontFamily : 'Arial'
}

const mySuperStyle = {
  color : 'yellow',
  fontSize : '16px',
  fontWeight : 'bold',
  border : '1px solid yellow',
  backgroundColor : 'black',
  padding : '5px',
  borderRadius : '8px',
  margin : '10px',
  cursor : 'pointer'
}
function App() {
  return (
    <>
    <h1 style={{color:'red'},{backgroundColor:'lightblue'}}>Hello style</h1>
    <h1 style={myStyle}>Hello Style</h1>
    <button style={mySuperStyle}>I am a stylish button</button>
    </>
  );
}

export default App;
