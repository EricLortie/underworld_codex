import React from 'react';
import { Platform } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon, List, ListItem } from 'react-native-elements';
import { App } from '../index'
import Skills from '../screens/Skills';
import WarriorSkills from '../screens/WarriorSkills';
import RogueSkills from '../screens/RogueSkills';
import ScholarSkills from '../screens/ScholarSkills';
import ClassSkills from '../screens/ClassSkills';
import RaceSkills from '../screens/RaceSkills';
import FragSkills from '../screens/FragSkills';
import ProductionSkills from '../screens/ProductionSkills';
import SkillDetail from '../screens/SkillDetail';
import Classes from '../screens/Classes';
import ClassDetail from '../screens/ClassDetail';
import Races from '../screens/Races';
import RaceDetail from '../screens/RaceDetail';
import Spheres from '../screens/Spheres';
import SphereDetail from '../screens/SphereDetail';
import Home from '../screens/Home';

import { styles, primaryBGColour, primaryFontColour } from '../styles/common';

export const ClassStack = StackNavigator({
  Classes: {
    screen: Classes,
    navigationOptions: ({ navigation }) => ({
      title: "CLASSES",
    }),
  },
  ClassDetails: {
    screen: ClassDetail,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.name.toUpperCase(),
    }),
  }
});

export const RaceStack = StackNavigator({
  Races: {
    screen: Races,
    navigationOptions: ({ navigation }) => ({
      title: "RACES"
    }),
  },
  RaceDetails: {
    screen: RaceDetail,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.name.toUpperCase(),
    }),
  }
});
export const SphereStack = StackNavigator({
  Spheres: {
    screen: Spheres,
    navigationOptions: ({ navigation }) => ({
      title: "Spell Spheres",
    }),
  },
  SphereDetails: {
    screen: SphereDetail,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.name.toUpperCase(),
    }),
  }
});
export const SkillStack = StackNavigator({
  Skills: {
    screen: Skills,
    navigationOptions: ({ navigation }) => ({
      title: "Skills",
    }),
  },
  WarriorSkills: {
    screen: WarriorSkills,
    navigationOptions: ({ navigation }) => ({
      title: "Warrior Skills",
    }),
  },
  RogueSkills: {
    screen: RogueSkills,
    navigationOptions: ({ navigation }) => ({
      title: "Rogue Skills",
    }),
  },
  ScholarSkills: {
    screen: ScholarSkills,
    navigationOptions: ({ navigation }) => ({
      title: "Scholar Skills",
    }),
  },
  ClassSkills: {
    screen: ClassSkills,
    navigationOptions: ({ navigation }) => ({
      title: "Class Skills",
    }),
  },
  RaceSkills: {
    screen: RaceSkills,
    navigationOptions: ({ navigation }) => ({
      title: "Racial Abilities",
    }),
  },
  ProductionSkills: {
    screen: ProductionSkills,
    navigationOptions: ({ navigation }) => ({
      title: "Production Skills",
    }),
  },
  FragSkills: {
    screen: FragSkills,
    navigationOptions: ({ navigation }) => ({
      title: "Frag Skills",
    }),
  },
  SkillDetails: {
    screen: SkillDetail,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.name.toUpperCase(),
    }),
  }
});

export const HomeStack = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: 'Home',
      header: null
    }),
  },
  Classes: {
    screen: ClassStack,
    navigationOptions: ({ navigation }) => ({
      title: 'Classes',
      header: null
    }),
  },
  Races: {
    screen: RaceStack,
    navigationOptions: ({ navigation }) => ({
      title: 'Races',
      header: null
    }),
  },
  Skills: {
    screen: SkillStack,
    navigationOptions: ({ navigation }) => ({
      title: 'Skills',
      header: null
    }),
  },
  Magic: {
    screen: SphereStack,
    navigationOptions: ({ navigation }) => ({
      title: 'Spheres',
      header: null
    }),
  }
});

export const Tabs = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => <Icon name="home" type="font-awesome" size={20} color={tintColor} />,
      header: null
    }),
  },
  Classes: {
    screen: ClassStack,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: 'Classes',
      tabBarIcon: ({ tintColor }) => <Icon name="universal-access" type="font-awesome" size={20} color={tintColor} />,
      header: null
    }),
  },
  Races: {
    screen: RaceStack,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: 'Races',
      tabBarIcon: ({ tintColor }) => <Icon name="users" type="font-awesome" size={20} color={tintColor} />,
      header: null
    }),
  },
  Skills: {
    screen: SkillStack,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: 'Skills',
      tabBarIcon: ({ tintColor }) => <Icon name="superpowers" type="font-awesome" size={20} color={tintColor} />,
      header: null
    }),
  },
  Magic: {
    screen: SphereStack,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: 'Magic',
      tabBarIcon: ({ tintColor }) => <Icon name="magic" type="font-awesome" size={20} color={tintColor} />,
      header: null
    }),
  }
}, {
    header: null,
    headerMode: 'none',        // I don't want a NavBar at top
    tabBarPosition: 'bottom',  // So your Android tabs go bottom
    tabBarOptions: {
      activeTintColor: 'red',  // Color of tab when pressed
      showIcon: 'true', // Shows an icon for both iOS and Android
      showLabel: true, //No label for Android
      labelStyle: {
        fontSize: 11,
      },
      style: {
        backgroundColor: '#111', // Makes Android tab bar white instead of standard blue
        height: 60 // I didn't use this in my app, so the numbers may be off.
      }
    },
});
