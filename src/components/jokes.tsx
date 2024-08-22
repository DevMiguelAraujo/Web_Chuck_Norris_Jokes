import { useSelector, useDispatch } from "react-redux";
import { fetchUrl } from "../store/configureStore";

function Jokes() {
  const joke = useSelector(({data}: {data:string}) => (data));
  const selectedCategorie = useSelector(({categorie}: {categorie:string}) => (categorie));
  const dispatch = useDispatch();
  return (
    <div className="bg-amber-200 py-12 px-2 font-semibold text-2xl mb-20">
      {joke ? (
        <div className="flex flex-col gap-12 items-center">
          <h3>{typeof joke === "string" ? joke : "Invalid Data"}</h3>
          <button
            onClick={() => {
              if (typeof selectedCategorie === "string")
                 // @ts-expect-error: That error occurs because the dispatch function cant receive a function as a paramater, but the middleware will prevent any error.
                dispatch(fetchUrl(selectedCategorie));
            }}
            className="p-4 rounded-md bg-amber-500"
          >
            Generate Again
          </button>
        </div>
      ) : (
        <h3>Be prepared for this, Chuck Norris will give you his best joke!!!</h3>
      )}
    </div>
  );
}

export default Jokes;
