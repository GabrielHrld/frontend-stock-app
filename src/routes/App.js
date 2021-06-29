import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Details from '../pages/Details';
import MyStocksPage from '../pages/MyStocksPage';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Layout from '../components/Layout';

import '../styles/app.scss';

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/mis-acciones" component={MyStocksPage} />
          <Route exact path="/signup" component={Register} />
          <Route exact path="/details" component={Details} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
