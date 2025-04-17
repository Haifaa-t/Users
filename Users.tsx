import { useEffect, useState } from 'react';
import { getUsers } from '../api/users';
import { Link } from 'react-router-dom';

type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: {
    street: string;
  };
  company: {
    name: string;
  };
};

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getUsers().then(data => setUsers(data));
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-red-600 mb-6 flex items-center gap-2">
        👥 Users
      </h1>
      <ul className="space-y-6">
        {users.map(user => (
          <li
            key={user.id}
            className="bg-white border-l-4 border-yellow-400 p-6 rounded-lg shadow hover:shadow-lg transition duration-300"
          >
            <Link
              to={`/users/${user.id}`}
              className="text-red-600 font-bold text-xl hover:underline block mb-2"
            >
              {user.name}
            </Link>
            <p className="text-gray-700">
              <strong className="text-gray-900">Email:</strong> {user.email}
            </p>
            <p className="text-gray-700">
              <strong className="text-gray-900">Phone:</strong> {user.phone}
            </p>
            <p className="text-gray-700">
              <strong className="text-gray-900">Street:</strong> {user.address.street}
            </p>
            <p className="text-gray-700">
              <strong className="text-gray-900">Company:</strong> {user.company.name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
