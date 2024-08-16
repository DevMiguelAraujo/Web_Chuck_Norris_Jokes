import React from "react";
import Header from "./components/header";
import Accordion from "./components/accordion";
import Categories from "./components/categories";
function App() {
  const tutorialList = [
    `Clique em Gerar Piada para receber uma piada do Chuck Norris.`,
    `Você pode selecionar uma categoria da lista de categorias para receber piadas de uma categoria especifica.`,
    `Caso deseje ver outra piada da mesma categoria, clique no botão Gerar Novamente.`,
  ];

  return (
    <>
      <div className="bg-amber-100 h-screen">
        <Header />
        <div className="flex flex-col items-center justify-center text-center gap-y-16 max-w-4xl mx-auto">
          <Accordion
            title="Como Funciona?"
            list={tutorialList}
            keyProp="passoTutorial_"
          />
          <Categories />
        </div>
      </div>
    </>
  );
}

export default App;
