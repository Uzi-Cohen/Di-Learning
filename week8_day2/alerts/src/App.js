import React from 'react';


class Child extends React.Component {
  componentWillUnmount = () => {
    alert("The header is about to be deleted");
  }
  render(){
    return <h2>Hello world!</h2>;
  }
}


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      favoriteColor:'red',
      show: true,
      isToggleOn: true
    }
    this.shoot3 = this.shoot3.bind(this);
    }
  changeColor = () => {
    this.setState({favoriteColor:'yellow'});
  }
  deleteHeader = () => {
    this.setState({show:false});
  }
  componentDidMount = () => {
    setTimeout(this.changeColor, 5000);
  }
  // clickHandler = () => {
  //   // this.setState({favoriteColor:'blue'})
  //   this.setState({favoriteColor:'pink'})
  // }
  componentDidUpdate = () => {
    let div = document.getElementById("message");
    div.textContent = `My updated favorite color is ${this.state.favoriteColor}`
  }
  shouldComponentUpdate = () => {
    return true;
    // return false;
  }
  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    let div = document.getElementById("snapshot");
    div.textContent = `Before the update, the favorite was ${prevState.favoriteColor}.`
  }
  greatShot =() =>{
    alert("Great shot!");
  }
  shoot = () => {
    alert("Shoot Again!");

  }
  shoot2 = () => {
    alert(this);

  }
  shoot3 = () => {
    alert(this);

  }
  shoot4 = (string) => {
    alert(string)
  }
  shoot5 = (string) => {
    console.log("5");
    alert(string)
  }
  clickHandler = () => {
    alert("I was clicked")
  }
  handleKeyPress = (e) => {
    e.key === "Enter" && alert(e.target.value);
  }
  toggleButton = () => {
        this.state.isToggleOn ? this.setState({isToggleOn:false}) : this.setState({isToggleOn:true})
        let toggler = document.getElementById("toggler");
        toggler.textContent = this.state.isToggleOn;
  }
  render(){
    let hello = this.state.show ? <Child /> : "";
    return(
      <>
        {hello}
        <button onClick={this.deleteHeader}>Delete header</button>
        <h1>My favorite color is {this.state.favoriteColor}.</h1>
        <button onClick={this.clickHandler}>Change color</button> 
        <div id="snapshot"></div>
        <div id="message"></div>
        <button onClick={this.greatShot}>Great shot</button> 
        <button onClick={this.shoot}>Shoot again</button> 
        <button onClick={this.shoot2}>this</button> 
        <button onClick={this.shoot3}>Keep Shooting!</button> <br />
        <button onClick={() => {this.shoot4("Goal!")}}>Goal!</button> 
        {/*<button onClick={() => {this.shoot5.bind(this,"Shooting!")}}>Shooting!</button> */}
        <button onClick={(e) => this.shoot5("Shooting!", e)}>Shooting!</button>
        <button onClick={this.clickHandler}>Click me!</button><br />
        <input type="text" onKeyPress={this.handleKeyPress} /><br />
        <button type="button" id="toggler" onClick={this.toggleButton}>true</button>
      </>
    )
  }
}

export default App;



