import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import App2 from "./App2.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
    {/* <App2 /> */}
  </BrowserRouter>
);
