import React, { useEffect, useState } from "react";
import axios from "axios";
// ✅ axios: AJAX 요청을 쉽게 처리할 수 있게 도와주는 라이브러리
// Promise 기반으로 코드가 간결하고 직관적임(성공과 실패를 .then()과 .catch()로 처리할 수 있어 코드 흐름이 깔끔)
// 응답 데이터를 자동으로 JSON 데이터를 객체로 바꿔줌
// catch블록에서 자동으로 오류 캐치 가능

// 📌 axios를 활용한 HTTP 요청 방식
// axios.get(url)             → GET 방식 (데이터 조회)
// axios.post(url, data)   → POST 방식 (서버에 데이터 전송)
// axios.put(url, data)    → PUT 방식 (전체 데이터 수정)
// axios.delete(url)       → DELETE 방식 (데이터 삭제)

function UserList() {
  const [users, setUsers] = useState([]); // 사용자 데이터를 저장할 상태
  const [loading, setLoading] = useState(true); // 로딩 상태를 관리하는 상태
  const [callMethod, setCallMethod] = useState(""); // 어떤 방식으로 호출했는지 저장할 상태

  useEffect(() => {
    // axios
    //   .get("https://jsonplaceholder.typicode.com/users") // 1️⃣ API GET 요청
    //   .then((response) => {
    //     // 2️⃣ 요청 성공 시 실행
    //     console.log("response:::", response);
    //     setUsers(response.data); // 응답 받은 데이터를 users 상태에 저장
    //     setLoading(false); // 로딩 상태 false로 바꿔서 로딩 화면 종료
    //   })
    //   .catch((error) => {
    //     // 3️⃣ 요청 실패 시 실행
    //     console.error("에러 발생:", error); // 콘솔에 에러 출력
    //     setLoading(false); // 로딩은 끝났으므로 상태 false로 변경
    //   })
    //   .finally(() => {
    //     // 4️⃣요청이 성공하든 실패하든 항상 실행(정리 작업)
    //     setCallMethod("axios");
    //     setLoading(false);
    //   });
    getData();
  }, []);
  // ✅ useEffect: 컴포넌트가 화면에 처음 렌더링될 때 실행되는 Hook
  // -> UserList 컴포넌트가 렌더링 될 때 api를 호출하기 위해 사용함
  // 📌 의존성 배열이 빈 배열([])이므로 마운트 시 1회만 실행됨
  const getData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (e) {
      console.log(e);
    } finally {
      console.log("finally");
    }
    setLoading(false);
  };

  // 데이터를 받아오는 중이면 "로딩 중..." 표시
  if (loading) {
    return <p>로딩 중...</p>;
  }

  // 데이터 로딩 완료 후 사용자 목록 렌더링
  return (
    <div>
      <p>
        ✅ 호출 방식: <strong>{callMethod}</strong>
      </p>
      <p>👤 사용자 목록</p>
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
