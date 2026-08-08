import { HashRouter, Routes, Route } from "react-router-dom";
import { Home } from "@/pages/Home";
import { ProjectPM } from "@/pages/Project-PM";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pm" element={<ProjectPM />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
