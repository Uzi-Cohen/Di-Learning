import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      isToggleOn : true,
      username : '',
      age: '',
      error: '',
      textarea:'qwerty',
      fruit:'lime'
    }
  }

  clickHandle(){
    alert('i was clicked');
  }

  keyPress = (event) =>{
    alert('your input is: ' + event.target.value);
  }

  toggle = () => {
    if(this.state.isToggleOn === true){
      this.setState({isToggleOn:false});
    }else{
      this.setState({isToggleOn:true});
    }
  }

  // inputHandler = (event) => {
  //   this.setState({username:event.target.value});
  // }

  // submitHandler = (event) => {
  //   event.preventDefault();
  //   alert(event.target.name.value);
  //   this.setState({username:event.target.firstChild.value})
  // }

  submitHandler = (event) => {
    event.preventDefault();
    if(this.state.error !== ''){
      return;
    }
    alert(event.target.username.value + " " + event.target.age.value);
    this.setState({username:event.target.username.value,
      age:event.target.age.value})
  }

  validation = (event) => {
    if(isNaN(event.target.value)){
      this.setState({error:'must be a number'})
    }else{
      this.setState({error:''})
    }
  }

  selectHandler = (event) => {
    this.setState({car:event.target.value})
  }

  


  render(){
    let button = (this.state.isToggleOn === true) ? 'ON' : 'OFF';
    return(
      <>
      <button onClick={this.clickHandle}>Click</button>
      <input onKeyPress={this.keyPress} type='text'/>
      <button onClick={this.toggle}>{button}</button>

      {/* <h1>Hello {this.state.username}</h1>
      <form onSubmit={this.submitHandler}>
        <label>Input your name</label>
        <input onChange={this.inputHandler} type='text'/>
        <input name='name' value="Submit" type='submit' />
      </form> */}

      <h1>Hello {this.state.username} {this.state.age}</h1>
      <form onSubmit={this.submitHandler}>
        <label>Input your name</label>
        <input name='username' type='text'/>
        <label>Input your age</label>
        <input onChange={this.validation} name='age'  type='text'/><span>{this.state.error}</span><br/>
        <input name='name' value="Submit" type='submit' />
      </form>

      {/* <textarea value={this.state.textarea}></textarea> */}

      {/* <select onChange={this.selectHandler} value={this.state.car}>
        <option>Ford</option>
        <option>Fiat</option>
      </select> */}
      <select value={this.state.fruit} >
            <option value="grapefruit">grapefruit</option>
            <option value="lime">lime</option>
            <option value="coconut">coconut</option>
            <option value="mango">mango</option>
          </select>
      
      </>
    )
  }
}


export default App;
