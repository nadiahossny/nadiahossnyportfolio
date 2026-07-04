import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext.tsx";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import APMSCaseStudy from "./pages/APMSCaseStudy.tsx";
import TasklyCaseStudy from "./pages/TasklyCaseStudy.tsx";
import BytoAcademyCaseStudy from "./pages/BytoAcademyCaseStudy.tsx";

const App = () => (
  <LanguageProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/case-study/apms" element={<APMSCaseStudy />} />
        <Route path="/case-study/taskly" element={<TasklyCaseStudy />} />
        <Route path="/case-study/byto-academy" element={<BytoAcademyCaseStudy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </LanguageProvider>
);

export default App;
