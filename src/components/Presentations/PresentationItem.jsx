import React from 'react';
import SocialLink from '../SocialLink';

const cityImage = {
  'Lviv, Ukraine': '/images/cities/lviv.png',
  'Penza, Russia': '/images/cities/penza.png',
  'Kyiv, Ukraine': '/images/cities/kyiv.png',
  'Minsk, Belarus': '/images/cities/minsk.png',
  'Saint Petersburg, Russia': '/images/cities/st_petersburg.png',
  'Moscow, Russia': '/images/cities/moscow.png',
  'Vilnius, Lithuania': '/images/cities/vilnius.png',
  'Novosibirsk, Russia': '/images/cities/novosibirsk.png',
  'Bangalore, India': '/images/cities/bangalore.png',
  Online: '/images/cities/online.png',
  'Riga, Latvia': '/images/cities/riga.png',
  'Dnipro, Ukraine': '/images/cities/dnipro.png',
  'Vitebsk, Belarus': '/images/cities/vitebsk.png',
  'Lisbon, Portugal': '/images/cities/lisbon.png',
};

const presentationItem = (props) => (
  <div className="columns presentations-item">
    <div className="item-wrap">
      <img alt="" src={cityImage[props.location]} />
      <div className="overlay">
        <div className="presentations-item-meta">
          <h5>{props.conference}</h5>
          <h6>{props.location}</h6>
          <p>{props.title}</p>
          <p><b>{props.language || 'RUS'}</b></p>
          <br />
          <ul className="links">
            { props.youtube ? (
              <SocialLink
                className="social"
                url={`https://youtube.com/watch?v=${props.youtube}`}
                icon={['fab', 'youtube']}
              />
            ) : null }
            { props.slidesDrive ? (
              <SocialLink
                className="social"
                url={`https://docs.google.com/presentation/d/e/${props.slidesDrive}/embed`}
                icon={['fa-brands', 'fa-google-drive']}
              />
            ) : null }
            { props.slideshare ? (
              <SocialLink
                className="social"
                url={`https://www.slideshare.net/slideshow/embed_code/key/${props.slideshare}`}
                icon={['fa-brands', 'fa-slideshare']}
              />
            ) : null }
            { props.videoLink ? (
              <SocialLink
                className="social"
                url={props.videoLink}
                icon="video"
              />
            ) : null }
            { props.link ? (
              <SocialLink
                className="social"
                url={props.link}
                icon="link"
              />
            ) : null }
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default presentationItem;
