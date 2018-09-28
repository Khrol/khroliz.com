import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const socialLink = (props) => 
    (
        <li>
            <a href={props.url} 
            target="_blank" 
            rel="noopener noreferrer">
            <FontAwesomeIcon icon={props.icon} />
            </a>
        </li>
    )

export default socialLink;
