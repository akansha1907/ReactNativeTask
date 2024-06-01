import {View, StyleSheet} from 'react-native';
import React from 'react';
import Heading from './Heading';
import {BLACK, WHITE} from '../utils/colors';
import {getDeviceHeight, getDeviceWidth} from '../utils/constants';
import HorizontalList from './HorizontalList';

const Footer = () => {
  return (
    <View style={{backgroundColor: BLACK}}>
      <Heading
        title={'Social Connect'}
        textStyle={styles.textStyle}
        isSubHeading={true}
        subheading={
          'Stay update with my latest post on your favorite platforms'
        }
      />
      <HorizontalList
        image={require('../assets/instagram.png')}
        content={
          'The Ultimate Guide To Simplifying Your Routine With Generative AI Automation!'
        }
        isFooter={true}
        viewStyle={styles.viewStyle}
        imageStyle={styles.imageStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {color: WHITE},
  viewStyle: {width: getDeviceWidth() * 0.56},
  imageStyle: {height: getDeviceHeight() * 0.42},
});
export default Footer;
