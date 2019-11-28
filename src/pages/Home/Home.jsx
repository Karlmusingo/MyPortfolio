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
            {/* <h3 className="title is-3">Software Engineer</h3> */}
            {/* <hr /> */}
            <p id="about-me">
              Hello, <br />
              I am a fullstack Software Engineer who enjoys providing solutions to the most challenging problems in the world through technology.<br />
              Building software that solves problems at a global scale is what drives me every single day of my life. <br/> <br/>
              Being passionate about technologies, I always want to learn new skills and work on projects that require me to reach outside of my comfort zone and knowledge.
              <br/><br/>
              When I am not working, I enjoy listenning to music and helping people learn anything I can, from English to Computer concepts.
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
