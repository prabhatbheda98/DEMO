import React from 'react';
import {BrowserRouter , Switch, Route,} from "react-router-dom";
import './App.css';
import 'antd/dist/antd.css';
import Login from "./Login";
import Signup1 from "./Signup1";
import UserDetail from "./UserDetail";
import PrivateRoute from "./PrivateRoute";
import ForgetPass from "./ForgetPass";

function App() {
  return (
      <BrowserRouter>
    <div className="App">
        <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/Signup1" component={Signup1}/>
            <PrivateRoute path="/UserDetails" component={UserDetail}/>
            <Route path="/editUserDetails/:id" component={Signup1} />
            <Route path="/ForgetPass" component={ForgetPass}/>
        </Switch>
    </div>
      </BrowserRouter>
  );
}

export default App;
