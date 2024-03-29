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
          header="Automattic"
          title="Head of Data Engineering / Team Lead / Data Engineer"
          date="February-2019 - now"
          text={(
            <p>
              <Link href="https://wordpress.com/">WordPress.com</Link> - data supply.
              <ul>
                <li>- Support Hadoop cluster and ecosystem of related tools that are used for internal analytics.</li>
                <li>- Implement self-service sql-based transformation engine.</li>
                <li>- Team management: reporting, hiring, reviews, planning.</li>
              </ul>
              <i>Technologies</i>: Spark, Trino, Docker, Hive, Impala, Hadoop, Airflow,
              Avro, Parquet, MySQL, Postgres, MariaDB, JupyterHub.
            </p>
          )}
        />
        <ResumeItem
          header="Toptal"
          title="Team Lead"
          date="April 2015 - March 2018"
          text={(
            <p>
              Team/Tech Lead in Analytics department responsible for data-related topics (ETL, ML) of
              {' '}<Link href="https://www.toptal.com">Toptal</Link>.
              <ul>
                <li>- Embedded quality as an integral part of the development process.
                  Tuning CI/CD pipeline to provide to shorten feedback loop.
                </li>
                <li>- Hands-on leadership by example.
                  Helping fellow team members to understand the framework, troubleshoot issues and improve.
                </li>
                <li>- Switched to Google Cloud to optimize infrastructure and maintenance costs.
                  Migrated ML microservices to GAE.
                </li>
              </ul>
              <i>Technologies</i>: Scala, Spark, Python, Pandas, Luigi, scikit-learn,
              Google Cloud (BigQuery, DataStore, GAE, GCE, Storage and more), Ruby, Ruby on Rails, Postgres.
            </p>
            )}
        />
        <ResumeItem
          header="Wargaming"
          title="QA Automation Team Lead"
          date="December 2013 - May 2015"
          text={(
            <>
              Building automated testing in
              {' '}
              <Link href="https://wargaming.com/">Wargaming</Link>
              {' '}
              Web department - all the aspects: technology, process, people, infrastructure.
              <br />
              Built the community around test automation expertise to share knowledge
              between projects/departments/regional offices.
              <br />
              Implemented a radical shift-left in test strategy.
              The majority of the test automation effort was switched from UI to API and unit tests.
              <br />
              Some open source libs were developed for testing purposes:
              <ul>
                <li> - <Link href="https://github.com/wgnet/grail/">Grail</Link></li>
                <li> - <Link href="https://github.com/wgnet/webium">Webium</Link></li>
              </ul>
              <i>Technologies</i>: Python, Java, WebDriver, RabbitMQ, Django, Zabbix.
              <p />
            </>
            )}
        />
        <ResumeItem
          header="Tele2"
          title="Automated Testing Consultant"
          date="February 2012 - November 2013"
          text={(
            <p>
              Helping on automated testing development:
              framework creation and enhancements, process improvements, trainings.
              Performance testing.
              <br />
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
              <br />
              Technologies: Java, HP QTP, Selenium, Flex.
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
              <br />
              Test script development (automated and performance testing).
              <br />
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
          title={(
            <Link href="https://www.coursera.org/account/accomplishments/specialization/6UM4T5U85S88">
              Machine Learning with TensorFlow on Google Cloud Platform Specialization
            </Link>
            )}
          date="October 2018"
        />
        <ResumeItem
          title={(
            <Link href="https://www.coursera.org/account/accomplishments/specialization/Z2F8DMBD8W89">
              Functional Programming in Scala Specialization
            </Link>
            )}
          date="August 2018"
        />
        <ResumeItem
          title={(
            <Link href="https://www.coursera.org/account/accomplishments/verify/NGSXWUFZB2LH">
              Machine Learning
            </Link>
            )}
          date="July 2018"
        />
        <ResumeItem
          header="Udemy"
          title={(
            <Link href="https://www.udemy.com/certificate/UC-62T6FIP1">
              React 16 - The Complete Guide (incl. React Router 4 & Redux)
            </Link>
            )}
          date="October 2018"
        />
        <ResumeItem
          header="Stepik"
          title={(
            <Link href="https://stepik.org/cert/139775">
              Introduction to Statistics
            </Link>
            )}
          date="November 2018"
        />
        <ResumeItem
          header="LinkedIn"
          title={(
            <Link href="https://drive.google.com/open?id=1rO0nisEaBWmfGCB0fiOSqahhmn44unyR">
              Analyzing Big Data with Hive
            </Link>
          )}
          date="January 2019"
        />
        <ResumeItem
          title={(
            <Link href="https://drive.google.com/open?id=1eouXivaC0wepGaNx-KQQ5nylFrklVONm">
              Learning Scala Web Development
            </Link>
          )}
          date="November 2018"
        />
        <ResumeItem
          title={(
            <Link href="https://drive.google.com/file/d/1bewT5KnEBDnBHPT7hyn7C5KBkvGap8cp/view?usp=sharing">
              Advanced Node.js
            </Link>
          )}
          date="November 2018"
        />
      </div>
    </div>
  </section>
);

export default resume;
