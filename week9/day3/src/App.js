import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import {createContact,deleteContact} from './redux/actions'



class App extends React.Component {
  constructor() {
    super();
    // this.state = {
      // name: ""
    // }
  }
  // handleChange = (e) => {
    // this.setState({name:e.target.value})
  // }
  handleSubmit = (e) => {
    e.preventDefault();
    let input = document.getElementById("input")
    let name = input.value;
    this.props.addName(name);
    input.value="";
  }
  render() {
    let names = this.props.names;
    let data = (names.length > 0) &&
      names.map((a,i) => {
        return (
          <div key={i}><span>{a}</span><button id={i}
          onClick={this.props.deleteName}
          >Delete</button>
          </div>
        )
      });
    return (
      <>
        <main>
          <form name="contact" onSubmit={this.handleSubmit}>
            <input id="input" onChange={this.handleChange} />
            <button>Add</button>
          </form>
        {data}
        </main>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    names: state.names
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addName: (name) => dispatch(createContact(name)),
    deleteName: (e) => dispatch(deleteContact(e.target.id))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
