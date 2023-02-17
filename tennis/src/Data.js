import react, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function Data() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    // 요청이 시작 할 때에는 error 와 users 를 초기화하고
    setError(null);
    setUsers(null);
    // loading 상태를 true 로 바꿉니다.
    setLoading(true);
    const response = await axios
      .get(
        "https://openapi.gg.go.kr/PublicTennis?KEY=6218b81ea45140b9b6c531cd21b52257&Type=json"
      )
      .then((response) => {
        setLoading(false);
        const data = response.data.PublicTennis.map((key) => {
          console.log({ key });
          setUsers(key.row);
        });

        console.log(response.data.PublicTennis);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!users) return null;
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user}>
            <p>{user.SIGUN_NM}</p>
            {user.RM_MATR} {user.BOTM_MATRL_NM} {user.FACLT_NM}
            {user.BOTM_MATRL_NM}
          </li>
        ))}
      </ul>

      <button onClick={fetchUsers}>다시 불러오기</button>
    </div>
  );
}

export default Data;
