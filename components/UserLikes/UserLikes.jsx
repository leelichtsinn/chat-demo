import React, { Component } from 'react';

// TODO: when user submits likes in the form it should append items to the ul below
export default class UserLikes extends Component {
  render() {
    return (
      <div className="UserLikes">
        <h3>Likes and Intrests</h3>
        <form>
          Enter likes and intrest here!<br/>
          <textarea></textarea>
          <input
            type="submit"
            value="submit" />
        </form>
        <ul>
          <li>coffee</li>
          <li>science</li>
          <li>virtual reality</li>
          <li>computers</li>
          <li>the internet</li>
        </ul>
      </div>
    )
  }
}
