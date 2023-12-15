import { useEffect, useReducer, useState } from "react";
import { createContext, useContext } from "react";
import reducer from "./reducer";
import { uid } from "uid";
import { RemoveLocal, getBasket, getLikeL, getProducts, getUser } from "./utils";
import Loading from "./pages/Loading/Loading.jsx";
import { useNavigate } from "react-router-dom";
import Data from "./components/Data.jsx";

const initialState = {
  data: Data,
  total: 0,
  amount: 0,
  cart: "https://fakestoreapi.com/products",
};

const id = uid();
const url = `https://fakestoreapi.com/products`;

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearBasket = () => {
      dispatch({ type: "CLEAR" })
      RemoveLocal("basket")
      location.reload()    
  }
  const addB = (id) => {
    dispatch( { type: "INC", payload: id } )
  }
  const decB = (id) => {
    dispatch({ type: "DEC", payload: id })
  }
  const remB = (id) => {
    dispatch({ type: "REMOVE", payload: id })
  }
  useEffect(() => {
    dispatch({ type: "TOTAL" })
  }, [])
  const totalp = () => {
    dispatch({ type: "TOTAL" })
  }

  const [loading, setLoading] = useState(false);

  const [title, setTitle] = useState("");

  const [price, setPrice] = useState("");
  const [image, setImage] = useState(`https://picsum.photos/200/300`);

  const [name, setName] = useState("");

  const [description, setDescription] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [user, setUser] = useState(getUser("user"));

  const [products, setProducts] = useState(getProducts("products"));
  const [basket, setBasket] = useState(getBasket("basket"));


  const [data, setData] = useState(null);

  const [error, setError] = useState(null);
  const [amountp, setAmountp] = useState("")
  const [categoryp, setCategoryp] = useState("")
  const login = () => {
    const newUser = { id: id, name: name, psw: password, email: email };
    setUser(newUser);
    navigate("/");
  };
  const addProduct = () => {
    const newProduct = {
      id: id,
      title: title,
      price: price,
      description: description,
      image: image,
      amount: amountp,
      category: categoryp,
    };
    setProducts([...products, newProduct]);
  };
  const addBasket = (id, title, price, description, image, amount, category) => {
    const newBasketItem = {
      id: id,
      title: title,
      price: price,
      description: description,
      image: image,
      amount: amount,
      category: category,
    };
    setBasket([...basket, newBasketItem]);
  };


  const [likeF, setLikeF] = useState(getLikeL("like"))
  const FLikeI = (id, title, price, description, image, amount, category) => {
    const newLP = {
      id: id,
      title: title,
      price: price,
      description: description,
      image: image,
      amount: amount,
      category: category,
    }
    setLikeF([...likeF, newLP])
  }

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("basket", JSON.stringify(basket));
    localStorage.setItem("products", JSON.stringify(products));
    localStorage.setItem("like", JSON.stringify(likeF));
  }, [user, products, basket, likeF]);

  if (loading) {
    return <Loading />;
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearBasket,
        remB,
        addB,
        decB,
        totalp,

        login,
        name,
        setName,
        password,
        setPassword,
        email,
        setEmail,
        products,
        setProducts,
        user,
        addProduct,
        description,
        setDescription,
        title,
        setTitle,
        price,
        setPrice,
        image,
        setImage,
        addBasket,
        basket,
        FLikeI,
        likeF,
        categoryp, 
        setCategoryp,
        amountp,
        setAmountp
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
