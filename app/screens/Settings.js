import React, { Component } from 'react';
import { ScrollView, Text, WebView, StyleSheet, View } from 'react-native';
import { Tile } from 'react-native-elements';
import { handleFirstConnectivityChange } from '../config/functions';
import { ConnectivityRenderer } from 'react-native-offline';
import { styles, htmlstyles, primaryBGColour, primaryFontColour } from '../styles/common';

class SettingsPage extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <ScrollView style={styles.defaultContainer}>
        <View style={styles.defaultContainer}>
          <Tile style={styles.card}
            imageSrc={require('../assets/404-1.jpg')}
            featured
          />

          <View style={styles.metaPanel}>
            <View style={styles.headerContainer}>
              <Text key={"load data"} style={styles.headerText}>App Data</Text>
            </View>
            <Text style={styles.warningText}>{warningText}</Text>
            <Text style={{color: '#c3c3c3', margin: 20, fontWeight: 'bold'}}>Warning! This will reload all data and requires an internet connection.</Text>
            <Button
              buttonStyle={{backgroundColor: 'darkred'}}
              raised
              icon={{name: 'cached'}}
              onPress={() => reloadAllData()}
              title={`LOAD DATA`} />
          </View>

        </View>
      </ScrollView>
    );
  }
}

export default SettingsPage;
