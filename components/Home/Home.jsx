import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

const Home = (props) => {
  return (
    <div className="Home">
      <h1>Welcome!</h1>
      <button><Link to="/user">Sign Up!</Link></button>
      <br/>
      <h2>Log In</h2>
      <form>
        <p>User Name</p>
        <input type="text" /><br/>
        <p>Password</p>
        <input type="text"  /><br/>
        <input type="submit" value="Log in" />
      </form>
    </div>
  );
}

// TODO: define propTypes
// Home.propTypes = {
//
// }

export default Home;
