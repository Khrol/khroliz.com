import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from './Link';

const socialLink = ({ url, icon }) => (
  <li>
    <Link href={url}>
      <FontAwesomeIcon icon={icon} />
    </Link>
  </li>
);

export default socialLink;
