import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { styles } from '../styles/common';
import { loadLocalPhoto, ClassTypes, loadClassData, buildSubtitle, validatePhotoUrl } from '../config/functions';
//import Spinner, {InlineSpinner} from "../components/spinner";

class Classes extends Component {

  constructor(props) {
    super(props);

    this.state = {
       ClassData: undefined
    }
  }

  onLearnMore = (pc_class) => {
    this.props.navigation.navigate('ClassDetails', { ...pc_class });
  };


  // You want to load subscriptions not only when the component update but also when it gets mounted.
  componentDidMount() {
    loadClassData(this);
  }
  componentWillReceiveProps() {
    loadClassData(this);
  }

  render() {

    // Handle case where the response is not here yet
      if ( !this.state.ClassData ) {
         // Note that you can return false it you want nothing to be put in the dom
         // This is also your chance to render a spinner or something...
         return (
           <ScrollView style={styles.defaultContainerWithPadding}>
             <Text style={styles.defaultText}>Loading Classes</Text>
           </ScrollView>
         )
      }

      // Gives you the opportunity to handle the case where the ajax request
      // completed but the result array is empty
      if ( this.state.ClassData.length === 0 ) {
        return (
          <ScrollView style={styles.defaultContainerWithPadding}>
            <Text style={styles.defaultText}>No Classes Found</Text>
          </ScrollView>
        )
      }

      return (
        <ScrollView style={styles.defaultContainer}>
          <List style={styles.defaultContainer}>
            {this.state.ClassData.map((pc_class) => (
              <ListItem
                key={pc_class.name}
                roundAvatar
                avatar={{ uri: validatePhotoUrl(pc_class.photo) }}
                title={<Text style={styles.listText}>{pc_class.name}</Text>}
                subtitle={buildSubtitle(pc_class, 'class')}
                onPress={() => this.onLearnMore(pc_class)}
              />
            ))}
          </List>
        </ScrollView>
      )

  }
}

export const ClassScreenName = "CLASSES!";
export default Classes;