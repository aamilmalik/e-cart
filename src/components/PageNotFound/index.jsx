import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div
      style={{
        margin: "10px",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h2 style={{ color: "red", marginTop: "2rem" }}>
        Error 404 Page Not Found
      </h2>
      <img
        src="../src/assets/error.jpg"
        alt="page not found"
        style={{ maxWidth: "100%", height: "auto", marginTop: "20px" }}
      />
      <br />
      <Link to="/" style={{ textDecoration: "none" }}>
        <button className="btn btn-primary" style={{ marginTop: "4rem" }}>
          Go to Home Page
        </button>
      </Link>
    </div>
  );
}

export default PageNotFound;
