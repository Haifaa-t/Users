const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">

    
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

  
      <div className="relative z-10 bg-white bg-opacity-90 p-10 rounded-xl shadow-lg max-w-xl w-full text-center">
        <h1 className="text-4xl font-bold mb-4" style={{ color: '#ba0c2f' }}>
          👋 Welcome to the System
        </h1>

        <p className="text-lg text-gray-700 mb-6">
          This platform helps you explore users and their related posts, albums, and todos in a simple way.
        </p>

        <a
          href="/users"
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-lg shadow transition"
        >
          👥 See all users
        </a>
      </div>
    </div>
  );
};

export default Home;
