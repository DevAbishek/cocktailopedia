import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Cocktail4U from "./pages/Cocktail4You";

function App() {
  return (
    <div className="wrapper">
     <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cocktail4u" element={<Cocktail4U />} />
        </Routes>
    </div>
  );
}

export default App;