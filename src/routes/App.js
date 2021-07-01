import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Details from '../pages/Details';
import MyStocksPage from '../pages/MyStocksPage';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Layout from '../components/Layout';
import NotFound from '../pages/NotFound';

import PrivateRoute from '../components/PrivateRoute';

import '../styles/app.scss';

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <PrivateRoute
            exact={true}
            path="/mis-acciones"
            component={MyStocksPage}
          />
          <PrivateRoute
            exact={true}
            path="/details/:stock"
            component={Details}
          />
          <Route exact path="*" component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
