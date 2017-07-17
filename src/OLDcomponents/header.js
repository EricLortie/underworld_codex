import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';

// Header
export default class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>The Codex</Text>
        <TouchableHighlight onPress={() => this.navigate('IndexContent')} style={styles.btn}>
            <Text style={styles.btnTxt}>Main Menu</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  // Header Styles
  header: {
    alignItems: 'center',
    flex: 0,
    backgroundColor: 'darkgrey',
    paddingBottom: 10,
  },
  headerText: {
    color: 'white',
    marginTop: 18,
    fontSize: 18,
  },
  btnTxt:{
    color:'white',
    marginTop:18,
    fontSize:14,
  },

});
