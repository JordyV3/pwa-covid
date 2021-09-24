import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="col-md-12 bg-dark py-2">
      <div className="container">
        <nav className="navbar bg-dark navbar-dark">
          <Link to={"/"} className="navbar-brand logo">
            Registros Vacunacion
          </Link>
          <div class="d-flex">
            <a className="btn btn-outline-info" href="https://jordyv3.github.io/covid-tracker/">
              Tracker Covid-19
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
