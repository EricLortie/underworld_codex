import React, { Component } from 'react';
import { ScrollView, View, Text, AsyncStorage, Dimensions, Image, NetInfo, Linking } from 'react-native';
import { List, ListItem, Button, CheckBox } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';
import { styles, primaryFontColour, primaryBGColour } from '../styles/common';
import { reloadAllData, handleFirstConnectivityChange } from '../config/functions';
import { ConnectivityRenderer } from 'react-native-offline';

class HomePage extends Component {

  constructor(props) {
    super(props);
    AsyncStorage.getItem('@UWData:api_version').then((local_api_version) => {
      if(!local_api_version) {
        reloadAllData();
      }
    });

    this.state = {
      globalNotifications: false,
      AshNotifications: false,
      IllNotifications: false,
      JerNotifications: false,
      HavNotifications: false,
      KalNotifications: false,
      RalNotifications: false,
      SalNotifications: false,
      StoNotifications: false,
      TemNotifications: false,
      ZenNotifications: false
    }

  }

  openExternalURL = (url) => {
    Linking.openURL(url).catch(err => console.error('An error occurred', err));
  }

  toggleNotification(type) {
    console.log('toggling notifications: ' + type);
    if ( type == "Global" ) {
      this.setState({ globalNotifications: ((this.state.globalNotifications == true) ? false : true)});
    } else if ( type == "Ash") {
      this.setState({ AshNotifications: ((this.state.AshNotifications == true) ? false : true)});
    } else if ( type == "Ill") {
      this.setState({ IllNotifications: ((this.state.IllNotifications == true) ? false : true)});
    } else if ( type == "Jer") {
      this.setState({ JerNotifications: ((this.state.JerNotifications == true) ? false : true)});
    } else if ( type == "Hav") {
      this.setState({ HavNotifications: ((this.state.HavNotifications == true) ? false : true)});
    } else if ( type == "Kal") {
      this.setState({ KalNotifications: ((this.state.KalNotifications == true) ? false : true)});
    } else if ( type == "Ral") {
      this.setState({ RalNotifications: ((this.state.RalNotifications == true) ? false : true)});
    } else if ( type == "Sal") {
      this.setState({ SalNotifications: ((this.state.SalNotifications == true) ? false : true)});
    } else if ( type == "Sto") {
      this.setState({ StoNotifications: ((this.state.StoNotifications == true) ? false : true)});
    } else if ( type == "Tem") {
      this.setState({ TemNotifications: ((this.state.TemNotifications == true) ? false : true)});
    } else if ( type == "Zen") {
      this.setState({ ZenNotifications: ((this.state.ZenNotifications == true) ? false : true)});
    }
  }

  componentDidMount() {
    // Handling Deep Linking
    const deepLinkUrl = Linking.getInitialURL().then((url) => {

    }).catch(err => console.error('An error occurred', err));
  }

