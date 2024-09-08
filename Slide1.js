import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { MotiView } from 'moti';

const { width, height } = Dimensions.get('window');

const FamilyMember = ({ name, delay }) => (
  <MotiView
    from={{ opacity: 0, translateY: 20 }}
    animate={{ opacity: 1, translateY: 0 }}
    transition={{ type: 'timing', duration: 500, delay }}
    style={styles.familyMember}
  >
    <FontAwesome name="user-circle" size={50} color="skyblue" />
    <Text style={styles.memberName}>{name}</Text>
    <View style={styles.healthBar}>
      <View style={[styles.healthBarFill, { width: `${Math.random() * 100}%` }]} />
    </View>
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

export default function Slide1() {
  return (
    <MotiView
      from={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: 'timing', duration: 1000 }}
      style={styles.slide}
    >
      <Text style={styles.title}>Your Health Pathfinder</Text>
      <PhoneOutline>
        <Text style={styles.appTitle}>Lastname Family</Text>
        <FamilyMember name="Person1 Lastname" delay={300} />
        <FamilyMember name="Person2 Lastname" delay={600} />
        <FamilyMember name="Person3 Lastname" delay={900} />
        <FamilyMember name="Person4 Lastname" delay={1200} />
        <FamilyMember name="Person5 Lastname" delay={1500} />
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
  appTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'skyblue',
    fontFamily: 'Roboto, sans-serif',
    textAlign: 'center',
  },
  familyMember: {
    width: '100%',
    marginBottom: 20,
    alignItems: 'center',
  },
  memberName: {
    fontSize: 18,
    marginTop: 10,
    marginBottom: 5,
    color: 'skyblue',
    fontFamily: 'Roboto, sans-serif',
  },
  healthBar: {
    width: '80%',
    height: 10,
    backgroundColor: '#E0E0E0',
    borderRadius: 5,
    overflow: 'hidden',
  },
  healthBarFill: {
    height: '100%',
    backgroundColor: 'skyblue',
  },
});