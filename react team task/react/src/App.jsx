import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Technology from "./pages/Technology";
import AI from "./pages/AI";
import StockMarket from "./pages/StockMarket";
import Exams from "./pages/Exams";
import NewsDetails from "./pages/NewsDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/technology" element={<Technology />} />

        <Route path="/ai" element={<AI />} />

        <Route path="/stockmarket" element={<StockMarket />} />

        <Route path="/exams" element={<Exams />} />

        <Route path="/news/:id" element={<NewsDetails />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;