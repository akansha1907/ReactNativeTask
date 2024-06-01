import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {getDeviceHeight, getDeviceWidth} from '../utils/constants';
import {BLACK, WHITE} from '../utils/colors';

const RecentArticles = props => {
  const {data, containerStyle, cardStyle, cardImage} = props || {};
  return (
    <View style={[styles.container, containerStyle]}>
      {data?.map((item, index) => {
        return (
          <View key={index} style={[styles.card, cardStyle]}>
            <Image source={item.image} style={[styles.image, cardImage]} />
            <View style={styles.contentView}>
              <View style={[styles.reelImage]}>
                <Image source={item.reelImage} style={styles.reel} />
              </View>
              <View style={styles.techView}>
                <View style={styles.dot} />

                <Text style={styles.tech}>{item?.department}</Text>
              </View>
              <Text style={styles.step}>{item.title}: </Text>
              <Text style={styles.text}>{item.content}</Text>
              <Text style={styles.date}>{item.data}</Text>
            </View>
          </View>
        );
      })}
      <TouchableOpacity style={styles.tch}>
        <Text style={styles.viewAll}>View all</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginTop: 15,
  },
  tch: {
    alignSelf: 'center',
    backgroundColor: WHITE,
    paddingHorizontal: 60,
    padding: 10,
    marginTop: 10,
    marginBottom: 40,
    borderRadius: 25,
  },
  viewAll: {fontSize: 12, fontFamily: 'Strawford-Black'},
  tech: {fontSize: 14, fontFamily: 'Strawford-Black', fontWeight: '500'},
  text: {
    color: BLACK,
    lineHeight: 24,
    fontSize: 16,
    marginBottom: 70,
    fontFamily: 'Strawford-Regular',
  },
  step: {
    color: BLACK,
    fontFamily: 'Strawford-Bold',
    marginTop: 5,
    fontSize: 16,
  },
  card: {
    flexDirection: 'row',
    marginBottom: 22,
    backgroundColor: 'white',
    borderRadius: 22,
  },
  image: {
    width: getDeviceWidth() * 0.4,
    height: getDeviceHeight() * 0.4,
    borderTopLeftRadius: 22,
    borderBottomLeftRadius: 22,
  },
  contentView: {marginHorizontal: 20, flex: 1, marginVertical: 20},
  reelImage: {
    width: 35,
    backgroundColor: BLACK,
    alignItems: 'center',
    borderRadius: 3,
    padding: 7,
  },
  reel: {width: 20, height: 20, tintColor: WHITE},
  techView: {
    flexDirection: 'row',
    marginTop: 30,
    gap: 10,
    alignItems: 'center',
  },
  dot: {
    backgroundColor: BLACK,
    width: 15,
    height: 15,
    borderRadius: 20,
  },
  date: {position: 'absolute', bottom: 5, fontFamily: 'Strawford-Regular'},
});
export default RecentArticles;
