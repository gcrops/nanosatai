import './App.css';
import { Navbar, CopyRight } from '@/components';
import {
  Home,
  Careers,
  ContactUs,
  Product,
  About,
  Devops,
  Cloud,
  Geo,
  Managedservices,
  Teams,
} from '@/pages';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />

          <Route path="services/devops" element={<Devops />}></Route>
          <Route path="services/cloud" element={<Cloud />}></Route>
          <Route path="services/geo" element={<Geo />}></Route>
          <Route path="services/geo/data-processing" element={<Geo />}></Route>
          <Route path="services/geo/remote-sensing" element={<Geo />}></Route>
          <Route path="services/geo/gis" element={<Geo />}></Route>
          <Route path="services/managed" element={<Managedservices />}></Route>
          <Route path="services/teams" element={<Teams />}></Route>
          <Route path="services/*" element={<Devops />}></Route>

          <Route path="careers" element={<Careers />} />
          <Route path="blog" element={<Product />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <CopyRight></CopyRight>
    </div>
  );
}

export default App;
