import React from 'react';
import Operations from './Operations';
class ParentComponent extends React.Component{
    constructor(props){
        super(props)
        this.Increment =this.MyfunIncrement.bind(this);
        this.Decrement=this.MyfunDecrement.bind(this);
        this.state={
            count:0
        }
    }

    MyfunIncrement(){
        this.setState({
            count:this.state.count+1
        })
    }
    MyfunDecrement(){
        this.setState({
            count:this.state.count-1
        })
    }

    render(){
        return(
            <div>
                <Operations prIncrement={this.Increment} prDecrement={this.Decrement} />
                <h1>Count:{this.state.count}</h1>
            </div>            
        )
    }
}

export default ParentComponent;