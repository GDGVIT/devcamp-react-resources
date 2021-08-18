import { Switch, Route, Redirect } from "react-router-dom";
import PokemonList from "./PokemonList";
import Pokemon from "./Pokemon";
import NotFound from "./NotFound";

const Home = () => {
  return (
    <div>
      <Redirect to="/pokemon" />
      <div>
        <Switch>
          <Route path="/pokemon/:pokemonName" component={Pokemon} />
          <Route path="/pokemon" exact component={PokemonList} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </div>
  );
};

export default Home;
