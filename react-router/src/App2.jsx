import "./App.css";
import { Routes, Route, Link, useParams, useLocation } from "react-router-dom";
import React, { useEffect } from "react";

/*
 ✅ URL에서 값을 가져올 수 있는 주요 훅
 1️⃣ useLocation        : 현재 URL의 전체 정보를 가져옴 (pathname, search 등)
 2️⃣ useParams          : 동적 URL 경로에서 파라미터 추출 (ex. /user/:id)
 3️⃣ URLSearchParams    : 쿼리 스트링에서 특정 키의 값을 추출할 수 있음 (ex. ?keyword=react)
*/

// 1. 기본 Home 컴포넌트
function Home() {
  const location = useLocation(); // ✅ useLocation ::: 현재 URL 전체 정보를 가져오는 훅

  useEffect(() => {
    // useLocation으로부터 얻은 객체를 통해 현재 경로(pathname) 확인 가능
    console.log("Current Path:", location.pathname);
  }, [location]);

  return <h1>Home Page</h1>;
}

// 2. URL 파라미터를 사용하는 컴포넌트
function User() {
  const { id } = useParams(); // ✅useParams: 동적 URL 파라미터(id) 추출(/user/:id 형태의 경로에서 동적 파라미터(id) 추출)
  const location = useLocation(); // ✅useLocation: 현재 URL 정보 전체를 가져오는 훅

  useEffect(() => {
    console.log("Current Path:", location.pathname); // 현재 경로
    console.log("URL Parameter (id):", id); // useParams로부터 추출한 id 출력
  }, [id, location]);

  return <h1>User ID: {id}</h1>;
}

// 3. 쿼리 파라미터를 사용하는 컴포넌트
function Search() {
  const location = useLocation(); // ✅useLocation: 현재 URL 정보 전체를 가져오는 훅
  const queryParams = new URLSearchParams(location.search); // ✅URLSearchParams: URL의 쿼리스트링(?keyword=값)을 파싱
  const keyword = queryParams.get("keyword"); // 쿼리 파라미터 중 "keyword" 값 추출

  useEffect(() => {
    console.log("Current Path:", location.pathname); //현재 경로
    console.log("Query Parameter (keyword):", keyword); // 추출한 쿼리 파라미터 값
  }, [keyword, location]);

  return <h1>Search Keyword: {keyword}</h1>;
}

// 4. 라우팅 설정
function App2() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/user/999">User</Link>
        <Link to="/search?keyword=react">Search</Link>
      </nav>
      <Routes>
        {/* 루트 경로 ("/")로 접근 시 Home 컴포넌트 렌더링 */}
        <Route path="/" element={<Home />} />
        {/* "/user/값" 형식으로 접근 시 User 컴포넌트 렌더링, 해당 값은 id로 전달됨 */}
        <Route path="/user/:id" element={<User />} />
        {/* "/search?keyword=값" 형식으로 접근 시 Search 컴포넌트 렌더링 */}
        <Route path="/search" element={<Search />} />
      </Routes>
    </>
  );
}

export default App2;
