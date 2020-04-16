import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//import MyContentComponent from './MycontentComponent';
//import ArrNumberListComponent from './ArrNumberListComponent';
//import ShowOddEvenNumberList from './ShowOddEvenNumberList';
import CustomerListContainer from './CustomerListContainer';
import ShowCustomerLists from './ShowCustomerLists';
import MyEmployeeComponent from './MyEmployeeComponent';
import MyEmployeeDetailsComponent from './MyEmployeeDetailsComponent';
ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
     {/* <MyContentComponent/>  */}
  {/* <ArrNumberListComponent/>  */}
  {/* <CustomerListContainer/> */}
  <MyEmployeeComponent/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
