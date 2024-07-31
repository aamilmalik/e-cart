import Navbar from "./components/Navbar"
import Product from "./components/Product"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ProductDetail from "./components/ProductDetail"
import PageNotFound from "./components/PageNotFound"
import SearchItem from "./components/SearchItem"
import Cart from "./components/Cart"
import { items } from "./components/api/Data"
import { useEffect, useState } from "react"


function App() {

  const [data,setData] = useState([...items]);
  const [cart,setCart] = useState([]);
  


  useEffect(() => {
    // Load cart data from localStorage when the component mounts
    const savedCart = localStorage.getItem("cartData");
      setCart(JSON.parse(savedCart));
  }, []);

  useEffect(() => {
    // Save cart data to localStorage whenever it changes
    localStorage.setItem("cartData", JSON.stringify(cart));
  }, [cart]);
  return (
  <>
   <Router>
    <Navbar cart={cart} setData={setData} />
    <Routes>
      <Route path="/" element={<Product items={data} cart={cart} setCart={setCart} />} />
      <Route path="/product/:id" element={<ProductDetail cart={cart} setCart={setCart} />} />
      <Route path="/search/:term" element={<SearchItem cart={cart} setCart={setCart} />} />
      <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
   </Router>
  </>
  )
}

export default App
