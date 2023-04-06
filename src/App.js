import './App.css';
import Home from './Pages/Home';
import Shop  from './Pages/Shop';
import Cart from './Pages/Cart';
import Favourite from './Pages/Favourite';
import Order from './Pages/Login';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import LoginAccount from './Pages/Login';

function App() {

  return (
      <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Shop" element={<Shop />} />
                <Route path="/Cart" element={<Cart />} />
                <Route path="/Favourite" element={<Favourite />} />
                <Route path="/Order" element={<Order />} />
                <Route path="/LoginAccount" element={<LoginAccount />} />
            </Routes>
        </Router>
  );
}

export default App;
