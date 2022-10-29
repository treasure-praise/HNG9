import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LinksSection from "./components/LinksSection";
import SocialSection from "./components/SocialSection";

function App() {
  return (
    <div className="App">
      <Header />
      <LinksSection />
      <SocialSection />
      <Footer />
    </div>
  );
}

export default App;
