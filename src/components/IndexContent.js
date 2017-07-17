import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text
} from 'react-native';

import Footer from './footer';

// Main Content
export default class IndexContent extends Component {
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
        return (
            <View style={{ flex: 1 }}>
                <ScrollView style={styles.container} >
                    <Text>This is the index.</Text>
                </ScrollView>
                <Footer navigator={this.props.navigator} />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
    }

});
