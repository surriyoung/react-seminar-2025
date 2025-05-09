import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AboutRoute from "./AboutRoute";

function App() {
  //✅ useNavigate를 사용하기 위한 함수
  const navigate = useNavigate();

  const navTo = (path) => {
    navigate(path);
  };

  return (
    <>
      {/* ❌a 태그 사용 시 페이지가 새로고침되며 React 상태가 초기화됨 */}
      {/* 페이지 이동을 위한 구성요소: Link, useNavigate */}
      {/* 
        ✅Link
        - HTML의 <a> 태그처럼 보이지만, 페이지를 새로고침 없이 이동 (a 태그 사용 시 페이지 이동마다 페이지가 새로 로드됨)
        - 클라이언트 사이드 라우팅 처리 기능
      */}
      <h4>Link를 사용했을 때</h4>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
        <Link to="/wrong-path">Wrong Path</Link>
      </nav>
      {/* 
        ✅useNavigate
        - 프로그래밍 방식으로 경로를 변경하는 훅
        - 버튼 클릭, 푬 제출 등 동적으로 페이지를 이동시켜야 하는 경우 사용
      */}
      <h4>useNavigate를 사용했을 때</h4>
      <button onClick={() => navTo("/")}>Home</button>
      <button onClick={() => navTo("/about")}>About</button>
      <button onClick={() => navTo("/contact")}>Contact</button>
      <button onClick={() => navTo("/wrong-path")}>Wrong Path</button>
      {/* 
        라우팅 구성요소: Routes, Route ::: 경로에 따른 화면 정의 역할(어떤 경로에서 어떤 컴포넌트를 보여줄지 설정)
        ✅Routes
        - 여러 개의 Route들을 감싸는 라우팅 컨테이너 역할
        ✅Route
        - 특정 경로(path)에 특정 커포넌트(element)를 매핑
        - URL이 일치할 때 해당 컴포넌트를 렌더링
        ex) path="/about"이면 URL이 /about일 때 <About /> 컴포넌트를 보여줌
      */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutRoute />} />
        <Route path="/contact" element={<Contact />} />
        {/* 
          ✅잘못된 URL 처리
          - path="*" 로 설정한 Route는 다른 Route들에서 매칭되지 않는 모든 경로들을 처리하게 됨
          - 미리 만들어 둔 오류 전용 페이지(보통 404 페이지)가 뜨도록 할 수 있음
        */}
        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      </Routes>
    </>
  );
}

export default App;
