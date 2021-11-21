import './App.css';
import Home from './components/Home';
import About from './components/About';
import Post from './components/Post';
import Contact from './components/Contact';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import NavBar from './components/NavBar'



function App() {
  return (
  <BrowserRouter>
    <div className="App">
      <>
      <NavBar />
      <Switch>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route exact path="/" component={Home}/>
        <Route path="/:post_id" component={Post}/>
      </Switch>
      </>
    </div>
  </BrowserRouter>
  );
}

export default App;
