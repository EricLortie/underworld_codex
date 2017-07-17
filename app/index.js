import React, { Component } from 'react';
import { Root, Tabs, Scene } from './config/router';
import { styles } from './styles/common';

class App extends Component {
  render() {
    return <Tabs style={styles.defaultContainer} />;
  }
}

export default App;
