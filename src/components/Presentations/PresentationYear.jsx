import React from 'react';

const presentationYear = ({ year, children }) => (
  <div className="presentations-wrapper bgrid-quarters s-bgrid-thirds cf">
    <h2>{year}</h2>
    {children}
  </div>
);

export default presentationYear;
