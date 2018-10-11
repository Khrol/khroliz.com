import React from 'react';
import SocialLinks from './SocialLinks';

const footer = () => (
  <footer>
    <div className="row">
      <div className="twelve columns">
        <SocialLinks className="social-links" />
        <ul className="copyright">
          <li>&copy; Copyright 2018 Igor Khrol</li>
          <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>
        </ul>
      </div>
    </div>
    <div id="go-top" style={{ display: 'block' }}>
      <a className="smoothscroll" title="Back to Top" href="#home">
        <i className="icon-up-open" />
      </a>
    </div>
  </footer>
);

export default footer;
