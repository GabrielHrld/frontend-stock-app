import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Details from '../pages/Details';
import MyStocksPage from '../pages/MyStocksPage';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Layout from '../components/Layout';

import '../styles/app.scss';
import axios from 'axios';
import { connect } from 'react-redux';

//ACTIONS
import { setStocks, handleFetching } from '../actions';

const App = ({ setStocks, handleFetching }) => {
  useEffect(() => {
    handleFetching();
    const fetchData = async () => {
      const res = await axios.get(
        'https://api.twelvedata.com/stocks?&country=united%20states&source=docs'
      );
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
          <Route exact path="/mis-acciones" component={MyStocksPage} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/details/:stock" component={Details} />
        </Switch>
      </Layout>
    </Router>
  );
};

const mapDispatchToProps = {
  setStocks,
  handleFetching,
};

export default connect(null, mapDispatchToProps)(App);
