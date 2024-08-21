import { createStore, applyMiddleware} from "redux";
export type StateStore = {
  loading: boolean,
  complete: boolean,
  data: null | unknown,
  categorie: string | null
}

const initialStore:StateStore = {
  loading: false,
  complete: false,
  data: null,
  categorie: null
}

const loading = "loading";
const success = "success";
const fail = "fail";

function reducer(state:StateStore = initialStore, { type, payload }: {type: string, payload: string}){
  switch (type) {
    case loading:
      return {
        ...state,
        loading: true,
        categorie: payload
      };
    case success:
      return {
        ...state,
        loading: false,
        complete: true,
        data: payload,
      };
    case fail:
      return {
        ...state,
        loading: false,
        complete: false,
        data: 'Sorry, server with problems, try again later.',
      };
    default:
      return { ...state};
  }
}

const thunk = (store) => (next) => (action) => {
  if (typeof action === "function") {
    return action(store.dispatch);
  }
  return next(action);
};

export function fetchUrl(categorie?: string) {
  return async (dispatch: ({type, payload}: {type: string, payload: string | unknown})=>void) => {
    try {
      dispatch({ type: loading, payload: categorie});
      const data = await fetch(`https://api.chucknorris.io/jokes/random?${categorie !== 'random'? 'category='+categorie : ''}`).then((r) => r.json());
      if(data.status === 404) throw(data)
      dispatch({ type: success, payload: data.value });
    } catch (error: unknown){
      dispatch({ type: fail, payload: error});
    }
  };
}

const enhancer = applyMiddleware(thunk)

export const store = createStore(reducer, enhancer);