import React, { createContext } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import BeehiveCity from "../finding_pikachu/BeehiveCity";

export const PikachuContext = createContext();

const whereIsPikachu = "Pikachu is at the app folder";

function Home() {
  const match = useRouteMatch();

  const {
    data: pokemon,
    isLoading,
    error,
  } = useFetch("https://pokeapi.co/api/v2/pokemon?limit=100");

  return (
    <PikachuContext.Provider value={whereIsPikachu}>
      <div>
        <div className="pokemon-list--title">Pokemon List</div>
        <div className="pokemon-list--container">
          {error && <div className="message">{error}</div>}
          {isLoading && <div className="message">Loading pokemon list ...</div>}
          <div>
            <BeehiveCity />
          </div>
          {pokemon?.results &&
            pokemon?.results.map((p) => (
              <div key={p.name}>
                {/* <a className="pokemon-list--pokemon" href={`pokemon/${p.name}`}>
                {p.name}
              </a> */}
                <Link
                  className="pokemon-list--pokemon"
                  to={`${match.url}/${p.name}`}
                >
                  {p.name}
                </Link>
              </div>
            ))}
        </div>
      </div>
    </PikachuContext.Provider>
  );
}

export default Home;
