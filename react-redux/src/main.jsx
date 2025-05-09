import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// Provider: Redux의 store를 React 앱에 연결해주는 컴포넌트
import { Provider } from "react-redux";
import store from "./store/index.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* 🧠Store를 앱에 주입 */}
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
