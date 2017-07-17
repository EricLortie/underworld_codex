import React, { Component } from 'react';
import { ScrollView, Image, Dimensions, Text, AsyncStorage, View } from 'react-native';
import { List, ListItem, Tile, Button } from 'react-native-elements';
import { styles } from '../styles/common';
import { reloadAllData } from '../config/functions';

class Home extends Component {

  constructor(props) {
    super(props);
    AsyncStorage.getItem('@UWData:api_version').then((local_api_version) => {
      console.log(local_api_version);
      if(!local_api_version) {
        reloadAllData();
      }
    });
  }

  onLearnMore = (page) => {
    this.props.navigation.navigate(page);
  };

  render() {
    const warningText = "Press this button the first time you open this app, or if a new rulebook is released and your data seems out of date. This app downloads information from the internet and then saves it to your device.";
    const maxWidth = Dimensions.get('window').width;

    return (
      <ScrollView style={styles.defaultContainer}>
        <Image
          style={{ width: maxWidth, height: 200 }}
          source={require('../assets/mobileAppHeader.png')}
          resizeMode="cover"
        />
        <View style={styles.metaPanel}>

          <View style={styles.headerContainer}>
            <Text key={"Header"} style={styles.headerText}>THE CODEX</Text>
          </View>
          <Text style={styles.defaultText}>Underworld LARP is kick-ass a live-action releplaying game. Use this app to quickly access rulebook data while offline.</Text>
        </View>

        <List style={styles.defaultContainer}>
          <ListItem
            title={<Text style={styles.listText}>View Races</Text>}
            onPress={() => this.onLearnMore('Races')}
          />
          <ListItem
            title={<Text style={styles.listText}>View Classes</Text>}
            onPress={() => this.onLearnMore('Classes')}
          />
          <ListItem
            title={<Text style={styles.listText}>View Skills</Text>}
            onPress={() => this.onLearnMore('Skills')}
          />
          <ListItem
            title={<Text style={styles.listText}>View Spell Spheres</Text>}
            onPress={() => this.onLearnMore('Spheres')}
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
        </List>
      </ScrollView>
    );
  }
}

export default Home;
