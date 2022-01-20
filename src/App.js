
import './App.css';
import LoadingBar from 'react-top-loading-bar'


import {BrowserRouter as Router,
  Switch,
  Route,
   } from "react-router-dom";
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  // c= 'suraj'
   
  state = {
    progress:0
  }
  setProgres=(progress)=>{
        this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <Router>

        <LoadingBar
        color='#F1ED12'
        progress={this.state.progress}
        height={3}
      />
        <Navbar/>
        <Switch>
        <Route  exact path="/business">
           <News setProgress = {this.setProgres}  key={"business"} pageSize={10} country="in" category="business"/>
           </Route>
        <Route exact path="/entertainment"> 
        <News setProgress = {this.setProgres}  key={"entertainment"} pageSize={10} country="in" category="entertainment"/>
        </Route>
        <Route exact path="/"> 
        <News setProgress = {this.setProgres}  key={"general"} pageSize={10} country="in" category="general"/>
        </Route>
        <Route exact path="/health">
           <News setProgress = {this.setProgres}  key={"health"} pageSize={10} country="in" category="health"/>
           </Route>
        <Route exact path="/science">
          <News setProgress = {this.setProgres}  key={"science"} pageSize={10} country="in" category="science"/>
          </Route>
        
        <Route exact path="/sports">
          <News setProgress = {this.setProgres}  key={"sports"}  pageSize={10} country="in" category="sports"/>
          </Route>
        
        <Route exact path="/technology">
          <News setProgress = {this.setProgres} key={"technology"} pageSize={10} country="in" category="technology"/>
          </Route>
        
        </Switch>
        </Router>
        </div>
    )
  }
}

