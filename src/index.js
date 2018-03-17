import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import "react-toggle/style.css"
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
