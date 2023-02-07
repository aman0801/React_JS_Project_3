import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import CoinDetails from "./components/CoinDetails";
import Coins from "./components/Coins";
import Exchange from "./components/Exchange";
import Header from "./components/Header"
import Home from "./components/Home";
function App() {
  return (
    <Router>
      <Header bg />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coins" element={<Coins />} />
        <Route path="/exchanges" element={<Exchange />} />
        <Route path="/coin/:id" element={<CoinDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
