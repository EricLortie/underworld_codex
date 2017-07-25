import React, { Component } from 'react';
import { Root, Tabs, Scene } from './config/router';
import { styles } from './styles/common';
import { setApiDefault, reloadAllData } from './config/functions';

class App extends Component {

  componentDidMount() {
    setApiDefault();
    reloadAllData();
  }

  render() {
    return <Tabs style={styles.defaultContainer} />;
  }
}

export default App;
