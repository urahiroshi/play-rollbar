import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// for Rollbar
import './rollbar';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
