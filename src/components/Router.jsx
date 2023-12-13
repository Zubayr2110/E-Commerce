import { Route, Routes } from "react-router-dom";
import ErrorP from "../pages/ErrorP/ErrorP.jsx";
import Home from "../pages/Home/Home.jsx";
import SignIn from "../pages/SignIn/SignIn.jsx";
import Basket from "../pages/Basket/Basket.jsx";
import Product from "../pages/Product/Product.jsx";
import Like from "../pages/Like/Like.jsx";
import SignUp from "../pages/SignUp/SignUp.jsx";
import Single from "../pages/Single/Single.jsx";
import Loading from "../pages/Loading/Loading.jsx";
import ProtectRoute from "./ProtectRoute.jsx";
import AddProduct from "../pages/AddProduct/AddProduct.jsx";
import Cards from "../pages/Card/Cards.jsx";
import HSingle from "../pages/Single/HSingle.jsx";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add/product" element={
        <ProtectRoute>
          <AddProduct />
        </ProtectRoute>
      }/>
      <Route path="/cards" element={<Cards />} />
      <Route path="loading/data" element={<Loading />} />
      <Route path="/like" element={<Like />} />
      <Route path="/single/:id" element={<Single />} />
      <Route path="/singleh/:id" element={<HSingle />} />
      <Route path="/basket/total" element={<Basket />} />
      <Route path="/signin/user" element={<SignIn />} />
      <Route path="/signup/user" element={<SignUp />} />
      <Route path="/product" element={<Product />} />
      <Route path="*" element={<ErrorP />} />
    </Routes>
  );
}
