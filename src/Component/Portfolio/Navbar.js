import React from 'react';
import { Link, Outlet } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

export default function Navbar() {
  return (

    <>
      <div className="container">
        <nav className="navbar navbar-expand-lg fixed-top bg-info">
          <div className="container-fluid">
          <Link class="navbar-brand" to="/home"><img class="ms-4 me-4 " src="image/np.png" height={50}/></Link>
            {/* <img  src="image/np.png" height={50}/> */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Outlet />
      </div>

    </>


  );
}

