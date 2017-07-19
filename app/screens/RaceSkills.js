import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { buildSubtitle, loadSkillsByType , validatePhotoUrl} from '../config/functions';
import { styles, primaryBGColour, primaryFontColour } from '../styles/common';
//import Spinner, {InlineSpinner} from "../components/spinner";

class RaceSkills extends Component {

  constructor(props) {
    super(props);

    this.state = {
      RaceSkillData: undefined
    }
  }

  onLearnMore = (skill) => {
    this.props.navigation.navigate('SkillDetails', { ...skill });
  };


  // You want to load subscriptions not only when the component update but also when it gets mounted.
  componentDidMount() {
    loadSkillsByType(this, 'racial_skills');
  }
  componentWillReceiveProps() {
    loadSkillsByType(this, 'racial_skills');
  }

        // const remote_urls = [
        //   ['https://tempestgrove.com/wp-json/wp/v2/pages/889', this.state.Classes, 'classes'],
        //   ['https://tempestgrove.com/wp-json/wp/v2/pages/888', this.state.Races, 'race'],
        //   ['https://tempestgrove.com/wp-json/wp/v2/pages/897', this.state.Skills, 'skills'],
        //   ['https://tempestgrove.com/wp-json/wp/v2/pages/890', this.state.Skills, 'skills'],
        //   ['https://tempestgrove.com/wp-json/wp/v2/pages/907', this.state.Skills, 'skills'],
        //   ['https://tempestgrove.com/wp-json/wp/v2/pages/908', this.state.Skills, 'skills'],
        //   ['https://tempestgrove.com/wp-json/wp/v2/pages/878', this.state.Spheres, 'spell_spheres'],
        //   ['https://tempestgrove.com/wp-json/wp/v2/pages/1291', this.state.Spells, 'spells'],
        //   ['https://tempestgrove.com/wp-json/wp/v2/pages/1312', this.state.Spells, 'spells']

  render() {

    // Handle case where the response is not here yet
      if ( !this.state.RaceSkillData ) {
         // Note that you can return false it you want nothing to be put in the dom
         // This is also your chance to render a spinner or something...
         return (
           <ScrollView style={styles.defaultContainerWithPadding}>
             <Text style={styles.defaultText}>Loading Racial Abilities</Text>
           </ScrollView>
         )
      }

      // Gives you the opportunity to handle the case where the ajax request
      // completed but the result array is empty
      if ( this.state.RaceSkillData.length === 0 ) {
        return (
          <ScrollView style={styles.defaultContainerWithPadding}>
            <Text style={styles.defaultText}>No Racial Abilities Found</Text>
          </ScrollView>
        )
      }

      return (
        <ScrollView style={styles.defaultContainer}>
          <List style={styles.defaultContainer}>
            {this.state.RaceSkillData.map((skill) => (
              <ListItem
                key={`${skill.name}-${skill.race}`}
                title={<Text style={styles.listText}>{skill.name}</Text>}
                subtitle={buildSubtitle(skill, 'skill')}
                onPress={() => this.onLearnMore(skill)}
                underlayColor={primaryBGColour}
                chevronColor={'red'}
              />
            ))}
          </List>
        </ScrollView>
      )

  }
}

export default RaceSkills;
