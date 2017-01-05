import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

const Home = (props) => {
  return (
    <div className="Home">
      <h1>Welcome!</h1>
      <button><Link to="/sign-up">Sign Up!</Link></button>
      <br/>
      <button><Link to="/login">Login!</Link></button>
    </div>
  );
}

// TODO: define propTypes
// Home.propTypes = {
//
// }

export default Home;
