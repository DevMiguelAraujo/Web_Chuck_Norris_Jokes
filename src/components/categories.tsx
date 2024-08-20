import React from "react";
import CategoriesLoading from "./categoriesLoading";
import { useDispatch} from "react-redux";
import { fetchUrl } from "../store/configureStore";


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
      <h2 className="title mb-2">List of Categories:</h2>
      <div className="flex flex-wrap gap-3 justify-center">
        {listCategories[0] ? (
          listCategories.map((item, index) => (
            <span
              onClick={(i) =>
                dispatch(
                  fetchUrl(i.target.innerText.toLowerCase())
                )
              }
              className="
                py-1 bg_main flex-1 min-w-24 max-w-28 uppercase font-semibold text-lg text-center transition-all duration-300
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
