import React from 'react';
import { createRoot } from 'react-dom';
import './index.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faGoogleDrive } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLink, faVideo } from '@fortawesome/free-solid-svg-icons';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

library.add(fab, faGoogleDrive, faEnvelope, faLink, faVideo);

const root = document.getElementById('root');
const reactRoot = createRoot(root);
// eslint-disable-next-line react/jsx-filename-extension
reactRoot.render(<App />);

registerServiceWorker();
