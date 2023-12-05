import * as React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';

const HabitListCard1 = () => {
  const renderCard = cards => {
    return (
      <SafeAreaView>
        <ScrollView>
          <Text
            style={{
              fontSize: 35,
              shadowOpacity: 0.2,
              width: '90%',
              flexDirection: 'row',
              marginHorizontal: 20,
              marginTop: 20,
              marginBottom: 35,
            }}>
            Habits
          </Text>
          <Text
            style={{
              fontSize: 25,
              shadowOpacity: 0.3,
              width: '90%',
              flexDirection: 'row',
              marginHorizontal: 20,
              marginVertical: 10,
            }}>
            Choose a habit
          </Text>

          {cards.map((card, index) => (
            <View key={index}>
              <View
                style={[
                  styles.habitListCard,
                  {backgroundColor: card.backgroundColor},
                ]}>
                <View
                  style={[styles.habitListCardInner, styles.tipsParentFlexBox]}>
                  <View style={styles.frameParent}>
                    <View style={[styles.tipsParent, styles.tipsParentFlexBox]}>
                      <Text style={[styles.prayFajrWithin, styles.prayTypo]}>
                        {card.title}
                      </Text>
                      <Text style={[styles.theEarlyMorning1, styles.theTypo]}>
                        {card.description}
                      </Text>
                      {card.additionalText && (
                        <Text style={styles.additionalText}>
                          {card.additionalText}
                        </Text>
                      )}
                      <View
                        style={[styles.frameChild, styles.tipsParentFlexBox]}
                      />
                    </View>
                    <View style={styles.circularImageContainer}>
                      <Image
                        style={styles.iconOnRight}
                        resizeMode="cover"
                        source={card.iconName}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    );
  };

  const cards = [
    {
      backgroundColor: '#f6f2fe',
      iconName: require('../assets/sunrise.png'),
      title: 'Wake up early',
      description:
        'Wake up early by shifting your sleep and wake-up times gradually, getting light first thing, and avoiding light, caffeine, and meals too ...',
    },
    {
      backgroundColor: '#EBFFF5',
      iconName: require('../assets/book-open.png'),
      title: 'Journal about your hopes and dreams',
      description:
        'Simply writing down your thoughts and feelings to understand them more clearly. And if you struggle with stress, depression, or ...',
    },
    {
      backgroundColor: '#FEEFF6',
      iconName: require('../assets/heart.png'),
      title: 'Give gratitude',
      description:
        'Gratitude is a way for you to appreciate what you have, instead of always reaching for something new in the hope it will make you ...',
    },
  ];

  return renderCard(cards);
};

const styles = StyleSheet.create({
  theTypo: {
    color: '#787878',
    lineHeight: 18,
    fontSize: 15,
    textAlign: 'left',

    fontFamily: 'Circular Std',
    letterSpacing: 0,
    alignSelf: 'stretch',
  },
  tipsParentFlexBox: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  prayTypo: {
    textAlign: 'left',
    color: '#333',
    fontFamily: 'Circular Std',
    fontWeight: '500',
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: 17,
    alignSelf: 'stretch',
  },
  theEarlyMorning1: {
    marginTop: 8,
  },
  prayFajrWithin: {
    marginTop: 8,
  },
  frameChild: {
    marginTop: 8,
    display: 'none',
  },
  tipsParent: {
    flex: 1,
  },
  iconOnRight: {
    width: '100%',
    height: '100%',
    borderRadius: 20, // extending a little out of the image
  },
  circularImageContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
    marginRight: 12,
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
  frameParent: {
    width: 263,
    flexDirection: 'row',
  },
  habitListCardInner: {
    borderRadius: 10,
    backgroundColor: '#fff',
    borderStyle: 'solid',
    borderColor: '#f2f2f2',
    borderWidth: 1,
    marginHorizontal: 20,
    marginVertical: 20,
    flex: 1,
    padding: 10,
  },
  habitListCard: {
    borderRadius: 20,
    backgroundColor: '#f6f2fe',
    shadowColor: 'rgba(0, 0, 0, 0.05)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: '90%',
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 20,
  },
});

export default HabitListCard1;
