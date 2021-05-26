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
  });

  return (
    <ol className="App">
      {pokemon.results &&
        pokemon.results.map((p) => (
          <li key={p.name}>
            <a href={`/${p.name}`}>{p.name}</a>
          </li>
        ))}
    </ol>
  );
}

export default Home;
