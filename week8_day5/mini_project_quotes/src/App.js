import React from 'react';
import quotes from './quotes';
import './App.css';


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      color:'',
      quote:'',
      author:'',
      tmp:''
    }
  }
  number ='';

  name='animate__fadeInDown'

  getRandomColor = () => {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
  }

  doJob = (event) => {
  let index;
  do{
    index = Math.floor(Math.random() * quotes.length-1);
    console.log("index", index);
    console.log("length",quotes.length-1)
  }
  while(index === this.number || index < 0);
  
  this.setState({quote:quotes[index].quote,author:quotes[index].author,color:this.getRandomColor(), tmp:'myP'});
  setTimeout(()=>{ this.setState({tmp:''}); }, 1000);
  }

  componentDidMount(){
    this.doJob();
  }

  displayQuote = () => <p className={this.state.tmp} style={{color:this.state.color}}>"{this.state.quote}"</p>;



  render(){
    
    return(
    <div className='outer' style={{backgroundColor:this.state.color}}>
      <div className='inner'>
        {this.displayQuote()}
        <span style={{color:this.state.color}}><em>-{this.state.author}-</em></span><br/>
        <button style={{backgroundColor:this.state.color}} onClick={this.doJob}>New quote</button>
      </div>
    </div>
    );
  }
}



export default App;
