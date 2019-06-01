import React from "react";
import profile from "../../images/profile.jpg";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => (
  <div className="hero is-fullheight">
    <div className="hero-body">
      <div className="container v-centered">
        <div className="columns">
          <div className="column has-text-centered">
            <img src={profile} className="profile-image" alt="My Profile" />
          </div>
          <div className="column content">
            <h1 className="title is-1">I am Karl Musingo</h1>
            <h3 className="title is-3">Software Engineer</h3>
            <hr />
            <p id="about-me">
              I am a fullstack software developer who is in love with data and
              its analytics
            </p>
            <div className="columns">
              <div className="column">
                <Link
                  to="/resume"
                  className="button is-info is-large is-fullwidth"
                >
                  Resume
                </Link>
              </div>
              <div className="column">
                <Link
                  to="/contact"
                  className="button is-light is-large is-fullwidth"
                >
                  Contact
                </Link>
              </div>
            </div>
            <p className="social-icons">
              <a
                href="https://github.com/karlmusingo"
                target="black"
                className="social-icon"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github" />
              </a>
              <a
                href="https://www.facebook.com/karl.musingo"
                target="black"
                className="social-icon"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook" />
              </a>
              <a
                href="https://twitter.com/karl_musingo"
                target="black"
                className="social-icon"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
