import "./css/App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ProtectedRoutes from "./components/ProtectedRoutes";
import PokemonDetails from "./components/PokemonDetails";
import Pokedex from "./components/Pokedex";
import { useSelector } from "react-redux";

function App() {
  const loading = useSelector((state) => state.loading);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/pokedex/:name" element={<PokemonDetails />} />
          <Route />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
