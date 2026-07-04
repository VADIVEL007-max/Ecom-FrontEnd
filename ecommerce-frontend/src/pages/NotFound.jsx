import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
      <h1 className="text-8xl font-bold text-green-600">404</h1>

      <h2 className="text-3xl font-bold mt-4">
        Page Not Found
      </h2>

      <p className="text-gray-600 mt-3 max-w-md">
        Sorry, the page you are looking for doesn't exist or has been moved.
      </p>

      <Link
        to="/"
        className="mt-8 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;