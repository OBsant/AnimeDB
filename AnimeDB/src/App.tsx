import Nav from "./components/NavbarSite";
import "./styles/main.sass";
//Config react router
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Pages
import Home from "./routes/Home";
import TopAnime from "./routes/TopAnime";
import Anime from "./routes/Anime";

function App() {
  return (
    <div className="App">
      <Nav />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/animes" element={<TopAnime />} />
          <Route path="/animes/:id" element={<Anime />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
