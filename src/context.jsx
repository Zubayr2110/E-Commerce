import { useEffect, useReducer, useState } from "react";
import { createContext, useContext } from "react";
import reducer from "./reducer";
import { uid } from "uid";
import { getUser } from "./utils";

const id = uid();

const initialState = {
  data: [],
  loading: false,
  total: 0,
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
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
