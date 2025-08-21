import Header from "../components/header";
import { Link } from "react-router";

const PageNotFound = () => {
  return (
    <main className="flex flex-col min-h-screen text-gray-800">
      {/* Header stays unchanged */}
      <Header />

      {/* Full-height gradient content that reaches footer */}
      <div className="flex flex-col items-center justify-center flex-1 w-full px-4 text-center bg-gradient-to-br from-blue-600 via-indigo-500 to-purple-600 py-20">
        <h1 className="text-7xl md:text-9xl font-extrabold text-white mb-4 animate-pulse">
          404
        </h1>
        <p className="text-2xl md:text-3xl font-semibold mb-2 text-white">
          Page Not Found
        </p>
        <p className="text-white/80 mb-6 max-w-xl">
          The page you are looking for doesn’t exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block bg-yellow-400 text-gray-900 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-yellow-300 transition"
        >
          Go Back Home
        </Link>
      </div>

      {/* Footer-safe spacing (optional, can be smaller now) */}
      <div className="h-20" />
    </main>
  );
};

export default PageNotFound;
