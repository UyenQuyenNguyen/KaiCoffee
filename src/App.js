import './App.css';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import Favourite from './Pages/Favourite';
import Order from './Pages/Login';
import Bill from './Pages/Bill';
import Register from './Pages/Register';
import InforUser from './Pages/InforUser';
import DetailProduct from './Pages/DetailProduct';
import NotFound from './Component/NotFound';
import PrivateRoute from './layout/PrivateRoute';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginAccount from './Pages/Login';
import Admin from './Pages/Admin/Admin';
import { ThemeProvider, createTheme } from '@mui/material';

function App() {
  const theme = createTheme({
  palette: {
    primary: {
      main:'#206f82', 
      },
    secondary: {
      main: '#bdbdbd'
    },
    background: {
      default: '#ffffff',
      dark: '#0f3537e0',
      shadowColor: '#0d2b2d',
    }  
  },
});

  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Routes>
        {/* <Route element={<PrivateRoute/>}> */}
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favourite" element={<Favourite />} />
          <Route path="/order" element={<Order />} />
          <Route path="/bill" element={<Bill />} />
          <Route path="/inforUser" element={<InforUser />} />
          <Route path="/detailProduct/:id" element={<DetailProduct />} />
          <Route path="/admin-cp" element={<Admin theme={theme}/>} />
        {/* </Route> */}
        <Route path="/sign_in" element={<LoginAccount />} />
        <Route path="/register" element={<Register theme={theme}/>}/>
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router></ThemeProvider>
  );
}

export default App;
