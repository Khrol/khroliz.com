import React from 'react';
import SocialLink from './SocialLink';

const socialLinks = ({ className }) => (
  <ul className={className}>
    <SocialLink url="http://www.linkedin.com/in/khroliz" icon={['fab', 'linkedin']} />
    <SocialLink url="https://github.com/Khrol" icon={['fab', 'github']} />
    <SocialLink url="https://t.me/khroliz" icon={['fab', 'telegram']} />
    <SocialLink url="skype:igor.khrol?chat" icon={['fab', 'skype']} />
    <SocialLink url="mailto:khroliz@gmail.com" icon="envelope" />
    <SocialLink url="https://www.facebook.com/khroliz" icon={['fab', 'facebook']} />
    <SocialLink url="viber://chat?number=375297447856" icon={['fab', 'viber']} />
    <SocialLink url="https://www.slideshare.net/khroliz" icon={['fab', 'slideshare']} />
    <SocialLink url="https://stackoverflow.com/users/1849364/igor-khrol" icon={['fab', 'stack-overflow']} />
  </ul>
);

export default socialLinks;
