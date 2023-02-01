import { StyledThumbnail, Title, Card } from "../index";
import { StyledLink, StyledList, StyledListItem } from "./styles";

//This component recieves a list and map it over the items to display all pokemons
//Once a card is clicked, user will navigate to another page and the browser URL will be updated
//All styles are in a separated styles.js file

export const PokemonList = ({ list }) => {
  if (!list || list.length === 0) return <p>No pokemons found</p>;

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
