// src/components/UserList.js
import React, { useEffect, useState } from "react";
import axios from "axios";

function UserList() {
  const [users, setUsers] = useState([]); // 사용자 데이터를 저장할 상태
  const [loading, setLoading] = useState(true); // 로딩 상태를 관리하는 상태

  // Axios + then/catch
  // 컴포넌트가 처음 화면에 나타날 때만 실행됨
  //   useEffect(() => {
  //     // Axios를 이용한 GET 요청
  //     axios.get('https://jsonplaceholder.typicode.com/users')
  //       .then(response => {
  //         // 성공적으로 데이터를 받았을 때, 상태에 저장
  //         setUsers(response.data);
  //         setLoading(false); // 로딩 완료
  //       })
  //       .catch(error => {
  //         // 에러가 발생했을 때 콘솔에 출력
  //         console.error('에러 발생:', error);
  //         setLoading(false); // 로딩 완료
  //       });
  //   }, []);

  // Axios + async/await
  useEffect(() => {
    // 데이터를 가져오는 비동기 함수 정의
    const fetchUsers = async () => {
      try {
        // API 요청을 기다림 (await)
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        // 요청이 성공하면 데이터 저장
        setUsers(response.data);
      } catch (error) {
        // 요청 중 에러가 발생하면 에러 메시지 출력
        console.error("에러 발생:", error);
      } finally {
        // 성공/실패 상관없이 로딩은 끝남
        setLoading(false);
      }
    };

    // 함수 호출
    fetchUsers(); // 빈 배열이므로 컴포넌트가 처음 렌더링될 때 한 번만 실행됨
  }, []);

  // 데이터를 받아오는 중이면 "로딩 중..." 표시
  if (loading) {
    return <p>로딩 중...</p>;
  }

  // 데이터를 다 불러온 후 사용자 목록 렌더링
  return (
    <div>
      <h2>사용자 목록</h2>
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
