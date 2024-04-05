import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <h1 className="bg-slate-600">For NavBar Content</h1>
      <Link to={"/signup"}>Sign Up</Link>
    </div>
  );
}

export default Navbar;
