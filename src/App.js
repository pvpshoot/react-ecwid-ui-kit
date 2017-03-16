// @flow
import React, { Component } from 'react';

import { Button } from './components'


import './App.css';

class App extends Component {

  click = () => alert(123);
  render() {
    return (
      <div className="App">
        <h2>Buttons: </h2>
        <p>
          <Button onPress={this.click}>Default</Button>
          <Button type="alt">alt</Button>
          <Button type="primary">primary</Button>
          <Button type="info-light">info-light</Button>
          <Button type="warning">warning</Button>
        </p>
        <p>
          <Button inProgress onPress={this.click}>Default</Button>
          <Button inProgress type="alt">alt</Button>
          <Button inProgress type="primary">primary</Button>
          <Button inProgress type="info-light">info-light</Button>
          <Button inProgress type="warning">warning</Button>
        </p>
      </div>
    );
  }
}


export default App;
