import { PokemonList, Title } from "../../components";
import { usePokeProvider } from "../../hooks";

export const Home = () => {
  const { data, isLoading, error } = usePokeProvider();

  if (isLoading) return <Title size={1}>Cargando...</Title>;

  if (error)
    return (
      <Title size={1}>Oops!, seems there's an error while loading list</Title>
    );
  return (
    <>
      <PokemonList list={data} />;
    </>
  );
};
