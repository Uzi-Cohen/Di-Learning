import React from 'react';
import Fname from './components/Fname';
import Sname from './components/Sname';
import Calc from './components/Calc';
import Res from './components/Res';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      fname:'',
      sname:'',
      results: {}
    }

  }

  handleFname = (e) => {
    this.setState({fname:e.target.value})
  }

  handleSname = (e) => {
    this.setState({sname:e.target.value})
  }

  handleClick = () => {
    const {fname,sname} = this.state;
    fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${fname}&sname=${sname}`, {
    	"method": "GET",
    	"headers": {
    		"x-rapidapi-key": "8e714f6b88mshbb20deb3af21b66p17c12cjsnb08e0581e35c",
    		"x-rapidapi-host": "love-calculator.p.rapidapi.com"
    	}
    })
    .then(response => {
    	return response.json();
    })
    .then(data=>{
      console.log(data);
      this.setState({results:data})
    })
    .catch(err => {
    	console.error(err);
    });
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Fname handleFname={this.handleFname} fname={this.state.fname} />
          <Sname handleSname={this.handleSname} sname={this.state.sname} />
          <Calc handleClick={this.handleClick}/>
          <Res results={this.state.results}/>
        </header>
      </div>
    );
  }
}

export default App;
