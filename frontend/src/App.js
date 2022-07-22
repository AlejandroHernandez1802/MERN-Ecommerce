import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Homepage from './Pages/HomePage/Homepage';
import ProductList from './Pages/Category/ProductList';
import Product from './Pages/SingleProduct/Product';
import RegisterPage from './Pages/RegisterPage/RegisterPage';
import LoginPage from './Pages/LoginPage/LoginPage';
import Cart from './Pages/CartPage/Cart';

function App() {

  const user = true;

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Homepage />}></Route>
          <Route path="/category/:categoryName" element={<ProductList />}></Route>
          <Route path="/product/:productId" element={<Product />}></Route>
          <Route path="/login" element={user ? <Navigate to="/"/>:<LoginPage />}></Route>
          <Route path="/register" element={user ? <Navigate to="/"/>:<RegisterPage />}></Route>
          <Route path="/cart" element={<Cart /> }></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
