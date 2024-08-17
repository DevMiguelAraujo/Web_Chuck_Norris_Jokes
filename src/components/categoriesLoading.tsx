import { LoadingSpinner } from "../assets";

function CategoriesLoading() {
  return (
    <div className="flex items-center bg-amber-200 p-2 gap-2">
      <h1 className="text-2xl font-semibold">Carregando</h1>
      <div className="animate-spin">
        <LoadingSpinner width='30px' height='30px'/>
      </div>
    </div>
  );
}

export default CategoriesLoading;
