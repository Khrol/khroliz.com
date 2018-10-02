import React from 'react';
import PresentationItem from './PresentationItem';

const presentations = () => (
    <section id="presentations">
        <div className="row">
            <div className="twelve columns collapsed">
                <h1>My Public Presentations</h1>
                <p style={{textAlign: 'center'}}>Most of them are in Russian.</p>
            </div>
            <div className="presentations-wrapper bgrid-quarters s-bgrid-thirds cf">
                <h2>2018</h2>
                <PresentationItem 
                    title="How to test Artificial Intelligence and Machine Learning solutions?"
                    details="http://qmoconference.com/Archive/2018_04/index.html"
                    location="Lviv, Ukraine"
                    conference="QMO Converence"
                    youtubeLink="https://www.youtube.com/embed/JUlpxTXdOY0?rel=0"
                />
                <PresentationItem 
                    title="How to test Machine Learning solutions?"
                    details="https://2018.secon.ru/reports/kak-testirovat-sistemy-mashinnogo-obucheniya"
                    location="Penza, Russia"
                    conference="SECON"
                    youtubeLink="https://www.youtube.com/embed/oDIATBzasG4?rel=0"
                />
                <PresentationItem 
                    title="How to test Artificial Intelligence and Machine Learning solutions?"
                    details="https://seleniumcamp.com/talk/how-to-test-artificial-intelligence-and-machine-learning-solutions/"
                    location="Kyiv, Ukraine"
                    conference="SeleniumCamp"
                    youtubeLink="https://www.youtube.com/embed/ztG3RD3ozxE?rel=0"
                />
                <PresentationItem 
                    title="How to test Artificial Intelligence and Machine Learning solutions?"
                    details="http://delex-conf.com/"
                    location="Minsk, Belarus"
                    conference="DelEx"
                    youtubeLink="https://www.youtube.com/embed/SNBrP8JQthk?rel=0"
                />
            </div>
            <div className="presentations-wrapper bgrid-quarters s-bgrid-thirds cf">
                <h2>2017</h2>
                <PresentationItem 
                    title="Data Warehouse in Google Cloud"
                    details="https://dfua17.firebaseapp.com/schedule/day1?sessionId=148"
                    location="Lviv, Ukraine"
                    conference="GDG Lviv"
                    youtubeLink="https://www.youtube.com/embed/6I870Dq2YoA?rel=0"
                    language="ENG"
                />
            </div>
        </div>
    </section>
);

export default presentations;
