
import './App.css';
import LoadingBar from 'react-top-loading-bar'


import {BrowserRouter as Router, Switch,  Route, } from "react-router-dom";
import React ,{useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

 const App = ()=> {
  // c= 'suraj'
   const [progress,setPro] = useState(0);
  
  const setProgres=(progress)=>{
        setPro(progress)
  }
  
    return (
      <div>
        <Router>

        <LoadingBar
        color='#F1ED12'
        progress={progress}
        height={3}
      />
        <Navbar/>
        <Switch>
        <Route  exact path="/business">
           <News setProgress = {setProgres}  key={"business"} pageSize={10} country="in" category="business"/>
           </Route>
        <Route exact path="/entertainment"> 
        <News setProgress = {setProgres}  key={"entertainment"} pageSize={10} country="in" category="entertainment"/>
        </Route>
        <Route exact path="/"> 
        <News setProgress = {setProgres}  key={"general"} pageSize={10} country="in" category="general"/>
        </Route>
        <Route exact path="/health">
           <News setProgress = {setProgres}  key={"health"} pageSize={10} country="in" category="health"/>
           </Route>
        <Route exact path="/science">
          <News setProgress = {setProgres}  key={"science"} pageSize={10} country="in" category="science"/>
          </Route>
        
        <Route exact path="/sports">
          <News setProgress = {setProgres}  key={"sports"}  pageSize={10} country="in" category="sports"/>
          </Route>
        
        <Route exact path="/technology">
          <News setProgress = {setProgres} key={"technology"} pageSize={10} country="in" category="technology"/>
          </Route>
        
        </Switch>
        </Router>
        </div>
    )
  
}

export default App