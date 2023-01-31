import styled from "styled-components";
import { Link } from "react-router-dom";
import { StyledThumbnail, Title, Card } from "../index";

const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style: none;
  justify-content: center;
  padding: 0px;
`;

const StyledListItem = styled.li`
  margin: 10px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: gray;
`;

export const PokemonList = ({ list }) => {
  if (!list) return <p>No pokemons to show</p>;

  return (
    <StyledList>
      {list &&
        list.map((pokemon) => (
          <StyledListItem key={`pokemonIndex${pokemon.name}`}>
            <StyledLink to={`/pokemon/${pokemon.name}`}>
              <Card>
                <StyledThumbnail
                  src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemon.name}.gif`}
                  alt={pokemon.name}
                />
                <Title>{pokemon.name}</Title>
              </Card>
            </StyledLink>
          </StyledListItem>
        ))}
    </StyledList>
  );
};
