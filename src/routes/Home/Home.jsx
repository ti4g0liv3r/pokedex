import { PokemonList, Title } from "../../components";
import { usePokeProvider } from "../../hooks";
import { PokemonMenu } from "./MenuNav";
import { SearchBar } from "./Search";
import { Toolsbar } from "./sytles";

//Home component is the main page when app loads the information
//It consumes data from the provider and later on, passes it to "PokemonList", which is in charge of showing the pokemons

//There's also a separated "SearchBar" and "PokemonMenu", which has special function and are on this same Home folder

//All styles are in a separated styles.js file

export const Home = () => {
  const { data, isLoading, error } = usePokeProvider();

  if (isLoading) return <Title size={1}>Cargando...</Title>;

  if (error)
    return (
      <Title size={1}>Oops!, seems there's an error while loading list</Title>
    );

  return (
    <>
      <Toolsbar>
        <SearchBar />
        <PokemonMenu />
      </Toolsbar>
      <PokemonList list={data} />
    </>
  );
};
