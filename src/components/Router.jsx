import { Route, Routes } from "react-router-dom";
import ErrorP from '../pages/ErrorP/ErrorP.jsx'
import Home from "../pages/Home/Home.jsx";
import SignIn from "../pages/SignIn/SignIn.jsx";
import Basket from "../pages/Basket/Basket.jsx";
import Product  from "../pages/Product/Product.jsx";
import Like from "../pages/Like/Like.jsx";
import SignUp from '../pages/SignUp/SignUp.jsx'



export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/like" element={<Like />}/>
      <Route path="/basket/total" element={<Basket />}/>
      <Route path="/signin/user" element={<SignIn />}/>
      <Route path="/signup/user" element={<SignUp />}/>
      <Route path="/product" element={<Product />}/>
      <Route path="*" element={<ErrorP />}/>
    </Routes>
  )
}
