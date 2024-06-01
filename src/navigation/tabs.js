import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  ARTICLES,
  BOOKMARK,
  NOTIFICATION,
  PROFILE,
  TV_SCREEEN,
} from '../utils/constants';
import Articles from '../screens/Articles/articles';
import Bookmark from '../screens/Bookmark/bookmark';
import TvScreen from '../screens/Tv/TvScreen';
import Notification from '../screens/Notifications/notification';
import Profile from '../screens/Profile/profile';
import {Image, StyleSheet, View} from 'react-native';
import {BLACK, WHITE} from '../utils/colors';

const Tab = createBottomTabNavigator();

const getTabBarIcon =
  icon =>
  ({focused}) =>
    (
      <View style={styles.imageView(focused)}>
        <Image source={icon} style={styles.imageStyle(focused)} />
      </View>
    );
const Tabs = () => {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            marginHorizontal: 10,
            elevation: 0,
            margin: 5,
            paddingHorizontal: 10,
            backgroundColor: 'white',
            borderRadius: 35,
            alignItems: 'center',
            justifyContent: 'center',
            height: 65,
          },
          headerShown: false,
        }}>
        <Tab.Screen
          name={ARTICLES}
          component={Articles}
          options={{
            tabBarIcon: getTabBarIcon(require('../assets/book.png')),
          }}
        />
        <Tab.Screen
          name={BOOKMARK}
          component={Bookmark}
          options={{
            tabBarIcon: getTabBarIcon(require('../assets/bookmark.png')),
          }}
        />
        <Tab.Screen
          name={TV_SCREEEN}
          component={TvScreen}
          options={{
            tabBarIcon: getTabBarIcon(require('../assets/tv.png')),
          }}
        />
        <Tab.Screen
          name={NOTIFICATION}
          component={Notification}
          options={{
            tabBarIcon: getTabBarIcon(require('../assets/bell.png')),
          }}
        />
        <Tab.Screen
          name={PROFILE}
          component={Profile}
          options={{
            tabBarIcon: getTabBarIcon(require('../assets/profile.png')),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BLACK,
    justifyContent: 'center',
  },
  imageView: focused => ({
    padding: 13,
    backgroundColor: focused ? BLACK : WHITE,
    borderRadius: 25,
  }),
  imageStyle: focused => ({
    width: 24,
    height: 24,
    tintColor: focused ? WHITE : 'gray',
  }),
});
export default Tabs;
