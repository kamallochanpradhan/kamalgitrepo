import React from 'react';
import ArrNumberListComponent from './ArrNumberListComponent';
class ShowOddEvenNumberList extends React.Component{
    render(){
        return(
            <ul>
                {this.props.propNum
                // .filter(function(abc){
                //     return abc % 2==0;
                // })
                .map(function(number){
                    return <li>Number : {number} | TypeOfNo : { number % 2==0 ? 'Even' : 'Odd'}</li>;
                })}
            </ul>
        );
    }
}
export default ShowOddEvenNumberList;