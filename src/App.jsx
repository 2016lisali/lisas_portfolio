import { useState } from "react";
import Skills from "./components/Skills";
// import ReactDOM from "react-dom";

import Contact from "./components/Contact";
import Intro from "./components/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Topbar from "./components/Topbar";
import "./app.scss"
import Footer from "./components/Footer";
import ContactList from "./components/ContactList";

function App() {
  const [menuOpen, setMenuOpen] = useState(true)
  return (
    <div className="app bg-light">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <ContactList />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Skills />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
