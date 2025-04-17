import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUserById, getUserPosts, getUserAlbums, getUserTodos } from '../api/users';

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

  if (!user) return <div>Loading user...</div>;

  return (
    <div>
      <h1 className="text-2xl mb-2">👤 {user.name}'s Details</h1>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Company:</strong> {user.company.name}</p>
      <p><strong>Website:</strong> {user.website}</p>

      <hr className="my-4" />

      {/* Posts */}
      <section className="mt-6">
        <h2 className="text-xl font-bold mb-1">📝 Posts</h2>
        <ul className="list-disc pl-5">
          {posts.map((post: any) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
        <Link to={`/posts?userId=${userId}`} className="text-blue-600 hover:underline block mt-2">
          🔗 See all posts
        </Link>
      </section>

      {/* Albums */}
      <section className="mt-6">
        <h2 className="text-xl font-bold mb-1">📸 Albums</h2>
        <ul className="list-disc pl-5">
          {albums.map((album: any) => (
            <li key={album.id}>
              {album.title}{' '}
              <Link to={`/photos?albumId=${album.id}`} className="text-blue-600 hover:underline">
                ➡ View Photos
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Todos */}
      <section className="mt-6">
        <h2 className="text-xl font-bold mb-1">✅ Todos</h2>
        <ul className="list-disc pl-5">
          {todos.map((todo: any) => (
            <li key={todo.id}>
              {todo.title} {todo.completed ? '✅' : '❌'}
            </li>
          ))}
        </ul>
      </section>

      {/* Back to users */}
      <div className="mt-8">
        <Link to="/users" className="text-blue-600 hover:underline">
          🔙 Back to Users
        </Link>
      </div>
    </div>
  );
};

export default UserDetails;
