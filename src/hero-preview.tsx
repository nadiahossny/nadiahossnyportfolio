import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Navigation from './components/Navigation';
import CloudTheatreHero from './components/CloudTheatreHero';
import './index.css';

// Local review entry: renders the actual hero, independent of project/collection imports.
createRoot(document.getElementById('root')!).render(
  <BrowserRouter><LanguageProvider><Navigation /><main className="home-page play-entrance min-h-screen"><CloudTheatreHero /></main></LanguageProvider></BrowserRouter>
);
