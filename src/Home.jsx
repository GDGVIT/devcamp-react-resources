import React, { useState, useEffect } from "react";

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

  console.log("pokemon list", pokemon.results);

  return (
    <div>
      <div class="pokemon-list--title">Pokemon List</div>
      <div className="pokemon-list--container">
        {pokemon.results &&
          pokemon.results.map((p) => (
            <div key={p.name}>
              <a className="pokemon-list--pokemon" href={`/${p.name}`}>
                {p.name}
              </a>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Home;
