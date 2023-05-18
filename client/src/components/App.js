import { Routes, Route, Navigate } from "react-router-dom";
import Title from "./Title";
import NavBar from "./NavBar";
import Home from "./Home";
import Projects from "./Projects";
import Music from "./Music";
import Footnote from "./Footnote";
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';


function App() {
  return (
    <div className="App">
      <Container fluid>
        <Title />
        <NavBar />
        <Routes>
          <Route exact path="/about" element={<Home />} />
          <Route path="" element={<Navigate to="/about" />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/music" element={<Music />} />
        </Routes>
        <Footnote />
      </Container>
    </div>
  );
}

export default App;
