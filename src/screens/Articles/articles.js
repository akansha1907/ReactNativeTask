import {SafeAreaView, ScrollView} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/Header';
import HorizontalList from '../../components/HorizontalList';
import RecentArticles from '../../components/RecentArticles';
import {dummyData} from '../../utils/dummData';
import Heading from '../../components/Heading';
import Footer from '../../components/Footer';
import {styles} from './styles';
import {getDeviceWidth} from '../../utils/constants';

const Articles = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const width = getDeviceWidth() * 0.75;
  const handleScroll = e => {
    const x = e.nativeEvent.contentOffset.x;
    setCurrentIndex((x / width).toFixed(0));
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <HorizontalList
          image={require('../../assets/reel.png')}
          shortImgStyle={styles.shortImgStyle}
          shortImage={styles.shortImage}
          viewStyle={styles.viewStyle}
          isStarIcon={true}
          isTechReq={true}
          isDateReq={true}
          imageStyle={styles.imageStyle}
          onScroll={handleScroll}
          pagingEnabled={true}
          dot={true}
          currentIndex={currentIndex}
        />
        <Heading title={'Recent Articles'} />
        <RecentArticles data={dummyData} />
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Articles;
