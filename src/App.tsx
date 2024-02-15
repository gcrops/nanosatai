import './App.css';
import { Navbar } from './components/nav-bar';
import { Home } from './Pages/Home.tsx';
import { Carrers } from './Pages/carrers.tsx';
import { ContactUs } from './Pages/ContactUs.tsx';
import { Product } from './Pages/Product.tsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="carrers" element={<Carrers />} />
          <Route path="products" element={<Product />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
