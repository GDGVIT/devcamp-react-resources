import { Switch, Route, Redirect } from "react-router-dom";
import PokemonList from "./PokemonList";
import Pokemon from "./Pokemon";

const Home = () => {
  return (
    <div>
      <Redirect to="/pokemon" />
      <div>
        <Switch>
          <Route path="/pokemon/:pokemonName" component={Pokemon} />
          <Route path="/pokemon" exact component={PokemonList} />
        </Switch>
      </div>
    </div>
  );
};

export default Home;
