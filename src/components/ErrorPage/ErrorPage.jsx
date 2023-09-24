import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h2>Oops!!!</h2>
      <Link to="/">
        <button className="bg-blue-400 font-semibold py-2 px-1 mx-4 rounded-md">
          Go Back To Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
