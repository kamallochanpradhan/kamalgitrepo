import React from 'react';
class HeaderComponent extends React.Component{
    render(){
        return(
  <div id="header">
      <div id="logo">Logo</div>
      <div id="navigation">
          <a href="#">Home</a>|
          <a href="#">About</a>|
          <a href="#">Scrum Master</a>|
          <a href="#">Team Memers</a>
      </div>
  </div>
        );
    }
}
export default HeaderComponent;