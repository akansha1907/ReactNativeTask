import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {BLACK, WHITE} from '../utils/colors';

const Heading = props => {
  const {textStyle, title, isSubHeading = false, subheading} = props || {};
  return (
    <View style={styles.container}>
      <Text style={[styles.textStyle, textStyle]}>{title}</Text>
      {isSubHeading && <Text style={styles.subheading}>{subheading}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 22,
    color: BLACK,
    fontFamily: 'Strawford-Bold',
  },
  container: {marginVertical: 15, marginHorizontal: 18, marginTop: 30},
  subheading: {
    color: WHITE,
    lineHeight: 21,
    fontSize: 16,
    fontFamily: 'Strawford-Regular',
  },
});
export default Heading;
