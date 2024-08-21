import { useSelector, useDispatch } from "react-redux";
import { StateStore } from "../store/configureStore";
import { fetchUrl } from "../store/configureStore";

function Jokes() {
  const joke = useSelector(({data}: StateStore) => (data));
  const selectedCategorie = useSelector(({categorie}: StateStore) => (categorie));
  const dispatch = useDispatch();
  return (
    <div className="bg-amber-200 py-12 px-2 font-semibold text-2xl mb-20">
      {joke ? (
        <div className="flex flex-col gap-12 items-center">
          <h3>{typeof joke === "string" ? joke : "Invalid Data"}</h3>
          <button
            onClick={() => {
              if (typeof selectedCategorie === "string")
                dispatch(fetchUrl(selectedCategorie));
            }}
            className="p-4 rounded-md bg-amber-500"
          >
            Generate Again
          </button>
        </div>
      ) : (
        <h3>Chuck Norris will give you his best joke!!!</h3>
      )}
    </div>
  );
}

export default Jokes;
