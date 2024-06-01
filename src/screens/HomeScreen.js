import {View, Text, Image, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {TABS} from '../utils/constants';
import {useNavigation} from '@react-navigation/native';
import {BLACK} from '../utils/colors';

const HomeScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.replace(TABS);
    }, 3000);
  }, []);
  return (
    <View style={styles.container}>
      <Image source={require('../assets/launcher.png')} style={styles.image} />
      <View style={styles.imageView}>
        <Text style={styles.name}>Charles Babbage</Text>
        <Image
          source={require('../assets/father.jpeg')}
          style={styles.fatherImage}
          resizeMethod="resize"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  image: {width: 110, height: 110},
  fatherImage: {
    height: 70,
    width: 70,
    borderRadius: 50,
    position: 'absolute',
    alignItems: 'flex-end',
    marginTop: 40,
  },
  imageView: {
    alignItems: 'flex-end',
    marginTop: 50,
    position: 'relative',
    marginRight: 60,
    alignSelf: 'stretch',
  },
  name: {
    fontSize: 20,
    fontFamily: 'NorthwellAlt',
    color: BLACK,
    letterSpacing: 1,
  },
});
export default HomeScreen;
