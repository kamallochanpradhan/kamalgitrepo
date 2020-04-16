import React from 'react';
import ShowCustomerLists from './ShowCustomerLists';
class CustomerListContainer  extends React.Component{
    render(){
        var objCustomer=[
            {CustomerId:1,CustomerName:'Aditya',CustomerAddress:'Abc'},
             {CustomerId:2,CustomerName:'Aditya',CustomerAddress:'Us'},
             {CustomerId:3,CustomerName:'Akash',CustomerAddress:'India'},
             {CustomerId:4,CustomerName:'kamal',CustomerAddress:'Abc'},
             {CustomerId:5,CustomerName:'Abhilas',CustomerAddress:'India'},
             {CustomerId:6,CustomerName:'kamal',CustomerAddress:'Uk'}
        ];
        return(
            <div>
                <ShowCustomerLists propCustomer={objCustomer}/>
            </div>
        );
    }
}

export default CustomerListContainer;