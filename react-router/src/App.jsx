import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  //useNavigate를 사용하기 위한 함수
  const navigate = useNavigate();

  const navTo = (path) => {
    navigate(path);
  };

  return (
    <>
      <h4>Link를 사용했을 때</h4>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
        <Link to="/wrong-path">Wrong Path</Link>
      </nav>
      <h4>useNavigate를 사용했을 때</h4>
      <button onClick={() => navTo("/")}>Home</button>
      <button onClick={() => navTo("/about")}>About</button>
      <button onClick={() => navTo("/contact")}>Contact</button>
      <button onClick={() => navTo("/wrong-path")}>Wrong Path</button>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* 잘못된 URL 처리 */}
        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      </Routes>
    </>
  );
}

export default App;
