import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext.tsx";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import BloomBookCaseStudy from "./pages/BloomBookCaseStudy.tsx";
import APMSCaseStudy from "./pages/APMSCaseStudy.tsx";

const App = () => (
  <LanguageProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/case-study/bloom-book" element={<BloomBookCaseStudy />} />
        <Route path="/case-study/apms" element={<APMSCaseStudy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </LanguageProvider>
);

export default App;
