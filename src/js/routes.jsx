import React from 'react';
import ReactRouter,{Router,Route,IndexRedirect,hashHistory} from 'react-router';

import MainAppWrap from './pages/main';
import WelcomePage from './pages/welcome';
import ListPage from './pages/list';

module.exports = (
  <Router history={hashHistory}>
    <Route path="/" component={MainAppWrap}>
      <Route name="start-here" path="/start-here" component={WelcomePage} />
      <Route name="react" path="/react" component={ListPage} >
        <Route name="react_id" path="/react/:id" component={ListPage} />
      </Route>
      <Route name="angular" path="/angular" component={ListPage} >
        <Route name="angular_id" path="/angular/:id" component={ListPage} />
      </Route>
      <Route name="html5" path="/html5" component={ListPage} >
        <Route name="html5_id" path="/html5/:id" component={ListPage} />
      </Route>
      <IndexRedirect to="/start-here" />
    </Route>
  </Router>
)
