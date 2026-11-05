import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Playground from './components/Playground';
import CaseStudy from './pages/CaseStudy';
import About from './pages/About';
import Work from './pages/Work';
import WorkWithMe from './pages/WorkWithMe';
import NotFound from './pages/NotFound';
import ScrollToTop from './components/ScrollToTop';
import { LanguageProvider } from './context/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-background text-bodytext">
        <ScrollToTop />
        <a href="#main-content" className="skip-link">Skip to content / انتقل إلى المحتوى</a>
        <Navigation />
        <main id="main-content" tabIndex={-1} className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/work/:id" element={<CaseStudy />} />
            <Route path="/work-with-me" element={<WorkWithMe />} />
            <Route path="/services" element={<WorkWithMe />} />
            <Route path="/visuals" element={<Services />} />
            <Route path="/graphic-design" element={<Services />} />
            <Route path="/creative-corner" element={<Playground />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
