import React from 'react';

const resumeItem = ({
  header, title, date, text,
}) => (
  <div className="row item">
    <div className="twelve columns">
      <h3>{header}</h3>
      <p className="info">
        {title}
        <span>•</span>
        <em className="date">{date}</em>
      </p>
      {text}
    </div>
  </div>
);

export default resumeItem;
