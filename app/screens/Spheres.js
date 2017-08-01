import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  Dimensions,
  Image
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { validatePhotoUrl } from '../config/functions';
import { buildSubtitle, loadSphereData, LoadingScreen } from '../config/functions';
import { styles, primaryBGColour, primaryFontColour } from '../styles/common';

class Spheres extends Component {

  constructor(props) {
    super(props);

    this.state = {
      SphereData: undefined
    }
  }

  onLearnMore = (sphere) => {
    this.props.navigation.navigate('SphereDetails', { ...sphere });
  };


  // You want to load subscriptions not only when the component update but also when it gets mounted.
  componentDidMount() {
    loadSphereData(this);
  }
  componentWillReceiveProps() {
    loadSphereData(this);
  }

  render() {
    // Handle case where the response is not here yet
      if ( !this.state.SphereData ) {
         // Note that you can return false it you want nothing to be put in the dom
         // This is also your chance to render a spinner or something...
         return (
           <LoadingScreen />
         )
      }

      // Gives you the opportunity to handle the case where the ajax request
      // completed but the result array is empty
      if ( this.state.SphereData.length === 0 ) {
        return (
          <LoadingScreen />
        )
      }

      const maxWidth = Dimensions.get('window').width;

      return (
        <ScrollView style={styles.defaultContainer}>

          <Image
            style={{ width: maxWidth, height: 200 }}
            source={require('../assets/mobileAppHeader3.jpg')}
            resizeMode="cover"
          >
            <Image
              style={{ flex: 1, width: maxWidth, resizeMode: 'contain' }}
              source={require('../assets/headerText.png')}
              resizeMode="cover"
            />
          </Image>
          <List style={styles.defaultContainer}>
            {this.state.SphereData.map((sphere) => (
              <ListItem
                key={sphere.name}
                title={<Text style={styles.listText}>{sphere.name}</Text>}
                subtitle={buildSubtitle(sphere, "sphere")}
                onPress={() => this.onLearnMore(sphere)}
                underlayColor={primaryBGColour}
                chevronColor={'red'}
              />
            ))}
          </List>
        </ScrollView>
      )

  }
}

export default Spheres;
