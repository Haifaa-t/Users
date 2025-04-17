
const Home = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-[80vh] bg-gray-100 text-center p-8">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Welcome to  the system</h1>
        
        <div className="mt-8">
          <a
            href="/users"
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-3 rounded shadow font-semibold transition"
          >
            👥 View Users
          </a>
        </div>
      </div>
    );
  };
  
  export default Home;
  