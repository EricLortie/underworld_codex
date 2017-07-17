import React, { Component } from 'react';
import {
  View
} from 'react-native';

import ClassCard from './ClassCard';


// List of Cards
export default class ClassCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Classes: [],
      Races: [],
      Skills: [],
      Spheres: [],
      Spells: []
    };
  }

  // Functions to grab the data and populate the list
  componentDidMount() {

    // Load Classes

      fetch('https://tempestgrove.com/wp-json/wp/v2/pages/889', { })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(ele);
        this.setState({ Classes: responseJson.acf.classes });
      })
      .catch((err) => {
        if (err) {
            console.log(err);
        }
      });

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
    //
    // ]
    // console.log(remote_urls);
    // remote_urls.map(({ url, ele, string }) => {
    //
    //   console.log(url);
    //   console.log(ele);
    //   console.log(string);
    //   fetch(url, { })
    //   .then((response) => response.json())
    //   .then((responseJson) => {
    //     console.log(responseJson.acf[string]);
    //     console.log(ele);
    //     this.setState({ ele: responseJson.acf[string] });
    //   })
    //   .catch((err) => {
    //     if (err) {
    //         console.log(err);
    //     }
    //   });
    //
    // });
}

  render() {
    console.log(this.state.Classes);
    const AllClasses = this.state.Classes.map(TheClasses => {
      return (
          <ClassCard key={TheClasses.id} data={TheClasses} navigator={this.props.navigator} />
      );
    });

    return (
      <View>
        {AllClasses}
      </View>
    );
  }
}
