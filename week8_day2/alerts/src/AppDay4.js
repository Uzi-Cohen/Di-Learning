import React from 'react';
import ErrorBoundary from './components/ErrorBoundary'

class BuggyCounter extends React.Component {
  constructor(){
    super();
    this.state = {
      counter: 0
    }
  }
  handleClick = () => {
    this.setState({counter:++this.state.counter})
  }
  render(){
    if (this.state.counter > 4) {
      throw new Error("I crashed");
    }
    return(
      <div onClick={this.handleClick}>{this.state.counter}</div>
      )
  }
}


class AppDay4 extends React.Component {
  render(){
    return(
      <>
        <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary>
        <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary>
      </>
    )
  }
}


export default AppDay4;



