import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const socialLink = (props) => 
    (
        <li>
            <a href={props.url} 
            target="_blank" 
            rel="noopener noreferrer">
            <FontAwesomeIcon icon={['fab', props.className]} />
            </a>
        </li>
    )

export default socialLink;
