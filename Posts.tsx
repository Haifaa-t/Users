import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getPostsByUserId } from '../api/users';

const Posts = () => {
  const [searchParams] = useSearchParams();
  const userId = searchParams.get('userId');
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    if (userId) {
      getPostsByUserId(userId).then(setPosts);
    }
  }, [userId]);

  return (
    <div>
      <h1 className="text-2xl mb-4">📝 Posts for User {userId}</h1>
      {posts.map(post => (
        <div key={post.id} className="mb-4 p-4 border rounded shadow">
          <h2 className="text-lg font-bold">{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
