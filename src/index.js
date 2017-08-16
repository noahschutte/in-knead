import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import './stylesheets/css/home.css';
import './stylesheets/css/platform.css';
import './stylesheets/css/how_to.css';
import './stylesheets/css/request.css';
import './stylesheets/css/one_step.css';
import './stylesheets/css/creators.css';
import './stylesheets/css/subscribe.css';
import './stylesheets/css/footer.css';

ReactDOM.render(
  <Home />,
  document.getElementById('root')
);

registerServiceWorker();
