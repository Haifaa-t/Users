import { useSearchParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getPostsByUserId } from '../api/users';

const Posts = () => {
  const [searchParams] = useSearchParams();
  const userId = searchParams.get('userId');
  const [posts, setPosts] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (userId) {
      getPostsByUserId(userId).then(setPosts);
    }
  }, [userId]);

  return (
    <div className="min-h-screen relative overflow-hidden px-4 py-10">
  
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/tamkeen-logo.png')",
          backgroundRepeat: 'repeat',
          backgroundSize: '100px',
          opacity: 0.05,
          zIndex: 0,
        }}
      />


      <div className="relative z-10 max-w-4xl mx-auto bg-white bg-opacity-90 p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-red-600 mb-6">
          📝 Posts for User {userId}
        </h1>

        {posts.map((post) => (
          <div
            key={post.id}
            className="mb-6 p-4 border-l-4 border-yellow-400 bg-white rounded-lg shadow"
          >
            <h2 className="text-xl font-bold text-red-600 mb-2">{post.title}</h2>
            <p className="text-gray-800">{post.body}</p>
          </div>
        ))}

       
        <button
          onClick={() => navigate(-1)}
          className="text-blue-600 hover:underline font-semibold mt-4"
        >
          🔙 Back
        </button>
      </div>
    </div>
  );
};

export default Posts;

