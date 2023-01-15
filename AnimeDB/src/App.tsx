import Nav from "./components/NavbarSite";
import "./styles/main.sass";
//Config react router
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
//Pages
import Home from "./routes/Home";
import TopAnime from "./routes/TopAnime";
import Anime from "./routes/Anime";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/animes" element={<TopAnime />} />
          <Route path="/animes/:id" element={<Anime />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
