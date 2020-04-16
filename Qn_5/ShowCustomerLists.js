import React from 'react';
import CustomerListContainer from './CustomerListContainer';
class ShowCustomerLists extends React.Component{
    render(){
        
        return(
            <ul>
            {this.props.propCustomer.filter(function(user){
                 return user.CustomerName[0]=='A' &&  user.CustomerAddress=='India' ;
            }).map(function(user){
            return <li>Name : {user.CustomerName} | Address : {user.CustomerAddress}</li>;
            })}
           
        </ul>
        );
    }
}
export default ShowCustomerLists;

// <ul>
// {this.props.propNum
// // .filter(function(abc){
// //     return abc % 2==0;
// // })
// .map(function(number){
//     return <li>Number : {number} | TypeOfNo : { number % 2==0 ? 'Even' : 'Odd'}</li>;
// })}
// </ul>