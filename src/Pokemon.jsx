import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

function Pokemon() {
  const { pokemon } = useParams();
  const [pkmn, setPkmn] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const resp = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        );
        setPkmn(await resp.json());
      } catch (err) {
        console.log(err);
      }
    };
    fetchPokemon();
  }, [pokemon]);

  console.log("pokemon", pkmn);

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
                  pkmn.types.map((type) => <div>{type.type.name}</div>)}
              </div>
            </div>
            <div className="pokemon--right">
              <table>
                {pkmn?.stats &&
                  pkmn.stats.map((stat) => (
                    <tr>
                      <td>{stat.stat.name}</td>
                      <td>{stat.base_stat}</td>
                    </tr>
                  ))}
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Pokemon;
