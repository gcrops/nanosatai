import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MainPage from "./pages/main";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <div>This is the about page</div>
            </Route>
            <Route path="/users">
              <div>This is the users page</div>
            </Route>
            <Route path="/">
              <div>This is the home page</div>
            </Route>
          </Switch>
        </div>
      </Router>
      <MainPage></MainPage>
    </div>
  );
}

export default App;
