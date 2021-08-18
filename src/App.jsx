import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PrivateRoute from "./PrivateRoute";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Switch>
        <Route
          path="/login"
          component={() => (
            <Login
              isLoggedIn={isLoggedIn}
              onLoggedIn={() => {
                setIsLoggedIn(true);
              }}
            />
          )}
        />
        <PrivateRoute auth={isLoggedIn} path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
