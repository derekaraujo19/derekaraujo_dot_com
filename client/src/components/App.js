import { Routes, Route, Navigate } from "react-router-dom";
import Title from "./Title";
import NavBar from "./NavBar";
import Home from "./Home";
import Projects from "./Projects";
import Music from "./Music";
import Footnote from "./Footnote";
import '../App.css';



function App() {
  return (
    <div className="App">
      <Title />
      <NavBar />
      <Routes>
        <Route exact path="/about" element={<Home />} />
        <Route path="" element={<Navigate to="/about" />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/music" element={<Music />} />
      </Routes>
      <Footnote />
    </div>
  );
}

export default App;
