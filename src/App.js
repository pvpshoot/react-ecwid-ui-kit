import React from 'react';

import {
  Button,
  Modal,
} from './react-ecwid-ui-kit/components';


import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.onPress = this.onPress.bind(this);
    this.close = this.close.bind(this);
  }
  onPress() {
    this.setState({ isOpen: true });
  }

  close() {
    this.setState({ isOpen: false });
  }

  render() {
    return (
      <div>
        <Button type="primary" onPress={this.onPress}>primary</Button>
        <Modal
          isOpen={this.state.isOpen}
          onRequestClose={this.close}
          contentLabel="LABEL"
        ><h1>lorem</h1></Modal>
      </div>
    );
  }
}


export default App;
