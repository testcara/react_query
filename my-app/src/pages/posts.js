import { useQuery } from 'react-query';
import axios from 'axios'


// 获取数据的异步函数
const fetchData = async()=> {
  const response = await axios.get("http://localhost:5000/api/posts")
  return response.data
}

function App() {
  // 使用useQuery钩子来获取数据
  const {data: postData, error: postError, isLoading: postLoading} = useQuery('posts', fetchData);
  
  // 加载状态
  if (postLoading)  return <div>user Loading...</div>
  // 错误状态
  if (postError) return <div>Error: {postError.message}</div>
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {postData.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
