import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

export const SkillTabs = TabNavigator({
  WarriorSkills: {
    screen: WarriorSkills,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: 'Warrior Skills',
      tabBarIcon: ({ tintColor }) => <Icon name="shield" type="font-awesome" size={15} color={tintColor} />,
    }),
  },
  RogueSkills: {
    screen: RogueSkills,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: 'Rogue Skills',
      tabBarIcon: ({ tintColor }) => <Icon name="bomb" type="font-awesome" size={15} color={tintColor} />,
    }),
  },
  ScholarSkills: {
    screen: ScholarSkills,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: 'Scholar Skills',
      tabBarIcon: ({ tintColor }) => <Icon name="magic" type="font-awesome" size={15} color={tintColor} />,
    }),
  },
  ClassSkills: {
    screen: ClassSkills,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: 'Class Skills',
      tabBarIcon: ({ tintColor }) => <Icon name="universal-access" type="font-awesome" size={15} color={tintColor} />,
    }),
  },
  RacialSkills: {
    screen: RacialSkills,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: 'Racial Skills',
      tabBarIcon: ({ tintColor }) => <Icon name="users" type="font-awesome" size={15} color={tintColor} />,
    }),
  },
});
