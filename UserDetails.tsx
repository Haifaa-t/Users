import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  getUserById,
  getUserPosts,
  getUserAlbums,
  getUserTodos,
} from '../api/users';

const UserDetails = () => {
  const { userId } = useParams();
  const [user, setUser] = useState<any>(null);
  const [posts, setPosts] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    if (userId) {
      getUserById(userId).then(setUser);
      getUserPosts(userId).then(setPosts);
      getUserAlbums(userId).then(setAlbums);
      getUserTodos(userId).then(setTodos);
    }
  }, [userId]);

  if (!user) return <div className="text-center py-10 text-gray-500">Loading user...</div>;

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
        <h1 className="text-2xl mb-4 font-bold text-red-600">
          👤 {user.name}'s Details
        </h1>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Company:</strong> {user.company.name}</p>
        <p><strong>Website:</strong> {user.website}</p>

        <hr className="my-6" />

      
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">📝 Posts</h2>
          <ul className="list-disc pl-5 space-y-1">
            {posts.map((post: any) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
          <Link
            to={`/posts?userId=${userId}`}
            className="text-blue-600 hover:underline block mt-2"
          >
            🔗 See all posts
          </Link>
        </section>

     
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">📸 Albums</h2>
          <ul className="list-disc pl-5 space-y-1">
            {albums.map((album: any) => (
              <li key={album.id}>
                {album.title}{' '}
                <Link
                  to={`/photos?albumId=${album.id}`}
                  className="text-blue-600 hover:underline"
                >
                  ➡ View Photos
                </Link>
              </li>
            ))}
          </ul>
        </section>

       
        <section>
          <h2 className="text-xl font-bold mb-2">✅ Todos</h2>
          <ul className="list-disc pl-5 space-y-1">
            {todos.map((todo: any) => (
              <li key={todo.id}>
                {todo.title} {todo.completed ? '✅' : '❌'}
              </li>
            ))}
          </ul>
        </section>

      
        <div className="mt-8">
          <Link to="/users" className="text-blue-600 hover:underline">
            🔙 Back to Users
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;

