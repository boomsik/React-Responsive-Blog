import React from "react";
import { Link } from "react-router-dom";
const Header = ({ setActive, active }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div classNactiveame="container-fluid bg-faded padding-media">
                <div className="container padding-media">
                    <nav className="navbar navbar-toggleable-md navbar-light">
                        <button
                            className="navbar-toggler mt-3"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            data-bs-parent="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="true"
                            aria-label="Toggle Navigation"
                        >
                            <span className="fa fa-bars"></span>
                        </button>
                        <div className="collapse navbar-collapse">
                            <ul
                                className="navbar-nav me-auto mb-2 mb-lg-0"
                                id="navbarSupportedContent"
                            >
                                {/* /////Home Active Link//// */}
                                <Link to="/" style={{ textDecoration: "none" }}>
                                    <li
                                        className={`nav-item nav-link ${
                                            active === "home" ? "active" : ""
                                        }`}
                                        onClick={() => setActive("home")}
                                    >
                                        Home
                                    </li>
                                </Link>

                                {/* /////Create Active Link//// */}

                                <Link
                                    to="/create"
                                    style={{ textDecoration: "none" }}
                                >
                                    <li
                                        className={`nav-item nav-link ${
                                            active === "create" ? "active" : ""
                                        }`}
                                        onClick={() => setActive("create")}
                                    >
                                        Create
                                    </li>
                                </Link>
                                {/* <li className="nav-item nav-link">Create</li> */}

                                {/* /////About Active Link//// */}

                                <Link
                                    to="/about"
                                    style={{ textDecoration: "none" }}
                                >
                                    <li
                                        className={`nav-item nav-link ${
                                            active === "about" ? "active" : ""
                                        }`}
                                        onClick={() => setActive("about")}
                                    >
                                        About
                                    </li>
                                </Link>
                                {/* <li className="nav-item nav-link">About</li> */}
                            </ul>
                            <div className="row g-3">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <Link
                                        to="/auth"
                                        style={{ textDecoration: "none" }}
                                    >
                                        <li
                                            className={`nav-item nav-link ${
                                                active === "login"
                                                    ? "active"
                                                    : ""
                                            }`}
                                            onClick={() => setActive("login")}
                                        >
                                            Login
                                        </li>
                                    </Link>
                                    {/* <li className="nav-item nav-link">Login</li> */}
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </nav>
    );
};

export default Header;
