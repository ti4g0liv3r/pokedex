import styled from "styled-components";
import { PokemonList, Title } from "../../components";
import { usePokeProvider } from "../../hooks";

const InputContainer = styled.div`
  width: 100%;
  text-align: center;
`;

const SearchInput = styled.input`
  border: 1px solid lightgray;
  height: 20px;
  padding: 10px;
  border-radius: 20px;
  min-width: 300px;
`;

const SearchBar = () => {
  const { search, setSearch } = usePokeProvider();
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <InputContainer>
      <SearchInput
        type="text"
        value={search}
        onChange={(e) => handleChange(e)}
        placeholder="Search for a pokemon"
      />
    </InputContainer>
  );
};

const ToolsContainer = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 10px;

  > a {
    width: auto;
    margin-right: 30px;
    cursor: pointer;
  }
  > a.active {
    font-weight: bold;
  }

  > a:hover {
    transform: scale(1.1);
    font-weight: bold;
  }
`;

const PokemonMenu = () => {
  const { display, setDisplay } = usePokeProvider();

  return (
    <ToolsContainer>
      <a
        className={display === "all" ? "active" : ""}
        onClick={() => setDisplay("all")}
      >
        All
      </a>
      <a
        className={display === "fav" ? "active" : ""}
        onClick={() => setDisplay("fav")}
      >
        Favorites
      </a>
    </ToolsContainer>
  );
};
export const Home = () => {
  const { data, isLoading, error } = usePokeProvider();

  if (isLoading) return <Title size={1}>Cargando...</Title>;

  if (error)
    return (
      <Title size={1}>Oops!, seems there's an error while loading list</Title>
    );

  return (
    <>
      <SearchBar />
      <PokemonMenu />
      <PokemonList list={data} />
    </>
  );
};
