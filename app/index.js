import React, { Component } from 'react';
import { Root, Tabs, Scene } from './config/router';
import { styles } from './styles/common';
import { setApiDefault, reloadAllData } from './config/functions';
import OneSignal from 'react-native-onesignal';

class App extends Component {

  componentDidMount() {

    OneSignal.configure({});
    setApiDefault();
    reloadAllData();
  }

  omponentWillMount() {
        OneSignal.addEventListener('received', this.onReceived);
        OneSignal.addEventListener('opened', this.onOpened);
        OneSignal.addEventListener('registered', this.onRegistered);
        OneSignal.addEventListener('ids', this.onIds);
    }

    componentWillUnmount() {
        OneSignal.removeEventListener('received', this.onReceived);
        OneSignal.removeEventListener('opened', this.onOpened);
        OneSignal.removeEventListener('registered', this.onRegistered);
        OneSignal.removeEventListener('ids', this.onIds);
    }

    onReceived(notification) {
        console.log("Notification received: ", notification);
    }

    onOpened(openResult) {
      console.log('Message: ', openResult.notification.payload.body);
      console.log('Data: ', openResult.notification.payload.additionalData);
      console.log('isActive: ', openResult.notification.isAppInFocus);
      console.log('openResult: ', openResult);
    }

    onRegistered(notifData) {
        console.log("Device had been registered for push notifications!", notifData);
    }

    onIds(device) {
		console.log('Device info: ', device);
    }

  render() {
    return <Tabs style={styles.defaultContainer} />;
  }
}

export default App;
