import {StyleSheet} from 'react-native';
import {getDeviceHeight, getDeviceWidth} from '../../utils/constants';

export const styles = StyleSheet.create({
  shortImgStyle: {padding: 7, borderRadius: 5},
  shortImage: {width: 20, height: 20},
  viewStyle: {
    width: getDeviceWidth() * 0.7,
    alignItems: 'center',
    marginHorizontal: 20,
  },
  imageStyle: {height: getDeviceHeight() * 0.35},
  safeArea: {flex: 1},
  scroll: {marginTop: 10},
});
