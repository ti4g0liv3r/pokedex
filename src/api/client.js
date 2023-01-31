import Axios from "axios";

const BASE_URL = "https://pokeapi.co/api/v2/"; //import.meta.env.BASE_URL;

export const client = Axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});
