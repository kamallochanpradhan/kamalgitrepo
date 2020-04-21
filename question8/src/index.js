import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router,Route,NavLink} from 'react-router-dom'; 
import * as serviceWorker from './serviceWorker';

const HomePageComponent=()=>(<h1>Home Page</h1>);
const AboutPageComponent=()=>(<h1>About Page</h1>);
const ContactPageComponent=()=>(<h1>Contact Page</h1>);

const Links=()=>(
<div>
  <NavLink exact activeClassName="selected" to="/">Home</NavLink>|
  <NavLink activeClassName="selected" to="/about">About</NavLink>|
  <NavLink activeClassName="selected" to="/contact">Contact</NavLink>
</div>
);



const RouterComponent=()=>(
<Router>
  <Links/>
<Route exact path="/" component={HomePageComponent}/>
<Route path="/about" component={AboutPageComponent}/>
<Route path="/contact" component={ContactPageComponent}/>
</Router>
);
ReactDOM.render(
  <React.StrictMode>
    <RouterComponent />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();