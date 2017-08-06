import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  Dimensions,
  Image
} from 'react-native';
import { List, ListItem, SideMenu } from 'react-native-elements';
import { validatePhotoUrl } from '../config/functions';
import { buildSubtitle, loadRaceData, SideMenuComponent, LoadingScreen } from '../config/functions';
import { styles, primaryBGColour, primaryFontColour } from '../styles/common';

class Races extends Component {

  constructor(props) {
    super(props);

    this.state = {
      RaceData: undefined
    }
  }

  onLearnMore = (race) => {
    this.props.navigation.navigate('RaceDetails', { ...race });
  };


  // You want to load subscriptions not only when the component update but also when it gets mounted.
  componentDidMount() {
    loadRaceData(this);
  }
  componentWillReceiveProps() {
    loadRaceData(this);
  }

  render() {
    // Handle case where the response is not here yet
      if ( !this.state.RaceData ) {
         // Note that you can return false it you want nothing to be put in the dom
         // This is also your chance to render a spinner or something...
         return (
           <LoadingScreen />
         )
      }

      // Gives you the opportunity to handle the case where the ajax request
      // completed but the result array is empty
      if ( this.state.RaceData.length === 0 ) {
        return (
          <LoadingScreen />
        )
      }

      const maxWidth = Dimensions.get('window').width;

      return (
        <ScrollView style={styles.defaultContainer}>

          <Image
            style={{ width: maxWidth, height: 200 }}
            source={require('../assets/mobileAppHeader4.jpg')}
            resizeMode="cover"
          >
            <Image
              style={{ flex: 1, width: maxWidth, resizeMode: 'contain' }}
              source={require('../assets/headerText.png')}
              resizeMode="cover"
            />
          </Image>
          <List style={styles.defaultContainer}>
            {this.state.RaceData.map((race) => (
              <ListItem
                key={race.name}
                roundAvatar
                avatar={{ uri: validatePhotoUrl(race.photo) }}
                title={<Text style={styles.listText}>{race.name}</Text>}
                subtitle={buildSubtitle(race, "race")}
                onPress={() => this.onLearnMore(race)}
              />
            ))}
          </List>
        </ScrollView>
      )

  }
}

export default Races;
