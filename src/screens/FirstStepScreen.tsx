import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import PrimaryButton from '../components/Button';

interface FirstStepScreenProps {}

const FirstStepScreen: React.FC<FirstStepScreenProps> = () => {
  const navigation = useNavigation();
  const arrowRightImage = require('../../src/assets/button.png');

  const handleLetsGo = () => {
    navigation.navigate('Habit');
  };

  const handleGoback = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={handleGoback} style={styles.backButton}>
        <Image source={arrowRightImage} />
      </TouchableOpacity>

      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>
          Take a step towards your dream life
        </Text>
      </View>

      <View style={styles.quoteContainer}>
        <View style={styles.verticalLine}></View>
        <Text>
          All our dreams can come true, if we have the courage to pursue them.{' '}
        </Text>
      </View>
      <Text style={{paddingLeft: 20}}>Brainy quotes</Text>
      <View style={{marginHorizontal: 20, marginVertical: 40}}>
        <Text
          style={{
            color: '#333',
            fontFamily: 'Circular Std',
            fontSize: 20,
            fontStyle: 'normal',
            fontWeight: '450',
            lineHeight: 25,
            letterSpacing: 0.38,
            paddingHorizontal: 10,
            marginBottom: 10,
          }}>
          This journey begins with us helping you make small behavioral changes,
          one day at a time.
        </Text>

        <Text style={styles.mediumText}>
          What habit can you commit to for a start?
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <PrimaryButton text="Let’s go" onPress={handleLetsGo} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E0F4FB',
    flex: 1,
    paddingHorizontal: 10,
  },
  backButton: {
    marginLeft: 20,
    marginBottom: 20,
  },
  headerContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  headerText: {
    fontSize: 28,
    fontWeight: '500',
    lineHeight: 34,
    letterSpacing: 0.338,
  },
  mediumText: {
    color: '#333',
    fontFamily: 'Circular Std',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '450',
    lineHeight: 25,
    letterSpacing: 0.38,
    marginTop:20,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    alignItems: 'center',
    marginBottom: 50,
    marginTop: 320,
  },
  quoteContainer: {
    flexDirection: 'row',
    paddingLeft: 10,
    borderLeftWidth: 2,
    borderLeftColor: 'black',
    marginHorizontal: 20,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  verticalLine: {
    height: '100%',
  },
});

export default FirstStepScreen;
