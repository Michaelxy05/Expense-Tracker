import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Expenses from "./pages/Expenses";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import SignIn from "./components/Login/signIn";
import "./App.css"


function App() {
  return (
    <Router>
      <div className="background">
        
        <Switch>
          <Route exact path="/" component={SignIn}/>
         
          <Route exact path="/expenses" component={Expenses} />

          <Route exact path="/expenses/:id" component={Detail} />
          <Route component={NoMatch} />
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;