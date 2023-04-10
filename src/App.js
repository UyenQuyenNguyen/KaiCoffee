import './App.css';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import Favourite from './Pages/Favourite';
import Order from './Pages/Login';
import Bill from './Pages/Bill';
import InforUser from './Pages/InforUser';
import DetailProduct from './Pages/DetailProduct';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
        <Route path="/Bill" element={<Bill />} />
        <Route path="/InforUser" element={<InforUser />} />
        <Route path="/DetailProduct/:id" element={<DetailProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
