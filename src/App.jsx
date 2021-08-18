import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Pokemon from "./Pokemon";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/:pokemon">
          <Pokemon />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
