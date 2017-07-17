import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';

import Header from './header';
//import Class from './classes';
import IndexContent from './IndexContent'
import ClassContent from './ClassContent'

export default class Nav extends Component {

    constructor() {
        super();
        this.renderScene = this.renderScene.bind(this);
    }
    renderScene(route, navigator) {
        console.log('route');
        console.log(route);
        if (route.name === 'ClassContent') {
            return <ClassContent navigator={navigator} />;
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header />
                <Navigator
                    initialRoute={{ name: 'IndexContent' }}
                    renderScene={this.renderScene}
                    style={{ flex: 1 }}
                />

            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {

        flex:1,
    },
    header: {
        alignItems:'center',
        flex: 0,
        backgroundColor: '#418c18',
        paddingBottom:10,
    },
    headerText:{
        color:'white',
        marginTop:18,
        fontSize:18,
    },


});
