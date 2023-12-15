const reducer = (state, action) => {
  if (action.type === "CLEAR") {
    return {
      ...state,
      data: [],
    };
  }
  if (action.type === "ADD") {
    let tcart = state.data.map(item => {
      if (item.id === action.payload) {
        return { ...item, amount: item.amount + 1 };
      }
      return item;
    });
    return { ...state, data: tcart };
  }
  if (action.type === "DEC") {
    let tcart = state.data.map(item => {
      if (item.id === action.payload) {
        return { ...item, amount: item.amount - 1 };
      }
      return item;
    });
    return { ...state, data: tcart };
  }
  if (action.type === "REMOVE") {
    let filtredItem = state.data.filter((item) => item.id !== action.payload);
    return { ...state, data: filtredItem };
  }
  if (action.type === "TOTAL") {
    let priceP = 0;
    let totalPrice = state.data.map((item) => priceP += item.price)
    return { ...state, totalPrice };
  }
};

export default reducer;
