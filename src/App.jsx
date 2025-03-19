import "./App.css";
import CardList from "./components/CardList/CardList";
import portfolioData from "./data/portfolioData";
import SiteHeader from "./components/SiteHeader/SiteHeader.jsx";
import Social from "./components/Social/Social.jsx";

function App() {
  return (
    <>
      <header>
        <SiteHeader />
        <Social />
      </header>
      <main>
        <CardList portfolioData={portfolioData} />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
