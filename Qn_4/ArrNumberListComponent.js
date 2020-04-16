import React from 'react';
import ShowOddEvenNumberList from './ShowOddEvenNumberList';
class ArrNumberListComponent  extends React.Component{
    render(){
        var arrNum=[1,2,3,4,5,6,7,8,9,10,11,12];
        return(
            <div>
                <ShowOddEvenNumberList propNum={arrNum}/>
            </div>
        );
    }
}

export default ArrNumberListComponent;