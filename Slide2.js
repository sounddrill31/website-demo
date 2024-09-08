import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { MotiView } from 'moti';

const { width, height } = Dimensions.get('window');

const ProfileSection = ({ title, content, delay }) => (
  <MotiView
    from={{ opacity: 0, translateY: 20 }}
    animate={{ opacity: 1, translateY: 0 }}
    transition={{ type: 'timing', duration: 500, delay }}
    style={styles.profileSection}
  >
    <Text style={styles.sectionTitle}>{title}</Text>
    <Text style={styles.sectionContent}>{content}</Text>
  </MotiView>
);

const PhoneOutline = ({ children }) => (
  <View style={styles.phoneOutline}>
    <View style={styles.notch} />
    <ScrollView 
      style={styles.phoneInner}
      showsVerticalScrollIndicator={false}
    >
      {children}
    </ScrollView>
  </View>
);

export default function Slide2() {
  return (
    <MotiView
      from={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: 'timing', duration: 1000 }}
      style={styles.slide}
    >
      <Text style={styles.title}>Person1 Lastname - Profile</Text>
      <PhoneOutline>
        <Text style={styles.profileName}>Person1 Lastname</Text>
        <ProfileSection 
          title="About"
          content="Person1 is an Energetic young adult who gets regular exercise, and good grades in College."
          delay={300}
        />
        <ProfileSection 
          title="Medical History"
          content="
           - Smokes
           - Drinks
           - Seasonal Asthma
           - Bad sleep schedule, 4 hours avg."
          delay={600}
        />
      </PhoneOutline>
    </MotiView>
  );
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'skyblue',
    fontFamily: 'Roboto, sans-serif',
  },
  phoneOutline: {
    width: Math.min(width * 0.8, 400),
    height: Math.min(height * 0.7, 700),
    aspectRatio: 9 / 16,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: 'skyblue',
    overflow: 'hidden',
    backgroundColor: 'white',
    position: 'relative',
  },
  notch: {
    width: '50%',
    height: 30,
    backgroundColor: 'skyblue',
    position: 'absolute',
    top: 0,
    left: '25%',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    zIndex: 1,
  },
  phoneInner: {
    flex: 1,
    width: '100%',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'skyblue',
    fontFamily: 'Roboto, sans-serif',
    textAlign: 'center',
  },
  profileSection: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'skyblue',
    fontFamily: 'Roboto, sans-serif',
  },
  sectionContent: {
    fontSize: 16,
    color: '#333',
    fontFamily: 'Roboto, sans-serif',
  },
});