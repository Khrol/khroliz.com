import React from 'react';
import ResumeItem from './ResumeItem';

const resume = () => (
    <section id="resume">
        <div className="row work">
            <div className="three columns header-col">
                <h1><span>Work</span></h1>
            </div>
            <div className="nine columns main-col">
                <ResumeItem 
                    header="Toptal"
                    title="Team Lead"
                    date="April 2015 - March 2018"
                    text={(
                        <p>Team/Tech Lead in Analytics department responsible for data-related topics (ETL, ML) 
                        of <a href="https://www.toptal.com" target="_blank" rel="noopener noreferrer">Toptal</a>.
                        Key technologies: Scala, Spark, Python, Pandas, Luigi, Google Compute Engine.
                        </p>
                    )}
                />
                <ResumeItem 
                    header="Wargaming"
                    title="QA Automation Team Lead"
                    date="December 2013 - May 2015"
                    text={(
                        <p>
                            Building automated testing - all the aspects: technology, process, people, infrastructure.
                        </p>
                    )}
                />
            </div>
        </div>
        <div className="row education">
            <div className="three columns header-col">
                <h1><span>Education</span></h1>
            </div>
            <div className="nine columns main-col">
                <ResumeItem 
                    header="Belarusian State University"
                    title="Master in Computer Sciense"
                    date="2004 - 2010"
                />
            </div>
        </div>
    </section>
);

export default resume;
