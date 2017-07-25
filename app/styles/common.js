import React, { Component } from 'react';
import {
  StyleSheet
} from 'react-native';

export const primaryFontColour = "whitesmoke";
export const primaryBGColour = "#191919";

export const styles = StyleSheet.create({
  defaultContainer: {
    backgroundColor: primaryBGColour
  },
  defaultWithPadding: {
    padding: 5,
    backgroundColor: primaryBGColour
  },
  spellContainer: {
    padding: 20,
  },
  defaultText: {
    padding: 5,
    color: primaryFontColour,
  },
  descriptionText: {
    fontSize: 18,
    padding: 10,
    color: primaryFontColour
  },
  subtitleText: {
    color: '#ddd',
  },
  metaText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'whitesmoke',
    padding: 4
  },
  metaTextWithPadding: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'whitesmoke',
    paddingTop: 4,
    paddingBottom: 4
  },
  listText: {
    left: 10,
    color: primaryFontColour,
    fontSize: 20,
    fontWeight: 'bold'
  },
  headerContainer: {
    padding: 20,
    borderBottomColor: primaryFontColour,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  headerContainerWPadding: {
    padding: 20,
    paddingTop: 40,
    borderBottomColor: primaryFontColour,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  headerText: {
    fontSize: 25,
    textAlign: 'center',
    color: primaryFontColour
  },
  warningText: {
    top:20,
    color: '#c3c3c3',
    padding: 20
  },
  card: {
    backgroundColor: primaryBGColour,
    color: primaryFontColour,
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
    color: primaryFontColour,
    padding: 5,
    margin: 5
  },
  headerImage: {
    alignSelf: 'stretch',
  },
  skillText: {
    color: primaryFontColour,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15

  },
  costHeader: {
    color: primaryFontColour,
    fontWeight: 'bold',
    alignSelf: 'stretch',
    textAlign: 'center',
  },
  cost: {
    color: primaryFontColour,
    alignSelf: 'stretch',
    textAlign: 'center',
  },
  costRow: {
    marginTop: 8,
    marginBottom: 15
  },
  metaPanel: {
    backgroundColor: 'black',
    margin: 20,
    borderColor: primaryFontColour,
    borderWidth: StyleSheet.hairlineWidth,
    padding: 6
  }
});

export var htmlstyles = StyleSheet.create({
  body: {
    color: '#ddd'
  },
  h1: {
    fontSize: 24,
    color: 'whitesmoke',
    fontWeight: 'bold'
  },
  h2: {
    color: 'whitesmoke',
    fontSize: 20,
    fontWeight: 'bold'
  },
  h4: {
    color: 'whitesmoke',
    fontWeight: 'bold'
  },
  a: {
    fontWeight: '300',
    fontSize: 16,
    color: '#ddd'
  },
  p:{
    fontSize: 16,
    color: '#ddd',
    padding: 0,
    margin: 0
  },
  li: {
    fontSize: 16,
    color: '#ddd'
  },
  span: {
    fontSize: 16,
    color: '#ddd'
  },
  b:{
    fontWeight:'bold',
    fontSize: 18,
    color: '#ddd'
  },
  strong:{
    fontWeight:'bold',
    fontSize: 18,
    color: '#ddd'
  }
});
