import React, { Component } from 'react';

// TODO: when user submits dislikes in the form it should append items to the ul below
export default class UserDislikes extends Component {
  render() {
    return (
      <div className="UserDislikes">
        <h3>Dislikes</h3>
        <form>
          Enter dislikes and other things you don't care about here here!<br/>
          <textarea></textarea>
          <input
            type="submit"
            value="submit" />
        </form>
        <ul>
          <li>mornings</li>
          <li>mornings</li>
          <li>mornings</li>
          <li>mornings</li>
        </ul>
      </div>
    )
  }
}
