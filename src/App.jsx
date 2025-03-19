import "./App.css";
import CardList from "./components/CardList/CardList";
import portfolioData from "./data/portfolioData";
import SiteHeader from "./components/SiteHeader/SiteHeader.jsx";
import Social from "./components/Social/Social.jsx";
import Footer from "./components/Footer/Footer.jsx";

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
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
