// Individual Cards
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';


export default class ClassCard extends Component {
  constructor(props) {
    super(props);
    this.navigate = this.navigate.bind(this);
  }

  navigate(name) {
    this.props.navigator.push({
      name
    });
  }

  render() {
    console.log(this.props.data);
    return (
      <View style={styles.card}>
        <View>
          <Text style={styles.cardText}>{this.props.data.name}</Text>
        </View>
        <View>
          <Text style={styles.cardText}> {this.props.data.discription}</Text>
          {/*<TouchableHighlight onPress={()=>(this.navigate('storeItem'))} style={styles.button}>
            <Text style={styles.buttonText}>View</Text>
          </TouchableHighlight>*/}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f1f2eb',
    margin: 5,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 5,
    shadowOpacity: 0.5
  },
  cardText: {
    padding: 5,
    margin: 5
  },
  button: {
    height: 36,
    backgroundColor: '#d4af37',
    borderColor: '#b0912e',
    borderWidth: 1,
    borderRadius: 0,
    marginBottom: 10,
    marginLeft: 5,
    marginRight: 5,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
   buttonText: {
    fontSize: 16,
    color: '#ffffff',
    alignSelf: 'center'
  },

});
