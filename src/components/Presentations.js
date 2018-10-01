import React from 'react';

const presentations = () => (
    <section id="presentations">
        <div className="row">
            <div className="twelve columns collapsed">
                <h1>My Public Presentations</h1>
                <p style={{textAlign: 'center'}}>Most of them are in Russian.</p>
            </div>
            <h2>2018</h2>
            <div className="presentations-wrapper bgrid-quarters s-bgrid-thirds cf">
                <div className="columns presentations-item">
                    <div className="item-wrap">
                        <a href="#modal-1" title="">
                            <img alt="" src="/images/cities/lviv.png" />
                            <div class="overlay">
                                <div class="presentations-item-meta">
                                    <h5>QMO Converence</h5>
                                    <h6>Lviv, Ukraine</h6>
                                    <p>
                                       How to test Artificial Intelligence and Machine Learning solutions?
                                    </p>
                                </div>
                            </div>
                            <div class="link-icon"><i class="icon-plus"></i></div>
                        </a>
                    </div>
                </div>
            </div>
            <div id="modal-1" class="popup-modal mfp-hide">
                <iframe 
                title="QMO 2018"
                width="560" height="315" 
                src="https://www.youtube.com/embed/JUlpxTXdOY0?rel=0" 
                frameborder="0" allow="autoplay; encrypted-media" 
                allowfullscreen></iframe>
                <div class="description-box">
                    <h4>How to test Artificial Intelligence and Machine Learning solutions?</h4>
                </div>
                <div class="link-box">
                    <a 
                        href="http://qmoconference.com/Archive/2018_04/index.html"
                        target="_blank" rel="noopener noreferrer">
                    Details</a>
                    <a class="popup-modal-dismiss">Close</a>
                </div>
            </div>
        </div>
    </section>
);

export default presentations;
