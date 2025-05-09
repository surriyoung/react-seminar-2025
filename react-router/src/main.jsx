import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import App2 from "./App2.jsx";

//라우팅이란? 웹사이트를 Single Page Application 방식으로 만들 때 페이지 전환 시 전체를 새로 고치는 대신 클라이언트 사이드에서 페이지를 빠르게 전환할 수 있도록 하는 방식
//설치 ::: npm i react-router-dom
createRoot(document.getElementById("root")).render(
  // BrowserRouter ::: 어플리케이션이 URL경로에 따라 페이지를 렌더링할 수 있도록 해주며, 새로고침 없이 페이지를 전환할 수 있게 만들어줌
  // 앱의 최상위 컴포넌트를 BrowserRouter로 감싸서 앱에 라우팅 기능을 제공
  <BrowserRouter>
    <App />
    {/* <App2 /> */}
  </BrowserRouter>
);
