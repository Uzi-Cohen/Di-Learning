import './App.css';
import React from 'react';
import list from './list';
import Cards from './Cards';
import Result from './Result';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      clicks:0,
      best:0,
      superheroes:list.superheroes
    }
  }
  
  clickedList = [];
  shuffle = (array) => {
    var m = array.length, t, i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;
  }

  clickHandler = (event) => {
    let id = event.target.id;
    console.log("id ", event.target);
    if(this.clickedList.includes(id)){
      this.clickedList = [];
      if(this.state.clicks > this.state.best){
        this.setState({best:this.state.clicks, clicks:0});
      }else{
        this.setState({clicks:0});
      }
    }else{
      this.clickedList.push(id);
      console.log("clicked list", this.clickedList);
      this.setState({clicks:this.state.clicks + 1, superheroes:this.shuffle(this.state.superheroes)});
    }
  }


  render(){
    
    return(
      <>
      <Result clicks={this.state.clicks} best={this.state.best}/>
      <div id='rules'><h1>Get points by clicking on an image but don't click on any more than once!</h1></div>
      <Cards obj={this.state.superheroes} func={this.clickHandler}/>
      </>
    )
  }
}





export default App;
