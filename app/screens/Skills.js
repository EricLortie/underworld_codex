import React, { Component } from 'react';
import { ScrollView, Image, Dimensions, Text } from 'react-native';
import { List, ListItem, Tile, Button } from 'react-native-elements';
import { styles } from '../styles/common';

class Skills extends Component {
  onLearnMore = (page) => {
    this.props.navigation.navigate(page);
  };

  render() {
    const maxWidth = Dimensions.get('window').width;

    return (
      <ScrollView style={styles.defaultContainer}>
        <Image
          style={{ width: maxWidth, height: 200 }}
          source={require('../assets/mobileAppHeader.png')}
          resizeMode="cover"
        />
        <List style={styles.defaultContainer}>
          <ListItem
            title={<Text style={styles.listText}>View Warrior Skills</Text>}
            onPress={() => this.onLearnMore('WarriorSkills')}
          />
          <ListItem
            title={<Text style={styles.listText}>View Rogue Skills</Text>}
            onPress={() => this.onLearnMore('RogueSkills')}
          />
          <ListItem
            title={<Text style={styles.listText}>View Scholar Skills</Text>}
            onPress={() => this.onLearnMore('ScholarSkills')}
          />
          <ListItem
            title={<Text style={styles.listText}>View Class Skills</Text>}
            onPress={() => this.onLearnMore('ClassSkills')}
          />
          <ListItem
            title={<Text style={styles.listText}>View Racial Abilities</Text>}
            onPress={() => this.onLearnMore('RaceSkills')}
          />
        </List>
      </ScrollView>
    );
  }
}

export default Skills;
