import React from "react";
import Header from "./components/header";
import Accordion from "./components/accordion";
import Categories from "./components/categories";
import Jokes from "./components/jokes";
function App() {
  const tutorialList = [
    `Clique em uma categoria para receber uma piada do Chuck Norris.`,
    `Você pode selecionar a categoria random para uma piada aleatória ou selecionar uma categoria para receber uma piada especifica.`,
    `Caso deseje ver outra piada da mesma categoria, clique no botão Gerar Novamente.`,
  ];

  return (
    <div className="font-mono bg-amber-100">
      <Header />
      <main className="flex flex-col items-center justify-center text-center gap-y-16 max-w-4xl mx-auto">
        <Accordion
          title="How it works?"
          list={tutorialList}
          keyProp="passoTutorial_"
        />
        <Categories />
        <Jokes />
      </main>
    </div>
  );
}

export default App;
