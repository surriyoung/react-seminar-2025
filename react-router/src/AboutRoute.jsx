import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";

const AboutRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/abc" element={<Contact />} />
    </Routes>
  );
};
export default AboutRoute;
