import React, { Component } from 'react';
import { ScrollView, Text, WebView, StyleSheet, View } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';
import { validatePhotoUrl, renderSkillMetaInfo } from '../config/functions';
import { styles } from '../styles/common';

class SkillDetail extends Component {
  render() {
    const { name, description, prerequesites, race, level, pc_class, mercenary_cost, ranger_cost, templar_cost, assassin_cost, nightblade_cost, witchblade_cost, mage_cost, druid_cost, bard_cost, demagogue_cost, champion_cost } = this.props.navigation.state.params;
    const skill = {};
    skill['name'] = name;
    skill['description'] = description;
    skill['prerequesites'] = prerequesites;
    skill['race'] = race;
    skill['level'] = level;
    skill['pc_class'] = pc_class;
    skill['mercenary_cost'] = mercenary_cost;
    skill['ranger_cost'] = ranger_cost;
    skill['templar_cost'] = templar_cost;
    skill['assassin_cost'] = assassin_cost;
    skill['nightblade_cost'] = nightblade_cost;
    skill['witch_hunter_cost'] = witchblade_cost;
    skill['mage_cost'] = mage_cost;
    skill['druid_cost'] = druid_cost;
    skill['bard_cost'] = bard_cost;
    skill['demagogue_cost'] = demagogue_cost;
    skill['champion_cost'] = champion_cost;
    return (
      <ScrollView style={styles.defaultContainer}>
        <View style={styles.defaultContainer}>
          {renderSkillMetaInfo(skill)}
        </View>

      </ScrollView>
    );
  }
}

export default SkillDetail;
