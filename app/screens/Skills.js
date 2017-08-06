import React, { Component } from 'react';
import { ScrollView, Image, Dimensions, Text } from 'react-native';
import { List, ListItem, Tile, Button } from 'react-native-elements';
import { styles, primaryBGColour, primaryFontColour } from '../styles/common';

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
          source={require('../assets/mobileAppHeader2.jpg')}
          resizeMode="cover"
        >
          <Image
            style={{ flex: 1, width: maxWidth, resizeMode: 'contain' }}
            source={require('../assets/headerText.png')}
            resizeMode="cover"
          />
        </Image>

        <List style={styles.defaultContainer}>
          <ListItem
            title={<Text style={styles.listText}>Warrior Skills</Text>}
            onPress={() => this.onLearnMore('WarriorSkills')}
            underlayColor={primaryBGColour}
            chevronColor={'red'}
          />
          <ListItem
            title={<Text style={styles.listText}>Rogue Skills</Text>}
            onPress={() => this.onLearnMore('RogueSkills')}
            underlayColor={primaryBGColour}
            chevronColor={'red'}
          />
          <ListItem
            title={<Text style={styles.listText}>Scholar Skills</Text>}
            onPress={() => this.onLearnMore('ScholarSkills')}
            underlayColor={primaryBGColour}
            chevronColor={'red'}
          />
          <ListItem
            title={<Text style={styles.listText}>Class Skills</Text>}
            onPress={() => this.onLearnMore('ClassSkills')}
            underlayColor={primaryBGColour}
            chevronColor={'red'}
          />
          <ListItem
            title={<Text style={styles.listText}>Production Skills</Text>}
            onPress={() => this.onLearnMore('ProductionSkills')}
            underlayColor={primaryBGColour}
            chevronColor={'red'}
          />
          <ListItem
            title={<Text style={styles.listText}>Frag Skills</Text>}
            onPress={() => this.onLearnMore('FragSkills')}
            underlayColor={primaryBGColour}
            chevronColor={'red'}
          />
          <ListItem
            title={<Text style={styles.listText}>Racial Abilities</Text>}
            onPress={() => this.onLearnMore('RaceSkills')}
            underlayColor={primaryBGColour}
            chevronColor={'red'}
          />
        </List>
      </ScrollView>
    );
  }
}

export default Skills;
