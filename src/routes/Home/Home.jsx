import { useState } from "react";
import styled from "styled-components";
import { PokemonList, Title } from "../../components";
import { usePokeProvider } from "../../hooks";

const SearchContainer = styled.div`
  width: 100%;
  text-align: center;
`;

const SearchInput = styled.input`
  border: 1px solid lightgray;
  height: 25px;
  padding: 10px;
  border-radius: 20px;
  min-width: 300px;
`;

const SearchBar = ({ search, setSearch }) => {
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <SearchContainer>
      <SearchInput
        type="text"
        value={search}
        onChange={(e) => handleChange(e)}
        placeholder="Search for a pokemon"
      />
    </SearchContainer>
  );
};

export const Home = () => {
  const { data, isLoading, error } = usePokeProvider();
  const [search, setSearch] = useState("");

  const filteredResults = data.filter((pokemon) =>
    pokemon.name.includes(search.toLowerCase())
  );
  const listToShow = search.length === 0 ? data : filteredResults;

  if (isLoading) return <Title size={1}>Cargando...</Title>;

  if (error)
    return (
      <Title size={1}>Oops!, seems there's an error while loading list</Title>
    );
  return (
    <>
      <SearchBar search={search} setSearch={setSearch} />
      <PokemonList list={listToShow} />
    </>
  );
};
