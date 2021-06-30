import React from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = (props) => {
  const user = localStorage.getItem('user');

  if (user != null) {
    return <Route {...props} />;
  } else {
    return <Redirect to="/" />;
  }
};
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(PrivateRoute);
