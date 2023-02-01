import { PokemonList, Title } from "../../components";
import { usePokeProvider } from "../../hooks";
import { PokemonMenu } from "./MenuNav";
import { SearchBar } from "./Search";
import { Toolsbar } from "./sytles";

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
