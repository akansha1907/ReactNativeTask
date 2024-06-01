import {View, Image, TextInput, StyleSheet} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Image
          source={require('../assets/launcher.png')}
          style={styles.image}
        />
      </View>

      <View style={styles.searchView}>
        <TextInput
          placeholder="Search..."
          style={styles.input}
          placeholderTextColor={'#929292'}
        />
        <Image
          source={require('../assets/search.png')}
          style={styles.searchImg}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  subContainer: {flex: 2.4},
  image: {height: 43, width: 43},
  searchView: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: -5,
    borderRadius: 30,
    flex: 1,
  },
  input: {fontSize: 14, flex: 1},
  searchImg: {width: 18, height: 18, marginLeft: 3},
});
export default Header;
