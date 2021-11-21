import { exportDefaultDeclaration } from '@babel/types';
import React from 'react';

class Exercise1 extends React.Component{
    constructor(){
        super();
        this.state = {
            favoriteColor:'red'
        }
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({favoriteColor:'yellow'})
        }, 5000);
    }
    setBlue = () => {
        this.setState({favoriteColor:'blue'});
    }

    render(){
        return(
            <>
                <h1>My favorite color is {this.state.favoriteColor}</h1>
                <button onClick={this.setBlue}>Blue</button>
            </>
        )
    }
}

export default Exercise1;