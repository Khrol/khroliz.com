import React from 'react';
import ResumeItem from './ResumeItem';
import Link from './Link';

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
                        of <Link href="https://www.toptal.com">Toptal</Link>.
                        Technologies: Scala, Spark, Python, Pandas, Luigi, 
                        Google Cloud (BigQuery, DataStore, GAE, GCE and more).
                        </p>
                    )}
                />
                <ResumeItem 
                    header="Wargaming"
                    title="QA Automation Team Lead"
                    date="December 2013 - May 2015"
                    text={(
                        <p>
                            Building automated testing in <Link href="https://wargaming.com/">Wargaming</Link> Web department
                             - all the aspects: technology, process, people, infrastructure. 
                            Technologies: Python, Java, WebDriver, RabbitMQ, Django, Zabbix.
                            <br/>
                            Some open source libs were developed for testing purposes:
                            <ul>
                                <li>- <Link href="https://github.com/wgnet/grail/">Grail</Link></li>
                                <li>- <Link href="https://github.com/wgnet/webium">Webium</Link></li>
                            </ul>
                        </p>
                    )}
                />
                <ResumeItem
                    header="Tele2"
                    title="Automated Testing Consultant"
                    date="February 2012 - November 2013"
                    text={(
                        <p>
                        Helping on automated testing development: framework creation and enhancements, process improvements, trainings. 
                        Performance testing. 
                        <br/>
                        Technologies: Oracle Siebel, Java, Selenium, JMeter, HP QTP.
                        </p>
                    )}
                />
                <ResumeItem
                    header="EPAM Systems"
                    title="Trainer, Consultant"
                    date="March 2012 - July 2013"
                    text={(
                        <p>
                            Providing trainings on Selenium/WebDriver. Consulting on automated testing related issues.
                        </p>
                    )}
                />
                <ResumeItem
                    title="Software Testing Team Lead"
                    date="July 2009 – February 2012"
                    text={(
                        <p>
                            Managing team of 20 people to support UI automation of Oracle ATG eCommerce product.
                            <br/>
                            Technologies: HP QTP, Selenium, Flex.
                        </p>
                    )}
                />
                <ResumeItem
                    header="A1QA"
                    title="QA Specialist"
                    date="April 2006 - July 2009"
                    text={(
                        <p>
                            Black box testing. 
                            <br/>
                            Test script development (automated and performance testing). 
                            <br/>
                            Leading multiple automated and performance testing projects.
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
        <div className="row courses">
            <div className="three columns header-col">
                <h1><span>Courses</span></h1>
            </div>
            <div className="nine columns main-col">
                <ResumeItem 
                    header="Coursera"
                    title={(<a
                        href="https://www.coursera.org/account/accomplishments/specialization/Z2F8DMBD8W89"
                        target="_blank" rel="noopener noreferrer">
                        Functional Programming in Scala Specialization
                        </a>
                        )}
                    date="August 2018"
                />
                <ResumeItem
                    title={(<a
                        href="https://www.coursera.org/account/accomplishments/verify/NGSXWUFZB2LH"
                        target="_blank" rel="noopener noreferrer">
                        Machine Learning
                        </a>
                        )}
                    date="July 2018"
                />
            </div>
        </div>
    </section>
);

export default resume;
