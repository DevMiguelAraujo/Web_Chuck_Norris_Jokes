import Header from "./components/header";
import Accordion from "./components/accordion";
import Categories from "./components/categories";
import Jokes from "./components/jokes";
function App() {
  const tutorialList = [
    'Click on a category to receive a Chuck Norris joke.',
    'You can select the random category for a random joke or choose a specific category to receive a specific joke.',
    'If you wanna see another joke from the same category, click the button “Generate Again”.',
  ];

  return (
    <div className="font-mono">
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
