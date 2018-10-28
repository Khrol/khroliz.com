import React from 'react';

const about = () => (
  <section id="about">
    <div className="row">
      <div className="four columns">
        <img className="profile-pic" src="/images/avatar.jpg" alt="avatar" />
      </div>
      <div className="eight columns main-col">
        <h2>About Me</h2>
        <p>
          My name is Igor Khrol. I&apos;m a software engineer with strong math background.
          More than 12 years of industry experience in different scale companies on various roles:
          engineer, team/tech lead, manager, consultant, trainer. My main areas of interest are data engineering,
          machine learning and quality assurance. Main languages (tech stacks) are Scala and Python.
          Meanwhile I have also experience in Ruby, C#, Java, JavaScript and can easily write code there as well.
          I&apos;m actively participating in regional IT conferences as a speaker and you can explore
          my presentations at <a className="smoothscroll" href="#presentations">presentations section</a>.
        </p>
      </div>
    </div>
  </section>
);

export default about;