  render() {
    const warningText = "Press this button if a new rulebook is released and your data seems out of date. This app downloads information from the internet and then saves it to your device. This check should happen automatically every time the app is loaded.";
    const maxWidth = Dimensions.get('window').width;
    const introText = "Underworld LARP is kick-ass a live-action roleplaying game. Use this app to quickly access rulebook data while offline."

    return (
      <View>
        <ScrollView style={styles.defaultContainer}>
          <Image
            style={{ width: maxWidth, height: 200 }}
            source={require('../assets/mobileAppHeader1.png')}
            resizeMode="cover"
          >
            <Image
              style={{ flex: 1, width: maxWidth, resizeMode: 'contain' }}
              source={require('../assets/headerText.png')}
              resizeMode="cover"
            />
          </Image>
          <View style={styles.metaPanel}>
            <Text style={styles.defaultText}>{introText}</Text>
          </View>

          <ConnectivityRenderer>
            {isConnected => (
              <List style={styles.defaultContainer}>

                <View style={styles.headerContainerWPadding}>
                  <Text key={"eric section"} style={styles.headerText}>About Underworld LARP</Text>
                </View>
                <ListItem
                  title={<Text style={styles.listText}>Website</Text>}
                  onPress={() => this.openExternalURL('http://larp.ca')}
                  underlayColor={primaryBGColour}
                  chevronColor={'red'}
                />
                <ListItem
                  title={<Text style={styles.listText}>Forums</Text>}
                  onPress={() => this.openExternalURL('http://underworldlarp.com/forum')}
                  underlayColor={primaryBGColour}
                  chevronColor={'red'}
                />
                <ListItem
                  title={<Text style={styles.listText}>Wiki</Text>}
                  onPress={() => this.openExternalURL('http://underworldlarp.com/wiki/index.php')}
                  underlayColor={primaryBGColour}
                  chevronColor={'red'}
                />
                <View style={styles.headerContainerWPadding}>
                  <Text key={"eric section"} style={styles.headerText}>Also Made by Eric Lortie</Text>
                </View>
                <ListItem
                  title={<Text style={styles.listText}>Unofficial Character Builder</Text>}
                  onPress={() => this.openExternalURL('http://tempestgrove.com/character-builder-beta')}
                  underlayColor={primaryBGColour}
                  chevronColor={'red'}
                />
                <ListItem
                  title={<Text style={styles.listText}>Backstory Generator</Text>}
                  onPress={() => this.openExternalURL('http://tempestgrove.com/character-generator')}
                  underlayColor={primaryBGColour}
                  chevronColor={'red'}
                />
                <ListItem
                  title={<Text style={styles.listText}>Emperiex Greytower: The Chatbot</Text>}
                  onPress={() => this.openExternalURL('http://messenger.com/t/emperiex')}
                  underlayColor={primaryBGColour}
                  chevronColor={'red'}
                />
              </List>
            )}
          </ConnectivityRenderer>

          <ConnectivityRenderer>
            {isConnected => (
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
            )}
          </ConnectivityRenderer>

          <View style={styles.metaPanel}>
            <View style={styles.headerContainer}>
              <Text key={"notifications"} style={styles.headerText}>Notifications</Text>
            </View>
            <Text style={styles.warningText}>You can opt into notifications below.</Text>

            <CheckBox
              containerStyle={{paddingTop: 8, backgroundColor: 'darkred'}}
              textStyle={{color: 'white', fontWeight: 'bold'}}
              checkedColor='white'
              title='Global Notifications'
              onPress={() => this.toggleNotification('Global')}
              checked={this.state.Notifications}
            />
            <CheckBox
              containerStyle={{paddingTop: 8, backgroundColor: 'darkred'}}
              textStyle={{color: 'white', fontWeight: 'bold'}}
              checkedColor='white'
              title='Ashendale'
              onPress={() => this.toggleNotification('Ash')}
              checked={this.state.AshNotifications}
            />
            <CheckBox
              containerStyle={{paddingTop: 8, backgroundColor: 'darkred'}}
              textStyle={{color: 'white', fontWeight: 'bold'}}
              checkedColor='white'
              title='Illios'
              onPress={() => this.toggleNotification('Ill')}
              checked={this.state.IllNotifications}
            />
            <CheckBox
              containerStyle={{paddingTop: 8, backgroundColor: 'darkred'}}
              textStyle={{color: 'white', fontWeight: 'bold'}}
              checkedColor='white'
              title='Jericho'
              onPress={() => this.toggleNotification('Jer')}
              checked={this.state.JerNotifications}
            />
            <CheckBox
              containerStyle={{paddingTop: 8, backgroundColor: 'darkred'}}
              textStyle={{color: 'white', fontWeight: 'bold'}}
              checkedColor='white'
              title='Havenhollow'
              onPress={() => this.toggleNotification('Hav')}
              checked={this.state.HavNotifications}
            />
            <CheckBox
              containerStyle={{paddingTop: 8, backgroundColor: 'darkred'}}
              textStyle={{color: 'white', fontWeight: 'bold'}}
              checkedColor='white'
              title='Kalidor'
              onPress={() => this.toggleNotification('Kal')}
              checked={this.state.KalNotifications}
            />
            <CheckBox
              containerStyle={{paddingTop: 8, backgroundColor: 'darkred'}}
              textStyle={{color: 'white', fontWeight: 'bold'}}
              checkedColor='white'
              title='Ralinwood'
              onPress={() => this.toggleNotification('Ral')}
              checked={this.state.RalNotifications}
            />
            <CheckBox
              containerStyle={{paddingTop: 8, backgroundColor: 'darkred'}}
              textStyle={{color: 'white', fontWeight: 'bold'}}
              checkedColor='white'
              title='Salem Ruin'
              onPress={() => this.toggleNotification('Sal')}
              checked={this.state.SalNotifications}
            />
            <CheckBox
              containerStyle={{paddingTop: 8, backgroundColor: 'darkred'}}
              textStyle={{color: 'white', fontWeight: 'bold'}}
              checkedColor='white'
              title='Stormlands'
              onPress={() => this.toggleNotification('Sto')}
              checked={this.state.StoNotifications}
            />
            <CheckBox
              containerStyle={{paddingTop: 8, backgroundColor: 'darkred'}}
              textStyle={{color: 'white', fontWeight: 'bold'}}
              checkedColor='white'
              title='Tempest Grove'
              onPress={() => this.toggleNotification('Tem')}
              checked={this.state.TemNotifications}
            />
            <CheckBox
              containerStyle={{paddingTop: 8, backgroundColor: 'darkred'}}
              textStyle={{color: 'white', fontWeight: 'bold'}}
              checkedColor='white'
              title='Zenithstrand'
              onPress={() => this.toggleNotification('Zen')}
              checked={this.state.ZenNotifications}
            />

          </View>
        </ScrollView>
      </View>
    );

                // <CheckBox
                //   containerStyle={{paddingTop: 8, backgroundColor: 'darkred'}}
                //   textStyle={{color: 'white', fontWeight: 'bold'}}
                //   checkedColor='white'
                //   title='Global Notifications'
                //   onPress={() => this.toggleNotification('global')}
                //   checked={this.state.globalNotifications}
                // />
  }
}

export default HomePage;
