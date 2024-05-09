import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage';
import ProductsPage from './Pages/ProductsPage';
import NavBar from './Components/NavBar';
import { ProductsProvider } from './Store/Index';
import ProductsDetails from './Components/ProductsDetails';


function App() {
  return (
    <div className="App">
      <ProductsProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Products" element={<ProductsPage />} />
            <Route path="/Products/:id" element={<ProductsDetails />} />
          </Routes>
        </BrowserRouter>
      </ProductsProvider>

    </div>
  );
}

export default App;
