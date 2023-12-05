import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

interface HeaderProps {
  title: string;
  arrowRightImage?: any;
}

const Header: React.FC<HeaderProps> = ({title, arrowRightImage}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {arrowRightImage && (
        <Image source={arrowRightImage} style={styles.arrowRight} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#3498db',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    marginRight: 10,
  },
  arrowRight: {
    width: 20,
    height: 20,
    tintColor: 'red',
  },
});

export default Header;
