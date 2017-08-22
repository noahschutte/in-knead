import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import Eula from './components/Eula';
import PrivacyPolicy from './components/PrivacyPolicy';
// import NotFound from './components/NotFound';
import registerServiceWorker from './registerServiceWorker';
import './stylesheets/css/home.css';
import './stylesheets/css/platform.css';
import './stylesheets/css/how_to.css';
import './stylesheets/css/request.css';
import './stylesheets/css/one_step.css';
import './stylesheets/css/creators.css';
import './stylesheets/css/subscribe.css';
import './stylesheets/css/footer.css';

const Root = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/eula" component={Eula} />
        <Route path="/privacypolicy" component={PrivacyPolicy} />
        <Route component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);

registerServiceWorker();
