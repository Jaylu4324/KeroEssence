import React from "react";
import Img from "./ks.png";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <div>
            <img
              src={Img}
              style={{ height: "80px", margin: 0, backgroundBlendMode: "unset" }}
              alt="Logo"
            />
          </div>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1 col-md-8"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a
                href="#features"
                className="page-scroll"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="page-scroll"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="page-scroll"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="page-scroll"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
