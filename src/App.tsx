import { useEffect } from 'react';
import { HashRouter, Route, Routes, useLocation } from 'react-router-dom';
import Footer from './Footer';
import Foundation from './Foundation';
import Homepage from './Homepage';
import ProductList from './ProductList';
import SiteHeader from './SiteHeader';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <SiteHeader />
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/product_list" element={<ProductList />} />
          <Route path="/foundation" element={<Foundation />} />
          <Route path="*" element={<Homepage />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  );
}

export default App;
