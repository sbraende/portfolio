import CardList from "./components/CardList/CardList";
import portfolioData from "./data/portfolioData";

function App() {
  return (
    <>
      <header></header>
      <main>
        <CardList portfolioData={portfolioData} />
      </main>
    </>
  );
}

export default App;
