import { useContext } from "react";
import { PokeContext } from "../../context";

export const usePokeProvider = () => {
  return useContext(PokeContext);
};
