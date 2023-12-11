import { useEffect, useReducer, useState } from "react";
import { createContext, useContext } from "react";
import reducer from "./reducer";
import { uid } from "uid";
import { getProducts, getUser } from "./utils";
import Loading from "./pages/Loading/Loading.jsx";

const id = uid();

const initialState = {
  data: [],
  cart: "https://jsonplaceholder.typicode.com/users",
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const url = `https://jsonplaceholder.typicode.com`
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [products, setProducts] = useState(getProducts("products"));
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearBasket = () => {
    dispatch({ type: "CLEARBASKET" });
  };
  const inc = () => {
    dispatch({ type: "INCREASE", payload: id });
  };
  const dec = () => {
    dispatch({ type: "DECREASE", payload: id });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (getUser) {
      console.log(getUser);
    }
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const resp = await fetch(url);
      const data = await resp.json();
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        handleSubmit,
        dec,
        inc,
        clearBasket,
        name,
        setName,
        password,
        setPassword,
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
