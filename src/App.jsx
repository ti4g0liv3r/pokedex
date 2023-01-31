import { Routes, Route } from "react-router-dom";
import { Layout } from "./components";
import { Home, NotFound, Pokemon } from "./routes";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:pokemonName" element={<Pokemon />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
