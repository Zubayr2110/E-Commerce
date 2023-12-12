import { useEffect, useReducer, useState } from "react";
import { createContext, useContext } from "react";
import reducer from "./reducer";
import { uid } from "uid";
import { getProducts, getUser } from "./utils";
import Loading from "./pages/Loading/Loading.jsx";

const initialState = {
  data: [],
  cart: "https://fakestoreapi.com/products",
};

const id = uid();
const url = `https://fakestoreapi.com/products`;

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(getUser("user"));
  const [products, setProducts] = useState(getProducts("products"));
  
  const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://fakestoreapi.com/products');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const result = await response.json();
          setData(result);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);

  const login = () => {
    const newUser = { id: id, name: name, psw: password, email: email };
    setUser(newUser);
  };

  const addProduct = () => {
    const newProduct = { id: id, img: img, title: title, price: price };
    setProducts([...products, newProduct]);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("products", JSON.stringify(products));
  }, [user, products]);



  if (loading) {
    return <Loading />;
  }

  return (
    <AppContext.Provider
      value={{
        login,
        name,
        setName,
        password,
        setPassword,
        email,
        setEmail,
        data
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
