import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Pokemon from "./Pokemon";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/:pokemon">
          <Pokemon />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
