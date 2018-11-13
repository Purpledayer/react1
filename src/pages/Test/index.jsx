
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import About from './index.1' 
export default class App extends Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
          <li><Link to="/SubPage">asdassd</Link>  </li>
          <li><Link to="/admin">admin</Link></li>
        </ul>
        {this.props.children}
 
      </div>
    );
  }
}

  
  
