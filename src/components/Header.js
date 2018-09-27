import React from 'react';

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
        </header>
    )
}

export default header;