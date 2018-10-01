import React from 'react'

const resumeItem = (props) => 
    (
        <div className="row item">
        <div className="twelve columns">
            <h3>{props.header}</h3>
            <p className="info">
                {props.title}
                <span>•</span>
                <em class="date">{props.date}</em>
            </p>
            {props.text}
        </div>
    </div>
    )

export default resumeItem;
