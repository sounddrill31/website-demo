// App.js
import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';
import Slide1 from './Slide1';
// Import other slides here

const SLIDES = [Slide1 /* Add other slides here */];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  const CurrentSlide = SLIDES[currentSlide];

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['rgba(135,206,250,0.2)', 'rgba(135,206,250,0.1)']}
        style={StyleSheet.absoluteFill}
      />
      <CurrentSlide 
        isFirstSlide={currentSlide === 0}
        nextSlide={nextSlide}
        prevSlide={prevSlide}
      />
      <View style={styles.navigation}>
        <View style={styles.navButtonContainer}>
          {currentSlide !== 0 ? (
            <TouchableOpacity onPress={prevSlide} style={styles.navButton}>
              <FontAwesome name="chevron-left" size={30} color="white" />
            </TouchableOpacity>
          ) : (
            <View style={styles.placeholderButton} />
          )}
        </View>
        <View style={styles.navButtonContainer}>
          <TouchableOpacity onPress={nextSlide} style={styles.navButton}>
            <FontAwesome name="chevron-right" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  navButtonContainer: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navButton: {
    padding: 15,
    backgroundColor: 'skyblue',
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderButton: {
    width: 60,
    height: 60,
  },
});