import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

// footer
export default class Footer extends Component{
  constructor(){
      super();

      this.navigate = this.navigate.bind(this)
  }

  navigate(name){
      this.props.navigator.push({
          name
      })
  }


  render(){
    console.log('footer rendering');
    return(
      <View style={styles.footer}>
        <TouchableHighlight onPress={() => this.navigate('IndexContent')} style={styles.btn}>
            <Text style={styles.btnTxt}>Menu</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.navigate('ClassContent')} style={styles.btn}>
            <Text style={styles.btnTxt}>Classes</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  // Header Styles
  footer: {
    flex: 1,
    backgroundColor: '#418c18',
    paddingBottom:10,
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btn:{

  },
  btnTxt:{
    color:'white',
    marginTop:18,
    fontSize:14,
  },



});
