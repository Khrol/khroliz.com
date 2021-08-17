import React from 'react';
import SocialLinks from './SocialLinks';

const header = () => (
  <header id="home">
    <nav id="nav-wrap">
      <a className="mobile-btn" href="/#nav-wrap" title="Show navigation">Show navigation</a>
      <a className="mobile-btn" href="/#" title="Hide navigation">Hide navigation</a>

      <ul id="nav" className="nav">
        <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
        <li><a className="smoothscroll" href="#about">About</a></li>
        <li><a className="smoothscroll" href="#resume">Resume</a></li>
        <li><a className="smoothscroll" href="#presentations">Presentations</a></li>
        <li><a className="smoothscroll" href="#misc">Misc</a></li>
      </ul>
    </nav>
    <div className="row banner">
      <div className="banner-text">
        <h1 className="responsive-headline">I&apos;m Igor Khrol.</h1>
        <h3>I&apos;m a Lithuania-based <span>software engineer</span> with a focus on
          <span> data engineering</span>, <span>machine learning</span>, and
          <span> quality assurance</span>. Let&apos;s
          <a className="smoothscroll" href="#about"> start scrolling </a>
          and learn more <a className="smoothscroll" href="#about">about me</a>.
        </h3>
        <hr />
        <SocialLinks className="social" />
      </div>
    </div>

    <p className="scrolldown">
      <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
    </p>
  </header>
);

export default header;
