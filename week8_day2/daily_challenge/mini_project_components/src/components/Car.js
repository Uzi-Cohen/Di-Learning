import { PROPERTY_TYPES } from '@babel/types';
import React from 'react';
import Garage from './Garage';


class Car extends React.Component {
    constructor(){
        super();
        this.state = {
            color:'red'
        }
    }
    render(){
        
        return(
            <>
            <Garage/>
            <h2 style={this.state}>Hello I am a {this.props.info.company} {this.props.info.model}</h2>
            </>
        )

    }
}

export default Car;