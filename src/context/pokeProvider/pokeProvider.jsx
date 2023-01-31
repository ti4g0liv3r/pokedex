import { createContext, useEffect, useState } from "react";
import { useClient } from "../../hooks";

export const PokeContext = createContext({});

// const localStorageUserData = JSON.parse(localStorage.getItem('user'));
// const localStorageTokenData = JSON.parse(localStorage.getItem('accessToken'));
// const localStorageUsersList = JSON.parse(localStorage.getItem('usersList'));

export const PokeProvider = ({ children }) => {
  const { data, isLoading, error } = useClient("pokemon?limit=151");
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

  return (
    <PokeContext.Provider
      value={{ data: pokemon, setPokemon, isLoading, error }}
    >
      {isLoading ? "loading" : children}
    </PokeContext.Provider>
  );
};