import React from 'react';

class Form extends React.Component{
  constructor(){
    super();
    this.state = {
      fname:'',
      lname:'',
      age:'',
      gender:'',
      destination:'',
      vegan:[false,''],
      lactose:[false,''],
      nuts:[false,'']
    }
  }

  inputHandler = (event) =>{
    if(event.target.name === 'fname'){
      this.setState({fname:event.target.value})
    }else if(event.target.name === 'lname'){
      this.setState({lname:event.target.value})
    }else{
      this.setState({age:event.target.value})
    }
  }

  radioHandler = (event) => {
    this.setState({gender:event.target.value})
  }

  selectHandler = (event) => {
    if(event.target.value === 'please'){
      this.setState({destination:''})
    }else{
      this.setState({destination:event.target.value})
    }
  }

  checkboxHandler = (event) => {
    if(event.target.value === 'nutsFree'){
      if(event.target.checked === true){
        this.setState({nuts:[true,'yes']})
      }else{
        this.setState({nuts:[false,'']})
      }
    }else if(event.target.value === 'lactoseFree'){
      if(event.target.checked === true){
        this.setState({lactose:[true,'yes']})
      }else{
        this.setState({lactose:[false,'']})
      }
    }else{
      if(event.target.checked === true){
        this.setState({vegan:[true,'yes']})
      }else{
        this.setState({vegan:[false,'']})
      }
    }
  }
  submitHandle = (event) =>{
    event.preventDefault();
    let url = 'http://localhost:3000/?';
    for(let key in this.state){
      console.log(key);
      if(this.state[key] !== '' && !Array.isArray(this.state[key])){
        url = url + key + '=' + this.state[key] + '&'
      }else if(Array.isArray(this.state[key]) && this.state[key][1] !== ''){
        url = url + key + '=' + this.state[key][1] + '&'
      }
    }
    if(url[url.length-1] === '&'){
      url=url.substring(0,url.length-1);
    }
    console.log(url);

  }

  render(){
    return(
      <>
      <form onSubmit={this.submitHandle}>
        <input onChange={this.inputHandler} name='fname' type='text' placeholder='First Name'/><br/>
        <input onChange={this.inputHandler} name='lname' type='text' placeholder='Last Name'/><br/>
        <input onChange={this.inputHandler} name='age' type='text' placeholder='Age'/><br/>

        <div onChange={this.radioHandler}>
          <input type="radio" id="Male" name="mf" value="Male"/>
          <label >Male</label><br/>
          <input type="radio" id="Female" name="mf" value="Female"/>
          <label >Female</label><br/>
        </div>

        <h3>Select your destination</h3>
        <select onChange={this.selectHandler}>
        <option value="please">Please choose destination</option>
          <option value="Japan">Japan</option>
          <option value="Thailand">Thailand</option>
          <option value="Brazil">Brazil</option>
        </select>

        <h3>Dietary restrictions:</h3>
        <input onChange={this.checkboxHandler}  checked={this.state.nuts[0]} type="checkbox" id="restrictions1" name="restrictions1" value="nutsFree"/>
        <label > Nuts free</label><br/>
        <input onChange={this.checkboxHandler} checked={this.state.lactose[0]} type="checkbox" id="restrictions2" name="restrictions2" value="lactoseFree"/>
        <label > Lactose free</label><br/>
        <input onChange={this.checkboxHandler} checked={this.state.vegan[0]} type="checkbox" id="restrictions3" name="restrictions3" value="vegan"/>
        <label > Vegan</label><br/>
        <input type='submit'/>
      </form>

      <div>
        <div>Your name {this.state.fname} {this.state.lname}</div>
        <div>Your age {this.state.age}</div>
        <div>Your gender {this.state.gender}</div>
        <div>Your destination {this.state.destination}</div>
        <div>Your dietary restrictions</div>
        <div>**Nuts free:{this.state.nuts[1]}</div>
        <div>**Lactose free:{this.state.lactose[1]}</div>
        <div>**Vegan:{this.state.vegan[1]}</div>
      </div>
    </>
    )
  }
}

export default Form