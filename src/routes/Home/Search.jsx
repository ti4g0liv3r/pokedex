import { usePokeProvider } from "../../hooks";
import { InputContainer, SearchInput } from "./sytles";

//This component take the search argument and provides it to provider, who will do the magic and filter.
//All styles are in a separated styles.js file

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
