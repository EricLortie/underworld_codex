import React, { Component } from 'react';
import { ScrollView, Text, WebView, StyleSheet, View } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';
import { validatePhotoUrl, renderRaceMetaInfo, renderSpecificSkills, ClassTypes, getSpecificSkills, buildSubtitle } from '../config/functions'
import { styles, htmlstyles } from '../styles/common';
import HTMLView from 'react-native-htmlview';

class RaceDetail extends Component {

  constructor(props) {
    super(props);

    this.state = {
      specificSkillData: []
    }
  }

  onLearnMore = (skill) => {
    this.props.navigation.navigate('SkillDetails', { ...skill });
  };

  // You want to load subscriptions not only when the component update but also when it gets mounted.
  componentDidMount() {
    const { name, optional, frag_cost, description, photo } = this.props.navigation.state.params;
    getSpecificSkills(this, 'racial_skills', name);
  }
  componentWillReceiveProps() {
    const { name, optional, frag_cost, description, photo } = this.props.navigation.state.params;
    getSpecificSkills(this, 'racial_skills', name);
  }

  render() {
    const { name, optional, frag_cost, description, photo, advantages, disadvantages, life_span, racial_characteristics } = this.props.navigation.state.params;
    photo_url = validatePhotoUrl(photo);
    var striptags = require('striptags');

    return (
      <ScrollView style={styles.defaultContainer}>
        <View style={styles.defaultContainer}>
          <Tile style={styles.card}
            imageSrc={{uri: photo_url}}
            featured
          />

          <View>{renderRaceMetaInfo( description, optional, frag_cost, advantages, disadvantages, life_span, racial_characteristics )}</View>


        </View>
      </ScrollView>
    );
  }
}

export default RaceDetail;
