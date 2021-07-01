import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from 'react-router-dom';
import Details from '../pages/Details';
import MyStocksPage from '../pages/MyStocksPage';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Layout from '../components/Layout';

import PrivateRoute from '../components/PrivateRoute';

import '../styles/app.scss';
import axios from 'axios';
import { connect } from 'react-redux';

//ACTIONS
import { setStocks, handleFetching } from '../actions';
import NotFound from '../pages/NotFound';

const App = ({ setStocks, handleFetching, user }) => {
  useEffect(() => {
    handleFetching();
    const fetchData = async () => {
      const res = await axios.get(
        'https://api.twelvedata.com/stocks?&country=united%20states&source=docs'
      );
      console.log(res);
      setStocks(res.data.data);
      handleFetching();
    };
    fetchData();
  }, []);

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

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  setStocks,
  handleFetching,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
