import React from "react";

function Categories() {
  const [listCategories, setListCategories] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/categories")
      .then((r) => r.json())
      .then((r) => (r.push("random"), setListCategories(r)));
  }, []);

  return (
    <div>
      <h2 className="font-semibold text-2xl mb-2">Lista de Categorias:</h2>
      <div className="flex flex-wrap gap-3 justify-center">
        {listCategories[0]
          ? listCategories.map((item, index) => (
              <span
                className="py-1 px-0 bg-amber-200 flex-1 min-w-24 max-w-28 uppercase font-semibold text-lg text-center transition-all duration-200
                hover:px-1 hover:bg-amber-500 hover:cursor-pointer"
                key={index}
              >
                {item}
              </span>
            ))
          : "carregando..."}
      </div>
    </div>
  );
}

export default Categories;
