import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Movie from './components/Movie';
import {BrowserRouter, Route} from 'react-router-dom'

function App() {
  return (
     <BrowserRouter>
        <div>
          <NavBar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/movie/:id" component={Movie} />
          <Footer />
        </div>
     </BrowserRouter>
  );
}

export default App;
