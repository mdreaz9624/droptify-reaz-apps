// src/components/ErrorPage/ErrorPage.jsx
import { useRouteError, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  // Optional: Auto-redirect after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  console.error("Routing Error:", error);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-2xl w-full text-center bg-white rounded-2xl shadow-xl p-8 md:p-12">
        {/* Error Icon */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-red-100 rounded-full mb-6">
            <svg
              className="w-12 h-12 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
        </div>

        {/* Error Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Oops!
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
          Something went wrong
        </h2>

        {/* Error Details */}
        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-8 text-left">
          <p className="text-red-700 font-medium">
            {error.status || error.statusCode ? `Error ${error.status || error.statusCode}: ` : ''}
            {error.statusText || error.message || "An unexpected error occurred"}
          </p>
          {error.data && (
            <p className="text-red-600 mt-2 text-sm">
              Additional info: {typeof error.data === 'string' ? error.data : JSON.stringify(error.data)}
            </p>
          )}
        </div>

        {/* Auto-redirect Notice */}
        <p className="text-gray-600 mb-8">
          You will be automatically redirected to the home page in 5 seconds...
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105"
          >
            Go to Homepage
          </Link>
          
          <button
            onClick={() => window.location.reload()}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-8 rounded-lg transition duration-300"
          >
            Refresh Page
          </button>
          
          <button
            onClick={() => navigate(-1)}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-8 rounded-lg transition duration-300"
          >
            Go Back
          </button>
        </div>

        {/* Support Contact */}
        <div className="mt-10 pt-6 border-t border-gray-200">
          <p className="text-gray-500 text-sm">
            Need help?{" "}
            <a
              href="mailto:ahsanreaz120363@gmail.com"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Contact Support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;