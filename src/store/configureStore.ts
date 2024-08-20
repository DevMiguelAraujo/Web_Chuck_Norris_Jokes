import { createStore, applyMiddleware } from "redux";

const loading = "loading";
const success = "success";
const fail = "fail";

function reducer(state, action) {
  switch (action.type) {
    case loading:
      return {
        ...state,
        loading: true,
      };
    case success:
      return {
        loading: false,
        data: action.payload,
        complete: true,
      };
    case fail:
      return {
        loading: false,
        data: action.payload,
        complete: false,
      };
    default:
      return { ...state };
  }
}

const thunk = (store) => (next) => (action) => {
  if (typeof action === "function") {
    return action(store.dispatch);
  }
  return next(action);
};

export function fetchUrl(categorie: string) {
  return async (dispatch) => {
    try {
      dispatch({ type: loading });
      const data = await fetch(`https://api.chucknorris.io/jokes/random?category=${categorie}`).then((r) => r.json());
      dispatch({ type: success, payload: data.value });
    } catch (error) {
      dispatch({ type: fail, payload: error.message });
    }
  };
}
const enhancer = applyMiddleware(thunk)

export const store = createStore(reducer, enhancer);