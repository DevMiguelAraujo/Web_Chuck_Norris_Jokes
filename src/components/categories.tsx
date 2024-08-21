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

  return (
    <div>
      <Title className="mb-2">List of Categories:</Title>
      <div className="flex flex-wrap gap-3 justify-center">
        {listCategories[0] ? (
          listCategories.map((item, index) => (
            <span
              onClick={({ target }: { target: HTMLSpanElement }) => {
                if(!target.textContent) return
                dispatch(fetchUrl(target.textContent))
              }}
              className="
                py-1 bg-amber-200 flex-1 min-w-24 max-w-28 uppercase font-semibold text-lg text-center transition-all duration-300
                hover:bg-amber-500 hover:cursor-pointer"
              key={index}
            >
              {item}
            </span>
          ))
        ) : (
          <CategoriesLoading />
        )}
      </div>
    </div>
  );
}

export default Categories;
