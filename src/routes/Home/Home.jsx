import { PokemonList, Title } from "../../components";
import { useClient } from "../../hooks";

export const Home = () => {
  const { data, isLoading, error } = useClient("pokemon?limit=151");

  if (isLoading) return <Title size={1}>Cargando...</Title>;

  if (error)
    return (
      <Title size={1}>Oops!, seems there's an error while loading list</Title>
    );
  return (
    <>
      <Title size={1} capitalized={false}>
        List of current pokemons
      </Title>
      <PokemonList list={data.results} />;
    </>
  );
};
