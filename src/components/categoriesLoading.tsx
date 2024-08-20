import { LoadingSpinner } from "../assets";

function CategoriesLoading() {
  return (
    <div className="flex items-center bg_main p-2 gap-2">
      <h1 className="title">Loading</h1>
      <div className="animate-spin">
        <LoadingSpinner width='30px' height='30px'/>
      </div>
    </div>
  );
}

export default CategoriesLoading;
