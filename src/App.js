import React from 'react'
import './App.css';
import Users from './pages/Users';
import Userdtail from './pages/Userdtail';

import {
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">

     <Switch>
       <Route exact path="/">
           <Users />
       </Route>
       
         <Route path="/userdetail/:id" render={(props) => <Userdtail  props={props}/>}/>
         
       
     </Switch>
    </div>
  );
}

export default App;
