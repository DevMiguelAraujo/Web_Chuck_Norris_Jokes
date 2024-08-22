import React from "react";
import CategoriesLoading from "./categoriesLoading";
import { useDispatch } from "react-redux";
import { fetchUrl } from "../store/configureStore";
import Title from "./title";

function Categories() {
  const [listCategories, setListCategories] = React.useState([]);
  const dispatch = useDispatch();

  React.useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/categories")
      .then((r) => r.json())
      .then((r) => (r.push("random"), setListCategories(r)));
  }, []);

  function startFetch(item: React.BaseSyntheticEvent){
    if(!item.target.textContent) return
    // @ts-expect-error: That error occurs because the dispatch function cant receive a function as a paramater, but the middleware will prevent any error.
    dispatch(fetchUrl(item.target.textContent))
  }

  return (
    <div>
      <Title className="mb-2">List of Categories:</Title>
      <div className="flex flex-wrap gap-3 justify-center">
        {listCategories[0] ? (
          listCategories.map((item, index) => (
            <button
              onClick={event => startFetch(event)}
              className="
                py-1 bg-amber-200 flex-1 min-w-24 max-w-28 uppercase font-semibold text-lg text-center transition-all duration-300
                hover:bg-amber-500 hover:cursor-pointer"
              key={index}
            >
              {item}
            </button>
          ))
        ) : (
          <CategoriesLoading />
        )}
      </div>
    </div>
  );
}

export default Categories;
