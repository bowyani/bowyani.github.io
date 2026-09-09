import { lazy, Suspense } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "@/layouts/MainLayout";
import { Home } from "@/pages/Home";
import { ProjectPVM } from "@/pages/Project-PVM";
import { ProjectRPO } from "@/pages/Project-RPO";
import { ProjectJAS } from "@/pages/Project-JAS";

// Heavier route (bundles a markdown renderer) — split out so it only
// loads when someone visits /production-monitoring.
const ProjectPMON = lazy(() =>
  import("@/pages/Project-PMON").then((m) => ({ default: m.ProjectPMON })),
);

function App() {
  return (
    <HashRouter>
      <MainLayout>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/preventive-maintenance" element={<ProjectPVM />} />
            <Route path="/production-monitoring" element={<ProjectPMON />} />
            <Route path="/rpo" element={<ProjectRPO />} />
            <Route path="/jas" element={<ProjectJAS />} />
          </Routes>
        </Suspense>
      </MainLayout>
    </HashRouter>
  );
}

export default App;
