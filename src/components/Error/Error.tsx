import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";

interface ErrorProps {
  error?: string;
}

const Error: React.FC<ErrorProps> = ({ error = "something went wrong" }) => {
  return (
    <div className="error">
      <h2 className="error-title">{error}</h2>
      <Link className="btn-back-home" to="/">
        Home
      </Link>
    </div>
  );
};

export default Error;
