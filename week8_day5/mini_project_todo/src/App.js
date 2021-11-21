import React from 'react';
import Todos from './components/Todos';
import './App.css'

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      todos:[]
    }
  }
  inputHandler = (event) =>{
    event.preventDefault();
    if(event.target.lastChild.value === '' || event.target.lastChild.value[0] === ' '){
      return;
    }else{
      let tmp = [...this.state.todos];
      tmp.push(event.target.lastChild.value);
      event.target.lastChild.value = '';
      this.setState({todos:tmp});
    }
  }

  render(){
    return(
      <>
      <h1>ToDo's</h1>
      <Todos list={this.state.todos}/>
      <form onSubmit={this.inputHandler}>
        <h4>Add a new todo</h4>
        <input type="text"></input>
      </form>
      </>

    )
  }
}

export default App;
