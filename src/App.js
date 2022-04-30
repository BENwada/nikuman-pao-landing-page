import "./App.css";
import LpType1 from "./pages/LpType1";
import NightPart from "./pages/NightPart";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LpType1 />} />
        <Route path="night-part" element={<NightPart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
