import { useSelector } from "react-redux";

function Jokes() {
  const state = useSelector((state) => state);

  return (
    <div className="flex text-center justify-center bg_main w-full">
      <div className="py-12">
        <h3 className="title">{state.data || "Chuck Norris will give you his best joke!!!"}</h3>
      </div>
    </div>
  );
}

export default Jokes;
