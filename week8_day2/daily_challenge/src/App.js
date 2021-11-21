import React from 'react';
import MyBtn from './components/MyBtn'
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      languages : [
        {name: "Php", votes: 0},
        {name: "Python", votes: 0},
        {name: "JavaSript", votes: 0},
        {name: "Java", votes: 0}
      ]
    }
  }

  clickHandle = (event) => {
    let obj = [...this.state.languages];
    obj.forEach((item,i) => {
      if(item.name === event.target.id){
        item.votes += 1;
      }
    })
    this.setState({languages:obj});
  }

  render(){
    return(
      <div className="myClass">
      <MyBtn counter={this.state.languages[0].votes} language={this.state.languages[0].name} clickHandle={this.clickHandle}/>
      <MyBtn counter={this.state.languages[1].votes} language={this.state.languages[1].name} clickHandle={this.clickHandle}/>
      <MyBtn counter={this.state.languages[2].votes} language={this.state.languages[2].name} clickHandle={this.clickHandle}/>
      <MyBtn counter={this.state.languages[3].votes} language={this.state.languages[3].name} clickHandle={this.clickHandle}/>
    </div>
    )
  }

}

export default App;
