import { HashRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "@/layouts/MainLayout";
import { Home } from "@/pages/Home";
import { ProjectPM } from "@/pages/Project-PM";
import { ProjectRPO } from "@/pages/Project-RPO";
import { ProjectJAS } from "@/pages/Project-JAS";

function App() {
  return (
    <HashRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pm" element={<ProjectPM />} />
          <Route path="/rpo" element={<ProjectRPO />} />
          <Route path="/jas" element={<ProjectJAS />} />
        </Routes>
      </MainLayout>
    </HashRouter>
  );
}

export default App;
