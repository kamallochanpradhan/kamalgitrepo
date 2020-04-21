import React from 'react';

const Operations =(props)=>{
    return(
        <div>
            <button type="button" onClick={()=>props.prIncrement()}>Increment</button>
            <button type="button" onClick={()=>props.prDecrement()}>Decrement</button>            
        </div>
    )
}

export default Operations;