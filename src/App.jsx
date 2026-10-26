import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Rounds from "./components/Rounds";
import Schedule from "./components/Schedule";
import Prizes from "./components/Prizes";
import Rules from "./components/Rules";
import Registration from "./components/Registration";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero /><About /><Rounds /><Schedule /><Prizes /><Rules /><Registration /><FAQ />
      </main>
      <Footer />
    </>
  );
}
