import React from 'react';
import HeaderComponent from './HeaderComponent';
class MyContentComponent extends React.Component{
    render(){
        return(
  <div id="mycontainer">
      <HeaderComponent/>
      <div id="search-form">
          <form>
              <table>
                  <tr>
                      <td>
                          <input type="text" name="search-issue"/>&nbsp;
                          <button type="submit">Search</button>
                      </td>
                  </tr>
              </table>
          </form>
      </div>
      <div id="data-table">
          <table border="1">
      <tr>
      <th>Id</th>
          <th>Name</th>
          <th>Scrum Master</th>
          <th>Team Members</th>
      </tr>
      <tr>
          <td>101</td>
          <td>Tci</td>
          <td>John</td>
          <td>12</td>
      </tr>
      <tr>
          <td colSpan="1">
          <a href="#">Edit</a>|
              <a href="#">Delete</a>
          </td>
      </tr>
          </table>
      </div>
  </div>
        );
    }
}
export default MyContentComponent;