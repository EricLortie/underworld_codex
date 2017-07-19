import React, { Component } from 'react';
import { ScrollView, Text, WebView, StyleSheet, View, Image } from 'react-native';
import { Tile } from 'react-native-elements';
import { loadLocalPhoto, renderClassMetaInfo, renderSpecificSkills, ClassTypes, getSpecificSkills, buildSubtitle, renderSkillMetaInfo } from '../config/functions';
import { styles, primaryBGColour, primaryFontColour } from '../styles/common';
import HTMLView from 'react-native-htmlview';

class ClassDetail extends Component {

  constructor(props) {
    super(props);

    this.state = {
      specificSkillData: [],
      localPhoto: '/app/assets/UW-DEFAULT.png'
    }
  }

  onLearnMore = (skill) => {
    this.props.navigation.navigate('SkillDetails', { ...skill });
  };

  // You want to load subscriptions not only when the component update but also when it gets mounted.
  componentDidMount() {
    const { name, optional, frag_cost, description, photo } = this.props.navigation.state.params;
    getSpecificSkills(this, 'class_skills', name);
  }
  componentWillReceiveProps() {
    const { name, optional, frag_cost, description, photo } = this.props.navigation.state.params;
    getSpecificSkills(this, 'class_skills', name);
  }

  render() {
    const { name, optional, frag_cost, description, photo } = this.props.navigation.state.params;

    return (
      <ScrollView style={styles.defaultContainer}>
        <View style={styles.defaultContainer}>
          <Tile style={styles.card}
            imageSrc={{uri: photo}}
            featured
          />
          <View>{renderClassMetaInfo(description, frag_cost, optional)}</View>
          <View>
            <View style={styles.headerContainer}><Text style={styles.headerText}>Skills</Text></View>
            {this.state.specificSkillData.map((skill) =>(
              <View key={skill.name} style={styles.metaPanel}>
                {renderSkillMetaInfo(skill, 'specific')}
              </View>
            ))}
          </View>
        </View>

      </ScrollView>
    );
  }
}

export default ClassDetail;
