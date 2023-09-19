import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from './scenes/home/Home'
import ItemDetails from './scenes/itemDetails/ItemDetails'
import Navbar from './scenes/global/Navbar'

const ScrollToTop = () => {
  const { pathname } = useLocation();

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
          <Route path="/item:itemId" element={ <ItemDetails /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
