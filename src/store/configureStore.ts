import { createStore, applyMiddleware} from "redux";
export type StateStore = {
  loading: boolean,
  complete: boolean,
  data: null | unknown,
  categorie: string | null
}

type Action ={
  type?: string,
  payload?: unknown
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
        data: 'Sorry, our server are with problems, our team is working to fix that, try again later.',
      };
    default:
      return { ...state};
  }
}

const thunk = (store: {dispatch: (arg: Action)=> void, getState: ()=> StateStore}) => (next: (arg: Action)=>void) => (action: unknown) => {
  if (typeof action === "function") {
    return action(store.dispatch);
  }
  // @ts-expect-error: Esperado erro porque a função não compreende o argumento passado pela tipagem acima.
  return next(action);
};

type FunctionDispatch = <UnknownAction>(action: UnknownAction, ...extraArgs: unknown[]) => UnknownAction;

export function fetchUrl(categorie?: string) {
  return async (dispatch: FunctionDispatch) => {
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