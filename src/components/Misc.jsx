import React from 'react';
import Link from './Link';

const misc = () => (
  <section id="misc">
    <div className="row">
      <div className="text-container">
        <h1>Other links and useful info</h1>
      </div>
      <Link href="https://imo-official.org/participant_r.aspx?id=7433">
        Two Silver Medals on International Mathematical Olympiad (2003, 2004)
      </Link>
      <br />
      <Link href="https://projecteuler.net/">
        <img src="https://projecteuler.net/profile/Igor.Khrol.png" alt="ProjectEuler" />
      </Link>
      <br />
    </div>
  </section>
);

export default misc;
