import React from 'react';
import { Platform, Text } from 'react-native'
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

const emptyHeader = {
  header:null,
  tintColor: primaryBGColour,
  headerStyle: {
    marginTop: 20,
    backgroundColor: primaryBGColour
  },
  headerTitleStyle: {
    color: primaryFontColour
  }
};

export const ClassStack = StackNavigator({
  Classes: {
    screen: Classes,
    navigationOptions: ({ navigation }) => (emptyHeader),
  },
  ClassDetails: {
    screen: ClassDetail,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.name.toUpperCase(),
      tintColor: primaryBGColour,
      headerTintColor: 'red',
      headerStyle: {
        backgroundColor: primaryBGColour
      },
      headerTitleStyle: {
        color: primaryFontColour
      },
      headerBackTitleStyle: {
        color: 'red'
      }
    })
  }
});

export const RaceStack = StackNavigator({
  Races: {
    screen: Races,
    navigationOptions: ({ navigation }) => (emptyHeader),
  },
  RaceDetails: {
    screen: RaceDetail,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.name.toUpperCase(),
      tintColor: primaryBGColour,
      headerTintColor: 'red',
      headerStyle: {
        backgroundColor: primaryBGColour
      },
      headerTitleStyle: {
        color: primaryFontColour
      },
      headerBackTitleStyle: {
        color: 'red'
      }
    }),
  }
});
export const SphereStack = StackNavigator({
  Spheres: {
    screen: Spheres,
    navigationOptions: ({ navigation }) => (emptyHeader),
  },
  SphereDetails: {
    screen: SphereDetail,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.name.toUpperCase(),
      tintColor: primaryBGColour,
      headerTintColor: 'red',
      headerStyle: {
        backgroundColor: primaryBGColour,
      },
      headerTitleStyle: {
        color: primaryFontColour
      },
      headerBackTitleStyle: {
        color: 'red'
      }
    })
  }
});
export const SkillStack = StackNavigator({
  Skills: {
    screen: Skills,
    navigationOptions: ({ navigation }) => (emptyHeader),
  },
  WarriorSkills: {
    screen: WarriorSkills,
    navigationOptions: ({ navigation }) => ({
      title: "Warrior Skills",
      tintColor: primaryBGColour,
      headerTintColor: 'red',
      headerStyle: {
        backgroundColor: primaryBGColour
      },
      headerTitleStyle: {
        color: primaryFontColour
      },
      headerBackTitleStyle: {
        color: 'red'
      }
    })
  },
  RogueSkills: {
    screen: RogueSkills,
    navigationOptions: ({ navigation }) => ({
      title: "Rogue Skills",
      tintColor: primaryBGColour,
      headerTintColor: 'red',
      headerStyle: {
        backgroundColor: primaryBGColour
      },
      headerTitleStyle: {
        color: primaryFontColour
      },
      headerBackTitleStyle: {
        color: 'red'
      }
    })
  },
  ScholarSkills: {
    screen: ScholarSkills,
    navigationOptions: ({ navigation }) => ({
      title: "Scholar Skills",
      tintColor: primaryBGColour,
      headerTintColor: 'red',
      headerStyle: {
        backgroundColor: primaryBGColour
      },
      headerTitleStyle: {
        color: primaryFontColour
      },
      headerBackTitleStyle: {
        color: 'red'
      }
    })
  },
  ClassSkills: {
    screen: ClassSkills,
    navigationOptions: ({ navigation }) => ({
      title: "Class Skills",
      tintColor: primaryBGColour,
      headerTintColor: 'red',
      headerStyle: {
        backgroundColor: primaryBGColour
      },
      headerTitleStyle: {
        color: primaryFontColour
      },
      headerBackTitleStyle: {
        color: 'red'
      }
    })
  },
  RaceSkills: {
    screen: RaceSkills,
    navigationOptions: ({ navigation }) => ({
      title: "Racial Abilities",
      tintColor: primaryBGColour,
      headerTintColor: 'red',
      headerStyle: {
        backgroundColor: primaryBGColour
      },
      headerTitleStyle: {
        color: primaryFontColour
      },
      headerBackTitleStyle: {
        color: 'red'
      }
    })
  },
  ProductionSkills: {
    screen: ProductionSkills,
    navigationOptions: ({ navigation }) => ({
      title: "Production Skills",
      tintColor: primaryBGColour,
      headerTintColor: 'red',
      headerStyle: {
        backgroundColor: primaryBGColour
      },
      headerTitleStyle: {
        color: primaryFontColour
      },
      headerBackTitleStyle: {
        color: 'red'
      }
    })
  },
  FragSkills: {
    screen: FragSkills,
    navigationOptions: ({ navigation }) => ({
      title: "Frag Skills",
      tintColor: primaryBGColour,
      headerTintColor: 'red',
      headerStyle: {
        backgroundColor: primaryBGColour
      },
      headerTitleStyle: {
        color: primaryFontColour
      },
      headerBackTitleStyle: {
        color: 'red'
      }
    })
  },
  SkillDetails: {
    screen: SkillDetail,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.name.toUpperCase(),
      tintColor: primaryBGColour,
      headerTintColor: 'red',
      headerStyle: {
        backgroundColor: primaryBGColour
      },
      headerTitleStyle: {
        color: primaryFontColour
      },
      headerBackTitleStyle: {
        color: 'red'
      }
    })
  }
});

export const Tabs = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: <Text style={styles.tabBar}>Home</Text>,
      tabBarIcon: ({ tintColor }) => <Icon name="home" type="font-awesome" size={20} color={tintColor} />,
      header: null
    }),
  },
  Classes: {
    screen: ClassStack,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: <Text style={styles.tabBar}>Classes</Text>,
      tabBarIcon: ({ tintColor }) => <Icon name="universal-access" type="font-awesome" size={20} color={tintColor} />,
      header: null
    }),
  },
  Races: {
    screen: RaceStack,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: <Text style={styles.tabBar}>Races</Text>,
      tabBarIcon: ({ tintColor }) => <Icon name="users" type="font-awesome" size={20} color={tintColor} />,
      header: null
    }),
  },
  Skills: {
    screen: SkillStack,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: <Text style={styles.tabBar}>Skills</Text>,
      tabBarIcon: ({ tintColor }) => <Icon name="superpowers" type="font-awesome" size={20} color={tintColor} />,
      header: null
    }),
  },
  Magic: {
    screen: SphereStack,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: <Text style={styles.tabBar}>Magic</Text>,
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
