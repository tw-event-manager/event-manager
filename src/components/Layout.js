'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <header>
          <div className="app-header">
            <h2>TW Event Manager</h2>
          </div>
        </header>
        <div className="app-body">
          {this.props.children}
        </div>
        <footer />
      </div>
    );
  }
}
