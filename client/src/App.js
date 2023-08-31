
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/ProductPage';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/products" >
          <Route index element={<ProductList/>} />
          <Route path=":category" element={<ProductList/>} />
        </Route>
        <Route path="/product/:productId" element={<Product/>}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
