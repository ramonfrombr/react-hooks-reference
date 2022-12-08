import React from "react";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center p-5">
      <h1>The requested page does not exist</h1>
      <Link className="flex items-center text-blue-400 underline" to={""}>
        Go back to homepage <AiFillHome className="ml-2 text-xl" />
      </Link>
    </div>
  );
};

export default ErrorPage;
