import React from 'react';
//import css && bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'

import {  BrowserRouter as Router,  Switch,  Route}
from "react-router-dom";

//import compomnent
import Login from '../pages/login/login';
import ChatRoom from '../pages/chatRoom/chatroom';

function App(props) {


  return (
    <>

      <Router>
        <Switch>
          <Route path='/chatroom' component={ChatRoom} />
          <Route path='/login' component={Login} />
          <Route component={Login} />
        </Switch>
      </Router>


    </>
  );
}

export default App;




