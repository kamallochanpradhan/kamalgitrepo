import React from 'react';
import OperatiooperationalComponent from './OperatiooperationalComponent'
class maincomponent extends React.Component{

    constructor(props){
  super(props);
  this.MyIncrementFun=this.MyIncrementFun.bind(this);
  this.MyDecrementFun=this.MyDecrementFun.bind(this);

  this.state={
      counter:0
  }
    }

    MyIncrementFun(){

this.setState({
    counter:this.state.counter+1

})
    }
    MyDecrementFun(){
        this.setState({
            counter:this.state.counter-1
        
        }) 

    }

    render(){
        return(
            <operationalComponent MyIncrementFun={this.MyIncrementFun} MyDecrementFun={this.MyDecrementFun}  />
        )
    }
}
export default maincomponent;