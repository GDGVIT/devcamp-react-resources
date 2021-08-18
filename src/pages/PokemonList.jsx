import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const resp = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
        setPokemon(await resp.json());
      } catch (err) {
        console.log(err);
      }
    };
    fetchPokemon();
  }, []);

  return (
    <div>
      <div className="pokemon-list--title">Pokemon List</div>
      <div className="pokemon-list--container">
        {pokemon.results &&
          pokemon.results.map((p) => (
            <div key={p.name}>
              {/* <a className="pokemon-list--pokemon" href={`pokemon/${p.name}`}>
                {p.name}
              </a> */}
              <Link className="pokemon-list--pokemon" to={`pokemon/${p.name}`}>
                {p.name}
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Home;
