import { HashRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "@/layouts/MainLayout";
import { Home } from "@/pages/Home";
import { ProjectPM } from "@/pages/Project-PM";

function App() {
  return (
    <MainLayout>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pm" element={<ProjectPM />} />
        </Routes>
      </HashRouter>
    </MainLayout>
  );
}

export default App;
