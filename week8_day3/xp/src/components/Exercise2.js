// EXERCISES 2-6
import { exportDefaultDeclaration } from '@babel/types';
import React from 'react';

class Exercise2 extends React.Component{
    constructor(){
        super();
        this.shootRegular = this.shootRegular.bind(this);
    }
    shoot = () => {
        alert('Nice shot!');
    }
    shootRegular(){
        alert(this);
        console.log(this);
    }
    shootRegularWithparameter(param){
        alert(param);
    }
    shootWithArgument = (arg) => alert(arg);

    shotTwo(){
        alert(this);
    }

    render(){
        return(
            <>
            <br/>
            <button onClick={this.shoot}>Take shot</button><br/>
            <button onClick={this.shootRegular}>Keep shooting</button>
            <button onClick={this.shootRegularWithparameter.bind(this,'boom')}>Keep shooting with parameters</button>
            <button onClick={() => this.shootWithArgument('with argument')}>Keep shooting with agument</button>
            <button onClick={this.shotTwo.bind(this)}>Keep shooting2</button>
            </>
        )
    }
}

export default Exercise2;