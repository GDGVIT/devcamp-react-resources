import React from "react";
import { useParams } from "react-router";
import useFetch from "../hooks/useFetch";
import addThunderbolt from "../functions/addThunderbolt";

const Pokemon = (props) => {
  const { pokemonName } = useParams();

  const {
    data: pkmn,
    isLoading,
    error,
  } = useFetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

  return (
    <div>
      {error && <div className="message">{error}</div>}
      {isLoading && <div className="message">Loading pokemon ...</div>}
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
              <button className="login--btn" onClick={props.onThunder}>
                Zap!
              </button>
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

export default addThunderbolt(Pokemon);
