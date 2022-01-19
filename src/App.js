
import './App.css';



import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  // c= 'suraj'
  render() {
    return (
      <div>
        {/* this is react class baed compnonents {this.c} */}
        <Navbar/>
         <News pageSize={10}/>
      </div>
    )
  }
}

