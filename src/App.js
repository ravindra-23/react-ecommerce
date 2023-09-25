import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from './scenes/home/Home'
import ItemDetails from './scenes/itemDetails/ItemDetails'
import Navbar from './scenes/global/Navbar'
import CartMenu from "./scenes/global/CartMenu";
import Footer from "./scenes/global/Footer";
import { setItems } from "./state/cartSlice";
import productsData from './assets/strapi-mock-data/strapi-item-inputs.json'
import { useDispatch } from "react-redux";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const products = productsData.data['api::item.item']
  const productsArray = Object.values(products)
  dispatch(setItems(productsArray))

  useEffect(() => {
    window.scrollTo(0, 0);
  },[pathname])

  return null;
}

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="item/:itemId" element={ <ItemDetails /> } />
        </Routes>
        <CartMenu />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
