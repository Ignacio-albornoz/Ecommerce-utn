export const reducer = (state, action) => {
  const setLocal = (data) => {
    try {
      window.localStorage.setItem(data, { data });
    } catch (e) {
      console.error(e);
    }
  };
  switch (action.type) {
    case 'ADD_CART':
      return {
        ...state,
        cartList: [...state.cartList, action.payload],
      };
    case 'SET_ACTIVEUSER':
      return {
        ...state,
        user: [...state, action.payload],
      };
    case 'DELETE_CART':
      return {
        ...state,
        cartList: state.cartList.filter((items) => items.itemId !== action.payload),
      };
    case 'SET_TOTAL_PRICE':
      return {
        ...state,
        totalPrice: [parseInt(state.totalPrice) + parseInt(action.payload)],
      };
    case 'SUBSTRACT_TOTAL_PRICE':
      return {
        ...state,
        totalPrice: [parseInt(state.totalPrice) - parseInt(action.payload)],
      };
    case 'RESTART_TOTAL':
      return {
        ...state,
        totalPrice: [0],
      };
    default:
      return state;
  }

};
