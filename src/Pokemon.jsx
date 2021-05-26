import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

function Pokemon(props){
	const {pokemon} = useParams()
	const [pkmn, setPkmn] = useState(null)

	useEffect(() => {
		const fetchPokemon = async () => {
      try {
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        setPkmn(await resp.json());
      } catch (err) {
        console.log(err);
      }
    };
    fetchPokemon();
	}, [pokemon])

	console.log(pokemon)
	return (
		<div>
			{pkmn && pkmn.name}
		</div>
	);
}

export default Pokemon;