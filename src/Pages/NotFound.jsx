import { Link } from "react-router";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <FaExclamationTriangle className="text-red-500 text-6xl mb-4" />

      <h1 className="text-4xl font-bold mb-2">404</h1>
      <p className="text-lg text-gray-600 mb-6 text-center">
        Oops! The page you’re looking for doesn’t exist.
      </p>

      <Link
        to="/"
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
