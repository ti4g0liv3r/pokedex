import { FaHeart, FaTh } from "react-icons/fa";
import { usePokeProvider } from "../../hooks";
import { NavContainer } from "./sytles";

export const PokemonMenu = () => {
  const { display, setDisplay } = usePokeProvider();

  return (
    <NavContainer>
      <a
        className={display === "all" ? "active" : ""}
        onClick={() => setDisplay("all")}
      >
        <FaTh />
        All
      </a>
      <a
        className={display === "fav" ? "active" : ""}
        onClick={() => setDisplay("fav")}
      >
        <FaHeart /> Favorites
      </a>
    </NavContainer>
  );
};
