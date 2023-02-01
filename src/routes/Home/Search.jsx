import { usePokeProvider } from "../../hooks";
import { InputContainer, SearchInput } from "./sytles";

export const SearchBar = () => {
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
