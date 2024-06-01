import {View, Text, FlatList, Image, StyleSheet} from 'react-native';
import React from 'react';
import {dummyData} from '../utils/dummData';
import {getDeviceHeight, getDeviceWidth} from '../utils/constants';
import {BLACK, GRAY, WHITE} from '../utils/colors';

const HorizontalList = props => {
  const {
    image,
    shortImgStyle,
    shortImage,
    content,
    isFooter = false,
    viewStyle,
    isStarIcon = false,
    isTechReq = false,
    isDateReq = false,
    imageStyle,
    onScroll,
    pagingEnabled,
    dot,
    currentIndex,
  } = props || {};
  console.log(currentIndex);
  return (
    <View style={styles.container}>
      <FlatList
        data={dummyData}
        pagingEnabled={pagingEnabled}
        onScroll={onScroll}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        renderItem={({item, index}) => {
          return (
            <View style={[styles.view, viewStyle]} key={index}>
              <View style={[styles.reelImage, shortImgStyle]}>
                <Image source={image} style={[styles.insta, shortImage]} />
              </View>
              {isStarIcon && (
                <View style={styles.star}>
                  <Image
                    source={require('../assets/star.png')}
                    style={styles.start}
                  />
                </View>
              )}
              <Image
                source={item.image}
                style={[styles.imageCar, imageStyle]}
                resizeMethod="contain"
              />
              <View style={{marginHorizontal: 20}}>
                {isTechReq && (
                  <View style={styles.techView}>
                    <View style={styles.dot} />

                    <Text style={styles.tech}>{item?.department}</Text>
                  </View>
                )}
                {isFooter ? (
                  <Text style={styles.textFooter}>{content}</Text>
                ) : (
                  <Text style={styles.text}>
                    <Text style={styles.step}>Step Into Tomorrow: </Text>
                    {item?.content}
                  </Text>
                )}
                {isDateReq && <Text style={styles.date}>{item.data}</Text>}
              </View>
            </View>
          );
        }}
      />
      {dot && (
        <View style={styles.dotView}>
          {dummyData?.map((item, index) => (
            <View style={styles.dots(currentIndex, index)} key={index}></View>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  dotView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  dots: (currentIndex, index) => ({
    width: currentIndex == index ? 100 : 8,
    height: 10,
    borderRadius: 25,
    backgroundColor: GRAY,
    marginLeft: 5,
    marginTop: 30,
  }),
  container: {
    marginHorizontal: 15,
    marginBottom: 15,
    marginTop: 20,
  },
  reelImage: {
    position: 'absolute',
    top: 20,
    left: 20,
    backgroundColor: BLACK,
    zIndex: 1,
    padding: 3,
  },
  step: {color: BLACK, fontFamily: 'Strawford-Bold'},
  star: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: BLACK,
    zIndex: 1,
    padding: 7,
    borderRadius: 20,
  },
  insta: {height: 30, width: 30, tintColor: WHITE},
  start: {height: 18, width: 18, tintColor: WHITE},
  view: {
    marginEnd: 20,
    borderRadius: 22,
    overflow: 'hidden',
    width: getDeviceWidth() * 0.63,
    backgroundColor: WHITE,
  },
  imageCar: {
    width: '100%',
    height: getDeviceHeight() * 0.48,
  },
  text: {
    color: BLACK,
    lineHeight: 25,
    marginBottom: 70,
    fontFamily: 'Strawford-Regular',
  },
  textFooter: {
    color: BLACK,
    lineHeight: 24,
    fontSize: 16,
    fontFamily: 'Strawford-Regular',
    marginVertical: 24,
  },
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
  date: {
    position: 'absolute',
    bottom: 5,
    marginBottom: 15,
    fontFamily: 'Strawford-Regular',
  },
  tech: {fontSize: 14, fontFamily: 'Strawford-Black', fontWeight: '500'},
});
export default HorizontalList;
