import React from 'react';

const presentationYear = (props) => (
    <div className="presentations-wrapper bgrid-quarters s-bgrid-thirds cf">
        <h2>{props.year}</h2>
        {props.children}
    </div>
);

export default presentationYear;
