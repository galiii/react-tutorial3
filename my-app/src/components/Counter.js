import React, { Component } from 'react';

class Counter extends Component{

    state = {
        count: 50
    };
    
    plusButton = () => {
        this.setState((state)=>({
            count:state.count+1
        }))
    };

    minusButton = () => {
        this.setState(({count})=>({
            count: count -1
        }))
    };
    render(){
        return(
        <div>
            <div className="number">{this.state.count}</div>
            <button onClick={this.plusButton}>+</button>
            <button onClick={this.minusButton}>-</button>
        </div>
    );}

};

export default Counter;