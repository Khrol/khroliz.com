import React from 'react';
import SocialLink from './SocialLink';

const header = () => {
    return (        
        <header id="home">
            <nav id="nav-wrap">
                <a className="mobile-btn" href="/#nav-wrap" title="Show navigation">Show navigation</a>
                <a className="mobile-btn" href="/#" title="Hide navigation">Hide navigation</a>

                <ul id="nav" class="nav">
                    <li className="current"><a class="smoothscroll" href="#home">Home</a></li>
	                <li><a className="smoothscroll" href="#about">About</a></li>
	                <li><a className="smoothscroll" href="#resume">Resume</a></li>
	                <li><a className="smoothscroll" href="#presentations">Presentations</a></li>
                </ul>
            </nav>
            <div className="row banner">
                <div className="banner-text">
                    <h1 className="responsive-headline">I'm Igor Khrol.</h1>
                    <h3>I'm a Belarus based <span>software engineer</span> with focus on 
                    <span> data engineering</span>, <span>machine learning</span> and 
                    <span> quality assurance</span>. Let's 
                    <a className="smoothscroll" href="#about"> start scrolling </a>
                    and learn more <a class="smoothscroll" href="#about">about me</a>.</h3>
                    <hr />
                    <ul className="social">
                        <SocialLink url="http://www.linkedin.com/in/khroliz" className="linkedin" />
                        <SocialLink url="https://github.com/Khrol" className="github" />
                        <SocialLink url="https://t.me/khroliz" className="telegram" />
                        <SocialLink url="skype:igor.khrol?chat" className="skype" />
                        <SocialLink url="https://www.facebook.com/khroliz" className="facebook" />
                        <SocialLink url="viber://chat?number=375297447856" className="viber" />
                        <SocialLink url="https://www.slideshare.net/khroliz" className="slideshare" />
                    </ul>
                </div>
            </div>

            <p class="scrolldown">
                <a class="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
            </p>
        </header>
    )
}

export default header;
