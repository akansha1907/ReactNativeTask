import {Dimensions} from 'react-native';

export const ARTICLES = 'Articles';
export const BOOKMARK = 'Bookmark';
export const TV_SCREEEN = 'Tv_screen';
export const NOTIFICATION = 'Notification';
export const PROFILE = 'Profile';
export const SPLASH = 'Splash';
export const TABS = 'Tabs';

export const getDeviceHeight = () => {
  return Dimensions.get('window').height;
};

export const getDeviceWidth = () => {
  return Dimensions.get('window').width;
};
