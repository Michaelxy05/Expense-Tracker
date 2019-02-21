import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";
import Expenses from "./pages/Expenses";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Spent from "./pages/Spent";
import Summary from "./pages/Summary";
import SignIn from "./pages/Login";
import Register from "./pages/Register";
import "../src/components/MainCSS/signin.css";
import "./App.css"

function App() {
  return (
    <Router>
      <div className="background">
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Expenses} />
          <Route exact path="/expenses" component={Expenses} />
          {/* /expenses needs to render the "what has been spend col-md-12 in its own page , see screenshot" */}
          <Route exact path="/expenses/:id" component={Detail} />
          <Route exact path="/spent" component={Spent} />
          <Route exact path="/summary" component={Summary} />
          <Route exact path="/login" component={SignIn} />
          <Route exact path="/register" component={Register} />
          <Route component={NoMatch} />

        </Switch>
        </div>
      </div>
    </Router>
  );
  
}
registerServiceWorker();
export default App;