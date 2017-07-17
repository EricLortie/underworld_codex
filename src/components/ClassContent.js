import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View
} from 'react-native';

import ClassCards from './ClassCards';
import Footer from './footer';

// Main Content
export default class ClassContent extends Component {
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
                    <ClassCards navigator={this.props.navigator} />
                </ScrollView>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
    }

});
