import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Cocktail4U from "./pages/Cocktail4You";
import CocktailSearch from "./pages/CocktailSearch";

function App() {
  return (
    <div className="wrapper">
     <Navbar/>
        <Routes>
          <Route exact path="/" element={<Cocktail4U />} />
          <Route exact path="/cocktailsearch" element={<CocktailSearch />} />
        </Routes>
    </div>
  );
}

export default App;