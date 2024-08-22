import { LoadingSpinner } from "../assets";
import Title from "./title";

function CategoriesLoading() {
  return (
    <div className="flex bg-amber-200 p-6 gap-6">
      <Title className="border-none">Loading</Title>
      <div className="animate-spin">
        <LoadingSpinner width='30px' height='30px'/>
      </div>
    </div>
  );
}

export default CategoriesLoading;
