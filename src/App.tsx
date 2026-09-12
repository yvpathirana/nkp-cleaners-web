import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingButtons } from './components/FloatingButtons';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { OfficeCleaningPage } from './pages/OfficeCleaningPage';
import { HomeCleaningPage } from './pages/HomeCleaningPage';
import { PressureWashingPage } from './pages/PressureWashingPage';
import { SofaMattressCleaningPage } from './pages/SofaMattressCleaningPage';
import { CarpetCleaningPage } from './pages/CarpetCleaningPage';
import { ContactPage } from './pages/ContactPage';
import { ServiceAreasPage } from './pages/ServiceAreasPage';
import { AreaPage } from './pages/AreaPage';
import { DeepCleaningPackagesPage } from './pages/DeepCleaningPackagesPage';
import { FloorRestorationPage } from './pages/FloorRestorationPage';
import { PostConstructionPage } from './pages/PostConstructionPage';
import { PackagesPage } from './pages/PackagesPage';
import { initGA4, trackPageView } from './utils/analytics';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Analytics() {
  const { pathname } = useLocation();

  useEffect(() => {
    initGA4();
  }, []);

  useEffect(() => {
    trackPageView(pathname);
  }, [pathname]);

  return null;
}
export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Analytics />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-16 md:pt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:category" element={<ServicesPage />} />
            <Route path="/office-cleaning" element={<OfficeCleaningPage />} />
            <Route path="/home-cleaning" element={<HomeCleaningPage />} />
            <Route path="/pressure-washing" element={<PressureWashingPage />} />
            <Route
              path="/sofa-mattress-cleaning"
              element={<SofaMattressCleaningPage />} />

            <Route path="/carpet-cleaning" element={<CarpetCleaningPage />} />
            <Route path="/deep-cleaning-packages" element={<DeepCleaningPackagesPage />} />
            <Route path="/floor-restoration" element={<FloorRestorationPage />} />
            <Route path="/post-construction-cleaning" element={<PostConstructionPage />} />
            <Route path="/packages" element={<PackagesPage />} />
            <Route path="/service-areas" element={<ServiceAreasPage />} />
            <Route path="/service-areas/:areaSlug" element={<AreaPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <FloatingButtons />
      </div>
    </BrowserRouter>);

}