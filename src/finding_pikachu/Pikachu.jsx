import { useContext } from "react";
import { PikachuContext } from "../pages/PokemonList";

const Pikachu = () => {
  const where = useContext(PikachuContext);

  return <div className="message">Pikapi!, {where}</div>;
};

export default Pikachu;
