import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Private = ({ component: Component, auth, ...rest }) => (
   <Route 
   {...rest}
   render={(props) => {
      return (auth.isAuthenticated === true ? (<Component {...props}/>) : (<Redirect to="/login"/>))
      }
   }
   />
);

Private.propTypes = {
   auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
   auth: state.auth
});

export default connect(mapStateToProps)(Private);