import { useQuery } from 'react-query';
import axios from 'axios'


const logIn = async()=> {
  const localToken = localStorage.getItem('token')
  if (localToken) {
    return localToken
  } else {
    const response = await axios.post("http://localhost:5000/api/login", {'username': 'cara@redhat.com', 'password': '12345'})
    localStorage.setItem('token', response.data.token)
    return response.data.token
  }
}

const fetchMe = async() => {
  const localToken = localStorage.getItem('token')
  console.log(JSON.stringify(localToken))
  const response = await axios.get("http://localhost:5000/api/users/me", {
    headers: {
      'Authorization': `Bearer ${localToken}`,
      'Content-Type': 'application/json'
    }
  });
  return response.data;
}

function Login() {
  // 使用useQuery钩子来获取数据
  const {data: token, error: loginError, isLoading: loginLoading} = useQuery('token', logIn)
  const {data: user, error:fetchmeError, isLoading: fetchmeLoading} = useQuery('user', fetchMe)
  if (loginLoading)  return <div>login loading...</div>
  if (loginError) return <div>Login Error: {loginError.message}</div>

  if (fetchmeLoading) return <div> fetchme loading...</div>
  if (fetchmeError) return <div>Fetchme Error: {fetchmeError.message}</div>
  return (
    <div>
      <h1>User</h1>
      {token}<br></br>
      {user.username}
     
    </div>
  );
}

export default Login;
