import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

import ClassCards from './ClassCards';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

const Classes = ()  => {
  return (
    <View style={{ flex: 1 }}>
        <ScrollView style={styles.container} >
            <ClassCards navigator={this.props.navigator} />
        </ScrollView>
    </View>
  );
}

Classes.navigationOptions = {
  title: 'Classes',
};

export default Classes
