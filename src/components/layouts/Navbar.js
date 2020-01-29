import React from "react";
import styled from "styled-components";
import Home from "../pages/Home";
import { Link } from "react-router-dom";

const Navs = styled.nav``;

export default class Navbar extends React.Component {
  render() {
    return (
      <Navs className="navbar navbar-expand-sm bg-primary navbar-dark">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link className="navbar-brand" to="/Home">
            <img
              src="https://lh3.googleusercontent.com/-G4dTDlDvbMc/WLv2jGYHvNI/AAAAAAAAAGk/-zzM2Ysv2FI/s640/67.png"
              width="50px"
            ></img>
          </Link>
          <ul className="navbar-nav ml-auto mt-10 mt-lg-0">
            <li className="nav-item">
              <Link to="/Home" className="card-link">
                <a className="nav-link">Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/FarmManagement" className="card-link">
                <a className="nav-link">Farm Management</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Galery" className="card-link">
                <a className="nav-link">Galery</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Report" className="card-link">
                <a className="nav-link">Report</a>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/Register" className="card-link">
                <a className="nav-link">Register</a>
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link to="/Berita" className="card-link">
                <a className="nav-link">Berita</a>
              </Link>
            </li> */}
          </ul>
        </div>
      </Navs>
      // <nav>Navbar</nav>
    );
  }
}
