import React from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import PrimaryButton from '../components/Button';

function HomeScreen() {
  const navigation = useNavigation();

  const handleGetStarted = () => {
    // Navigate to the 'FirstStepScreen'
    navigation.navigate('First');
  };

  return (
    <View style={{flex: 1}}>
      <StatusBar />
      <ScrollView contentContainerStyle={{flexGrow: 1, backgroundColor:'white'}}>
        <Image
          source={require('../assets/Welcome.png')}
          style={{width: '100%', height: 350, marginTop: -10}}
          resizeMode="contain"
        />
        <View style={{justifyContent: 'flex-start'}}>
          <Text style={styles.sectionTitle}>
            Live the life you’ve always wanted
          </Text>
        </View>
        <View style={{justifyContent: 'flex-start', flexGrow: 1}}>
          <Text style={styles.sectionDescription}>
            Starting today, let’s help you focus better and accomplish your
            dream life.
          </Text>
        </View>
        <View style={{alignItems: 'center', marginBottom: 50}}>
          <PrimaryButton text="Get Started" onPress={handleGetStarted} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    color: '#000',
    fontFamily: 'Circular Std',
    fontSize: 50,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 48,
    letterSpacing: 0.41,
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  sectionDescription: {
    color: '#3A3939',
    fontFamily: 'Circular Std',
    fontSize: 20,
    fontStyle: 'normal',
    lineHeight: 24,
    letterSpacing: 0.38,
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  highlight: {
    fontWeight: '700',
  },
});

export default HomeScreen;
