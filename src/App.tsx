import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "@/pages/Home";
import { ProjectPM } from "@/pages/Project-PM";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pm" element={<ProjectPM />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
