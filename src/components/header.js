import React from 'react';
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
                <a className="nav-link" href="#about-me">
                  About me
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skill">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
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
