import { useSelector } from "react-redux";

function Jokes(){

  const estado = useSelector((estado) => estado)

  return(
    <div className="flex text-center justify-center bg_main w-full">
      <div className="py-6">
        <h3 className="title">
          {estado.data || "Gere sua piada."}
        </h3>
      </div>
    </div>
  )
}

export default Jokes