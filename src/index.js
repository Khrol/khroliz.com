import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

library.add(fab, faEnvelope);

// eslint-disable-next-line react/jsx-filename-extension
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
