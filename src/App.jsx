import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Locations from './pages/Locations';
import Contact from './pages/Contact';
import ComingSoonBanner from './components/ui/ComingSoonBanner';

const Gallery = lazy(() => import('./pages/Gallery'));

// Professional Loading Spinner
const PageLoader = () => (
  <div className="fixed inset-0 bg-dark-950 z-[99999] flex items-center justify-center">
    <div className="relative">
      <div className="w-16 h-16 rounded-full border-4 border-primary-600/20 border-t-primary-600 animate-spin"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-8 h-8 rounded-full bg-primary-600/10 blur-sm animate-pulse"></div>
      </div>
    </div>
  </div>
);

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ComingSoonBanner />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:serviceName" element={<ServiceDetail />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="locations" element={<Locations />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Suspense>
  </Router>
  );
}

export default App;


