// src/components/UserList.js
import React, { useEffect, useState } from "react";
import axios from "axios";

function UserList() {
  const [users, setUsers] = useState([]); // 사용자 데이터를 저장할 상태
  const [loading, setLoading] = useState(true); // 로딩 상태를 관리하는 상태

  // 1️⃣Axios + then/catch
  // ✅ useEffect: 컴포넌트가 화면에 처음 렌더링될 때 실행되는 Hook
  // 📌 의존성 배열이 빈 배열([])이므로 마운트 시 1회만 실행됨
  useEffect(() => {
    // Axios를 이용한 GET 요청
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // ✅ 요청이 성공하면 응답 데이터(response.data)를 users 상태에 저장
        setUsers(response.data);
        // ✅ 데이터 로딩 완료 후 로딩 상태 false로 변경
        setLoading(false);
      })
      .catch((error) => {
        // 요청 중 에러 발생 시 콘솔에 출력
        console.error("에러 발생:", error);
        setLoading(false);
      });
  }, []);

  // 2️⃣Axios + async/await
  useEffect(() => {
    // 🔄 데이터를 비동기적으로 가져오는 함수
    const fetchUsers = async () => {
      try {
        // 📡 axios로 GET 요청을 보냄 (await로 응답 기다림)
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        // ✅ 응답 데이터(response.data)를 users 상태에 저장
        setUsers(response.data);
      } catch (error) {
        // 요청 중 에러가 발생하면 에러 메시지 출력
        console.error("에러 발생:", error);
      } finally {
        // 성공/실패 상관없이 로딩은 끝남
        setLoading(false);
      }
    };

    // 🚀 비동기 함수 실행
    fetchUsers();
  }, []);

  // 데이터를 받아오는 중이면 "로딩 중..." 표시
  if (loading) {
    return <p>로딩 중...</p>;
  }

  // 데이터 로딩 완료 후 사용자 목록 렌더링
  return (
    <div>
      <p>사용자 목록</p>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
