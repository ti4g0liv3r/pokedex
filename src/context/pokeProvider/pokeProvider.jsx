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

  const setFav = (pokemonName) => {
    const newPokemonList = pokemon.map((pokemon) => {
      if (pokemon.name === pokemonName) {
        return { ...pokemon, isFav: !pokemon.isFav };
      }
      return pokemon;
    });
    setPokemon(newPokemonList);
  };

  const favPokemons = pokemon.filter((pokemon) => pokemon.isFav);
  const pokemonList = display === "all" ? pokemon : favPokemons;

  const filteredResults = pokemonList.filter((pokemon) =>
    pokemon.name.includes(search.toLowerCase())
  );

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
        setFav,
        display,
        pokemon,
        data: listToShow,
        isLoading,
        error,
      }}
    >
      {isLoading ? "loading" : children}
    </PokeContext.Provider>
  );
};
