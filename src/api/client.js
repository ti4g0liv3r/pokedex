import Axios from "axios";

//Axios client to use as BASE
//Idealy, this BASE_URL should be hidden on a .env file
//For this simple app, I didn't find it necessary

const BASE_URL = "https://pokeapi.co/api/v2/";

export const client = Axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});
