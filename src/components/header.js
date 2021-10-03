import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './header.css';

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-md mb-4 p-4">
        <div className="container">
          <a className="navbar-brand"></a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="navbar-collapse collapse  justify-content-end"
            id="navbarCollapse"
          >
            <ul className="navbar-nav ml-auto mb-2 mb-md-0">
              <li className="nav-item">
                <HashLink to="/#about-me" className="nav-link">
                  About
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink to="/#skill" className="nav-link">
                  Skills
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink to="/#projects" className="nav-link">
                  Projects
                </HashLink>
              </li>
              <li className="nav-item">
                <Link to="/experience" className="nav-link">
                  Experience
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
