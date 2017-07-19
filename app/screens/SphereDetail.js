import React, { Component } from 'react';
import { ScrollView, Text, WebView, StyleSheet, View, Card } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';
import { validatePhotoUrl, renderSphereMetaInfo, buildSubtitle, loadSpellData, cleanHTML } from '../config/functions'
import { styles, htmlstyles, primaryBGColour, primaryFontColour } from '../styles/common';
import HTMLView from 'react-native-htmlview';

class SphereDetail extends Component {

  constructor(props) {
    super(props);

    this.state = {
      SpellData: []
    }
  }

  // You want to load subscriptions not only when the component update but also when it gets mounted.
  componentDidMount() {
    const { name, description, frag_cost, focus } = this.props.navigation.state.params;
    frag_sphere = false;
    if(frag_cost != '') {
      frag_sphere = true;
    }
    loadSpellData(this, name, frag_sphere);
  }
  componentWillReceiveProps() {
    const { name, description, frag_cost, focus } = this.props.navigation.state.params;
    frag_sphere = false;
    if(frag_cost != '') {
      frag_sphere = true;
    }
    loadSpellData(this, name, frag_sphere);
  }

  render() {

    const { name, description, frag_cost, focus } = this.props.navigation.state.params;
    const sphere = {};
    sphere['name'] = name;
    sphere['description'] = description;
    sphere['frag_cost'] = frag_cost;
    sphere['focus'] = focus;

    return (
      <ScrollView style={styles.defaultContainer}>

        <View style={styles.defaultContainer}>
          {renderSphereMetaInfo(sphere)}
        </View>
        <View style={styles.defaultContainer}>
          {this.state.SpellData.map((spell) =>(
            <View key={spell.name} style={styles.metaPanel}>
              <View style={styles.headerContainer}>
                <Text key={spell.name} style={styles.headerText}>{spell.name} (Level: {spell.level})</Text>
              </View>
              <Text key={spell.incant} style={styles.metaTextWithPadding}>Incant: {spell.incant}</Text>
              <Text key={spell.duration} style={styles.metaTextWithPadding}>Duration: {spell.duration}</Text>
              <HTMLView
                stylesheet={htmlstyles}
                value={cleanHTML(spell.description)}
              />
            </View>
          ))}
        </View>

      </ScrollView>
    );
  }
}

export default SphereDetail;
