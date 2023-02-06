import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Coins from "./components/Coins";
import Header from "./components/Header"
import Home from "./components/Home";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coins" element={<Coins />} />
        <Route path="/" element={} />
      </Routes>
    </Router>
  );
}

export default App;
