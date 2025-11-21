import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Totoro from "./pages/Totoro";
import SpiritedAway from "./pages/SpiritedAway";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/totoro" element={<Totoro />} />
          <Route path="/spirited" element={<SpiritedAway />} />
          <Route path="*" element={<NotFound />} />  {/* This catches all other URLs */}
        </Routes>

      </div>
    </div>
  );
}

export default App;
