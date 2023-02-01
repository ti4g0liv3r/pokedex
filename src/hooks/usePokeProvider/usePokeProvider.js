import { useContext } from "react";
import { PokeContext } from "../../context";

//Simple hook to make easier the "context" usage.

export const usePokeProvider = () => {
  return useContext(PokeContext);
};
