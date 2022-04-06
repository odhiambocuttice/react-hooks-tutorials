import React from "react";
import { Link } from "react-router-dom";
function ErrorPage() {
  return (
    <div>
      <h1>Error Page</h1>

      <Link className="btn" to="/">
        Back
      </Link>
    </div>
  );
}

export default ErrorPage;
