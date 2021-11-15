import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "../node_modules/react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import hk from './hk.jpg';
import japan from './japan.jpg';
import macao from './macao.jpg';
import vegas from './vegas.jpg';
import './App.css';

class App extends Component {
  render() {
      return (
        <div className="myDiv">
          <Carousel>
            
            <div>
                <img src={hk} width="500px" height="200px" />
                <p className="legend">Honk Kong</p>
            </div>
            <div>
                <img src={japan} width="500px" height="200px" />
                <p className="legend">Japan</p>
            </div>
            <div>
                <img src={macao} width="500px" height="200px" />
                <p className="legend">Macao</p>
            </div>
            <div>
                <img src={vegas} width="500px" height="200px" />
                <p className="legend">Las Vegas</p>
            </div>
          </Carousel>
        </div>
      );
  }
};

export default App;

          