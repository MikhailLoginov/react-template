import { Component } from 'react';
import './credentials.css';

export default class Credentials extends Component {
    state = {
      firstName: 'Mikhail',
      lastName: 'Loginov',
    };

    render() {
      function clickHandler(e) {
        e.preventDefault();
      }
      return (
        <button href="#" className="credentials" onClick={clickHandler}>
          <p>Developer: {this.state.firstName} {this.state.lastName}</p>
        </button>
      );
    }
}
