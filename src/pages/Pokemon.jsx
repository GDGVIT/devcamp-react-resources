import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Pokemon = () => {
  const { pokemonName } = useParams();
  const [pkmn, setPkmn] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const resp = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
        );
        setPkmn(await resp.json());
      } catch (err) {
        console.log(err);
      }
    };
    fetchPokemon();
  }, [pokemonName]);

  return (
    <div>
      {pkmn && (
        <div className="pokemon">
          <div className="pokemon--container">
            <div className="pokemon--left">
              <div>
                <img
                  src={pkmn?.sprites.front_default}
                  width="240"
                  alt={pkmn.name}
                />
              </div>
              <div className="pokemon--name">{pkmn.name}.</div>
              <div className="pokemon--type">
                {pkmn.types &&
                  pkmn.types.map((type, index) => (
                    <div key={index}>{type.type.name}</div>
                  ))}
              </div>
            </div>
            <div className="pokemon--right">
              <table>
                <tbody>
                  {pkmn?.stats &&
                    pkmn.stats.map((stat, index) => (
                      <tr key={index}>
                        <td>{stat.stat.name}</td>
                        <td>{stat.base_stat}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pokemon;
