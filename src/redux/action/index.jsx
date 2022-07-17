// eslint-disable-next-line no-multi-assign
export const addItemCartRedux = (payload) => ({
  type: 'ADD_CART',
  payload,
});
export const deleteItemCartRedux = (payload) => ({
  type: 'DELETE_CART',
  payload,
});

export const setActiveUser = (payload) => ({
  type: 'SET_ACTIVEUSER',
  payload,
});

export const setTotal = (payload) => ({
  type: 'SET_TOTAL_PRICE',
  payload,
});

export const subTotal = (payload) => ({
  type: 'SUBSTRACT_TOTAL_PRICE',
  payload,
});

export const restartTotal = (payload) => ({
  type: 'RESTART_TOTAL',
  payload,
});

export const setSearchValue = (payload) => ({
  type: 'SET_SEARCH_VALUE',
  payload,
});

export const setEmailUser = (payload) => ({
  type: 'SET_EMAIL',
  payload,
});
