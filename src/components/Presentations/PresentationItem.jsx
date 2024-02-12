import React from 'react';
import { UID } from 'react-uid';
import Link from '../Link';

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
  <UID name={(id) => `modal-${id}`}>
    { (id) => (
      <>
        <div className="columns presentations-item">
          <div className="item-wrap">
            <a href={`#${id}`} title={props.title}>
              <img alt="" src={cityImage[props.location]} />
              <div className="overlay">
                <div className="presentations-item-meta">
                  <h5>{props.conference}</h5>
                  <h6>{props.location}</h6>
                  <p>{props.title}</p>
                  <p><b>{props.language || 'RUS'}</b></p>
                </div>
              </div>
              <div className="link-icon"><i className="icon-plus" /></div>
            </a>
          </div>
        </div>

        <div id={id} className="popup-modal mfp-hide">
          <div className="preview-wrapper">
            <iframe
              title={id}
              width="100%"
              height="auto"
              src={props.previewLink}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
            />
          </div>
          <div className="description-box">
            <h4>{props.title}</h4>
          </div>
          <div className="link-box">
            { props.details ? <Link href={props.details}>Details</Link> : null }
            <a className="popup-modal-dismiss" href="/">Close</a>
          </div>
        </div>
      </>
    )}
  </UID>
);

export default presentationItem;
