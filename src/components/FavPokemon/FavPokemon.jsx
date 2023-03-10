import { FaHeart, FaRegHeart } from "react-icons/fa";
import styled from "styled-components";

import { usePokeProvider } from "../../hooks";
const IconContainer = styled.div`
  > svg {
    width: 20px;
    height: 20px;
    color: white;
  }
`;

export const AddToFav = ({ pokemonName }) => {
  const { pokemon, setFav } = usePokeProvider();

  const foundPokemon = pokemon.find((pokemon) => pokemon.name === pokemonName);

  const isFav = foundPokemon?.isFav && foundPokemon?.isFav;

  return (
    <IconContainer onClick={() => setFav(pokemonName)}>
      {isFav ? <FaHeart /> : <FaRegHeart />}
    </IconContainer>
  );
};
