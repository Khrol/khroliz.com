import React from 'react';
import SocialLink from './SocialLink';

const socialLinks = ({ className }) => (
  <ul className={className}>
    <SocialLink url="http://www.linkedin.com/in/khroliz" icon={['fab', 'linkedin']} />
    <SocialLink url="mailto:khroliz@gmail.com" icon="envelope" />
    <SocialLink url="https://github.com/Khrol" icon={['fab', 'github']} />
  </ul>
);

export default socialLinks;
