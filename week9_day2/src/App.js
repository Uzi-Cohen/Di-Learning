import './App.css';
import React from 'react';
import {connect} from 'react-redux';
import {Decrease, Increase} from './actions/index'

class App extends React.Component {
  render() {
    return (
      <div className="App">
      <button onClick={this.props.handleClickMinus}>-</button> {this.props.count} <button onClick={this.props.handleClickPlus}>+</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleClickMinus: () => dispatch(Decrease()),
    handleClickPlus: () => dispatch(Increase())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);