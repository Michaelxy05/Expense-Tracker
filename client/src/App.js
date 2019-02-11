import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Expenses from "./pages/Expenses";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Spent from "./pages/Spent";


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Expenses} />
          <Route exact path="/expenses" component={Expenses} /> 
          {/* /expenses needs to render the "what has been spend col-md-12 in its own page , see screenshot" */}
          <Route exact path="/expenses/:id" component={Detail} />
          <Route exact path="/spent" component={Spent} />  
          <Route component={NoMatch} />
      
        </Switch>
      </div>
    </Router>
  );
}

export default App;