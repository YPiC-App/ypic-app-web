import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import firbaseConfig from 'private/firebase-config';
import App from 'app';

firebase.initializeApp(firbaseConfig);

ReactDOM.render(React.createElement(App), document.getElementById('app'));

// NOTE: Uncomment this when working with service worker.
//
// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker
//       .register('/service-worker.js')
//       .then(registration => {
//         console.log('SW registered: ', registration);
//       })
//       .catch(registrationError => {
//         console.log('SW registration failed: ', registrationError);
//       });
//   });
// }
