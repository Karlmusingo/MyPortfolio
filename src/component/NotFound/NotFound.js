import React from "react";
import "./NotFound.css";

const NotFound = () => (
  <section id="not-found">
    <div className="hero is-fullheight is-info">
      <div className="hero-body has-text-centered">
        <div className="container">
          <h1 className="title is-1">
            4 <i className="fa fa-ban" /> 4
            <div className="title is-4">
              <br />
              The page you are looking for was not found
            </div>
          </h1>
        </div>
      </div>
    </div>
  </section>
);

export default NotFound;
