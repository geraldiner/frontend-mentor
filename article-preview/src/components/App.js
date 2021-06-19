import React from "react";
import avatar from "../assets/images/avatar-michelle.jpg";
import cover from "../assets/images/drawers.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShare } from '@fortawesome/free-solid-svg-icons'

const App = () => {
  return (
    <div className="wrapper">
      <div className="preview">
        <div className="cover-img">
          <img src={cover} alt="Desk with vase decor" />
        </div>
        <div className="description">
          <h3>
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </h3>
          <p>
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I’ve got some simple tips to help
            you make any room feel complete.
          </p>
          <div className="post-meta">
            <div className="author-info">
              <img src={avatar} alt="Author avatar" className="avatar" />
              <p>
                <span className="author-name">Michelle Appleton</span>
                <span className="post-date">28 Jun 2020</span>
              </p>
            </div>
            <div className="social-share">
              <button type="button" className="share-btn"><FontAwesomeIcon icon={faShare} /></button>
            </div>
          </div>
        </div>
      </div>
      <div className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noopener noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/geraldiner">Geraldine</a>.
      </div>
    </div>
  );
};

export default App;
