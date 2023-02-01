import { createContext, useEffect, useState } from "react";
import { useClient } from "../../hooks";

export const PokeContext = createContext({});

export const PokeProvider = ({ children }) => {
  const { data, isLoading, error } = useClient("pokemon?limit=151");
  const [search, setSearch] = useState("");
  const [display, setDisplay] = useState("all");
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    if (data && !isLoading) {
      const pokemonList = data?.results?.map((pokemon) => ({
        ...pokemon,
        isFav: false,
      }));
      setPokemon(pokemonList);
    }
    if (error && !isLoading) {
      setPokemon([]);
    }
  }, [isLoading, data]);

  const filteredResults = pokemon.filter((pokemon) =>
    pokemon.name.includes(search.toLowerCase())
  );

  const favPokemons = pokemon.filter((pokemon) => pokemon.isFav);

  const listToShow =
    search.length !== 0
      ? filteredResults
      : display === "all"
      ? pokemon
      : favPokemons;

  return (
    <PokeContext.Provider
      value={{
        setPokemon,
        setSearch,
        setDisplay,
        display,
        data: listToShow,
        isLoading,
        error,
      }}
    >
      {isLoading ? "loading" : children}
    </PokeContext.Provider>
  );
};
